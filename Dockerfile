FROM node:14

# 앱 디렉토리 생성
WORKDIR /app

# 패키지 설치
COPY package*.json ./
RUN npm install

# 앱 소스 복사
COPY . .

# 개발 서버 실행
CMD ["npm", "run", "serve"]
