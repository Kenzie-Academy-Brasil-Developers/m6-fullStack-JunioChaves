# Projeto Full Stack Junio Chaves

Aplicação utilizou as seguintes tecnologias no frontend: React + Typescript + SASS

Para você conseguir rodar a aplicação rode os comandos <strong>npm install</strong> e um <strong>npm run dev</strong>.

Para rodar a API: https://github.com/Kenzie-Academy-Brasil-Developers/api-Amanhecer

Para você conseguir rodar a aplicação localmente, é necessário dar um <strong>npm install</strong> e um <strong>npm run dev</strong>,é necessário também rodar as <i>migrações</i> das entidades que são por esse comando(faça os passos de migrações antes de tentar rodar): <strong>npm run typeorm migration:generate ./src/migrations/inicial -- -d ./src/data-source.ts</strong>, logo após esse comando é necessário rodar a migração que é por esse comando: <strong>npm run typeorm migration:run -- -d src/data-source.ts</strong>.
