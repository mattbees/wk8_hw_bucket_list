import React, { Component } from 'react';
import FormContainer from './containers/FormContainer.js';
import BucketListContainer from './containers/BucketListContainer.js';
import { connect } from 'react-redux';

class App extends Component {

  componentDidMount() {
    this.props.getCountriesData();
  }

  render() {
    return (
      <>
        <h1>Bucket List</h1>
        <FormContainer />
        <BucketListContainer />
      </>
    )
  }

}

const extractData = (countries) => {
  return countries.map(country => {
    return {
      name: country.name,
      region: country.region,
      nativeName: country.nativeName,
      flag: country.flag,
      id: country.alpha3Code,
      selected: false,
      imageUrl: null,
      targetDate: null,
      visited: false
    }
  })
}

const checkRegion = (countries) => {
  const checkedCountries = countries.map(country => {
    if (country.region === '') {
      country.region = 'Other';
      return country;
    } else {
      return country;
    }
  })
  return checkedCountries;
}

const mapDispatchToProps = (dispatch) => ({
  getCountriesData() {
    dispatch(() => {
      fetch('https://restcountries.eu/rest/v2/all')
      .then(res => res.json())
      .then(countriesData => {
        const data = extractData(countriesData);
        const checkedData = checkRegion(data);
        dispatch({
          type: 'ADD_COUNTRIES',
          data: checkedData
        })
      })
    })
  }
})


export default connect(null, mapDispatchToProps)(App);
