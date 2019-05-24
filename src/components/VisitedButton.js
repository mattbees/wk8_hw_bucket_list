import React from 'react';

const VisitedButton = (props) => {
  const handleVisitedClick = (evt) => {
    console.log(props.id);
    props.toggleVisited(props.id);
  }


  if (props.visited === true) {
    return (
      <div className='visited-button'>
        <p>You've been there!</p>
        <button onClick={ handleVisitedClick }>Not visited</button>
      </div>
    );
  } else {
    return (
      <div className='visited-button'>
        <p>Still on the bucket list</p>
        <button onClick={ handleVisitedClick }>Visited</button>
      </div>
    );
  }
}

export default VisitedButton;
