import {RefObject} from "react";
import "./ItemInput.css";

interface ItemInputProps {
    reference: RefObject<HTMLInputElement>;
    defaultValue: string;
    placeholder: string;
    type: string;
    svg: any;
}

export const ItemInput = ({
    defaultValue,
    reference,
    placeholder,
    type,
    svg,
}: ItemInputProps) => {
    return (
        <div className="item-input-container">
            <input
                type={type}
                ref={reference}
                placeholder={placeholder}
                defaultValue={defaultValue}
                required
            ></input>
            {svg}
        </div>
    );
};
