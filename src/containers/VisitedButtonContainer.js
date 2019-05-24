import { connect } from 'react-redux';
import VisitedButton from '../components/VisitedButton';

const mapDispatchToProps = (dispatch) => {
  return {
    addVisited: (countryId) => {
      dispatch({
        type: 'ADD_VISITED',
        countryId
      })
    }
  };
};

export default connect(null, mapDispatchToProps)(VisitedButton);
