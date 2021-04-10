FROM node:10-alpine
RUN mkdir -p /home/node/fec-description/node_modules && chown -R node:node /home/node/fec-description
WORKDIR /home/node/fec-description
COPY package*.json ./
RUN apk add --no-cache git openssh
USER node
RUN npm install --only=production
COPY --chown=node:node ./ .
RUN npm run build
EXPOSE 7878
CMD ["node", "server/index.js"]