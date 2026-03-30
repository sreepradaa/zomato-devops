# Build Stage
FROM node:18-alpine AS builder

WORKDIR /app

# 🔥 ADD THIS LINE (IMPORTANT FIX)
ENV NODE_OPTIONS=--openssl-legacy-provider

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

# Production Stage
FROM nginx:alpine

COPY --from=builder /app/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]