interface OutlinedButtonProps {
    text: string;
    paddingX?: string;
    svg?: any;
    event?: () => void;
}

export const OutlinedButton = ({
    text,
    paddingX = "px-4",
    svg,
    event,
}: OutlinedButtonProps) => {
    return (
        <button
            className={`flex items-center justify-center border-2 border-primary space-x-4 ${paddingX} py-2.5 rounded-[4px]`}
            onClick={event}
        >
            <span className="text-md font-semibold">{text}</span>
            {svg}
        </button>
    );
};
