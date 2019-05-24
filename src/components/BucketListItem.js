import React from 'react';
import './BucketListItem.css';
import VisitedButton from './VisitedButton';

const BucketListItem = (props) => {

  const {name, nativeName, flag} = props.country;

  return (
    <div className='bucket-list-item'>
      <h4>{ name } ({ nativeName })</h4>
      <img src={ flag } alt={`${ name } flag`} />
      <VisitedButton
        toggleVisited={ props.toggleVisited }
        id={ props.country.id }
        visited={ props.country.visited }
      />
    </div>
  )
}

export default BucketListItem;
