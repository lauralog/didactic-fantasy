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

// export default {notifications, sidebarTabs};
