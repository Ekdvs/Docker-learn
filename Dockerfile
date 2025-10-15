 #base image
    FROM node:20-alpine

#set workin directory
    WORKDIR /app

#copy all files

COPY . .

#run command
    CMD ["node","index.js"]