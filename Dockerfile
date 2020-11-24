FROM node:10 as builder

ADD . /app
WORKDIR /app
RUN rm -rf node_modules

RUN yarn install
RUN yarn build

ENV PATH /app/node_modules/.bin:$PATH

FROM nginx:alpine

#!/bin/sh


## Remove default nginx index page
RUN rm -rf /usr/share/nginx/html/*

COPY --from=builder /app/docs/.vuepress/dist /usr/share/nginx/html
COPY --from=builder /app/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

ENTRYPOINT ["nginx", "-g", "daemon off;"]
