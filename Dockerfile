FROM node:16 AS development
WORKDIR /src/app
COPY package*.json .
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000


FROM node:16-alpine AS production
ENV PORT=8080
WORKDIR /src/app
COPY --from=development /src/app .
EXPOSE 8080
CMD ["node", "dist/main"]


