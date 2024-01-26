import DashboardTendanceDepense from "../../components/DashboardTendanceDepense/DashboardTendanceDepense";
import DashboardTendanceEconomie from "../../components/DashboardTendanceEconomie/DashboardTendanceEconomie";
import DashboardTendanceInvestissement from "../../components/DashboardTendanceInvestissement/DashboardTendanceInvestissement";
import DashboardTendanceRevenu from "../../components/DashboardTendanceRevenu/DashboardTendanceRevenu";
import "./DashboardTendances.scss";
const DashboardTendances = () => {
  return (
    <div className="DashboardTendances">
      <h2>Tendances</h2>
      <div className="DashboardTendances-container">
        <DashboardTendanceInvestissement color="#28B3BC" />
        <DashboardTendanceDepense color="#DB3333" />
        <DashboardTendanceEconomie color="#8B2AAD" />

        <DashboardTendanceRevenu color="#6DDA5B" />
      </div>
    </div>
  );
};
export default DashboardTendances;
