# Use a lightweight Node.js base image for ARM architecture (suitable for Raspberry Pi)
FROM node:18-alpine AS builder

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package.json package-lock.json ./

# Install dependencies
RUN npm ci

# Copy the entire project into the container
COPY . .

# Build the Next.js app
RUN npm run build

# Install only production dependencies
RUN npm ci --production

# Use a lightweight Node.js runtime for running the app
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy the built app and production dependencies from the builder
COPY --from=builder /app /app

# Expose the Next.js default port
EXPOSE 3000

# Start the Next.js app
CMD ["npm", "start"]

