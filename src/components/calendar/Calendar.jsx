import { useState } from "react";
import {ru} from 'date-fns/locale'
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { StyledCalendar } from "./Calendar.styled";

const Calendar = ({ selected, setSelected, disabled }) => {


    return <StyledCalendar footer={
        selected ? `Срок исполнения: ${selected.toLocaleDateString()}` : "Выберите срок исполнения."
      } mode="single" locale={ru} selected={selected} onSelect={setSelected} disabled={disabled} />;

}

export default Calendar
