# Simple JS Blockchain

This is based on a [blog post](https://kndrck.co/building-a-minimal-blockchain-in-haskell.html) written by my good friend [Kendrick Tan](https://github.com/kendricktan).

The original post used Haskell (which I am a fan of), but I am nevertheless most comfortable with Javascript. A lot of blog posts about tiny blockchains in Javascript used ES2015 classes and I wanted to see if we could simply use Flow types instead.

# Running It

1. Clone the repo.
2. Run `yarn` (or `npm install`) to install dependencies.
3. Build the project (to strip the types) using `yarn build` or `npm run build`.
4. Require the library inside the generated `lib/index.js`.
