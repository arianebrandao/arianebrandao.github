## arianebrandao web

Meu site pessoal :)

## Ideia para aplicação

Site pessoal com links para contato, sobre mim, posts sobre meus projetos/portfólio e tecnologias em geral.

## Páginas

### Home:
  - Header com destaque:
    - Foto pessoal
    - Breve descrição
    - Links para redes sociais e e-mail
  -  Mostrar posts de projetos (portfólio) e blog recentes

### Sobre mim:
  - Texto contando história, conhecimentos e experiências
  - Link para github

### Contato (peça um orçamento):
  - Formulário para contato com dados:
    - Nome
    - E-mail
    - Mensagem
    - (form é enviado para serviço getform.io)

### Blog:
  - Chama API do CMS para recuperar a lista posts da categoria 'blog' - `[data] Título`

### Projetos e Portfólio:
  - Chama API do CMS para recuperar a lista posts da categoria 'project' - `[data] Título`

### /blog/:slug e /project/:slug:
  - Carrega a página específica do post, contendo:
    - Header com título, data e tags
    - Imagem de destaque
    - Conteúdo do post

### Footer:
  - Nome do site, ano
  - Feito com tecnologias em destaque
  - Hospedado por Github Pages

## Tecnologias

- [ReactJS](https://reactjs.org/) - Tecnologia escolhida para desenvolver o app
- [TypeScript](https://www.typescriptlang.org) - A tipagem me auxilia bastante e acho importante de se aprender e praticar
- [NextJS](https://nextjs.org/) - Framework para ReactJS que oferece vários recursos de otmização, usada aqui especialmente por causa das pages com rotas dinâmicas e pré-renderização de páginas.
- [GraphCMS](https://graphcms.com) ou [Dato CMS](datocms.com) - Headless CMS que vai servir a API do sistema de posts
- [Bulma](https://bulma.io/) - Framework de CSS

## Como executar

- Clone o repositório
- Instale as dependências com `yarn`
- Inicie o servidor com `yarn dev`

Agora você pode acessar [`localhost:3000`](http://localhost:3000) do seu navegador.

## Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE.md) para mais detalhes.
