import React, { Component } from 'react';

class Form extends Component {

  constructor(props) {
    super(props);
    this.state = {
      // Initial values needed to ensure view is equal to state.
      region: 'Africa',
      country: 'Algeria',
      buttonValue: 'Add this country to your bucket list'
    }
    this.handleRegionChange = this.handleRegionChange.bind(this);
    this.getCountryOptions = this.getCountryOptions.bind(this);
    this.handleCountryChange = this.handleCountryChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.selectButtonValue = this.selectButtonValue.bind(this);
  }


  // using callback to setState because componentDidUpdate infinite loop
  handleRegionChange(evt) {
    this.setState({ region: evt.target.value }, () => {
      const countryOptions = this.props.countries.filter(country => {
        return country.region === this.state.region;
      });
      this.setState({ country: countryOptions[0].name });
    });
  };

  // Sets local state:
  handleCountryChange(evt) {
    this.setState({ country: evt.target.value });
  }

  // Presentational logic:
  getCountryOptions() {
    const options = this.props.countries.filter(country => {
      return country.region === this.state.region;
    });
    return options.map(country => {
      return <option key={country.id} id={country.id}>{country.name}</option>;
    })
  }

  // Presentational logic:
  createRegionOptions() {
    const regionOptions = this.props.countries.map(country => {
      return country.region;
    })
    const filteredOptions = Array.from(new Set(regionOptions));
    const sortedOptions = filteredOptions.sort();
    return sortedOptions.map((option, index) => {
      return <option key={index}>{option}</option>
    })
  }

  // async to allow re-rendering of button - not working. How do I get selectButtonValue() to wait until the store has been updated before running?
  handleSubmit(evt) {
    evt.preventDefault();
    this.props.addToList(this.state.country);
    this.selectButtonValue();
  };

  // componentDidUpdate(prevProps, prevState) {
  //   if (prevState.country !== this.state.country)
  // }

  // Presentational logic:
  selectButtonValue() {
    const thisCountry = this.props.countries.find(country => {
      return country.name === this.state.country;
    })
    console.log(thisCountry); // logging as 'selected: false' because async
    return thisCountry.selected ?
    this.setState({ buttonValue: 'Remove from your list' })
    : this.setState({ buttonValue: 'Add this country to your bucket list' });
  }

  render() {
    return(
      <>
        <div className='form-div'>
          <form
            className='form'
            onSubmit={this.handleSubmit}
          >
            <select
              className='ui dropdown'
              onChange={this.handleRegionChange}
            >
              {this.createRegionOptions()}
            </select>
            <select
              id='country-dropdown'
              className='ui dropdown'
              onChange={this.handleCountryChange}
            >
              {this.getCountryOptions()}
            </select>
            <input
              type='submit'
              className='ui positive basic button'
              value={this.state.buttonValue}
            />
          </form>
        </div>
      </>
    )
  }

};

export default Form;
