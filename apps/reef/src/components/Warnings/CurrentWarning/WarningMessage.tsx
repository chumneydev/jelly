import { Warning } from "~types/warning";

interface WarningMessageProps {
	message: Warning["message"];
}

const WarningMessage = ({ message }: WarningMessageProps) => {
	return <div class="flex w-full rounded-md border-2 border-black bg-rose-300 p-2 text-sm">{message}</div>;
};
export default WarningMessage;
