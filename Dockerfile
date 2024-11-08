ARG IMAGE=node:lts-alpine

FROM ${IMAGE} as builder
WORKDIR /app
COPY . .
RUN npm install -g pnpm 
RUN pnpm install
RUN pnpm dlx prisma generate

FROM builder as prod-build
RUN pnpm run build
RUN pnpm prune --prod

FROM ${IMAGE} as prod
COPY --from=prod-build /app/dist /app/dist
COPY --from=prod-build /app/node_modules /app/node_modules

WORKDIR /app/dist

CMD ["node", "./main.js"]