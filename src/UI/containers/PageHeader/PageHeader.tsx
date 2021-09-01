import { ReactComponentElement } from 'react';
import { Navigation } from 'UI';
import { NavigationItem } from 'types';

type PageHeaderProps = {
  title: string,
  withNavigation?: boolean,
  navigationItems?: NavigationItem[],
};

const PageHeader = (props: PageHeaderProps):ReactComponentElement<'header'> => {
  const {
    title,
    withNavigation = false,
    navigationItems = [],
  } = props;

  return (
    <header>
      <h1>{title}</h1>
      {
        withNavigation && (
          <Navigation navigationItems={navigationItems}/>
        )
      }
    </header>
  )
};

export { PageHeader };