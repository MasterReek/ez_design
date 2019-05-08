#!/bin/bash
data_dir='/mysql-data/'

filedate=$(date +'%Y%m%d-%H%M%S')
filename="${data_dir}initdb_${filedate}.sql"

exist_filenames=$(find ${data_dir}  -type f -name "*.sql")
latest_filename=$(find ${data_dir}  -type f -name "*.sql" | xargs ls -t | head -1)
mysqldump -u root -proot -x mysql_database > $filename

if [ ! -n "$exist_filenames" ]; then
  echo init
  cp -f $filename /docker-entrypoint-initdb.d/initdb.sql
  exit
fi

sed -i -e '/Dump completed on/d' $filename
echo "current: $filename";
echo "prev: $latest_filename";

diff_result=$(diff -q $latest_filename  $filename)
echo "diff result : $diff_result"
if [ -n "$diff_result" ]; then
  echo "update"
  cp -f $filename /docker-entrypoint-initdb.d/initdb.sql
else
  echo "no change"
  rm -f $filename
fi
