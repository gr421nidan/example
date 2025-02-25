import { FC, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ru } from "date-fns/locale";
import { Icon } from "@iconify/react";

interface CustomDatePickerProps {
    placeholder?: string;
    className?: string;
}

const CustomDatePicker: FC<CustomDatePickerProps> = ({ placeholder = "дд.мм.гггг", className = "" }) => {
    const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());

    return (
        <div className="relative w-fit">
            <DatePicker
                selected={selectedDate}
                onChange={(date) => setSelectedDate(date)}
                dateFormat="dd.MM.yyyy"
                locale={ru}
                className={`px-4 py-2 border border-gray-300 rounded-lg shadow-sm text-gray-700 bg-white focus:ring-2 focus:ring-purple-500 ${className}`}
                placeholderText={placeholder}
                calendarClassName="bg-white shadow-lg rounded-lg p-2"
                renderCustomHeader={({
                                         date,
                                         decreaseMonth,
                                         increaseMonth,
                                         prevMonthButtonDisabled,
                                         nextMonthButtonDisabled,
                                     }) => (
                    <div className="flex items-center justify-between px-4 py-2 bg-gray-100 rounded-t-lg">
                        <button
                            onClick={decreaseMonth}
                            disabled={prevMonthButtonDisabled}
                            className="text-gray-600 hover:text-purple-600 transition disabled:opacity-50"
                        >
                            <Icon icon="mdi:chevron-left" className="w-5 h-5" />
                        </button>
                        <span className="text-sm font-medium text-gray-700 capitalize">
                            {date.toLocaleString("ru", { month: "long", year: "numeric" })}
                        </span>
                        <button
                            onClick={increaseMonth}
                            disabled={nextMonthButtonDisabled}
                            className="text-gray-600 hover:text-purple-600 transition disabled:opacity-50"
                        >
                            <Icon icon="mdi:chevron-right" className="w-5 h-5" />
                        </button>
                    </div>
                )}
            />
        </div>
    );
};

export default CustomDatePicker;