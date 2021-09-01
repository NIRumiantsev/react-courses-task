import { ReactComponentElement, useState } from 'react';
import { Link } from 'react-router-dom';
import { NavigationItem } from 'types';

type NavigationProps = {
  navigationItems: NavigationItem[],
};

const Navigation = ({ navigationItems }: NavigationProps):ReactComponentElement<'nav'> => {
  const [selectedItem, setSelectedItem] = useState<string>('');

  return (
    <nav>
      {
        navigationItems.map((item: NavigationItem) =>
          <Link
            to={item.route}
            onClick={() => setSelectedItem(item.name)}
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