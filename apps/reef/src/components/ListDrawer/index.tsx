import { clsx } from "clsx";
import { cva } from "cva";

import useWarningStore from "@stores/warningStore";
import WarningList from "@components/ListDrawer/WarningList";
import NoWarnings from "@components/ListDrawer/NoWarnings";

const listDrawerVariants = cva({
	base: "flex w-100 flex-col gap-4 transition-opacity duration-100 ease-in-out overflow-auto p-1",
	variants: {
		variant: {
			open: "opacity-100",
			closed: "opacity-0",
		},
	},
});

interface ListDrawerProps {}

const ListDrawer = ({}: ListDrawerProps) => {
	const { isListOpen, foundWarnings } = useWarningStore();

	return (
		<div class={clsx(listDrawerVariants({ variant: isListOpen ? "open" : "closed" }))}>{foundWarnings.length > 0 ? <WarningList warnings={foundWarnings} /> : <NoWarnings />}</div>
	);
};
export default ListDrawer;
