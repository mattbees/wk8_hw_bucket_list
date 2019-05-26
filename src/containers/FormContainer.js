import { connect } from 'react-redux';
import Form from '../components/Form';

const mapStateToProps = (state) => {
  console.log(state);
  const countries = state.map(country => {
    return {
      name: country.name,
      id: country.id,
      flag: country.flag,
      region: country.region,
      selected: false
    }
  })
  console.log(countries);
  return {
    countries
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    addToList: (country) => {
      dispatch({
        type: 'TOGGLE_LISTING',
        name: country
      })
    }
  };
};


// const mapDispatchToProps = (dispatch) =>({
//   getImage(country){
//     dispatch(()=>{
//       fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
//       .then(res =>res.json())
//       .then(image =>{
//         if (image.status === 'success') {
//           dispatch({
//             type:'ADD_IMAGE',
//             image
//           })
//         } else {
//           dispatch({
//             type: 'NO_IMAGE',
//           })
//         }
//       })
//     })
//   }
// })


export default connect(mapStateToProps, mapDispatchToProps)(Form);
