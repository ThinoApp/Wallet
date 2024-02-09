import UserInformation from "@/components/UserInformation/UserInformation";
import "./InvestissementHeader.scss";
const InvestissementHeader = () => {
  return (
    <div className="InvestissementHeader">
      <div className="left">
        <h3>Mes investissements</h3>
        <div className="info-container">
          <p>
            TOTAL DES ACTIONS: <span>£ 20000</span>
          </p>
          <button>
            AJOUTER <span>+</span>
          </button>
        </div>
      </div>
      <UserInformation />
    </div>
  );
};
export default InvestissementHeader;
