import { logOut, trendingUp } from "@/utils/icons";
import "./DashboardTotalDepense.scss";
const DashboardTotalDepense = () => {
  return (
    <div className="DashboardTotalDepense">
      <div className="icon-container">
        {logOut}
        <span>
          {trendingUp}
          10%
        </span>
      </div>
      <h3>Dépense</h3>
      <h4>£ 25000</h4>
    </div>
  );
};
export default DashboardTotalDepense;
