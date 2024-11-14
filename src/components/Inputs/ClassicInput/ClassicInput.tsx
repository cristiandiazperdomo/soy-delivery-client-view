import "./ClassicInput.css";

interface ClassicInputProps {
    placeholder: string;
}

export const ClassicInput = ({placeholder}: ClassicInputProps) => {
    return <input className="classic-input" placeholder={placeholder} />;
};
