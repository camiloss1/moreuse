#Primera etapa de compilación
FROM node:latest as node
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build --prod

#Segunda etapa de despliegue
FROM nginx:alpine as nginx
COPY --from=node /app/dist/moreuse /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80