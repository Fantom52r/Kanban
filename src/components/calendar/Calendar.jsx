import { useState } from "react";
import {ru} from 'date-fns/locale'
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

const Calendar = ({ selected, setSelected }) => {


    return <DayPicker mode="single" locale={ru} selected={selected} onSelect={setSelected} />;

}

export default Calendar
