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


-------------

sugestoes de melhorias

1. Correção: Refinamento de Tipagem e Interfaces
Objetivo: Corrigir a tipagem estrita para evitar erros futuros e seguir as boas práticas do TypeScript.

Tarefa A (UserInterface):

Vá ao ficheiro src/UserInterface.ts.

A propriedade idade está atualmente definida como number | "". Altere para ser estritamente number.

Nota: Isso forçará você a tratar a conversão de string para número antes de salvar o objeto no estado ou no contexto.

Tarefa B (LikeButton):

Vá ao componente LikeButton.

A prop contagemInicial deve ser marcada como opcional (?) na interface ButtonProps, pois nem sempre queremos passar um valor inicial.

No componente, defina um valor padrão (default value) de 0 caso a prop não seja passada.

2. Correção: Boas Práticas de Formulário (Preparação para o Hook)
Objetivo: Abandonar o uso de placeholder como identificador, pois isso é instável (se mudar o texto do placeholder, o código quebra).

Tarefa:

No ficheiro src/pages/FormUser/index.tsx, adicione o atributo name a todos os inputs, selects e checkboxes.

O valor do name deve corresponder exatamente ao nome da propriedade que quer salvar (ex: name="nome", name="email", name="planoAtivo").

3. Desafio Avançado: Criando o Custom Hook useForm
Contexto: O componente FormUser tem muitos estados separados (inputNameValue, inputEmailValue, etc.) e uma função handleChange grande e repetitiva. Vamos abstrair isso.

Enunciado do Desafio:

Criação do Hook:

Crie o ficheiro src/hooks/useForm.ts.

Exporte uma função chamada useForm<T>(initialState: T). O <T> indica que o hook é genérico e aceita qualquer tipo de formulário.

Dentro dela, use um único useState para guardar todo o formulário.

Crie uma função handleChange genérica que:

Receba o evento de mudança (ChangeEvent).

Identifique o campo pelo atributo name do target.

Verifique se é um checkbox (use .checked) ou outro input (use .value).

Atualize o estado preservando os valores antigos (...prev).

Refatoração do Componente:

No FormUser, apague os 5 useState individuais.

Chame o useForm, passando o estado inicial do objeto (com chaves vazias ou valores padrão).

Substitua os valores dos inputs (value={inputNameValue}) para usar o objeto do hook (value={form.nome}).

Substitua todas as chamadas de mudança pelo novo handleChange do hook.

Resultado Esperado:

O código do FormUser deve ficar com menos de 80 linhas (excluindo imports).

O formulário deve continuar a funcionar exatamente como antes, mas agora o código é reutilizável para qualquer outro formulário do sistema.
