import "./GrayButton.css";

export const GrayButton = ({
    text,
    svg,
    event,
}: {
    text: string;
    svg: any;
    event?: () => void;
}) => {
    return (
        <button className="gray-button" onClick={event}>
            <span>{text}</span>
            {svg}
        </button>
    );
};
