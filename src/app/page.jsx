'use client';
import { useState } from 'react';

import notionPages from '@/models/pages.json';

// Components
import Button from '@/components/ui/Button/Button';
import AppSidebar from '@/components/AppSidebar/AppSidebar';
import AppHeader from '@/components/AppHeader/AppHeader';
import AppPage from '@/components/AppPage/AppPage';

// Defino la página inicial por defecto
const initialPageId = '7f3a9c21-6b84-4d52-ae17-92c5f08b3146';

export default function Home() {
  // Estados
  const [theme, setTheme] = useState('light');
  const [activePageId, setActivePageId] = useState(initialPageId);
  const [sidebarOpen, setSidebarOpen] = useState(true);

  // Obtengo el objeto completo de la página activa
  const activePage = notionPages.find((page) => page.id === activePageId);

  // Funciones
  const toggleTheme = () => {
    const nextTheme = theme === 'light' ? 'dark' : 'light';
    document.documentElement.dataset.theme = nextTheme;
    setTheme(nextTheme);
  };

  const toggleSidebar = () => {
    // setSidebarOpen((sidebarOpen) => !sidebarOpen);

    setSidebarOpen((sidebarOpen) => {
      console.log('Sidebar abierto:', !sidebarOpen);
      return !sidebarOpen;
    });
  };

  // HTML Element
  return (
    <main className="relative w-screen h-screen overflow-y-hidden flex">
      <AppSidebar
        activePageId={activePageId}
        setActivePageId={setActivePageId}
        isSidebarOpen={sidebarOpen}
        toggleSidebar={toggleSidebar}
      />

      <div className="w-full flex flex-col overflow-y-hidden">
        <AppHeader
          activePage={activePage}
          isSidebarOpen={sidebarOpen}
          toggleSidebar={toggleSidebar}
          className="relative z-50 shrink-0"
        ></AppHeader>
        <AppPage activePage={activePage} className="w-full overflow-y-auto"></AppPage>
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
