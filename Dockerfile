# Specify a base image
FROM node

#ENV
RUN mkdir -p /home/app
WORKDIR /home/app
COPY cra /home/app
RUN npm install

# Set up a default command
CMD ["npm", "start"]


# BUILD the docker image
    # docker build -t <name:tag> <Dockerfile path>   => docker build -t react-app .

#RUN
    # docker run -p<host:docker> <imageId>