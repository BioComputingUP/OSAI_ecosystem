FROM node:24-alpine

WORKDIR /app

# Copy package files first to leverage cache
COPY package.json package-lock.json ./
RUN npm ci

COPY . .

EXPOSE 4200

# Poll for file changes so edits on the bind-mounted source trigger a reload
CMD ["npm", "run", "start-public", "--", "--poll", "2000"]
