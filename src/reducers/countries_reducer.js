const countriesReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_COUNTRIES':
      console.log(action.data);
      return action.data
    case 'TOGGLE_LISTING':
      return state.map(country => {
        if (country.name === action.name) {
          return { ...country, selected: !country.selected }
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
