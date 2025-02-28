import { FC, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ru } from "date-fns/locale";
import { cn } from "@/shared/utils/cn";
import {
    datePickerContainer,
    datePickerCalendar,
    datePickerDay,
    datePickerWeekDay,
} from "./style";

interface ICustomDatePickerProps {
    className?: string;
}

const CustomDatePicker: FC<ICustomDatePickerProps> = ({ className = "" }) => {
    const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());

    return (
        <div className="w-fit relative">
            <DatePicker
                selected={selectedDate}
                onChange={(date) => setSelectedDate(date)}
                dateFormat="dd.MM.yyyy"
                locale={ru}
                className={cn(datePickerContainer(), className)}
                placeholderText="дд.мм.гггг"
                calendarClassName={cn(datePickerCalendar())} // Календарь
                dayClassName={() => cn(datePickerDay())} // Дни
                weekDayClassName={() => cn(datePickerWeekDay())} // Дни недели
            />
        </div>
    );
};

export default CustomDatePicker;
