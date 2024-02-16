import { logOut, trendingUp } from "@/utils/icons";
import "./DashboardTotalDepense.scss";
import CustomCard from "@/components/CustomCard/CustomCard";
const DashboardTotalDepense = () => {
  return (
    <CustomCard colorGloss="#70707A" className="DashboardTotalDepense">
      <div className="icon-container">
        {logOut}
        <span>
          {trendingUp}
          10%
        </span>
      </div>
      <h3>Dépense</h3>
      <h4>£ 25000</h4>
    </CustomCard>
  );
};
export default DashboardTotalDepense;
