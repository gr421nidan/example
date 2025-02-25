import { FC, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ru } from "date-fns/locale";

interface CustomDatePickerProps {
    className?: string;
}

const CustomDatePicker: FC<CustomDatePickerProps> = ({ className = "" }) => {
    const [startDate, setStartDate] = useState<Date | null>(new Date());

    return (
        <div className="relative w-fit">
            <DatePicker selected={startDate} onChange={(date) => setStartDate(date)}
                        dateFormat="dd.MM.yyyy"
                        locale={ru}
                        className={`btn ${className} `}
                        placeholderText="дд.мм.гггг"/>
        </div>
    );
};

export default CustomDatePicker;
