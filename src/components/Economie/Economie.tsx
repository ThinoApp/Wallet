import Footer from "../Footer/Footer";
import "./Economie.scss";
import EconomieHeader from "./main/EconomieHeader/EconomieHeader";
import EconomieObjectif from "./main/EconomieObjectif/EconomieObjectif";
import EconomieStatistique from "./main/EconomieStatistique/EconomieStatistique";
const Economie = () => {
  return (
    <div className="Economie">
      <EconomieHeader />
      <EconomieObjectif />
      <EconomieStatistique />
      <Footer />
    </div>
  );
};
export default Economie;
