import UserInformation from "@/components/UserInformation/UserInformation";
import "./DepenseHeader.scss";
const DepenseHeader = () => {
  return (
    <div className="DepenseHeader">
      <div className="left">
        <h3>DEPENSES</h3>
      </div>
      <UserInformation />
    </div>
  );
};
export default DepenseHeader;
