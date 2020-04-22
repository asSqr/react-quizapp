FROM node:12

RUN apt-get update && apt-get -y install curl
RUN apt-get update && apt-get -y install yarn

ADD . /react-quizapp
WORKDIR /react-quizapp

EXPOSE $PORT

RUN npm install --only=dev && npm install && npm run build