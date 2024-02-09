import CircularIndicator from "@/components/CircularIndicator/CircularIndicator";
import "./DashboardTendanceDepense.scss";
import { cpu, trendingDown } from "@/utils/icons";
import config from "@/utils/config";
import CustomCard from "@/components/CustomCard/CustomCard";
interface Props {
  color: string;
}
const DashboardTendanceDepense = ({ color }: Props) => {
  return (
    <CustomCard colorGloss="#db3333" className="DashboardTendanceDepense">
      <CircularIndicator
        value={30}
        color={color}
        textStyle="indicator-text"
        className="after:!inset-5"
      />
      <div className="relative w-[90%]">
        <div className="Tendance-container-back !absolute !top-0 !left-0">
          <h3>
            {trendingDown}
            <span>Dépense</span>
          </h3>
          <h4>
            {cpu}
            <span>Listes :</span>
          </h4>
          <ul>
            <li>
              <img src={`${config.image_base_url}/assets/images/food.png`} />
              <p>Aliments </p>
              <p>50%</p>
            </li>
            <li>
              <img src={`${config.image_base_url}/assets/images/bus.png`} />

              <p>Transports</p>
              <p>25%</p>
            </li>
            <li>
              <img
                src={`${config.image_base_url}/assets/images/multimedia.png`}
              />

              <p>Projet 3</p>
              <p>5%</p>
            </li>
          </ul>
        </div>
        <div className="Tendance-container">
          <h3>
            {trendingDown}
            <span>Dépense</span>
          </h3>
          <h4>
            {cpu}
            <span>Listes :</span>
          </h4>
          <ul>
            <li>
              <img src={`${config.image_base_url}/assets/images/food.png`} />
              <p>Aliments </p>
              <p>50%</p>
            </li>
            <li>
              <img src={`${config.image_base_url}/assets/images/bus.png`} />

              <p>Transports</p>
              <p>25%</p>
            </li>
            <li>
              <img
                src={`${config.image_base_url}/assets/images/multimedia.png`}
              />

              <p>Projet 3</p>
              <p>5%</p>
            </li>
          </ul>
        </div>
      </div>
    </CustomCard>
  );
};
export default DashboardTendanceDepense;
