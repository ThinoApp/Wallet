import { caretUp, moreVertical, trendingDown } from "@/utils/icons";
import "./DashboardDepenseRecent.scss";
import {
  depenseRecents,
  getIconByCategory,
} from "@/containers/DashboardContainer/Dashboard.utils";
import config from "@/utils/config";
const DashboardDepenseRecent = () => {
  return (
    <div className="DashboardDepenseRecent">
      <h2>
        {trendingDown}
        <span>Dépenses récentes</span>
      </h2>
      <ul className="depense-recent">
        {depenseRecents.map((item) => (
          <li key={item.id}>
            <p className="category">
              <img
                className="object-contain"
                src={`${
                  config.image_base_url
                }/assets/images/${getIconByCategory(item.category)}`}
                alt="category icon"
              />
              <span>{item.category}</span>
            </p>
            <p className="value">
              {caretUp}
              <span>{item.total}</span>
            </p>
            <p>
              <span>{item.date}</span>
              {moreVertical}
            </p>
          </li>
        ))}
      </ul>
      <button>VOIR PLUS</button>
    </div>
  );
};
export default DashboardDepenseRecent;
