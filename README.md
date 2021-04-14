# Currency converter App

- [Check live example here](https://currency-converter-ruby.vercel.app/)
- [Check assignment here](./ASSIGMENT.md)

## Available Commands

- Install: `yarn install`
- Develop: `yarn serve`
- Build: `yarn build`
- Test: `yarn test`
- Cypress dashboard: `yarn cypress:open`

## Decisions

- Client Framework: SPA with Next.JS because I wanted to leverage from converting this to a progressive web app and this framework is flexible enough to convert it to a SSR app in the future.
  - I've worked before with Next.JS and it can be flexible enough to go from a Client side rendered app to a fully server side rendered app which will make sense in further iterations.
- For the UI library I went with Chakra UI because of accessibility and great documentation.
- I introduce acceptance tests at an earlier stage to allow some refactoring.

## Proposed Roadmap

- Replace prop-types with Typescript.
- Unit test logic.
- Sync form with route.
- Make a progressive web app
- Cache requests
- Make it fully offline
