interface NoWarningsProps {}

const NoWarnings = ({}: NoWarningsProps) => {
	return (
		<div class="relative flex w-full *:rounded-md">
			<div class="z-10 flex h-full w-full -translate-x-1 -translate-y-1 flex-col items-start gap-4 border-2  border-black bg-emerald-500 px-4 py-4">
				Nothing to see here. Move along.
			</div>
			<div class="absolute inset-0 bg-black"></div>
		</div>
	);
};
export default NoWarnings;
