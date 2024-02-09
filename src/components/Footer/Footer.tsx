import {
  facebook,
  instagram,
  linkedin,
  mail,
  phone,
  search,
  twitter,
} from "@/utils/icons";
import "./Footer.scss";
import { navigation, utiles } from "@/containers/FooterContainer/Footer.utils";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="Footer">
      <div className="Footer-header">
        <h2>Ma Portefeuille</h2>
        <div className="input-container">
          <input type="text" placeholder="Rechercher" />
          {search}
        </div>
      </div>
      <div className="Footer-main">
        <div>
          <h3>Contactez-nous :</h3>
          <p>
            {mail} <span>rakotomalalathino@gmail.com</span>
          </p>
          <p>
            {phone}
            <span>+261 34 14 350 18</span>
          </p>
          <h3>Réseaux : </h3>
          <p>
            {facebook}
            {linkedin}
            {instagram}
            {twitter}
          </p>
        </div>
        <ul className="Navigation">
          <li>
            <strong>Navigation</strong>
          </li>
          {navigation.map((item) => (
            <li key={item.id}>
              <Link to={item.link}>{item.title}</Link>
            </li>
          ))}
        </ul>
        <ul className="Utiles">
          <li>
            <strong>Utiles</strong>
          </li>
          {utiles.map((item) => (
            <li key={item.id}>
              <Link to={item.link}>{item.title}</Link>
            </li>
          ))}
        </ul>
      </div>

      <p className="copyright">Copyright 2024 Thino rakotomalala</p>
    </div>
  );
};
export default Footer;
