#imagen de node version 18
FROM node:18

# Crea un directorio home/app dentro del contenedor
RUN mkdir -p /home/app

# Establece el nuevo directorio de trabajo
WORKDIR /home/app

# Copia los archivos de package.json y el package-lock.json
COPY ../package*.json ./

# Instala las dependencias del proyecto
RUN npm install

# Copia el proyecto en el sistema de archivos del contenedor
COPY ../ /home/app

# Expone el puerto en el que se ejecuta la aplicación en local
EXPOSE 3000

# Comando para ejecutar la aplicación
CMD ["npm", "start"]