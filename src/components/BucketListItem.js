import React from 'react';
import './BucketListItem.css';
import VisitedButton from './VisitedButton';

const BucketListItem = (props) => {

  const {name, nativeName, flag} = props.country;

  return (
    <div className='ui card'>
      <h4>{ name } ({ nativeName })</h4>
      <div className='image'>
        <img src={ flag } alt={`${ name } flag`} />
      </div>
      <VisitedButton
        toggleVisited={ props.toggleVisited }
        toggleListing={ props.toggleListing }
        id={ props.country.id }
        name={ props.country.name }
        visited={ props.country.visited }
      />
    </div>
  )
}

export default BucketListItem;
