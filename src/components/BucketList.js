import React from 'react';
import BucketListItem from './BucketListItem';
import './BucketList.css';

const BucketList = (props) => {

  const countryCards = props.selectedCountries.map(country => {
    return <BucketListItem
      country={ country }
      key={ country.id }
      toggleVisited={ props.toggleVisited }
      toggleListing={ props.toggleListing }
    />
  });

  return (
    <div id='bucket-list'>
      { countryCards }
    </div>
  );
}

export default BucketList;
