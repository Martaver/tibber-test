
## Technology choices

### Platform:
 - typescript
 - nextjs

### Hosting:
 - Zeit Now

### View:
 - react
 - styled-components
 - framer-motion
 - recharts
 - chroma

### Data:
 - Apollo GraphQL Client
 - @graphql-codegen

## Conventions
 - Keep styled components close to their consuming components. They are usually in the same file.
 - Avoid default exports where possible - they make refactoring/renaming more difficult.
 - Use react hooks API.

## Why NextJS and Zeit Now?
1. Tibber.com is nextjs already.
2. Nextjs eliminates 'stack choice' concerns.
3. Allows early projects to adapt, choosing between generating a static site, running ssr and SPA.
4. Zeit now is also free, and eliminates CI concerns.

For more serious projects that clearly don't require static content, I tend to use fuse-box as an alternative to webpack.
I might implement a custom nodejs back-end using Nest (don't confuse with Nextjs), or a C# back-end using ServiceStack.

## Caching
Caching is an infrastructure concern. It's an anti-pattern to couple caching solutions with endpoint implementations.
I delegate API caching to Zeit Now, where each API endpoint's responses are cached in their global CDN.

## Loader
To show how I approach animations, I implemented a simple loader from scratch.

## Scripts
...

## Challenges in this task

### Responsiveness
I chose recharts to render the line chart as a shortcut. It generates inline svg, which is styleable by css. A very nice combination with styled-components.
Unfortunately, the SVG approach means that even though SVGs can scale responsively, fonts would be stretched to fit.
Rather than wrestling with recharts and SVG scaling, I made a decision to dynamically pass width and height to the component and re-render it when viewbox size changed.

### Isomorphism
Since I'm using NextJS, calls to the auth API and graphql may be made from either client or server, which may be browser or node environments.
Even though, in this particular case, only our API endpoint contacts Tibber's graphql and auth APIs, I wanted
an ismorphic implementation of `getClient` so that I could use it in browser, if I wanted to. I think this is good practice.
I used `isomorphic-unfetch` to polyfill `fetch` for apollo's graphql client, and also use this `fetch` implementation to
load the weather data from my own API endpoint.