import { setting, trendingUp } from "@/utils/icons";
import "./DashboardTotalInvestissement.scss";
import CustomCard from "@/components/CustomCard/CustomCard";
const DashboardTotalInvestissement = () => {
  return (
    <CustomCard colorGloss="#70707A" className="DashboardTotalInvestissement">
      <div className="icon-container">
        {setting}
        <span>
          {trendingUp}
          10%
        </span>
      </div>
      <h3>Investissment</h3>
      <h4>£ 5000</h4>
    </CustomCard>
  );
};
export default DashboardTotalInvestissement;
