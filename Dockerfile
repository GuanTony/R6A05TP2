FROM ubuntu:latest
LABEL authors="Tony"

ENTRYPOINT ["top", "-b"]

FROM node:lts-bullseye-slim
RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app
WORKDIR /home/node/app
COPY package*.json ./
RUN npm install
COPY --chown=node:node . .
CMD ["node", "server.js"]
