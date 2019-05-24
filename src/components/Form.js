import React, { Component } from 'react';

class Form extends Component {

  constructor(props) {
    super(props);
    this.state = {
      region: null,
      country: null
    }
    this.handleRegionChange = this.handleRegionChange.bind(this);
    this.getCountryOptions = this.getCountryOptions.bind(this);
    this.handleCountryChange = this.handleCountryChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleRegionChange(evt) {
    this.setState({ region: evt.target.value });
  };


  handleCountryChange(evt) {
    this.setState({ country: evt.target.value });
  }

  getCountryOptions() {
    const options = this.props.countries.filter(country => {
      return country.region === this.state.region;
    });
    return options.map(country => {
      return <option key={country.id} id={country.id}>{country.name}</option>;
    })
  }

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

  handleSubmit(evt) {
    evt.preventDefault();
    this.props.addToList(this.state.country);
  };


  render() {
    return(
      <>
        <div className='form-div'>
          <form
            className='form'
            onSubmit={this.handleSubmit}
          >
            <select
              className='form-dropdown'
              onChange={this.handleRegionChange}
            >
              {this.createRegionOptions()}
            </select>
            <select
              className='form-dropdown'
              onChange={this.handleCountryChange}
            >
              {this.getCountryOptions()}
            </select>
            <input
              type='submit'
              className='submit-button'
              value='Add to bucket list'
            />
          </form>
        </div>
      </>
    )
  }

};

export default Form;
