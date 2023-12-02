import React from 'react';
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from 'dayjs';

export default function DatePickerMaterialUI(props) {
  let currDate = (new Date()).toLocaleDateString('en-US').toString();

  return (
    <div>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker value={props.value} />
      </LocalizationProvider>
    </div>
  );
}