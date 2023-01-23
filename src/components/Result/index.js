import { useContext, useEffect } from "react";
import { DataContext } from "../../Contexts/Context";

const Result = () => {
  const resultado = useContext(DataContext);
  console.log(resultado);
  // resultado.setResults([1, 2]);
  // const resultado = useContext(DataContext);
  // console.log(resultado);
  // resultado.setResult([1, 2]);
  // console.log(testresultado);
  // console.log(resultado.result);
  useEffect(() => {}, [resultado.result]);

  return (
    <div className="Result">
      <h1 className="ResultTitle">VOCÊ RECEBERÁ: </h1>
      {resultado.result.length === 0 ? (
        <div className="Valor">
          <p className="ValorResult">
            Amanhã:<b className="ValorBold"> R$ 0,00</b>
          </p>
          <p className="ValorResult">
            Em 15 dias:<b className="ValorBold"> R$ 0,00</b>
          </p>
          <p className="ValorResult">
            Em 30 dias:<b className="ValorBold"> R$ 0,00</b>
          </p>
          <p className="ValorResult">
            Em 90 dias:<b className="ValorBold"> R$ 0,00</b>
          </p>
        </div>
      ) : (
        <div className="Valor">
          <p className="ValorResult">
            Amanhã:<b className="ValorBold"> R$ {resultado.result[1]}</b>
          </p>
          <p className="ValorResult">
            Em 15 dias:<b className="ValorBold"> R$ {resultado.result[15]}</b>
          </p>
          <p className="ValorResult">
            Em 30 dias:<b className="ValorBold"> R$ {resultado.result[30]}</b>
          </p>
          <p className="ValorResult">
            Em 90 dias:<b className="ValorBold"> R$ {resultado.result[90]}</b>
          </p>
        </div>
      )}
    </div>
  );
};

export default Result;
