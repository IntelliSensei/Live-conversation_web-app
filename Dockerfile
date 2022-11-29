# pull official base image
FROM node:13.12.0-alpine

# set working directory
WORKDIR /app

# install app dependencies
COPY package.json ./
COPY package-lock.json ./

# clean install
RUN npm ci

# copy source code
COPY . .

ENV PORT=3000

EXPOSE 3000

# start app
CMD ["npm", "run", "buildStart"]
