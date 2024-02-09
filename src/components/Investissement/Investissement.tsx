import InvestissementActuel from "./main/InvestissementActuel/InvestissementActuel";
import InvestissementHeader from "./main/InvestissementHeader/InvestissementHeader";
import InvestissementPerformance from "./main/InvestissementPerformance/InvestissementPerformance";
import InvestissementRepartition from "./main/InvestissementRepartition/InvestissementRepartition";
import InvestissementRisque from "./main/InvestissementRisque/InvestissementRisque";
import InvestissementStatistique from "./main/InvestissementStatistique/InvestissementStatistique";
import "./Investissement.scss";
import Footer from "../Footer/Footer";

const Investissement = () => {
  return (
    <div className="Investissement">
      <InvestissementHeader />
      <div className="Investissement-Graph-container">
        <InvestissementRepartition />
        <InvestissementPerformance />
      </div>
      <InvestissementStatistique />

      <InvestissementActuel />
      <InvestissementRisque />
      <Footer />
    </div>
  );
};
export default Investissement;
