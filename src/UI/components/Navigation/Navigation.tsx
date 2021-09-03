import { ReactComponentElement, useState } from 'react';
import { Link } from 'react-router-dom';
import { NavigationItem } from 'types';

import './Navigation.scss';

type NavigationProps = {
  navigationItems: NavigationItem[],
  selectedItemName?: string,
};

const Navigation = (props: NavigationProps):ReactComponentElement<'nav'> => {
  const {
    navigationItems,
    selectedItemName,
  } = props;

  return (
    <nav className="Navigation">
      {
        navigationItems.map((item: NavigationItem) =>
          <Link
            className={`Navigation_link${item.name.toLowerCase() === selectedItemName ? '--active' : ''}`}
            to={item.route}
            key={`header-navigation-${item.name}`}
          >
            {item.name}
          </Link>
        )
      }
    </nav>
  )
};

export { Navigation };