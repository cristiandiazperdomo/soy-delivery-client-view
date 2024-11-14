import "./ClassicInput.css";

interface ClassicInputProps {
    type: string;
    placeholder: string;
}

export const ClassicInput = ({type, placeholder}: ClassicInputProps) => {
    return (
        <input
            className="classic-input"
            type={type}
            placeholder={placeholder}
        />
    );
};
