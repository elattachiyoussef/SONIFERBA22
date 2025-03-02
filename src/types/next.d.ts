declare module 'next/font/google' {
  interface FontOptions {
    subsets?: string[];
    display?: string;
    weight?: string | number | (string | number)[];
  }

  export function Inter(options: FontOptions): {
    className: string;
    style: { fontFamily: string };
  };
} 