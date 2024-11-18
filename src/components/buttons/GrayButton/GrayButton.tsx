interface GrayButtonProps {
    text: string;
    svg: any;
    event?: () => void;
}

export const GrayButton = ({text, svg, event}: GrayButtonProps) => {
    return (
        <button
            className="flex items-center justify-center bg-gray space-x-4 px-4 py-2.5 rounded-[4px] text-white"
            onClick={event}
        >
            <span className="text-md font-semibold">{text}</span>
            {svg}
        </button>
    );
};
