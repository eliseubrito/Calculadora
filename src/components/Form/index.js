import axios from "axios";
import { useContext } from "react";
import { DataContext } from "../../Contexts/Context";
// const [set, setResultados] = useContext(DataContext);
const Form = () => {
  const resultado = useContext(DataContext);
  async function GetResults(valor, parcelas, mdr) {
    try {
      const response = await axios.post(
        "https://frontend-challenge-7bu3nxh76a-uc.a.run.app",
        { amount: valor, installments: parcelas, mdr: mdr }
      );
      const data = response.data;
      console.log("Resposta API: ", data);
      resultado.setResults(data);
      // console.log(set);
      // setResultados(data);
      // console.log(set);
      // return data;
    } catch (error) {
      console.log(error);
    }
  }

  async function inputs() {
    let input = document.querySelector("#valor");
    let texto = input.value;
    let input2 = document.querySelector("#parcelas");
    let texto2 = input2.value;
    let input3 = document.querySelector("#mdr");
    let texto3 = input3.value;
    let allinputs = [texto, texto2, texto3];
    let test = parseInt(allinputs[0]);
    let test2 = parseInt(allinputs[1]);
    let test3 = parseInt(allinputs[2]);
    if (test >= 0 && test2 >= 0 && test3 >= 0) {
      console.log(test, test2, test3);
      await GetResults(test, test2, test3);
    } else {
      console.log("erro");
    }
  }

  return (
    <div className="FormBox">
      <h1 className="FormName">Simule sua Antecipação</h1>
      <form className="Formulario">
        <label className="InfoLabel">Informe o valor da sua venda *</label>
        <input
          className="CaixaTexto"
          type="number"
          id="valor"
          onChange={inputs}
        />
        <label className="InfoLabel">Em quantas parcelas *</label>
        <input
          className="CaixaTexto"
          type="number"
          id="parcelas"
          onChange={inputs}
        />
        <label className="InfoDetailLabel">Máximo de 12 parcelas</label>
        <label className="InfoLabel">Informe o Percentual de MDR *</label>
        <input
          className="CaixaTexto"
          type="number"
          id="mdr"
          onChange={inputs}
        />
      </form>
    </div>
  );
};

export default Form;
