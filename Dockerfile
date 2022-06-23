############################
# Final container
############################
FROM registry.cto.ai/official_images/node:2-12.13.1-stretch-slim

WORKDIR /ops

COPY package.json .
COPY yarn.lock .
RUN npm install -g yarn
RUN yarn install --frozen-lockfile

COPY src src
COPY firebase.json .
COPY .firebaserc .