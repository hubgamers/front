# Utiliser l'image officielle Nginx
FROM nginx:alpine

# Copier les fichiers générés par Vue.js dans le répertoire Nginx
COPY ./dist /usr/share/nginx/html

# Exposer le port 80 à l'intérieur du conteneur
EXPOSE 80

# Lancer Nginx
CMD ["nginx", "-g", "daemon off;"]
