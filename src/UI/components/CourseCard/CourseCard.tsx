import { ReactComponentElement } from 'react';

type CourseCardProps = {
  name: string,
  duration: number,
  cover: string,
};

const CourseCard = (props: CourseCardProps): ReactComponentElement<'div'> => {
  const {
    name,
    duration,
    cover,
  } = props;

  return (
    <div>
      {name}
    </div>
  )
};

export { CourseCard };