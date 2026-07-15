FROM node

WORKDIR /app

#This will be stored in chache as it is not changed frequently
COPY package* package.json
# COPY package-lock.json package.lock.json
RUN npm install

#This will change frequently.
# COPY index.js index.js
COPY . .


CMD ["node", "index.js"]