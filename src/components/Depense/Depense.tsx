import Footer from "../Footer/Footer";
import "./Depense.scss";
import DepenseAjout from "./main/DepenseAjout/DepenseAjout";
import DepenseBarChart from "./main/DepenseBarChart/DepenseBarChart";
import DepenseHeader from "./main/DepenseHeader/DepenseHeader";
import DepenseListe from "./main/DepenseListe/DepenseListe";
import DepenseStatistique from "./main/DepenseStatistique/DepenseStatistique";
const Depense = () => {
  return (
    <div className="Depense">
      <DepenseHeader />
      <div className="Depense-crud-container">
        <DepenseAjout />
        <DepenseListe />
      </div>
      <DepenseBarChart />
      <DepenseStatistique />
      <Footer />
    </div>
  );
};
export default Depense;
