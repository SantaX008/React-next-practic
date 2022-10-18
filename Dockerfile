FROM node:16.15.0-alpine3.14

ENV PORT 3000

# Create app directory
RUN mkdir -p /app
WORKDIR /app

# Installing dependencies
COPY package*.json /app/
RUN yarn install

# Copying source files
COPY . /app

# Building app
RUN yarn build
EXPOSE 3000

# Running the app
CMD "yarn" "start"
