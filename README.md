# Desafio 01 - GoStack

Neste desafio, foram utilizados os conteúdos do priemiro modulo do Bootcamp GoStack utilizando o Node.js.

## Métodos

### GET

#### Listar Todos os Projetos

É possivel listar todos os projetos criando uma solicitação GET para o seguinte endereço: http://localhost:3000/projects. Será retornada uma resposta no formato JSON com todos os projetos já inseridos.

#### Buscar Projeto por ID

Para buscar um projeto pelo seu respectivo ID, deve ser feita uma solicitação do tipo GET para a seguinte URL: http://localhost:3000/projects/:id. Onde ":id" deverá ser sustituído pelo ID do projeto a ser buscado. Ex: Para buscar o projeto com ID 5, a URL será: http://localhost:3000/projects/5.

Caso o projeto seja encontrado, a resposta conterá as informações do projeto, seguindo o seguinte formato:

```json
{
  "id": "ID",
  "title": "Título do Projeto",
  "tasks": []
}
```

, caso contrário, a resposta conterá o erro que impediu a operação. Ex de erro:

```json
{ "error": "Project not found" }
```

### POST

#### Adicionar Projeto

É possivel inserir um novo projeto com uma solicitação POST para o seguinte endereço: http://localhost:3000/projects. Onde deverá ser informado no corpo da requisição, o ID do novo projeto e também o título do novo projeto, utilizando o seguinte padrão:

```json
{ "id": "ID", "title": "Título do Projeto" }
```

Caso o projeto seja inserido, a resposta conterá todos os projetos já inseridos, caso contrário, a resposta conterá o erro que impediu a operação. Ex de erro:

```json
{ "error": "Project ID already exists" }
```

#### Adicionar Tarefa a um Projeto Existente

Para adicionar uma tarefa a algum projeto existente pode ser feita uma solicitação POST para o endereço: http://localhost:3000/projects/:id/tasks, onde ":id" deverá ser trocado pelo id do projeto a ser modificado. Ex: Para inserir uma tarefa no porjeto com ID 2, a URL será: http://localhost:3000/projects/:id/tasks. O corpo da requisiçao deverá conter o titulo da nova tarefa, seguindo o seguinte padrão:

```json
{ "title": "Nome da tarefa" }
```

Caso a tarefa seja inserida, a resposta conterá todos os projetos já inseridos, caso contrário, a resposta conterá o erro que impediu a operação. Ex de erro:

```json
{ "error": "Project not found" }
```

### PUT

#### Alterar Nome de um Projeto

Para alterar o nome de um projeto deve ser feita uma solicitação do tipo PUT para a seguinte URL: http://localhost:3000/projects/:id, onde ":id" deve ser substituído pelo ID do projeto a ser alterado. Ex: Para alterar o título do projeto com ID 1, a URL será: http://localhost:3000/projects/1. O corpo da solicitação deverá conter o novo título do projeto, seguindo o padrão a seguir:

```json
{ "title": "Novo Título do Projeto" }
```

Caso o projeto seja renomeado com sucesso, a resposta conterá todos os projetos atualmente inseridos, caso contrário, a resposta conterá o erro que impediu a operação. Ex de erro:

```json
{ "error": "Project not found" }
```

### DELETE

#### Deletar um projeto

Para apagar um projeto deve ser feita uma solicitação do tipo DELETE para a seguinte URL: http://localhost:3000/projects/:id, onde ":id" deve ser substituído pelo ID do projeto a ser deletado. Ex: para apagar o projeto com ID 3, a URL será: http://localhost:3000/projects/3.

Caso o projeto seja removido com sucesso, a resposta conterá todos os projetos atualmente inseridos, caso contrário, a resposta conterá o erro que impediu a operação. Ex de erro:

```json
{ "error": "Project not found" }
```
