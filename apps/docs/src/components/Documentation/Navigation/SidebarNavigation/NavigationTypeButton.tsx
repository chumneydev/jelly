import { cva } from "cva";
import { clsx } from "clsx";

const currentTypeButton = cva({
  base: "w-full rounded-md border-2 border-black px-2 py-2 text-sm transition-all duration-150 ease-in-out",
  variants: {
    currentlyActive: {
      true: "bg-yellow-400 font-semibold hover:cursor-default",
      false: "-translate-x-1 -translate-y-1 bg-orange-300 hover:translate-x-0 hover:translate-y-0 hover:bg-yellow-400 hover:font-semibold",
    },
  },
});

interface NavigationTypeButtonProps {
  type: string;
  label: string;
  selectedType: string;
  isActive: boolean;
  handleTypeChange: (type: string) => void;
}

const NavigationTypeButton = ({ type, label, selectedType, isActive, handleTypeChange }: NavigationTypeButtonProps) => {
  return (
    <div class="flex w-full rounded-md bg-black">
      <button class={clsx([isActive ? currentTypeButton({ currentlyActive: true }) : currentTypeButton({ currentlyActive: false })])} onClick={() => handleTypeChange(type)}>
        {label}
      </button>
    </div>
  );
};
export default NavigationTypeButton;
