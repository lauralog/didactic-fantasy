import { Inter } from 'next/font/google';
import '@/assets/scss/main.scss';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter-import',
});

export const metadata = {
  title: 'Clon de Notion con React',
  description: 'Ejercicio de Clon de Notion para la asignatura de Programación del esdMDI2627',
  authors: [{ name: 'Laura Rodriguez' }],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light" className={`${inter.variable} antialiased`}>
      <body>{children}</body>
    </html>
  );
}
