FROM node:alpine

ENV PORT=4000


# Setting current working directory from here onwards
WORKDIR /app

# Install dependencies
COPY package.json /app
RUN npm install

# Add source files
ADD . /app/


EXPOSE $PORT
CMD [ "npm", "start" ]
