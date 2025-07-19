import './App.css';
import React from 'react';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import { Button } from '@mui/material';

function App() {
  const [value, setValue] = React.useState(dayjs()); 

  const handleClick = () => {
    if (value) {
      alert(`Your appointment is booked for: ${value.format('DD-MM-YYYY')}`);
    } else {
      alert('Please select a date first.');
    }
  };

  return (
    <div className="App">
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker value={value} onChange={(newValue) => setValue(newValue)} />
      </LocalizationProvider>
      <Button onClick={handleClick} variant="contained" color="primary">
        Book an Appointment
      </Button>
    </div>
  );
}

export default App;
