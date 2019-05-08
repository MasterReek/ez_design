#!/bin/bash
export $(cat .env | grep -v ^# | xargs);
mysql_container=$(docker ps --format "{{.Names}}" | grep ${COMPOSE_PROJECT_NAME}_mysql)

echo $mysql_container
docker exec $mysql_container /opt/mysql_db_dump.sh
