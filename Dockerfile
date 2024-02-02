FROM node :lts-bullseye-slim
FROM ubuntu:latest
LABEL authors="Tony"

ENTRYPOINT ["top", "-b"]