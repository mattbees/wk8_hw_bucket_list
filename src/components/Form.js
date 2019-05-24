import React, { Component } from 'react';

class Form extends Component {

  constructor(props) {
    super(props);
    console.log(this.props);
    this.state = {
      region: null,
      country: null
    }
    this.handleRegionChange = this.handleRegionChange.bind(this);
    this.getCountryOptions = this.getCountryOptions.bind(this);
    this.handleCountryChange = this.handleCountryChange.bind(this);
  //   this.getCategoryOptions = this.getCategoryOptions.bind(this);
  //   this.getFullOptions = this.getFullOptions.bind(this);
  //   this.mapFilteredOptions = this.mapFilteredOptions.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleRegionChange(evt) {
    this.setState({ region: evt.target.value });
  };


  handleCountryChange(evt) {
    this.setState({ country: evt.target.value });
  }

  getCountryOptions() {
    // get all countries in that region
    const options = this.props.countries.filter(country => {
      return country.region === this.state.region;
    });
    return options.map(option => {
      return <option key={option.key}>{option.name}</option>;
    })
  }


  createRegionOptions() {
    const regionOptions = this.props.countries.map(country => {
      return country.region;
    })
    const filteredOptions = Array.from(new Set(regionOptions));
    return filteredOptions.map((option, index) => {
      return <option key={index}>{option}</option>
    })
  }

  handleSubmit(evt) {
    evt.preventDefault();
    // dispatch this.state.country
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
              // get all countries in that region
            </select>
            <input
              type='submit'
              className='ui button'
              value='View films'
            />
          </form>
        </div>
      </>
    )
  }

};

export default Form;
