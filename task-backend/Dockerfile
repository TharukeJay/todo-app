# Use official Node.js image
FROM node:18

  # Set working directory
WORKDIR /app

  # Copy package.json and install dependencies
COPY package.json package-lock.json ./
RUN npm install

  # Copy all backend files
COPY . .

  # Expose port
EXPOSE 3001

  # Start the server
CMD ["node", "index.js"]
