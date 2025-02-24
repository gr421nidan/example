import { FC, useState } from "react";
import OtpInput from "react-otp-input";

interface IOtpCodeInputProps {
    numInputs: number;
    className?: string;
    style?: React.CSSProperties;
    inputMode?: "numeric";
}

const OtpCodeInput: FC<IOtpCodeInputProps> = ({numInputs, className = "", style, inputMode = "numeric"}) => {
    const [otp, setOtp] = useState("");
    return (
        <OtpInput
            value={otp}
            onChange={setOtp}
            numInputs={numInputs}
            containerStyle={`gap-[27px] ${className}`}
            renderInput={(props) => (
                <input
                    {...props}
                    type="number"
                    inputMode={inputMode}
                    style={style}
                    className={`otp-input `}
                />
            )}
        />
    );
};

export default OtpCodeInput;