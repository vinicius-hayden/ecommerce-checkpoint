# fala qual imagem vamos usar
# FROM openjdk:17.0.2-jdk
# cria a pasta dentro da imagem - no momento de criação da imagem
# WORKDIR /app
# adiciono o .jar do meu projeto na imagem do Docker
# ADD ./target/ecommerce-0.0.1-SNAPSHOT.jar /app
# comando especial para fazer o java rodar meu projeto no momento que o container é criado
# ENTRYPOINT ["java", "-jar", "ecommerce-0.0.1-SNAPSHOT.jar"]

FROM mysql:latest
LABEL maintainer="Grupo mais legal"
EXPOSE 3306

ENV MYSQL_ROOT_PASSWORD=grupomaislegal
ENV MYSQL_DATABASE=ecommerce
ENV MYSQL_USER=admin
ENV MYSQL_PASSWORD=grupomaislegal

VOLUME [ "/var/lib/mysql" ]

COPY ./create.sql /docker-entrypoint-initdb.d/
