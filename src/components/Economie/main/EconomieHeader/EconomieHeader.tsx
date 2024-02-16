import UserInformation from "@/components/UserInformation/UserInformation";
import "./EconomieHeader.scss";
const EconomieHeader = () => {
  return (
    <div className="EconomieHeader">
      <div className="left">
        <h3>économies</h3>
        <div className="info-container">
          <p>
            TOTAL DES ÉCONOMIES:<span>&nbsp;£ 20000</span>
          </p>
        </div>
      </div>
      <div className=" flex flex-col items-center gap-4">
        <UserInformation />
        <button>
          NOUVEL OBJECTIF <span>+</span>
        </button>
      </div>
    </div>
  );
};
export default EconomieHeader;
