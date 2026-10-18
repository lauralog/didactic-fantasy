import {
  Home as HomeIcon,
  Chat as ChatIcon,
  CalendarToday as CalendarTodayIcon,
} from '@material-symbols-svg/react';

export const notifications = [
  { item: 'notification 1' },
  { item: 'notification 2' },
  { item: 'notification 3' },
  { item: 'notification 4' },
];

export const sidebarTabs = [
  {
    // home: {
    label: 'home',
    icon: 'home',
    iconSVG: HomeIcon,
    // },
  },
  {
    // chat: {
    label: 'chat',
    icon: 'chat',
    iconSVG: ChatIcon,
    // },
  },
  {
    // meetings: {
    label: 'meetings',
    icon: 'calendar_today',
    iconSVG: CalendarTodayIcon,
    // },
  },
];

export const user = {
  username: 'nombre apellido1 apellido2',
  mail: 'user.profile@mail.com',
  avatar:
    'https://evasanmartin.com/wp-content/uploads/2022/05/Gatos-masajes-Eva-San-Mart%C3%ADn-Comportamiento-Felino-e1651773306246.jpg',
  teamspaces: '',
};

export const mockedBreadcrumbs = [
  {
    id: '7f3a9c21-6b84-4d52-ae17-92c5f08b3146',
    title: 'Mi espacio personal',
    icon: 'person_play',
    imgBanner: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72',
    creationDate: '2026-01-10T09:30:00Z',
    isShared: false,
    isFav: true,
    lastModified: '12/10/2026',
    content: [
      'a8f12c41-7b3e-4d92-9c61-2f8a6e0b1d53',
      'b7e23d52-8c4f-4ea3-ad72-3a9b7f1c2e64',
      'c6d34e63-9d5a-4fb4-be83-4bac802d3f75',
      'd5e45f74-ae6b-40c5-cf94-5cbd913e4086',
      'e4f56085-bf7c-41d6-d0a5-6dcea24f5197',
    ],
    parentId: '2d8e4f70-a193-46bc-9f25-7e61d3a80452',
  },
  {
    id: '2d8e4f70-a193-46bc-9f25-7e61d3a80452',
    title: 'Planificación semanal título de página muy largo',
    icon: 'calendar_month',
    imgBanner: 'https://images.unsplash.com/photo-1506784983877-45594efa4cbe',
    creationDate: '2026-02-15T11:45:00Z',
    isShared: true,
    isFav: true,
    lastModified: '11/10/2026',
    content: [
      'f3a67196-c08d-42e7-e1b6-7edfb35062a8',
      'a2b782a7-d19e-43f8-f2c7-8fe0c46173b9',
      'b1c893b8-e2af-4409-a3d8-9f01d57284ca',
      'c0d9a4c9-f3b0-451a-b4e9-a012e68395db',
      'd9eab5da-04c1-462b-c5fa-b123f794a6ec',
    ],
    parentId: 'b6c1e935-2f47-48ad-83d0-5a9e71c264fb',
  },
  {
    id: 'b6c1e935-2f47-48ad-83d0-5a9e71c264fb',
    title: 'Ideas de proyectos',
    icon: 'emoji_objects',
    imgBanner: 'https://images.unsplash.com/photo-1455390582262-044cdead277a',
    creationDate: '2026-03-03T14:20:00Z',
    isShared: false,
    isFav: false,
    lastModified: '08/10/2026',
    content: [
      'e8fbc6eb-15d2-473c-d60b-c23408a5b7fd',
      'f7acd7fc-26e3-484d-e71c-d34519b6c80e',
      'a6bde80d-37f4-495e-f82d-e4562ac7d91f',
      'b5cef91e-4805-4a6f-a93e-f5673bd8ea20',
      'c4df0a2f-5916-4b70-b04f-06784ce9fb31',
    ],
    parentId: '',
  },
];

// export default {notifications, sidebarTabs};
