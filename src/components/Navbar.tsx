import { useState } from "react";

interface NavbarProps {
  title : string;
  subheading : string;
  handleChange?: ()=> void;
  isChecked: boolean;
}
export const Navbar = ({title, subheading, handleChange, isChecked=false}:NavbarProps) => {
  const [val, setVal] = useState<boolean>(isChecked);
    return (
        <nav>
            <div className="logo">
              <h3>
                Hero-logo
              </h3>
            </div>

            <div className="Menu-options">
              <div className="menu__theme">
                <input type="checkbox"
                className="toggle"
                id="theme-toggle"
                onChange={handleChange}
                checked={isChecked}
                />
                <label htmlFor="theme-toggle">Dark Mode</label>
              </div>
                <h6><label htmlFor="dropdown-toggle">Menu</label>
                  <input type="checkbox" id="dropdown-toggle"
                  />
                </h6>
                <div className="dropdown">
                  <ul>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">About us</a></li>
                    <li><a href="#">Comments</a></li>
                  </ul>
                </div>
            </div>
        </nav>
    );
}
