import createPrefixedDictionary from "~lib/utils/createPrefixedDictionary";
import { Category } from "~types/category";
import { Dictionary } from "~types/dictionary";

export const black: Dictionary = {
	name: "Black",
	category: Category.Colors,
	mapName: "black",
	description: "The black color palette.",
	properties: ["color"],
	dictionary: [{ name: "black", value: "#000000" }],
};

export const white: Dictionary = {
	name: "White",
	category: Category.Colors,
	mapName: "White",
	description: "The white color palette.",
	properties: ["color"],
	dictionary: [{ name: "white", value: "#ffffff" }],
};

export const slate: Dictionary = {
	category: Category.Colors,
	name: "slate",
	mapName: "slate",
	description: "Dictionary for slate colors",
	properties: ["color", "background-color"],
	dictionary: [
		{ name: "slate-50", value: "#F8FAFC" },
		{ name: "slate-100", value: "#F1F5F9" },
		{ name: "slate-200", value: "#E2E8F0" },
		{ name: "slate-300", value: "#CBD5E1" },
		{ name: "slate-400", value: "#94A3B8" },
		{ name: "slate-500", value: "#64748B" },
		{ name: "slate-600", value: "#475569" },
		{ name: "slate-700", value: "#334155" },
		{ name: "slate-800", value: "#1E293B" },
		{ name: "slate-900", value: "#0F172A" },
	],
};

export const gray: Dictionary = {
	category: Category.Colors,
	name: "gray",
	mapName: "gray",
	description: "Dictionary for gray colors",
	properties: ["color", "background-color"],
	dictionary: [
		{ name: "gray-50", value: "#F9FAFB" },
		{ name: "gray-100", value: "#F3F4F6" },
		{ name: "gray-200", value: "#E5E7EB" },
		{ name: "gray-300", value: "#D1D5DB" },
		{ name: "gray-400", value: "#9CA3AF" },
		{ name: "gray-500", value: "#6B7280" },
		{ name: "gray-600", value: "#4B5563" },
		{ name: "gray-700", value: "#374151" },
		{ name: "gray-800", value: "#1F2937" },
		{ name: "gray-900", value: "#111827" },
	],
};

export const red: Dictionary = {
	category: Category.Colors,
	name: "red",
	mapName: "red",
	description: "Dictionary for red colors",
	properties: ["color", "background-color"],
	dictionary: [
		{ name: "red-50", value: "#FEF2F2" },
		{ name: "red-100", value: "#FEE2E2" },
		{ name: "red-200", value: "#FECACA" },
		{ name: "red-300", value: "#FCA5A5" },
		{ name: "red-400", value: "#F87171" },
		{ name: "red-500", value: "#EF4444" },
		{ name: "red-600", value: "#EF4444" },
		{ name: "red-700", value: "#DC2626" },
		{ name: "red-800", value: "#B91C1C" },
		{ name: "red-900", value: "#991B1B" },
	],
};

export const orange: Dictionary = {
	category: Category.Colors,
	name: "orange",
	mapName: "orange",
	description: "Dictionary for orange colors",
	properties: ["color", "background-color"],
	dictionary: [
		{ name: "orange-50", value: "#FFF7ED" },
		{ name: "orange-100", value: "#FFEDD5" },
		{ name: "orange-200", value: "#FDE68A" },
		{ name: "orange-300", value: "#FDBA74" },
		{ name: "orange-400", value: "#FBBF24" },
		{ name: "orange-500", value: "#F97316" },
		{ name: "orange-600", value: "#D97706" },
		{ name: "orange-700", value: "#B45309" },
		{ name: "orange-800", value: "#92400E" },
		{ name: "orange-900", value: "#78390F" },
	],
};

export const yellow: Dictionary = {
	category: Category.Colors,
	name: "yellow",
	mapName: "yellow",
	description: "Dictionary for yellow colors",
	properties: ["color", "background-color"],
	dictionary: [
		{ name: "yellow-50", value: "#FEFCE8" },
		{ name: "yellow-100", value: "#FDF9C3" },
		{ name: "yellow-200", value: "#FCE788" },
		{ name: "yellow-300", value: "#FADB5F" },
		{ name: "yellow-400", value: "#FACC15" },
		{ name: "yellow-500", value: "#EAB308" },
		{ name: "yellow-600", value: "#CA8A04" },
		{ name: "yellow-700", value: "#A16207" },
		{ name: "yellow-800", value: "#854D0E" },
		{ name: "yellow-900", value: "#713F12" },
	],
};

export const green: Dictionary = {
	category: Category.Colors,
	name: "green",
	mapName: "green",
	description: "Dictionary for green colors",
	properties: ["color", "background-color"],
	dictionary: [
		{ name: "green-50", value: "#F0FDF4" },
		{ name: "green-100", value: "#DCFCE7" },
		{ name: "green-200", value: "#BBF7D0" },
		{ name: "green-300", value: "#86EFAC" },
		{ name: "green-400", value: "#4ADE80" },
		{ name: "green-500", value: "#22C55E" },
		{ name: "green-600", value: "#059669" },
		{ name: "green-700", value: "#1D9A57" },
		{ name: "green-800", value: "#065F46" },
		{ name: "green-900", value: "#064E3B" },
	],
};

export const blue: Dictionary = {
	category: Category.Colors,
	name: "blue",
	mapName: "blue",
	description: "Dictionary for blue colors",
	properties: ["color", "background-color"],
	dictionary: [
		{ name: "blue-50", value: "#EFF6FF" },
		{ name: "blue-100", value: "#DBEAFE" },
		{ name: "blue-200", value: "#BFDBFE" },
		{ name: "blue-300", value: "#93C5FD" },
		{ name: "blue-400", value: "#60A5FA" },
		{ name: "blue-500", value: "#3B82F6" },
		{ name: "blue-600", value: "#2563EB" },
		{ name: "blue-700", value: "#1D4ED8" },
		{ name: "blue-800", value: "#1E40AF" },
		{ name: "blue-900", value: "#1E3A8A" },
	],
};

export const violet: Dictionary = {
	category: Category.Colors,
	name: "violet",
	mapName: "violet",
	description: "Dictionary for violet colors",
	properties: ["color", "background-color"],
	dictionary: [
		{ name: "violet-50", value: "#F5F3FF" },
		{ name: "violet-100", value: "#EDE9FE" },
		{ name: "violet-200", value: "#DDD6FE" },
		{ name: "violet-300", value: "#C4B5FD" },
		{ name: "violet-400", value: "#A78BFA" },
		{ name: "violet-500", value: "#8B5CF6" },
		{ name: "violet-600", value: "#7C3AED" },
		{ name: "violet-700", value: "#6D28D9" },
		{ name: "violet-800", value: "#5B21B6" },
		{ name: "violet-900", value: "#4C1D95" },
	],
};

export const baseColors = [black, white, slate, gray, red, orange, yellow, green, blue, violet];

export const baseTextColors = {
	category: Category.Colors,
	name: "Base Text Colors",
	mapName: "baseTextColors",
	description: "Dictionary for violet colors",
	properties: ["color"],
	dictionary: createPrefixedDictionary("text", baseColors),
};

export const baseBackgroundColors = {
	category: Category.Colors,
	name: "Base Background Colors",
	mapName: "baseBackgroundColors",
	description: "Dictionary for violet colors",
	properties: ["background-color"],
	dictionary: createPrefixedDictionary("bg", baseColors),
};
