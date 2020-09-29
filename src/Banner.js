import { Button } from '@material-ui/core';
import React, { useState } from 'react';
import './Css/Banner.css';
import DatePicker from './DatePicker';

function Banner() {
  const [showSearch, setShowSearch] = useState(false);

  return (
    <div className="banner">
      <div className="banner_search">
        {showSearch && <DatePicker />}
        <Button
          onClick={() => setShowSearch(!showSearch)}
          className="banner_searchButton"
          variant="outlined"
        >
          {showSearch ? 'Hide' : 'Search dates'}
        </Button>
      </div>
      <div className="banner_info">
        <h1>Go Near</h1>
        <h5>
          Settle in somewhere new. Discover stays to live, work, or just relax.
        </h5>
        <Button variant="outlined"> Explore</Button>
      </div>
    </div>
  );
}

export default Banner;
