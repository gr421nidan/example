import {FC, InputHTMLAttributes} from "react";
import { inputsStyles } from "../style";
import {cn} from "@/shared/utils/cn";

interface IInputFileProps extends InputHTMLAttributes<HTMLInputElement> {
    placeholder?: string;
    icon?: string;
}
const FileInput: FC<IInputFileProps> = ({ placeholder, className, ...props }) => {
    return (
        <label  className={cn(inputsStyles({ variant: "file" }), "hover:border-lightPurple hover:text-gray", className)}>
            <input {...props} type="file" multiple className="hidden" />
            <span>{placeholder}</span>
        </label>
    );
};

export default FileInput;