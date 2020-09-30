import React from 'react';
import './Css/Home.css';
import Banner from './Banner';
import Card from './Card';

function Home() {
  return (
    <div className="home">
      <Banner />
      <div className="home_section">
        <Card
          src="https://www.bikeandkayaktours.com/wp-content/uploads/2013/03/DSC_3593.jpg"
          title="Experiences"
          description="Kayaking in La Jolla"
        />
        <Card
          src="https://theknow.denverpost.com/wp-content/uploads/2019/06/bathhouse-dusk.jpg"
          title="Unique Stay"
          description="Must visit"
        />
        <Card
          src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/brewster-mcleod-architects-1486154143.jpg"
          title="Entire homes"
          description="Luxury stay"
        />
      </div>
      <div className="home_section">
        <Card
          src="https://www.wallpapertip.com/wmimgs/12-125416_apartment-background.jpg"
          title="Malibu house"
          description="5 bedrooms by the beach"
          price="$500/Nighty"
        />
        <Card
          src="https://www.wallpapertip.com/wmimgs/12-125405_balcony-hd.jpg"
          title="Penthouse "
          description="3 bedrooms apartment"
          price="$300/Nighty"
        />
        <Card
          src="https://www.wallpapertip.com/wmimgs/12-125446_luxury-beach-house-interiors.jpg"
          title="2 bedroom"
          description="Luxury stay 2 bedrooms apartment"
          price="$200/Nighty"
        />
      </div>
    </div>
  );
}

export default Home;
