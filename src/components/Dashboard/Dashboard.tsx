import FooterContainer from "@/containers/FooterContainer/FooterContainer";
import "./Dashboard.scss";
import DashboardHeader from "./main/DashboardHeader/DashboardHeader";
import DashboardPortefeuille from "./main/DashboardPortefeuille/DashboardPortefeuille";
import DashboardStatistique from "./main/DashboardStatistique/DashboardStatistique";
import DashboardTendances from "./main/DashboardTendances/DashboardTendances";
const Dashboard = () => {
  return (
    <div className="Dashboard">
      <DashboardHeader />
      <DashboardPortefeuille />
      <DashboardStatistique />
      <DashboardTendances />
      <FooterContainer />
    </div>
  );
};
export default Dashboard;
