// A tiny wrapper around fetch(), borrowed from
// https://kentcdodds.com/blog/replace-axios-with-a-simple-custom-fetch-wrapper

const anyOriginUrl = 'https://api.allorigins.win';
const baseUrl = 'https://itunes.apple.com';

const withAnyOrigin = (endpoint: string) =>
  `${anyOriginUrl}/get?url=${encodeURIComponent(endpoint)}`;

export const client = (() => {
  const config = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  };

  const get = async function (endpoint: string) {
    let data;

    try {
      const response = await window.fetch(withAnyOrigin(endpoint), config);

      data = await response.json();

      if (response.ok) {
        return {
          status: response.status,
          data,
        };
      }
      throw new Error(response.statusText);
    } catch (err) {
      return Promise.reject(
        (err as Error).message ||
          new Error(`Error while fetching '${endpoint}'`)
      );
    }
  };

  return {
    fetchPodcasts: async function () {
      const response = await get(
        `${baseUrl}/us/rss/toppodcasts/limit=100/genre=1310/json`
      );

      let data;

      try {
        data = JSON.parse(response.data.contents);
      } catch (err) {
        return Promise.reject(new Error("Couldn't parse response contents."));
      }

      return {
        status: response.status,
        data: data.feed.entry,
      };
    },
    fetchPodcastDetails: async function (podcastId: string) {
      const response = await get(`${baseUrl}/lookup?id=${podcastId}`);

      let data;

      try {
        data = JSON.parse(response.data.contents);
      } catch (err) {
        return Promise.reject(new Error("Couldn't parse response data."));
      }

      return {
        status: response.status,
        data: data.resultCount > 0 ? data.results[0] : null,
      };
    },
  };
})();
