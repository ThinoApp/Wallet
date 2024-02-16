import { economieObjectif } from "@/containers/EconomieContainer/Economie.utils";
import EconomieObjectifItem from "../../components/EconomieObjectifItem/EconomieObjectifItem";
import "./EconomieObjectif.scss";

const EconomieObjectif = () => {
  return (
    <div className="EconomieObjectif">
      <div className="ObjectifList">
        {economieObjectif.map((objectif) => {
          return <EconomieObjectifItem objectif={objectif} />;
        })}
      </div>
    </div>
  );
};
export default EconomieObjectif;
