FROM node:lts-buster

RUN git clone https://github.com/LUCKYSERSKBA/XLICON-V2-MD.git /root/XLICON-V2-MD/
WORKDIR /root/XLICON-V2-MD/
RUN yarn install
CMD ["npm", "start"]
