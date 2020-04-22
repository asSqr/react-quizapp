FROM node:12

RUN apt-get update && apt-get -y install curl
RUN apt-get update && apt-get -y install yarn

ADD . /react-quizapp
WORKDIR /react-quizapp

EXPOSE 3000

RUN npm install