# Étape 1 : Construction de l'application
FROM node:22

# Définir le répertoire de travail
WORKDIR /app

# Copier les fichiers nécessaires pour la construction
COPY package*.json ./
RUN npm install

# Copier le reste des fichiers et générer le build
COPY . .
RUN npm run build

EXPOSE 5173

# Servir les fichiers statiques avec "serve"
CMD ["npm", "run", "dev"]
