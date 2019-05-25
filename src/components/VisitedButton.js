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
        <button onClick={ handleVisitedClick }>Mark as not visited</button>
      </div>
    );
  } else {
    return (
      <div className='visited-button'>
        <p>Still on your bucket list</p>
        <button onClick={ handleVisitedClick }>Tick this off your list</button>
      </div>
    );
  }
}

export default VisitedButton;
