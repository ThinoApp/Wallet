import DashboardDepenseRecent from "../../components/DashboardDepenseRecent/DashboardDepenseRecent";
import DashboardTotalDepense from "../../components/DashboardTotalDepense/DashboardTotalDepense";
import DashboardTotalEnCaisse from "../../components/DashboardTotalEnCaisse/DashboardTotalEnCaisse";
import DashboardTotalInvestissement from "../../components/DashboardTotalInvestissement/DashboardTotalInvestissement";
import "./DashboardPortefeuille.scss";
const DashboardPortefeuille = () => {
  return (
    <div className="DashboardPortefeuille">
      <DashboardTotalEnCaisse />
      <DashboardDepenseRecent />
      <DashboardTotalDepense />
      <DashboardTotalInvestissement />
    </div>
  );
};
export default DashboardPortefeuille;
