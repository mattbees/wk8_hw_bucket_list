const countriesReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_COUNTRIES':
      return action.data
    case 'ADD_TO_LIST':
      return state.map(country => {
        if (country.name === action.name) {
          return { ...country, selected: true }
        } else {
          return country;
        }
      });
    case 'TOGGLE_VISITED':
      console.log('TOGGLE_VISITED');
      console.log(action);
      return state.map(country => {
        if (country.id === action.countryId) {
          console.log(country);
          return { ...country, visited: !country.visited }
        } else {
          return country;
        }
      });
    default:
      return state;
  }
}

export default countriesReducer;
