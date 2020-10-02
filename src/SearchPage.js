import { Button } from '@material-ui/core';
import React from 'react';
import './Css/SearchPage.css';

function SearchPage() {
  return (
    <div className="searchPage">
      <div className="seachPage_info">
        <p>62 Stays. 26 August to 30 August . 2 Guests</p>
        <h1>Stay </h1>
        <Button variant="outlined"> Cancellation</Button>
        <Button variant="outlined"> Type of Place</Button>
        <Button variant="outlined"> Price</Button>
        <Button variant="outlined"> More filters</Button>
      </div>
    </div>
  );
}

export default SearchPage;
