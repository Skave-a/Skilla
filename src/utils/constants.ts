import documents from '@/assets/icons_sidebar/documents-24px.svg';
import briefcase from '@/assets/icons_sidebar/briefcase-outline.svg';
import chart from '@/assets/icons_sidebar/chart-timeline-variant.svg';
import library from '@/assets/icons_sidebar/local_library_black_24dp.svg';
import mail from '@/assets/icons_sidebar/mail_outline-24px.svg';
import orders from '@/assets/icons_sidebar/orders-24px.svg';
import people from '@/assets/icons_sidebar/people-24px.svg';
import perm from '@/assets/icons_sidebar/perm_identity_black_24dp.svg';
import settings from '@/assets/icons_sidebar/settings-24px.svg';
import calls from '@/assets/icons_sidebar/calls-24px.svg';

import plus from '@/assets/bntIcons/plus.svg';
import add from '@/assets/bntIcons/pay.svg';

export const MENU = [
  {
    id: 0,
    name: 'Итоги',
    icon: chart,
    link: '/chart',
  },
  {
    id: 1,
    name: 'Заказы',
    icon: orders,
    link: '/orders',
  },

  {
    id: 2,
    name: 'Сообщения',
    icon: mail,
    link: '/mail',
  },
  {
    id: 3,
    name: 'Звонки',
    icon: calls,
    link: '/',
  },
  {
    id: 4,
    name: 'Контрагенты',
    icon: people,
    link: '/people',
  },
  {
    id: 5,
    name: 'Документы',
    icon: documents,
    link: '/documents',
  },
  {
    id: 6,
    name: 'Исполнители',
    icon: perm,
    link: '/perm',
  },
  {
    id: 7,
    name: 'Отчеты',
    icon: briefcase,
    link: '/briefcase',
  },
  {
    id: 8,
    name: 'База знаний',
    icon: library,
    link: '/library',
  },
  {
    id: 9,
    name: 'Настройки',
    icon: settings,
    link: '/settings',
  },
];

export const MENU_BNTS = [
  {
    id: 0,
    text: 'Добавить заказ',
    icon: plus,
    link: '/',
  },
  {
    id: 1,
    text: 'Оплата',
    icon: add,
    link: '/',
  },
];
