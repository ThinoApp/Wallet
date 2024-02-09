import CircularIndicator from "@/components/CircularIndicator/CircularIndicator";
import "./DashboardTendanceEconomie.scss";
import { box, cpu, dollarSign } from "@/utils/icons";
import CustomCard from "@/components/CustomCard/CustomCard";

interface Props {
  color: string;
}
const DashboardTendanceEconomie = ({ color }: Props) => {
  return (
    <CustomCard colorGloss="#8b2aad" className="DashboardTendanceEconomie">
      <CircularIndicator
        value={67}
        color={color}
        textStyle="indicator-text"
        className="after:!inset-5"
      />
      <div className="relative w-[90%]">
        <div className="Tendance-container-back !absolute !top-0 !left-0">
          <h3>
            {dollarSign}
            <span>Economie</span>
          </h3>
          <h4>
            {cpu}
            <span>Listes :</span>
          </h4>
          <ul>
            <li>
              {box}
              <p>Objectif 1 </p>
              <p>10%</p>
            </li>
            <li>
              {box}
              <p>Objectif 2</p>
              <p>25%</p>
            </li>
            <li>
              {box}
              <p>Objectif 3</p>
              <p>5%</p>
            </li>
          </ul>
        </div>
        <div className="Tendance-container">
          <h3>
            {dollarSign}
            <span>Economie</span>
          </h3>
          <h4>
            {cpu}
            <span>Listes :</span>
          </h4>
          <ul>
            <li>
              {box}
              <p>Objectif 1 </p>
              <p>10%</p>
            </li>
            <li>
              {box}
              <p>Objectif 2</p>
              <p>25%</p>
            </li>
            <li>
              {box}
              <p>Objectif 3</p>
              <p>5%</p>
            </li>
          </ul>
        </div>
      </div>
    </CustomCard>
  );
};
export default DashboardTendanceEconomie;
