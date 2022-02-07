![PREVIEW](https://raw.githubusercontent.com/rebeccaaaaaaaaaaa/promobit-frontendteste/main/public/preview.png)

# Visão Geral

- Esse é um teste desenvolvido para a vaga de frontend da PROMOBIT.
- O objetivo era criar uma aplicação que permitisse listar filmes utilizando uma API externa para listar os filmes mais populares. 
- Resolvi criar uma forma do usuário poder pesquisar o filme por nome também.

# Demonstação (Demo)

- [Demonstração Filmes Lista](https://promobit-frotendchallenge.netlify.app/)


# Ajustes pendentes

- Quando um genêro é selecionado, a páginação não aparece, porém quando é feito a busca por um filme pelo input e depois um genêro é selecionado, a páginação volta a aparecer. 


# Recursos intelectuais utilizados

- [Documentação do React](https://pt-br.reactjs.org/docs/getting-started.html)
- [Fetching Data from API with useEffect](https://dev.to/antdp425/react-fetch-data-from-api-with-useeffect-27le)
- [React Boostrap (DropDown)](https://react-bootstrap.github.io/components/dropdowns/)


# Funcionalidades

-  O usuário consegue ter acesso a uma listagem dos filmes mais populares do dia

-  O usuário consegue paginar a lista para encontrar novos filmes

-  O usuário consegue ter acesso a uma outra página com detalhes sobre o filme, ao clicar em um item na listagem

-  O usuário consegue voltar para a página de listagem de filmes com os filtros ainda ativos (nesse nosso caso, o filtro se dá ao nome do filme, se fizermos uma busca por exemplo, por "A nova", sera listados os filmes equivalentes e ao clicar em detalhes de algum deles e depois retornar a lista a mesma busca se mantém)

- O usuário deve conseguir filtrar os filmes listados por gênero

# Tecnologias e ferramentas utilizadas

- Para o desenvolvimento desse teste, utlizei as seguintes tecnologias e ferramentas: 
 - Visual Code 
 - ReactJS
 - Styled Components, para estilização CSS in JS
 - API TMDB
 - React Moment - Para formatação de datas
 - React Icons - Fontawsome - para utilização de icones, como o icone em voltar na página de detalhes do filme

# O que aprendi com esse teste?

 - Fetch data com hooks
 - Utilização da API do TMDB 
 - Passar propiedades de um component pai para o filho de forma correta

# Implementações futuras

- Listagem de filmes por mais de um gênero.
- Remoção de filtros e a listagem deve ser atualizada de acordo com o filtro removido
- A página com detalhes de um filme deve possuir uma rota própria e estar preparada para ser indexada em mecanismos de pesquisa

# Como pegar sua API Key no TMDB? 

- Para pegar sua API Key basta seguir esse tutorial, é bem simples: 

A URL para o aplicativo está aqui hoje em dia (em Conta> Configurações> API): https://www.themoviedb.org/settings/api

Você vai querer começar com uma chave de desenvolvedor, pois o tempo de espera para uma chave de desenvolvedor é zero (imediato).
Uma chave comercial, até onde eu entendo, só é apropriada depois que o aplicativo estiver desenvolvido e em execução. O retorno para uma chave de API comercial é de cerca de 3 dias, embora obviamente possa variar.

Uma vez que você tenha uma chave, dentro das páginas do documentação há uma guia "Experimentar" que permite fazer chamadas. O fluxo de código normal (para obter detalhes do filme) seria algo como:

Obter configuração (necessário para caminhos de imagem, deve ser armazenado em cache)
Pesquisar filmes (retorna uma lista, encontre o id numérico daquele que você deseja na lista retornada). Esteja ciente de que pode haver duplicatas retornadas - você pode usar o ano de lançamento, título e idioma para encontrar o que deseja.
Obtenha detalhes do filme com o ID numérico do filme, com "append_to_response" de "créditos, imagens, trailers" para que atores, escritores, diretores e trailers (também conhecidos como vídeos) sejam retornados.
Verifique na documentação como encontrar os caminhos de imagem reais, usando os valores de configuração obtidos acima. 
Geralmente é considerado cortês copiar as imagens que você deseja usar para seu próprio servidor em vez de servi-las do servidor do TMDB.

# Como executar o projeto?

- Após já ter sua API KEY, voce deve substiruir o valor da mesma no .env na raiz do projeto (caso não tenha, basta criar um .env com o seguinte conteúdo: REACT_APP_API_KEY=suachaveaqui )

- Em seguida basta entrar na raiz do projeto e dar o comando npm install para instalar as dependências do projeto

- Agora basta executar o app com o npm run start
