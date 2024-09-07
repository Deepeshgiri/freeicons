import React from 'react';
import {calender} from '../icons/calender.svg';

const CalenderIcon = (props) => {
  return (
  <img src={calender} alt="calender"  {...props} />
  );
};

export default CalenderIcon;