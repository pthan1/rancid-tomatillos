import React, { Component } from 'react';
import './UserRatingForm.css';

class Form extends Component {
  constructor() {
    super();
    this.state={
      rating: '',
    }
  }

  setRating = (event) => {
    event.preventDefault();
    this.setState({ rating: parseInt(event.target.innerText)})
    console.log(typeof(this.state.rating));
    console.log(this.state.rating);
  }

  render() {
    return (
      <form>
        <div className="rating-wrapper">
          <div className="rating-header">
            <div className="rating-header-title">Rate This Movie: </div>
          </div>
          <div className="dd-list" onClick={this.setRating}>
            <button className="rating-1">1</button>
            <button className="rating-2">2</button>
            <button className="rating-3">3</button>
            <button className="rating-4">4</button>
            <button className="rating-5">5</button>
            <button className="rating-6">6</button>
            <button className="rating-7">7</button>
            <button className="rating-8">8</button>
            <button className="rating-9">9</button>
            <button className="rating-10">10</button>
          </div>
        </div>
      </form>
    )
  }
}

export default Form;
