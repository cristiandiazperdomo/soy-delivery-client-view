import "./ClassicInput.css";

interface Classic {
    placeholder: string;
}

export const ClassicInput = ({placeholder}: Classic) => {
    return <input className="classic-input" placeholder={placeholder} />;
};
