# Utiliser l'image officielle Jenkins comme base
FROM jenkins/jenkins:lts

# Passer en mode root pour installer des paquets
USER root

# Installer Node.js (version 18.x par exemple)
RUN curl -fsSL https://deb.nodesource.com/setup_18.x | bash - \
  && apt-get install -y nodejs

# Vérifier que node/npm/npx sont bien installés
RUN node -v
RUN npm -v
RUN npx -v

# Repasser en mode utilisateur Jenkins
USER jenkins
