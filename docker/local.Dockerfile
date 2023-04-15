FROM node:16.19.1-slim as build

WORKDIR /code/droneDOCS

COPY package.json .
COPY yarn.lock .
RUN yarn install --frozen-lockfile

# default vitepress port
EXPOSE 5173

CMD npx vitepress dev docs --host
