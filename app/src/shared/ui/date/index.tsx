import { FC, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ru } from "date-fns/locale";

interface CustomDatePickerProps {
    className?: string;
}

const CustomDatePicker: FC<CustomDatePickerProps> = ({ className = "" }) => {
    const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());

    return (
        <div className="relative w-fit">
            <DatePicker selected={selectedDate} onChange={(date) => setSelectedDate(date)}
                        dateFormat="dd.MM.yyyy"
                        locale={ru}
                        className={`btn ${className} `}
                        placeholderText="дд.мм.гггг"
                        calendarClassName="custom-calendar-datepicker"
                        dayClassName={() => "custom-calendar-datepicker__day"}
                        weekDayClassName={() => "custom-calendar-datepicker__week"}/>
        </div>
    );
};

export default CustomDatePicker;
