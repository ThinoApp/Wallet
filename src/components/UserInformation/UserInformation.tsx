import config from "@/utils/config";
import "./UserInformation.scss";
const UserInformation = () => {
  return (
    <div className="UserInformation">
      <img
        src={`${config.image_base_url}/assets/images/avatar.jpg`}
        alt="avatar"
      />
      <div className="UserInformation-content">
        <p className="name">Thino Rakotomalala</p>
        <p className="email">rakotomalalathino@gmail.com</p>
      </div>
    </div>
  );
};
export default UserInformation;
