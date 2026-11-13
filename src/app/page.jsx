'use client';
import { useState } from 'react';

import notionPages from '@/models/pages.json';

// Components
import Button from '@/components/ui/Button/Button';
import AppSidebar from '@/components/AppSidebar/AppSidebar';
import AppHeader from '@/components/AppHeader/AppHeader';
import AppPage from '@/components/AppPage/AppPage';

// Defino la página inicial por defecto
const initialPageId = 'a5d2097c-3e81-46b4-bf52-8a17c963d40e';

export default function Home() {
  // Estados
  const [theme, setTheme] = useState('light');
  const [activePageId, setActivePageId] = useState(initialPageId);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [sidebarHover, setSidebarHover] = useState(false);

  // Obtengo el objeto completo de la página activa
  const activePage = notionPages.find((page) => page.id === activePageId);

  /** FUNCIONES */
  // Tema
  const toggleTheme = () => {
    const nextTheme = theme === 'light' ? 'dark' : 'light';
    document.documentElement.dataset.theme = nextTheme;
    setTheme(nextTheme);
  };

  // Sidebar colapsable
  const toggleSidebar = () => {
    // setSidebarOpen((sidebarOpen) => !sidebarOpen);

    setSidebarOpen((sidebarOpen) => {
      console.log('Sidebar abierto:', !sidebarOpen);
      return !sidebarOpen;
    });
  };

  // Sidebar flotante desde hover en appHeader
  const handleSidebarHover = () => {
    setSidebarHover(true);
  };

  const handleSidebarLeave = () => {
    setSidebarHover(false);
  };

  // HTML Element
  return (
    <main className="relative w-full min-w-0 h-screen overflow-y-hidden flex">
      <AppSidebar
        activePageId={activePageId}
        setActivePageId={setActivePageId}
        isSidebarOpen={sidebarOpen}
        toggleSidebar={toggleSidebar}
        isSidebarHovered={sidebarHover}
        onSidebarHover={handleSidebarHover}
        onSidebarLeave={handleSidebarLeave}
      />

      <div className="flex-1 min-w-0 flex flex-col overflow-hidden">
        <AppHeader
          activePage={activePage}
          isSidebarOpen={sidebarOpen}
          toggleSidebar={toggleSidebar}
          onSidebarHover={handleSidebarHover}
          onSidebarLeave={handleSidebarLeave}
          className="relative z-10 min-w-0 shrink-0"
        ></AppHeader>

        <AppPage activePage={activePage} className="w-full min-w-0 overflow-y-auto"></AppPage>
      </div>

      <Button
        onClick={toggleTheme}
        variant="theming"
        style="outlined"
        size="theming"
        aria-pressed={theme === 'dark'}
        className="absolute z-50 bottom-6 right-6 aspect-square p-2"
      >
        <span className="icon text-3xl">
          {/* {theme === 'light' ? '🌑' : '☀️'} */}
          {theme === 'light' ? 'dark_mode' : 'light_mode'}
        </span>
      </Button>
    </main>
  );
}
