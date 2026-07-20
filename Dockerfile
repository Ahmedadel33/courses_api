FROM node:20-alpine

# تحديث حزم نظام التشغيل لتلافي الثغرات الأمنية مثل OpenSSL
RUN apk update && apk upgrade --no-cache

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 5000

CMD ["node", "code.js"]