## Setup Node server
```
  npm i -S express
  npm i -D nodemon
  
```
## Setup ES6
Add .babelrc

Install
``` 
  npm i -S babel-cli babel-preset-env
```

Create start script
```
 "start": "nodemon ./server.js --exec babel-node -e js",
```
- The express server should work.

## Setup Apollo
Install
```
npm i -S apollo-server-express graphql
```
Create Apollo server

## Setup monogoos