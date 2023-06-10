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
import { Calendar } from '../copmonents/calendar/calendar';

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

export const CALL_ANALYTICS = [
  {
    id: 0,
    text: 'Новые звонки ',
    dedicatedText: '20 из 30 шт',
    color: '#28A879',
  },
  {
    id: 1,
    text: 'Качество разговоров ',
    dedicatedText: '40%',
    color: '#FFD500',
  },
  {
    id: 2,
    text: 'Конверсия в заказ ',
    dedicatedText: '67%',
    color: '#EA1A4F',
  },
];

export const FILTERS = [
  {
    id: 0,
    menu: [
      {
        label: 'Все типы',
        value: 0,
      },
    ],
  },
  {
    id: 1,
    menu: [
      {
        label: 'Все сотрудники',
        value: 0,
      },
    ],
  },
  {
    id: 2,
    menu: [
      {
        label: 'Все звонки',
        value: 2,
      },
      {
        label: 'Входящие',
        value: 0,
      },
      {
        label: 'Исходящие',
        value: 1,
      },
    ],
  },
  {
    id: 3,
    menu: [
      {
        label: 'Все источники',
        value: 0,
      },
    ],
  },
  {
    id: 4,
    menu: [
      {
        label: 'Все оценки',
        value: 0,
      },
    ],
  },
  {
    id: 5,
    menu: [
      {
        label: 'Все ошибки',
        value: 0,
      },
    ],
  },
];

export const TABLE_HEADERS = [
  {
    id: 0,
    title: 'Тип',
    width: '49px',
  },
  {
    id: 1,
    title: 'Время',
    width: '87px',
  },
  {
    id: 2,
    title: 'Сотрудник',
    width: '125px',
  },
  {
    id: 3,
    title: 'Звонок',
    width: '324px',
  },
  {
    id: 4,
    title: 'Источник',
    width: '212px',
  },
  {
    id: 5,
    title: 'Оценка',
    width: '212px',
    p2: '150px',
  },
  {
    id: 6,
    title: 'Длительность',
    width: '330px',
  },
];

export const TABLE_DATA = [
  {
    label: '3 дня',
    value: 3,
  },
  {
    label: 'Неделя',
    value: 7,
  },
  {
    label: 'Месяц',
    value: 30,
  },
  {
    label: 'Год',
    value: 365,
  },
  {
    label: <Calendar />,
    value: 0,
  }
];
