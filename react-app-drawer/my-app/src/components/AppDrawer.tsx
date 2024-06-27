import { NavLink, Outlet } from 'react-router-dom';
import { TiThMenu } from 'react-icons/ti';
import { useState } from 'react';
import './AppDrawer.css';
export type MenuItem = {
  name: string;
  iconUrl: string;
  path: string;
};

type Props = {
  menuItems: MenuItem[];
};
export function AppDrawer({ menuItems }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  function handleClick() {
    setIsOpen(!isOpen);
  }
  return (
    <div className="row">
      <div className="flex flex-col">
        <div className={isOpen ? 'menu-drawer is-open' : 'menu-drawer'}>
          <TiThMenu onClick={handleClick} />
          <div className="menu-heading inline-block py-2 px-4">
            {isOpen ? 'Hylian Shopping' : ''}
          </div>
          <nav className="inline-block py-2 px-4">
            <ul className="menu-items">
              {menuItems.map((menu) => (
                <li
                  key={menu.name}
                  className="row column-half menu-item row inline-block py-2 px-4">
                  <NavLink className="menu-link" to={menu.path}>
                    <img className="icon" src={menu.iconUrl}></img>
                  </NavLink>
                  <NavLink
                    to={menu.path}
                    className={isOpen ? 'text-black' : 'none'}>
                    {menu.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
      <Outlet />
    </div>
  );
}
