FROM node:alpine AS builder
WORKDIR /app

COPY ./package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx
EXPOSE 80
COPY --from=builder /app/builder /usr/share/nginx/html