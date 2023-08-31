import { cva, type VariantProps } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';

const buttonVariants = cva(['font-bold border-2'], {
  variants: {
    intent: {
      primary: 'text-black border-blue-950 bg-white',
      secondary: ' text-red-700',
    },
    textSize: {
      xl: 'text-xl',
      md: 'text-md',
      sm: 'text-sm',
      xs: 'text-xs',
    },
  },
  defaultVariants: {
    intent: 'primary',
    textSize: 'xl',
  },
});

export interface ButtonVariants extends VariantProps<typeof buttonVariants> {}

export const button = (variants: ButtonVariants) => twMerge(buttonVariants(variants));
