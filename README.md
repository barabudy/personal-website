# introduction website

## Description
This personal project was originally private. I used it as an option to introduce myself to new friends and potential employers. I created this project to practice deploying an Apache server using Docker containers. I decided to make it public so students of mine could learn from it and derive inspiration to make their own version.

The website was made using the Bootstrap framework template to include some responsive design principles.

## Usage
Prerequisite: I used a private GitHub repository originally, therefore adding my VM public key to my GitHub's account SSH keys were required. ChatGPT was helpful figuring that challenge.

To run the container, use the following command:
docker build -t <your-image-name> --build-arg ssh_prv_key="$(cat ~/.ssh/id_rsa)" --build-arg ssh_pub_key="$(cat ~/.ssh/id_rsa.pub)" --squash .