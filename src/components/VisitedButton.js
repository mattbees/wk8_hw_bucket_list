import React from 'react';
import './VisitedButton.css';

const VisitedButton = (props) => {

  const handleVisitedClick = (evt) => {
    console.log(props.id);
    props.toggleVisited(props.id);
  }

  const handleListingClick = (evt) => {
    console.log(props.name);
    props.toggleListing(props.name);
  }

  if (props.visited === true) {
    return (
      <>
        <div className='absolute-pos'>
          <div className='description'>
            <p>You've been there!</p>
          </div>
          <div className='ui buttons'>
            <button
              className='ui button'
              onClick={ handleVisitedClick }>
              Not visited
            </button>
            <div className='or'></div>
            <button
              className='ui button negative'
              onClick={ handleListingClick }>
              Remove from list
            </button>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className='absolute-pos'>
          <div className='description'>
            <p>This country is on your bucket list</p>
          </div>
          <div className='ui buttons'>
            <button
              className='ui button'
              onClick={ handleVisitedClick }>
              Mark as visited
            </button>
            <div className='or'></div>
            <button
              className='ui button negative'
              onClick={ handleListingClick }>
              Remove from list
            </button>
          </div>
        </div>
      </>
    );
  }
}

export default VisitedButton;
