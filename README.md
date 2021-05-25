# Car Manager API - back end
API para gerenciamentos de carros

## Funcionalidades Car Manager :car:
### API: 
1. Requisições de usuário
   - Criação do usuário (nome, email, senha)
   - Criação e atualização de avatar do usuário
   - Criação de sessão de autenticação do usuário

2. Requisições do gerente de carros
   - Criação do carro (modelo, marca, preço ano)
   - Busca do carro por id
   - Busca de carros por ano
   - Busca de carros por marca
   - Busca de carros por proprietário (usando id do usuário)
   - Atualização das propriedades do carro (país do carro, capacidade de gasolina, cor)

## Tecnologias/Bibliotecas utilizadas :book:
- Linguagem e stack: Typescript e Nodejs
- Servidor da aplicação: express
- Banco de Dados: Postgresql com TypeOrm
- Autenticação de usuários: jsonwebtoken, bcryptjs, uuid
- Upload de arquivos: multer

## Arquitetura/Estratégias utilizadas :dart:
- SOLID (aplicação de 3 dos 5 princípios)
  - Princípio da responsabilidade única
  - Princípio da substituição de Liskov
  - Inversão de dependência
- Uso de Controllers para melhor gerenciamento das Rotas

## Instruções para rodar o projeto :running:
### Configuração do BD Postgresql
É necessário criar um banco de dados postgresql seguindo os parâmetros informados no arquivo ormconfig.json

### Comandos da aplicação
1. Instalar dependências
```
yard add
```
ou
```
npm install
```

2. Rodar servidor da aplicação
```
yarn dev:server
```
