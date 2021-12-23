import React from 'react';

const Option = ({option, optionId}) => {
  return (
    <option value={optionId}>
      {option}
    </option>
  );
};

export default Option;
