import { setting, trendingUp } from "@/utils/icons";
import "./DashboardTotalInvestissement.scss";
const DashboardTotalInvestissement = () => {
  return (
    <div className="DashboardTotalInvestissement">
      <div className="icon-container">
        {setting}
        <span>
          {trendingUp}
          10%
        </span>
      </div>
      <h3>Investissment</h3>
      <h4>£ 5000</h4>
    </div>
  );
};
export default DashboardTotalInvestissement;
