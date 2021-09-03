import { ReactComponentElement } from 'react';
import { PageHeader } from 'UI';

const ProfilePage = ():ReactComponentElement<'div'> => {
  return (
    <div>
      <PageHeader title="Profile"/>
    </div>
  )
};

export { ProfilePage };