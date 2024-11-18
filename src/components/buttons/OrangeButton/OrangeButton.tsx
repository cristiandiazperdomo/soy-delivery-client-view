interface OrangeButtonProps {
    text: string;
    paddingX?: string;
    svg?: any;
    event?: () => void;
}

export const OrangeButton = ({
    text,
    paddingX = "px-4",
    svg,
    event,
}: OrangeButtonProps) => {
    return (
        <button
            className={`flex items-center justify-center bg-primary space-x-4 ${paddingX} py-2.5 rounded-[4px] text-white`}
            onClick={event}
        >
            <span className="text-md font-semibold">{text}</span>
            {svg}
        </button>
    );
};
