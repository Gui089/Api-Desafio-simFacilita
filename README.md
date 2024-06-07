## Configuração de Ambiente

#### Instalar o docker

https://www.docker.com/

#### Instalar Beekeeper Studio (Community Edition) ou pgAdmin

https://github.com/beekeeper-studio/beekeeper-studio

#### Rodar o docker

```
docker run -d --name funny_goodall -e 
-e POSTGRES_USER=guilherme -e POSTGRES_PASSWORD=321654 
e- POSTGRES_DB=desafio -p 5435:5432 postgres
```

#### Instalar dependências

npm install ou yarn

#### Criar arquivo .env

POSTGRES_USER='guilherme'
POSTGRES_USER_PASSWORD='321654'
POSTGRES_PORT=5435
POSTGRES_DB='desafio'

#### Criar Banco de Dados

Conectar PostgreSQL através do beekeeper  ou pgAdmin studio e criar DB com o nome de **desafio**

### Fazer o migrations 

npm run migrations ou yarn migrations

### rodar o projeto

npm run dev ou yarn dev

### acessar o projeto

http://localhost:3002/products
