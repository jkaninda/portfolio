# build stage
FROM node:17.0-alpine as build

WORKDIR /app
# Copy all files from current directory to working dir in image
COPY . .
# install node modules and build assets
RUN yarn install && yarn build

# nginx state for serving content
FROM nginx:alpine
RUN rm -rf /etc/nginx/conf.d/default.conf
RUN rm -rf /etc/nginx/sites-enabled/default
RUN rm -rf /etc/nginx/sites-available/default
COPY ./docker/default.conf /etc/nginx/conf.d/

# Set working directory to nginx asset directory
WORKDIR /usr/share/nginx/html
# Remove default nginx static assets
RUN rm -rf ./*
# Copy static assets from build stage
COPY --from=build /app/dist .
ENTRYPOINT ["nginx", "-g", "daemon off;"]
EXPOSE 80