import { arrowUp, briefcase } from "@/utils/icons";
import "./DashboardTotalEnCaisse.scss";
const DashboardTotalEnCaisse = () => {
  return (
    <div className="DashboardTotalEnCaisse">
      <div className="left">
        {briefcase}
        <h3 className="label">En caisse</h3>
        <h4 className="value">£ 10000</h4>
      </div>
      <div className="right">
        <p>Dernière transaction</p>
        <p>
          <span className="date">02-12-2024</span>
          <span>
            £ 200
            {arrowUp}
          </span>
        </p>
      </div>
    </div>
  );
};
export default DashboardTotalEnCaisse;
