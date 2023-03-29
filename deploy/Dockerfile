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
COPY deploy/Caddyfile-* /etc/caddy/

ARG HTTP_OR_HTTPS=http
# Check if passed ONLY 'http' or 'https'
RUN ([[ "$HTTP_OR_HTTPS" != "http" ]] && [[ "$HTTP_OR_HTTPS" != "https" ]] && echo "ERROR - Set HTTP_OR_HTTPS to 'http' or 'https'" && exit 1) || \
# Check if passed 'http'
  ([[ "$HTTP_OR_HTTPS" == "http" ]] && rm -f /etc/caddy/Caddyfile-https && mv /etc/caddy/Caddyfile-http /etc/caddy/Caddyfile) || \
# Check if passed 'https'
  ([[ "$HTTP_OR_HTTPS" == "https" ]] && rm -f /etc/caddy/Caddyfile-http && mv /etc/caddy/Caddyfile-https /etc/caddy/Caddyfile)

EXPOSE 80 443

RUN adduser -h /droneDOCS -s /bin/ash -D -u 2000 caddy && \
  chown -R caddy:caddy /droneDOCS /data/caddy
USER caddy
