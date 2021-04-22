import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MenuBox, MiniBox } from '../styled';

const Menu = () => {
  const location = useLocation();

  return (
    <Link
      to={{
        pathname: '/menu',
        state: { background: location },
      }}
    >
      <MenuBox>
        <MiniBox space="15%" />
        <MiniBox space="25%" />
        <MiniBox space="25%" />
      </MenuBox>
    </Link>
  );
};

export default Menu;
