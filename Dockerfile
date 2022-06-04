# remember to start docker service - WSL windows. (sudo service docker start)
# sudo docker build -t portfolio-image . -> create docker image
# sudo docker run -d -p 4001:8000 --name portfolio portfolio-image -> create docker container in detached mode
# docker ps -> list containers | docker rm portfolio -f -> shut down container
# docker exec -it portfolio bash -> view files in docker container (type exit to leave)
FROM node
# working off /app in the container
WORKDIR /app 

# mapping environment path for node modules
ENV PATH="./node_modules/.bin:$PATH"

# package.json is in root directory (same as dockerfile), copy into workdir
# cached result leads to optimization, keep next two lines
COPY package.json .

RUN npm install -g npm@8.12.1
RUN npm install

# copy the rest of files into container
COPY . .
EXPOSE 8000
CMD ["npm", "start"]
