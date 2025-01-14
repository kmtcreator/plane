import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || "";

export const SPACE_BASE_PATH = process.env.NEXT_PUBLIC_SPACE_BASE_PATH || "";

export const WEB_BASE_URL = process.env.NEXT_PUBLIC_WEB_BASE_URL || "";

export const ASSET_PREFIX = SPACE_BASE_PATH;

export const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));
