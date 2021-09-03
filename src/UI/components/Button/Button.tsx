import { ReactComponentElement } from 'react';

import './Button.scss';

//We also can extend button component with different styles and forms if it is necessary
type ButtonType = {
  buttonContent: ReactComponentElement<any> | string,
};

const Button = ({ buttonContent }: ButtonType): ReactComponentElement<'button'> => {
  return (
    <button className="Button">
      {buttonContent}
    </button>
  )
};

export { Button };