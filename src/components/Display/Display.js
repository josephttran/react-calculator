import React from 'react';

const Display = (props) => {
  return (
    <div id={props.id}>
      {props.data}
    </div>
  )
}

export default Display;
