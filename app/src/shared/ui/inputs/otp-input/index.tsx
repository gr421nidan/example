import { FC} from "react";
import OtpInput from "react-otp-input";
import { cn } from "@/shared/utils/cn";
import { inputsStyles } from "../style"

interface IOtpCodeInputProps {
    value: string;
    onChange: (value: string) => void;
    numInputs: number;
    className?: string;
    style?: React.CSSProperties;
    inputMode?: "numeric";
}
const OtpCodeInput: FC<IOtpCodeInputProps> = ({ value, onChange,numInputs, className = "", inputMode = "numeric"}) => {
    return (
        <OtpInput
            value={value}
            onChange={onChange}
            numInputs={numInputs}
            containerStyle={cn("flex gap-[12px]", className)}
            renderInput={(props) => (
                <input
                    {...props}
                    type="number"
                    inputMode={inputMode}
                    className={cn(inputsStyles({ variant: "otp" }))}
                />
            )}
        />
    );
};


export default OtpCodeInput;