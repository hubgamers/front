# Utiliser l'image officielle Nginx basée sur Alpine
FROM nginx:alpine

# Copier les fichiers générés par Vue.js dans le répertoire Nginx
COPY ./dist /usr/share/nginx/html

# Configurer Nginx pour gérer le routage côté client de Vue.js
COPY nginx.conf /etc/nginx/nginx.conf

# Exposer le port 80 à l'intérieur du conteneur Docker
EXPOSE 80

# Lancer Nginx en mode démon
CMD ["nginx", "-g", "daemon off;"]
