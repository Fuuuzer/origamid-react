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

export default App;
