import InvestissementProjetRisque from "../../components/InvestissementProjetRisque/InvestissementProjetRisque";
import InvestissementVolatility from "../../components/InvestissementVolatility/InvestissementVolatility";
import "./InvestissementRisque.scss";
const InvestissementRisque = () => {
  return (
    <div className="InvestissementRisque">
      <h2>Analayse des risques</h2>
      <InvestissementVolatility currentValue={40} />
      <InvestissementProjetRisque />
    </div>
  );
};
export default InvestissementRisque;
