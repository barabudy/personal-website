# Personal Introduction Website

## Description
This personal project is an introductory website, meant as be presented to new friends and potential employers. I created this project to practice deploying an Apache server using a Docker container on a cloud VM. It was originally private but I made it public so my students could learn from it and be insipred to make their own version.

The website was made using the Bootstrap framework to include some responsive design principles.

## Usage
Prerequisite: as a private GitHub repository was originally used, adding the host machine SSH keys to your GitHub account is required. ChatGPT was helpful figuring that challenge.

To run the container, use the following command:
docker build -t <your-image-name> --build-arg ssh_prv_key="$(cat ~/.ssh/id_rsa)" --build-arg ssh_pub_key="$(cat ~/.ssh/id_rsa.pub)" --squash .