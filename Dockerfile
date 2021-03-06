FROM node:11.8.0 AS builder
WORKDIR /app

COPY ./package.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx
EXPOSE 80
COPY --from=builder /app/build /usr/share/nginx/html

#docker run -p 8080:80 ${id} 5042739bb0d2
