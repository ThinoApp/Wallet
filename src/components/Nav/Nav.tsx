import config from "@/utils/config";
import "./Nav.scss";
import { menus } from "@/containers/NavContainer/Nav.utils";

interface Props {
  active: number;
  handleMenuClick: (value: number) => void;
}

const Nav = ({ active, handleMenuClick }: Props) => {
  return (
    <div className="Nav">
      <img
        src={`${config.image_base_url}/assets/images/feather-icon/briefcase.svg`}
        alt="icon wallet"
      />
      <h1>
        WA
        <br className="hidden md:block" />
        LL
        <br className="hidden md:block" />
        ET
      </h1>
      <ul>
        {menus.map((item, index) => (
          <li
            key={index}
            className={`${active === index ? "active" : ""}`}
            onClick={() => handleMenuClick(index)}
          >
            {/* <img src={item} alt="icon" /> */}
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Nav;
