import { useState, ReactComponentElement } from 'react';
import { Link } from 'react-router-dom';
import {
  CoursesIcon,
  CoursesActiveIcon,
  ProfileIcon,
  ProfileActiveIcon,
  ShoppingIcon,
  ShoppingActiveIcon,
} from 'assets';

type MenuItem = {
  name: string,
  route: string,
  icon: string,
  iconActive: string,
};

const menuItems: MenuItem[] = [
  {
    name: 'courses',
    route: '/courses',
    icon: CoursesIcon,
    iconActive: CoursesActiveIcon,
  },
  {
    name: 'shopping',
    route: '/shopping',
    icon: ShoppingIcon,
    iconActive: ShoppingActiveIcon,
  },
  {
    name: 'profile',
    route: '/profile',
    icon: ProfileIcon,
    iconActive: ProfileActiveIcon,
  },
];

const PagesMenu = ():ReactComponentElement<'div'> => {
  const [selectedItem, setSelectedItem] = useState('courses');

  return (
    <div>
      {
        menuItems.map((item: MenuItem) => {
          return (
            <Link
              key={`navigation-link-${item.name}`}
              to={item.route}
              onClick={() => setSelectedItem(item.name)}
            >
              <img
                src={selectedItem === item.name ? item.iconActive : item.icon}
                alt={item.name}
              />
            </Link>
          )
        })
      }
    </div>
  )
};

export { PagesMenu };