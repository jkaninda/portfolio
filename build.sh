#!/usr/bin/env bash
if [ $# -eq 0 ]
  then
    tag='latest'
  else
    tag=$1
fi

docker build -f docker/Dockerfile -t jkaninda/portfolio:$tag .

docker-compose up -d --force-recreate