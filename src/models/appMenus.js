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

// export default {notifications, sidebarTabs};
