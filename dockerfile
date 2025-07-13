# Use Node.js official image as the base
FROM node:22-alpine

# Set working directory
WORKDIR /app

# Copy package files first for better caching
COPY package*.json ./

# Install dependencies
RUN npm ci --only=production

# Copy built files
COPY api ./api

# Expose port if your app listens on one (change if needed)
EXPOSE 3000

# Start the application
CMD ["node", "api/index.js"]
