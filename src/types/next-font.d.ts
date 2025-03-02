declare module 'next/font/google' {
  export interface FontOptions {
    subsets?: string[];
    display?: string;
  }

  export function Inter(options: FontOptions): {
    className: string;
    style: { fontFamily: string };
  };
} 