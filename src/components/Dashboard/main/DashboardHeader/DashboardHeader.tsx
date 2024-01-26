import UserInformation from "@/components/UserInformation/UserInformation";
import "./DashboardHeader.scss";
const DashboardHeader = () => {
  return (
    <div className="DashboardHeader">
      <div className="left">
        <h3>Bonjour Thino</h3>
        <p>Gérer votre Portefeuille</p>
      </div>
      <UserInformation />
    </div>
  );
};
export default DashboardHeader;
