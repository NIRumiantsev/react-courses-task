import { ReactComponentElement } from 'react';
import { PageHeader } from 'UI';

const ShoppingListPage = ():ReactComponentElement<'div'> => {
  return (
    <div>
      <PageHeader title="Shopping Page"/>
    </div>
  )
};

export { ShoppingListPage };