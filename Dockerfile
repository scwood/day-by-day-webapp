FROM node
MAINTAINER Spencer Wood <spencercwood@gmail.com>

WORKDIR /app

COPY package.json /app/package.json
RUN npm install 

COPY client/package.json /app/client/package.json
RUN cd client && npm install

COPY server /app/server
COPY client /app/client
RUN npm run build

EXPOSE 3001
ENV NODE_ENV production
CMD ["npm", "run", "start:production"]
