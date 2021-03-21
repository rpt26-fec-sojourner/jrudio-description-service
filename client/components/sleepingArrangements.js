import React from 'react';

const SleepingArrangements = (props) => {
  const sleepingArrangements = props.sleepingArrangements ? props.sleepingArrangements.map((arrangement, i) => {
    return (<p key={i}>{arrangement.name} - {arrangement.subtitle}</p>);
  }) : null;

  return (
    <div>
      {sleepingArrangements}
    </div>
  );
};

export default SleepingArrangements;