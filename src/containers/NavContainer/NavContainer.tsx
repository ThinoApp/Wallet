import Nav from "@/components/Nav/Nav";
import { useState } from "react";

const NavContainer = () => {
  const [active, setActive] = useState(0);

  const handleMenuClick = (value: number) => {
    setActive(value);
  };

  return (
    <>
      <Nav active={active} handleMenuClick={handleMenuClick} />
    </>
  );
};
export default NavContainer;
