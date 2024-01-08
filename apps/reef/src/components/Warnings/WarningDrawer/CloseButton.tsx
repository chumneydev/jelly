import useUIStore from "@stores/uiStore";

interface CloseButtonProps {}

const CloseButton = ({}: CloseButtonProps) => {
	const { toggleDrawer } = useUIStore();

	const handleClick = () => {
		toggleDrawer();
	};

	return (
		<button
			className="absolute -right-[2.4rem] top-1/2 -translate-y-1/2 rounded-br-md rounded-tr-md border-b-2 border-r-2 border-t-2 border-black  bg-rose-300 p-2 text-xs [text-orientation:upright] [writing-mode:vertical-lr]"
			onClick={() => handleClick()}
		>
			Close
		</button>
	);
};
export default CloseButton;
