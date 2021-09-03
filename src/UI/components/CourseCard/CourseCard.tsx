import { ReactComponentElement } from 'react';
import { Button } from 'UI';
import { PlayIcon } from 'assets';

import './CourseCard.scss';

type CourseCardProps = {
  name: string,
  duration: number,
  cover: string,
  lessons: number,
};

const CourseCard = (props: CourseCardProps): ReactComponentElement<'div'> => {
  const {
    name,
    duration,
    cover,
    lessons,
  } = props;

  //The number of lessons is random because we don't have such information in the API
  return (
    <div
      className="CourseCard"
      style={{ backgroundImage: `url(${cover})` }}
    >
      <div className="CourseCard_column">
        <div className="CourseCard_holder">
          <div className="CourseCard_column">
            <h3 className="CourseCard_title">{name}</h3>
            <span className="CourseCard_text">{lessons} lessons</span>
          </div>
          <span className="CourseCard_title">{duration} min</span>
        </div>
        <Button
          buttonContent={<img src={PlayIcon} alt="Play"/>}
        />
      </div>
    </div>
  )
};

export { CourseCard };