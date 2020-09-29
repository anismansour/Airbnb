import React, { useState } from 'react';
import './Css/DatePicker.css';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import PeopleIcon from '@material-ui/icons/People';
import { DateRangePicker } from 'react-date-range';
import { Button } from '@material-ui/core';
// https://github.com/hypeserver/react-date-range   for calendar

function DatePicker() {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: 'selection',
  };

  function handleSelect(ranges) {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  }

  return (
    <div className="DatePicker">
      <DateRangePicker ranges={[selectionRange]} onChange={handleSelect} />
      <h2>
        Number of guests <PeopleIcon />{' '}
      </h2>

      <input min={0} DefaultValue={2} type="number" />
      <Button>Search Apartment </Button>
    </div>
  );
}

export default DatePicker;
