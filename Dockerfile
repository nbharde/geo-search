FROM node:14 AS production

RUN mkdir /app

WORKDIR /app

COPY package.json .

COPY package-lock.json .

RUN npm install

COPY . .

EXPOSE 3000

#RUN npm run build

CMD [ "npm", "start" ]