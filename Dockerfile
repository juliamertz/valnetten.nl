FROM node:20 AS builder

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

FROM busybox:uclibc

COPY --from=builder /app/dist /www

EXPOSE 8080

USER nobody

CMD ["httpd", "-f", "-p", "8080", "-h", "/www"]
