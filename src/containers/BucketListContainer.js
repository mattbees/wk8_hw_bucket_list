import { connect } from 'react-redux';
import BucketList from '../components/BucketList';

const mapStateToProps = (state) => {
  const selectedCountries = state.filter(country => {
    return country.selected;
  })
  return {
    selectedCountries
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleVisited: (countryId) => {
      dispatch({
        type: 'TOGGLE_VISITED',
        countryId
      })
    },
    toggleListing: (countryName) => {
      dispatch({
        type: 'TOGGLE_LISTING',
        name: countryName
      })
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BucketList);
