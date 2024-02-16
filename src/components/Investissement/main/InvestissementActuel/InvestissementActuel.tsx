import { investissementActuel } from "@/containers/InvestissementContainer/Investissement.utils";
import "./InvestissementActuel.scss";
import { clock, cpu, moreVertical, trendingUp } from "@/utils/icons";
import CustomCard from "@/components/CustomCard/CustomCard";
const InvestissementActuel = () => {
  return (
    <div className="InvestissementActuel">
      <h2>Mes investissements actuels</h2>
      <div className="InvestissementActuel-list">
        {investissementActuel.slice(0, 6).map((investissement) => (
          <CustomCard
            activeHover={true}
            colorGloss={investissement.color}
            className="investissement-item"
            key={investissement.name}
          >
            <div className="investissement-header">
              {cpu}
              <h3>{investissement.name}</h3>
              {moreVertical}
            </div>
            <div
              className="investissement-encours"
              style={{ backgroundColor: investissement.color }}
            >
              {clock}
              <p>
                <span className="label">en cours</span>
                <span className="value">
                  £ {investissement.details[0].value}
                </span>
              </p>
              <p>
                <span className="label">Rendement</span>
                <span className="value">
                  {trendingUp} <span>{investissement.details[0].yield}%</span>
                </span>
              </p>
            </div>
            <h4>Historique</h4>
            <ul className="investissement-historique">
              {investissement.details.map((detail, index) => (
                <CustomCard
                  className="detail-item"
                  colorGloss={investissement.color}
                  key={index}
                >
                  <p>
                    <span className="date">{detail.date}</span>
                    <span className="value">
                      £ {investissement.details[0].value}
                    </span>
                  </p>
                  <p>
                    {trendingUp} <span>{investissement.details[0].yield}%</span>
                  </p>
                </CustomCard>
              ))}
            </ul>
            <button>VOIR PLUS</button>
          </CustomCard>
        ))}
      </div>
    </div>
  );
};
export default InvestissementActuel;
