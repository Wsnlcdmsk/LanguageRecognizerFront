FROM node:18-alpine

ARG REACT_APP_API_URL
ENV REACT_APP_API_URL=http://localhost:8080

WORKDIR /app

EXPOSE 3000

COPY ["package.json", "package-lock.json*", "./"]

RUN npm install --legacy-peer-deps

COPY . .

CMD ["npm", "start"]
