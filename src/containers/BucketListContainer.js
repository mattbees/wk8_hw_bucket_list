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

export default connect(mapStateToProps)(BucketList);
