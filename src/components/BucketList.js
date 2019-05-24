import React from 'react';
import BucketListItem from './BucketListItem';
// import './PhotosList.css';

const BucketList = (props) => {

  console.log(props); // object.selectedCountries[element]

  const countryCards = props.selectedCountries.map(country => {
    return <BucketListItem
      country={ country }
      key={ country.id }
    />
  });

  return (
    <div id='bucket-list'>
      { countryCards }
    </div>
  );
}

export default BucketList;
