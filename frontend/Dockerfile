FROM node:20-alpine

WORKDIR /app

# Copy package.json and install dependencies
COPY frontend/react_app/package*.json ./
RUN npm install

# Copy project & shared libs
COPY frontend/react_app /app
COPY common_libs /app/common_libs

EXPOSE 3000

CMD ["npm", "start"]
