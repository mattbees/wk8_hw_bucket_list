import React from 'react';
import './BucketListItem.css';

const BucketListItem = (props) => {
  console.log(props);
  const {name, nativeName, flag} = props.country;

  return (
    <div className='bucket-list-item'>
      <h4>{name} ({nativeName})</h4>
      <img src={flag} alt={`${name} flag`} />
    </div>
  )
}

export default BucketListItem;
