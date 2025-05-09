import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                // Purdue University colors
                'purdue-gold': '#CEB888',
                'purdue-black': '#000000',
                'purdue-secondary': {
                    'gray1': '#98999B',
                    'gray2': '#DCDCDD',
                    'gray3': '#EFEFF0',
                },
                // Additional colors
                'background': 'var(--background)',
                'foreground': 'var(--foreground)',
            },
            fontFamily: {
                sans: ['var(--font-geist-sans)'],
                mono: ['var(--font-geist-mono)'],
            },
        },
    },
    plugins: [],
};

export default config; 