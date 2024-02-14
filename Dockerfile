# Use official Apache image as a base
FROM httpd:latest

# Use host ssh keys to authenticate with GitHub private repo. Passed as arguments as a security best practice
ARG ssh_prv_key
ARG ssh_pub_key

# Install Git
RUN apt-get update && apt-get install -y git

# Copy ssh keys to container (required by GitHub). Adding public key of underlying vm to GitHub necessary)
RUN mkdir -p /root/.ssh && chmod 700 /root/.ssh && ssh-keyscan github.com >> /root/.ssh/known_hosts

# Add ssh keys and set permissions
RUN echo "$ssh_prv_key" > /root/.ssh/id_rsa && \
    echo "$ssh_pub_key" > /root/.ssh/id_rsa.pub && \
    chmod 600 /root/.ssh/id_rsa && \
    chmod 600 /root/.ssh/id_rsa.pub

# Remove existing contents of htdocs directory
RUN rm -rf /usr/local/apache2/htdocs/*

# Clone website repo using SSH
RUN git clone git@github.com:barabudy/personal-website.git /usr/local/apache2/htdocs/

# COPY . /usr/local/apache2/htdocs/
