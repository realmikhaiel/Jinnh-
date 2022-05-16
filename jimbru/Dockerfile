FROM fusuf/whatsasena:latest

RUN git clone https://github.com/realmikhaiel/Jinnh- /root/realmikhaiel
WORKDIR /root/realmikhaiel/
ENV TZ=Asia/Kolkata
RUN npm install supervisor -g
RUN yarn install --no-audit
RUN git clone https://github.com/Mikhaiel/Media

CMD ["node", "bot.js"]
