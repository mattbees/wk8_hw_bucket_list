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
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BucketList);
