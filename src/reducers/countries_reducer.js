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
    default:
      return state;
  }
}

export default countriesReducer;
