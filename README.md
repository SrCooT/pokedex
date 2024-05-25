## CooTDex

<img src='./src/components/imagen/Captura de tela 2024-05-24 213855.png'>

##  propósito da aplicação

   <p> CooTDex(pokedex) é uma aplicação web projetada para oferecer aos usuários uma experiência interativa na exploração e busca de informações sobre Pokémons. A aplicação permite visualizar detalhes de cada Pokémon, incluindo suas habilidades, movimentos e estatísticas, tudo isso com uma interface amigável e personalizável através de temas.</p>

##  Funcionalidades da aplicação entregue

- <strong>Busca de Pokémon</strong>: Permite buscar Pokémons pelo nome.

- <Strong>Visualização dos Pokémons</Strong>: Exibe um botao de carregar mais que adiciona mais  10 pokemon na  lista  com imagens e nomes.

- <strong>Detalhes do Pokémon</strong>: clicar em um Pokémon da lista, o usuário é encaminhado a uma página com informações detalhadas sobre aquele Pokémon específico.
  Paginação: Navegação entre páginas de Pokémons.

- <strong>Tema Dinâmico</strong>: Alterna entre temas claro e escuro para melhorar a experiência do usuário.


- <strong>Alerta Interativo</strong>: Exibe um alerta ao clicar na imagem do Pokémon.

## Ferramentas utilizadas
  <strong>Vite</strong>: utilizado para iniciar o projeto. 
  
  <strong>React</strong>: Escolhido pela sua eficiência na construção de interfaces de usuário dinâmicas e reutilizáveis.

  <strong>React Router</strong>: Utilizado para gerenciar a navegação entre as páginas da aplicação de forma simples e eficiente.

  <strong>Axios</strong>: Biblioteca usada para realizar requisições HTTP para a API do Pokémon, devido à sua simplicidade e flexibilidade.

  <strong>CSS</strong>: Estilização personalizada para melhorar a aparência da aplicação e proporcionar uma experiência de usuário agradável.

  <strong>PokeAPI</strong>: API utilizada para obter os dados dos Pokémons, por ser uma fonte abrangente e bem documentada de informações sobre Pokémons.


 ## Decisões adotadas durante o planejamento e execução do desafio
  <strong>Utilização do Context API</strong>: Para gerenciar o estado do tema globalmente, permitindo alternar facilmente entre temas claro e escuro.

  <strong>Componentização</strong>: O projeto foi dividido em componentes reutilizáveis (como Button, CardPokemon, infoPokemons...), para melhorar a organização do código e facilitar a manutenção.

 <strong>Carregamento de Dados</strong>: Implementado para melhorar a performance da aplicação ao lidar com uma grande quantidade de dados da API.

  <strong>Loading</strong>: Adicionadas para informar o usuário, enquanto busca a informações, melhorando a experiência do usuário durante a espera por dados.
