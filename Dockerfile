# 1. Этап установки зависимостей
FROM node:20-alpine AS deps
WORKDIR /app

# Копируем только файлы зависимостей для кэширования
COPY package.json package-lock.json* ./
RUN npm ci

# 2. Этап сборки
FROM node:20-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Собираем Next.js приложение
RUN npm run build

# 3. Продакшн-образ (минимальный размер)
FROM node:20-alpine AS runner
WORKDIR /app

# Устанавливаем переменные окружения
ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1

# Создаем непривилегированного пользователя для безопасности
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Копируем только необходимое для работы
COPY --from=builder /app/public ./public

# Автоматически копируем standalone output
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT 3000
ENV HOSTNAME "0.0.0.0"

CMD ["node", "server.js"]