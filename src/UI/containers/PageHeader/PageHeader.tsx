import { ReactComponentElement } from 'react';
import { Link } from 'react-router-dom';
import { Navigation } from 'UI';
import { NavigationItem } from 'types';

import './PageHeader.scss';

type PageHeaderProps = {
  title: string,
  withNavigation?: boolean,
  navigationItems?: NavigationItem[],
  selectedItemName?: string,
};

const PageHeader = (props: PageHeaderProps):ReactComponentElement<'header'> => {
  const {
    title,
    withNavigation = false,
    navigationItems = [],
    selectedItemName,
  } = props;

  return (
    <header className="PageHeader">
      <Link
        to="/courses"
        className="PageHeader_title"
      >
        {title}
      </Link>
      {
        withNavigation && (
          <Navigation
            navigationItems={navigationItems}
            selectedItemName={selectedItemName}
          />
        )
      }
    </header>
  )
};

export { PageHeader };