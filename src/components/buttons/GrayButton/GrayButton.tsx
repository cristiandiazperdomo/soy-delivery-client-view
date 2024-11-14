import "./GrayButton.css";

export const GrayButton = ({
    text,
    svg,
    event,
}: {
    text: string;
    svg: any;
    event?: any;
}) => {
    return (
        <button className="gray-button" onClick={event}>
            <span>{text}</span>
            {svg}
        </button>
    );
};
