import React from "react";

const titulo = <h1>Esse é um titulo</h1>;

const App = () => {
  const estiloH1 = {
    color: "blue",
    fontSize: "36px",
    fontFamily: "Helvetica",
  };
  const nome = "Joao";
  const ativo = true;

  function mostrarNome(sobrenome) {
    return "joao " + sobrenome;
  }

  const computador = {
    cpu: "ryzen 9",
    gpu: "RTX 4090",
  };

  return (
    <>
      {titulo}
      {mostrarNome("LINDO ")}
      {new Date().getFullYear()}
      <h1 style={estiloH1}>JONAS</h1>
      <p style={{ color: "darkblue", fontSize: "2.5rem", fontWeight: "bold" }}>
        O PC Gamer da terabyte vem com o famoso processador {computador.cpu} e
        também uma {computador.gpu} para rodar todos os jogos no máximo
        desempenho.
      </p>
      <p className={ativo ? "ativo" : "inativo"}>{nome}</p>
    </>
  );
};

// Mostre os dados da aplicação, como aprensetado no vídeo
// Não utilize CSS externo, use o style para mudar as cores
// Se a situação estiver ativa pinte de verde, inativa vermelho
// Se o gasto for maior que 10000 mostre uma mensagem
const luana = {
  cliente: "Luana",
  idade: 27,
  compras: [
    { nome: "Notebook", preco: "R$ 2500" },
    { nome: "Geladeira", preco: "R$ 3000" },
    { nome: "Smartphone", preco: "R$ 1500" },
  ],
  ativa: true,
};

const mario = {
  cliente: "Mario",
  idade: 31,
  compras: [
    { nome: "Notebook", preco: "R$ 2500" },
    { nome: "Geladeira", preco: "R$ 3000" },
    { nome: "Smartphone", preco: "R$ 1500" },
    { nome: "Guitarra", preco: "R$ 3500" },
  ],
  ativa: false,
};

// const App = () => {
//   const dados = mario;

//   const valorTotal = () => {
//     let total = 0;
//     dados.compras.forEach((compras) => {
//       const num = +compras.preco.replace("R$ ", "");
//       total += num;
//     });
//     return total;
//   };

//   const estiloAtivo = {
//     color: "#23ad37",
//   };

//   const estiloInativo = {
//     color: "red",
//   };

//   return (
//     <div>
//       <p>
//         Nome: <span>{dados.cliente}</span>
//       </p>
//       <p>
//         Idade: <span>{dados.idade}</span>
//       </p>
//       <p>
//         Situação:{" "}
//         <span style={dados.ativa ? estiloAtivo : estiloInativo}>
//           {dados.ativa ? "Ativa" : "Inativa"}
//         </span>
//       </p>
//       <p>Total Gasto: R$ {valorTotal()}</p>
//       {valorTotal() > 10000 && <p>Ta gastando muito ein otario</p>}
//     </div>
//   );
// };

export default App;
