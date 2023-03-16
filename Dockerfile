FROM nginx:mainline-alpine
LABEL maintainer="Taichi MIYA <tmiya@protonmail.ch>" 

ADD ./nginx.conf /etc/nginx/nginx.conf
ADD ./public /usr/share/nginx/html

