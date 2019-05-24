import { connect } from 'react-redux';
import Form from '../components/Form';

const mapStateToProps = (state) => {
  const countries = state.map(country => {
    return {
      name: country.name,
      id: country.key,
      flag: country.flag,
      region: country.region
    }
  })
  return {
    countries
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    addToList: (country) => {
      dispatch({
        type: 'ADD_TO_LIST',
        name: country
      })
    }
  };
};


// const mapDispatchToProps = (dispatch) =>({
//   getImage(breed){
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
