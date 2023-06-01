FROM node:16

WORKDIR /usr/share/ui

COPY . .

RUN npm install --production
RUN npm run build

CMD ["npm", "run"]
