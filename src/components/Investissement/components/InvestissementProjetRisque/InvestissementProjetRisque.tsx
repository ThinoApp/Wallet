import CircularIndicator from "@/components/CircularIndicator/CircularIndicator";
import "./InvestissementProjetRisque.scss";
const InvestissementProjetRisque = () => {
  return (
    <div className="InvestissementProjetRisque">
      <h3>Projet critique :</h3>
      <div className="projet-container">
        {[70, 25, 50].map((projet, index) => {
          return (
            <div className="projet-item">
              <h4>Projet {index}</h4>
              <CircularIndicator
                key={index}
                value={projet}
                color="#DB5151"
                tracker={true}
                textStyle="!text-3xl font-lato !font-bold"
                className={`after:!inset-3 after:!filter-none after:!bg-secondary !bg-[#4A3131] ${
                  projet < 50 ? "before:!bg-[#4A3131]" : ""
                }`}
              />
              <button>Intervenir</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default InvestissementProjetRisque;
