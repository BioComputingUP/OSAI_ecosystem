# Use Node 14 (compatible with Angular 9)
FROM node:14-alpine

# Set working directory
WORKDIR /app

# Copy package files first to leverage cache
COPY package.json package-lock.json* ./

# Install dependencies
RUN npm install

# Copy the rest of the application
COPY . .

# Expose the port the app runs on
EXPOSE 4200

# Start the application using the public host configuration
CMD ["npm", "run", "start-public"]
