import { rest } from 'msw';
import { createFakePodcastsResponse } from './faker';

export const handlers = [
  rest.get('https://api.allorigins.win/get', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(createFakePodcastsResponse(3)));
  }),
];
