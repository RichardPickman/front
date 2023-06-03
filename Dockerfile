FROM node:16

WORKDIR /usr/share/ui

ARG API_URL

ENV REACT_APP_API_URL $API_URL

COPY . .

RUN npm install --omit=dev
RUN npm run build

CMD ["npm", "run"]
