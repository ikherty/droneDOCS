FROM node:16.19.1-alpine3.16 as build

WORKDIR /code/droneDOCS

COPY package.json .
COPY yarn.lock .
RUN yarn install --frozen-lockfile

COPY . .
RUN yarn build

FROM caddy:2.6.4-alpine as run

WORKDIR /droneDOCS
COPY --from=build /code/droneDOCS/docs/.vitepress/dist .
# TODO: ARG https or not
COPY deploy/Caddyfile-https /etc/caddy/Caddyfile
EXPOSE 80

RUN adduser -h /droneDOCS -s /bin/ash -D -u 2000 caddy && \
  chown -R caddy:caddy /droneDOCS /data/caddy
USER caddy
