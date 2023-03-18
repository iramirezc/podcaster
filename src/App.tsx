import React, { useState, useEffect } from 'react';
import { client } from 'api/client';
import { HomePage } from 'pages';
import { adaptPodcastFromResponse } from 'features/podcasts';

function App() {
  const [podcasts, setPodcasts] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const podcastsData = await (await client.fetchPosts()).data;
        setPodcasts(podcastsData.map(adaptPodcastFromResponse));
      } catch (err) {
        console.error(err);
      }
    })();
  }, []);

  return <HomePage podcasts={podcasts} />;
}

export default App;
