FROM node:alpine

RUN mkdir -p /app

WORKDIR /app

ARG API_URL

ENV REACT_APP_API_URL $API_URL

COPY package*.json /app

RUN npm install

COPY . /app

EXPOSE 3000

CMD ["npm", "run", "dev"]
