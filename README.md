# News Scrapper

## Descrição
O **News Scrapper** é uma aplicação que permite buscar e visualizar notícias de diversas fontes de forma fácil e rápida.

## Funcionalidades
- Busca de notícias por palavras-chave.
- Integração com múltiplas fontes de notícias (G1, CNN, e possíveis outras).
- Exibição das notícias em um layout amigável.

## Tecnologias Utilizadas
- **Next.js**: Framework React para desenvolvimento web.
- **TypeScript**: Superset do JavaScript que adiciona tipagem estática.
- **Axios**: Cliente HTTP para realizar requisições.
- **Cheerio**: Biblioteca para manipulação de HTML no servidor.
- **Ant Design**: Biblioteca de componentes UI para React.
- **Puppeteer**: Ferramenta para controle de navegadores.

## Estrutura do Projeto
- **/src**: Contém o código fonte da aplicação.
    - **/components**: Componentes React utilizados na aplicação.
    - **/context**: Contextos React para gerenciamento de estado.
    - **/helpers**: Funções auxiliares.
    - **/scrapper**: Métodos e APIs para scraping de notícias.
    - **/pages**: Páginas da aplicação.
- **/public**: Arquivos públicos, como imagens e fontes.

## Como Executar o Projeto

### Pré-requisitos
- Node.js (versão 18.19.1)
- npm ou yarn

### Passos
1. Navegue até o diretório do projeto:
     ```bash
     cd NewsScrapper
     ```
2. Instale as dependências:
     ```bash
     npm install
     # ou
     yarn install
     ```
3. Execute o projeto em modo de desenvolvimento:
     ```bash
     npm run dev
     # ou
     yarn dev
     ```
4. Abra o navegador e acesse `http://localhost:3000`.

## Scripts Disponíveis
- `dev`: Inicia a aplicação em modo de desenvolvimento.
- `build`: Cria a build de produção.
- `start`: Inicia a aplicação em modo de produção.
- `lint`: Executa o linter para verificar a qualidade do código.

## Contribuição
Contribuições são bem-vindas! Sinta-se à vontade para abrir issues e pull requests.

## Licença
Este projeto está licenciado sob a licença MIT.
