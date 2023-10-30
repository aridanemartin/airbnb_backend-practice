# Use the official MongoDB 7 image as the base image
FROM mongo:7

COPY /seed-data /data/db/seed-data

COPY /scripts /docker-entrypoint-initdb.d


