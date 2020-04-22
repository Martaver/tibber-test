
# Tibber test

Hello tibber!

I've included an introduction here, and intermittent commentary throughout the code. Enjoy!

You can access a live instance of the app here: https://tibber-test.now.sh/.

## Quickstart

The usual `yarn` followed by `yarn graphql:schema` and `yarn dev`;

This will install all dependencies, introspect the graphql schema from tibber's API and fire up a dev server.

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

### Dev:
 - Google GTS eslint + prettier configuration
 - Sortier
 - Husky & lint-staged for pre-commit hook to auto-fix staged files

## Conventions
 - Keep styled components close to their consuming components. They are usually in the same file.
 - Avoid default exports where possible - they make refactoring/renaming more difficult.
 - Use react hooks API.

## Why NextJS and Zeit Now?
1. Tibber.com is nextjs already.
2. Nextjs eliminates 'stack choice' concerns.
3. Allows early projects to adapt, choosing between generating a static site, running ssr and SPA.
4. Zeit now is also free, and eliminates CI concerns.

For more serious apps that clearly don't require static content, I tend to use fuse-box as an alternative to webpack.
If static content is required, usually I will stick to nextjs.
I might implement a custom nodejs back-end using Nest (don't confuse with Nextjs), or a C# back-end using ServiceStack.
I would probably manage devops in an IaC approach using terraform. In my personal projects, I use kubernetes and helm.

## GraphQL
I wrote scripts to interrogate tibber's graphql API and write a local copy of the introspection schema.
I use this to codegen typescript types for use with VSCode's apollo tooling for graphql intellisense, and as types
when using apollo client.

## Caching
Caching is an infrastructure concern. It's an anti-pattern to couple caching solutions with endpoint implementations.
I delegate API caching to Zeit Now, where each API endpoint's responses can be cached in their global CDN.
You can see the cache configuration in `now.json`, which sets it to one hour (3600s):
```
"headers": {
    "cache-control": "s-maxage=3600"
}
```

## Loader
To show how I approach animations, I implemented a simple loader from scratch which is displayed while weather data is being fetched.

## Scripts
Some of the scripts I like to set up on all my projects:
- `dev`: start dev mode,
- `dev:now`: start dev mode in zeit now's local hosting environment,    
- `build`: runs next's build producing static assets and code split code bundles,
- `stage`: deploys to now with a production build,
- `gql:schema`: query tibber's graphql api and perform schema introspection,
- `gql:codegen`: generate graphql code and types based on latest schema,    
- `git:c`: shorthand command line commit, appending JIRA issue number from branch (if it exists),        
- `git:cp`: as above, except it also pushes to remote if a tracked branch exists,            
- `lint:fix`: runs eslint and sortier on the whole project, ensuring all files conform and listing all warnings and errors.                

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