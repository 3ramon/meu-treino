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


################################

Exercícios de Fixação (React + TypeScript + Context)

Aqui estão 3 desafios para você aplicar no seu projeto meu-treino.

Desafio 1: "Não me esqueça!" (Persistência com LocalStorage)

O Problema: Atualmente, se você preencher o formulário, "logar" e atualizar a página (F5), o usuário some e volta a ser "Visitante".
O Objetivo: Fazer os dados do usuário sobreviverem ao F5.

Instruções:

Abra o arquivo src/contexts/UserContext.tsx.

No UserProvider, use o useEffect para ler o localStorage assim que o componente montar.

Se houver um usuário salvo lá, atualize o estado user.

Modifique a função salvarUsuario para também salvar no localStorage.

Modifique a função logout para remover o item do localStorage.


Desafio 2: Rota Protegida (Segurança)

O Problema: Hoje, qualquer pessoa pode digitar /usuario/Ramon na URL e ver a página de detalhes, mesmo sem ter preenchido o formulário.
O Objetivo: Criar um componente que "bloqueia" o acesso se o usuário não estiver logado.

Instruções:

Crie um componente chamado ProtectedRoute (pode ser em src/components/ProtectedRoute/index.tsx).

Esse componente deve receber children (o conteúdo que ele protege).

Dentro dele, use o useContext para ver se user é null.

Se user for null, redirecione para o formulário usando o componente <Navigate to="/form-user" /> do react-router-dom.

Se user existir, retorne o children.

Aplique isso no App.tsx envolvendo a rota de detalhes.

Desafio 3: O Hook useForm (Limpeza de Código)

O Problema: No FormUser, temos muita lógica repetitiva para lidar com inputs (handleChange, estados separados, etc).
O Objetivo: Criar um Hook customizado genérico para formulários.

Instruções:

Crie uma pasta src/hooks e um arquivo useForm.ts.

Crie uma função useForm<T>(initialState: T).

Mova a lógica de estado e handleChange para lá.

O hook deve retornar: { form, handleChange, resetForm }.

Refatore o FormUser para usar esse hook em vez de criar tudo na mão.

Exemplo de uso esperado:

const { form, handleChange } = useForm({
  nome: '',
  email: '',
  idade: ''
});

