import axios from "axios";
import { useContext } from "react";
import { DataContext } from "../../contexts/Context";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
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
      // console.log(test, test2, test3);
      await GetResults(test, test2, test3);
    } else {
      console.log("");
    }
  }

  const schema = yup.object({
    amount: yup
      .string()
      .required("O valor é obrigatório!")
      .min(1000, "O valor mínimo é 1000")
      .max(100000000, "O valor máximo é 100000000"),
    installments: yup
      .number()
      .transform((value) =>
        isNaN(value) || value === null || value === undefined ? 0 : value
      )
      .required("O número de parcelas é obrigatório!")
      .min(1, "O mínimo de parcelas é 1")
      .max(12, "O máximo de parcelas é 12"),
    mdr: yup.string().required("O percentual é obrigatório!"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  return (
    <div className="FormBox">
      <h1 className="FormName">Simule sua Antecipação</h1>
      <form className="Formulario">
        <label className="InfoLabel">Informe o valor da sua venda *</label>
        <input
          {...register("amount")}
          className="CaixaTexto"
          type="number"
          id="valor"
          onChange={handleSubmit(inputs)}
          name="amount"
        />
        <p className="Error">{errors.amount?.message}</p>
        <label className="InfoLabel">Em quantas parcelas *</label>
        <input
          {...register("installments")}
          className="CaixaTexto"
          type="number"
          id="parcelas"
          onChange={handleSubmit(inputs)}
          name="installments"
        />
        <p className="Error">{errors.installments?.message}</p>
        <label className="InfoDetailLabel">Máximo de 12 parcelas</label>
        <label className="InfoLabel">Informe o Percentual de MDR *</label>
        <input
          {...register("mdr")}
          className="CaixaTexto"
          type="number"
          id="mdr"
          onChange={handleSubmit(inputs)}
          name="mdr"
        />
        <p className="Error">{errors.mdr?.message}</p>
      </form>
    </div>
  );
};

export default Form;
