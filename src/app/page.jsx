'use client';
import { useState } from 'react';

// Components
import Button from '@/components/ui/Button/Button';
import AppSidebar from '@/components/AppSidebar/AppSidebar';
import AppHeader from '@/components/AppHeader/AppHeader';
import AppPage from '@/components/AppPage/AppPage';

export default function Home() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    const nextTheme = theme === 'light' ? 'dark' : 'light';
    document.documentElement.dataset.theme = nextTheme;
    setTheme(nextTheme);
  };

  // HTML Element
  return (
    <main className="relative w-full h-[100dvh] overflow-y-hidden flex">
      <AppSidebar className="" />

      <div className="w-full flex flex-col overflow-y-hidden">
        <AppHeader className="relative z-50 shrink-0"></AppHeader>
        <AppPage className="w-full overflow-y-auto"></AppPage>
      </div>

      <Button
        onClick={toggleTheme}
        aria-pressed={theme === 'dark'}
        className="absolute z-50 bottom-8 right-8 bg-foreg/10"
      >
        {theme === 'light' ? '🌑' : '☀️'}
      </Button>
    </main>
  );
}
