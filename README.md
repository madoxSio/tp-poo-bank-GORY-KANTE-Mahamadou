# Banking-acccount

docker build -t jenkins-node .

docker run -d -p 8080:8080 -p 50000:50000 --name jenkins-node jenkins-node
