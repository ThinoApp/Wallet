import CircularIndicator from "@/components/CircularIndicator/CircularIndicator";
import "./DashboardTendanceRevenu.scss";
import { box, cpu, trendingUp } from "@/utils/icons";
import CustomCard from "@/components/CustomCard/CustomCard";
interface Props {
  color: string;
}

const DashboardTendanceRevenu = ({ color }: Props) => {
  return (
    <CustomCard colorGloss="#6dda5b" className="DashboardTendanceRevenu">
      <CircularIndicator
        value={30}
        color={color}
        textStyle="indicator-text"
        className="after:!inset-5"
      />

      <div className="relative w-[90%] md:w-1/2">
        <div className="Tendance-container-back !absolute !top-0 !left-0">
          <h3>
            {trendingUp}
            <span>Revenu</span>
          </h3>
          <h4>
            {cpu}
            <span>Sur :</span>
          </h4>
          <ul>
            <li>
              {box}
              <p>Projet 1</p>
              <p>50%</p>
            </li>
            <li>
              {box}

              <p>Projet 2</p>
              <p>25%</p>
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
            {trendingUp}
            <span>Revenu</span>
          </h3>
          <h4>
            {cpu}
            <span>Sur :</span>
          </h4>
          <ul>
            <li>
              {box}
              <p>Projet 1</p>
              <p>50%</p>
            </li>
            <li>
              {box}

              <p>Projet 2</p>
              <p>25%</p>
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
export default DashboardTendanceRevenu;
