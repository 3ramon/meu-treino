Exercício 2: Criando Interfaces e Types
Objetivo: Praticar a criação de "contratos" de dados, que é a base para tipar props em React.

Sua Tarefa:

Crie uma interface chamada Usuario que defina a estrutura de um objeto de usuário.

Ela deve ter as seguintes propriedades:

id: do tipo number (e deve ser readonly).

nome: do tipo string.

email: do tipo string.

idade: do tipo number.

planoAtivo: do tipo boolean (e deve ser opcional, use ?).

Agora, crie um type (tipo) chamado StatusDoPedido. Ele deve ser um "Union Type", aceitando apenas os seguintes valores em string: 'aguardando', 'em_preparo', 'enviado', ou 'entregue'.

Crie uma função chamada exibirStatus que aceita um parâmetro do tipo StatusDoPedido e retorna uma string amigável.

Exercício 3: Aplicando no React - Componente LikeButton (com Tipagem)
Objetivo: Juntar tudo: criar um componente React com props e state devidamente tipados (como vimos na Aula 5).

Sua Tarefa: Crie um novo componente React (LikeButton.tsx) que seja um botão de "curtir".

Requisitos:

Props: O componente deve aceitar uma prop chamada contagemInicial, que é um number e é opcional.

State: O componente deve ter um state chamado likes que guarda a contagem atual.

Tipagem do State: Ao usar useState, garanta que o TS saiba que likes é um number. O valor inicial deve ser contagemInicial ou 0 (caso a prop não seja passada).

Evento: O botão deve ter um onClick que incrementa o state likes.

