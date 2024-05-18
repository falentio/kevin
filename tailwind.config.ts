import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";
export default {
	content: ["./src/**/*.{html,js,svelte,ts}"],

	theme: {
		extend: {
			fontFamily: {
				sans: ["'Nunito Variable'", ...fontFamily.sans],
				mono: ["'Iosevka'", ...fontFamily.mono],
			},
		},
	},

	plugins: [],
} satisfies Config;
