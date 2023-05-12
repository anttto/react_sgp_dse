import { rest } from "msw";

export const handlers = [
  // Match a GET request to a third-party server.
  rest.get("https://api.github.com/user/:login", (req, res, ctx) => {
    return res(ctx.json({ login: req.params.login }));
  }),
];
