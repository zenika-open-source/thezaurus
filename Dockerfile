FROM node:18

WORKDIR /

COPY . .

RUN npm install

EXPOSE 3000

ENTRYPOINT [ "/usr/local/bin/npm", "run", "dev" ]
