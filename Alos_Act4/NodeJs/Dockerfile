FROM node:14 as build-stage
WORKDIR  /var/www/html/
COPY package.json .
RUN npm install
COPY . .
RUN npm run build
# Stage 2
FROM nginx:1.17.0-alpine
COPY --from=build-stage /UI/build /usr/share/nginx/html
EXPOSE $REACT_DOCKER_PORT
CMD nginx -g 'daemon off;'