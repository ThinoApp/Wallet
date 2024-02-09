import { box, cpu, setting } from "@/utils/icons";
import "./DashboardTendanceInvestissement.scss";
import CircularIndicator from "@/components/CircularIndicator/CircularIndicator";
import CustomCard from "@/components/CustomCard/CustomCard";

interface Props {
  color: string;
}

const DashboardTendanceInvestissement = ({ color }: Props) => {
  return (
    <CustomCard
      colorGloss="#28b3bc"
      className="DashboardTendanceInvestissement"
    >
      <CircularIndicator
        value={85}
        color={color}
        textStyle="indicator-text"
        className="after:!inset-5"
      />
      <div className="relative w-[90%]">
        <div className="Tendance-container-back !absolute !top-0 !left-0">
          <h3>
            {setting}
            <span>Investissement</span>
          </h3>
          <h4>
            {cpu}
            <span>Projets :</span>
          </h4>
          <ul>
            <li>
              {box}
              <p>Projet 1</p>
              <p>5%</p>
            </li>
            <li>
              {box}
              <p>Projet 2</p>
              <p>5%</p>
            </li>
            <li>
              {box}
              <p>Projet 3</p>
              <p>5%</p>
            </li>
          </ul>
        </div>
        <div className="Tendance-container">
          <h3>
            {setting}
            <span>Investissement</span>
          </h3>
          <h4>
            {cpu}
            <span>Projets :</span>
          </h4>
          <ul>
            <li>
              {box}
              <p>Projet 1</p>
              <p>5%</p>
            </li>
            <li>
              {box}
              <p>Projet 2</p>
              <p>5%</p>
            </li>
            <li>
              {box}
              <p>Projet 3</p>
              <p>5%</p>
            </li>
          </ul>
        </div>
      </div>
    </CustomCard>
  );
};
export default DashboardTendanceInvestissement;
