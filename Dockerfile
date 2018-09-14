FROM node:alpine

WORKDIR /user/src/app

#RUN npm install -g nodemon typescript concurrently

COPY package.json /user/src/app

RUN npm install

# Building on Production
# RUN npm install --only=production

COPY . .

EXPOSE 8080

CMD ["npm", "run", "watch"]