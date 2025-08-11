
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				// Chart colors to support bg-chart-* classes
				chart: {
					'1': 'hsl(var(--chart-1))',
					'2': 'hsl(var(--chart-2))',
					'3': 'hsl(var(--chart-3))',
					'4': 'hsl(var(--chart-4))',
					'5': 'hsl(var(--chart-5))'
				},
				// Additional theme colors for the orange/yellow/green/blue scheme
				orange: {
					50: 'hsl(39 100% 97%)',
					100: 'hsl(39 100% 94%)',
					200: 'hsl(39 100% 87%)',
					300: 'hsl(39 100% 80%)',
					400: 'hsl(39 100% 70%)',
					500: 'hsl(39 100% 60%)',
					600: 'hsl(32 100% 50%)',
					700: 'hsl(26 100% 40%)',
					800: 'hsl(22 100% 30%)',
					900: 'hsl(18 100% 20%)',
					950: 'hsl(15 100% 10%)'
				},
				yellow: {
					50: 'hsl(55 100% 97%)',
					100: 'hsl(55 100% 94%)',
					200: 'hsl(55 100% 87%)',
					300: 'hsl(55 100% 80%)',
					400: 'hsl(55 100% 70%)',
					500: 'hsl(55 100% 60%)',
					600: 'hsl(48 100% 50%)',
					700: 'hsl(42 100% 40%)',
					800: 'hsl(36 100% 30%)',
					900: 'hsl(30 100% 20%)',
					950: 'hsl(24 100% 10%)'
				},
				emerald: {
					50: 'hsl(152 81% 96%)',
					100: 'hsl(149 80% 90%)',
					200: 'hsl(152 76% 80%)',
					300: 'hsl(156 72% 67%)',
					400: 'hsl(158 64% 52%)',
					500: 'hsl(160 84% 39%)',
					600: 'hsl(161 94% 30%)',
					700: 'hsl(163 94% 24%)',
					800: 'hsl(163 88% 20%)',
					900: 'hsl(164 86% 16%)',
					950: 'hsl(166 91% 9%)'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'fade-in': {
					'0%': {
						opacity: '0',
						transform: 'translateY(20px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'scale-in': {
					'0%': {
						opacity: '0',
						transform: 'scale(0.95)'
					},
					'100%': {
						opacity: '1',
						transform: 'scale(1)'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.6s ease-out',
				'scale-in': 'scale-in 0.4s ease-out'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
