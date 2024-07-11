# Utiliser l'image officielle Nginx basée sur Alpine
FROM nginx:alpine

# Copier les fichiers générés par Vue.js dans le répertoire Nginx
COPY ./dist /usr/share/nginx/html

# Copier le fichier de configuration customisé default.conf vers le répertoire des configurations de Nginx
COPY default.conf /etc/nginx/conf.d/default.conf

# Exposer le port 80 à l'intérieur du conteneur Docker
EXPOSE 80

# Lancer Nginx en mode démon
CMD ["nginx", "-g", "daemon off;"]
