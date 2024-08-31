FROM node:alpine3.18

ARG MONGO_URL
ARG PORT

ENV MONGO_URL=$MONGO_URL
ENV PORT=$PORT

WORKDIR /app
COPY package.json ./
RUN npm install
COPY . .
EXPOSE 5001
CMD [ "npm", "start" ]