# Use Node base image
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json (if exists)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all files
COPY . .

# Expose port (optional)
EXPOSE 3000

# Start the app using npm script
CMD ["npm", "start"]
