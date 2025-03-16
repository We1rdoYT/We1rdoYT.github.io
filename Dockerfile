FROM node AS build
WORKDIR /usr/src/app
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN npm install -g pnpm
COPY package*.json ./
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm i
COPY . .
ENV NODE_ENV=production
RUN pnpm run build

FROM nginx
WORKDIR /usr/bin/app
USER node
COPY --chown=node:node nginx.nginx /etc/nginx/
RUN mv /etc/nginx/nginx.conf /etc/nginx/nginx.nginx
COPY --chown=node:node --from=build /usr/src/app/dist/web/browser /usr/share/nginx/html
