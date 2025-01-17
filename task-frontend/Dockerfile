# Use official Node.js image
FROM node:18

# Set working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy all frontend files
COPY . .

# Build the frontend
RUN npm run build

# Expose port
EXPOSE 3000

# Start frontend server
CMD ["npm","run","start"]
