# Use an official Node.js runtime as a parent image
FROM node:18
# Set the working directory
WORKDIR /usr/src/app

# Copy package.json and pnpm-lock.yaml
COPY package.json pnpm-lock.yaml ./

# Install dependencies
RUN npm install -g pnpm && pnpm install

# Copy the rest of the application code
COPY . .

# Build the project
RUN pnpm run build

# Expose the port the app runs on
EXPOSE 3000

# Define the command to run the app
CMD ["pnpm", "dev"]