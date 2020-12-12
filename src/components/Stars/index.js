import React from 'react';
import {StarArea, StarText, StarView} from './styles';

import StarFull from '../../assets/star.svg';
import StarHalf from '../../assets/star_half.svg';
import StarEmpty from '../../assets/star_empty.svg';

export default ({stars, showNumber}) => {
  let s = [0, 0, 0, 0, 0];

  return (
    <StarArea>
      {s.map((i, k) => (
        <StarView key={k}>
          {i === 0 && <StarEmpty width="18" height="18" fill="#FF9200" />}
          {i === 1 && <StarHalf width="18" height="18" fill="#FF9200" />}
          {i === 2 && <StarFull width="18" height="18" fill="#FF9200" />}
        </StarView>
      ))}
      {showNumber && <StarText>{stars}</StarText>}
    </StarArea>
  );
};
