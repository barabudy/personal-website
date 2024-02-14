FROM httpd:latest

RUN apt-get update && apt-get install -y git

COPY . /usr/local/apache2/htdocs/
