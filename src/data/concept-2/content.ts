import { images } from '@/data/concept-1/content'

export { images }

export interface StoryCard {
  id: string
  title: string
  author: string
  category: 'Традиция' | 'Село' | 'Хора' | 'История'
  readTime: string
  image: string
  location: string
  summary: string
  badgeColor: {
    bg: string
    text: string
    dot: string
    border: string
  }
}

export const heroCollageItems = [
  {
    type: 'portrait',
    title: 'Ана-Мария Герасимова',
    subtitle: 'Пазителка на ореховите градини',
    location: 'с. Върбово',
    image: images.woman,
    span: 'col-span-1 row-span-2 md:col-span-1 md:row-span-2',
    tag: 'Портрет',
  },
  {
    type: 'mountain',
    title: 'Белоградчишките скали',
    subtitle: 'Вековните каменисти гиганти',
    location: 'Белоградчик',
    image: images.mountains,
    span: 'col-span-1 row-span-1 md:col-span-1 md:row-span-1',
    tag: 'Природа',
  },
  {
    type: 'tradition',
    title: 'Тъкане на Чипровски килим',
    subtitle: 'ЮНЕСКО нематериално наследство',
    location: 'Чипровци',
    image: images.festival,
    span: 'col-span-1 row-span-1 md:col-span-1 md:row-span-1',
    tag: 'Занаят',
  },
  {
    type: 'village',
    title: 'Утрото над села и поля',
    subtitle: 'Животът в тихото подножие',
    location: 'Врачански Балкан',
    image: images.village,
    span: 'col-span-2 row-span-1 md:col-span-2 md:row-span-1',
    tag: 'Селски живот',
  },
] as const

export const categoryStyles = {
  Традиция: {
    bg: 'bg-[#FFF5E8]',
    text: 'text-[#B45309]',
    dot: 'bg-[#F59E0B]',
    border: 'border-[#FDE68A]',
  },
  Село: {
    bg: 'bg-[#EAFBF4]',
    text: 'text-[#047857]',
    dot: 'bg-[#10B981]',
    border: 'border-[#A7F3D0]',
  },
  Хора: {
    bg: 'bg-[#EEF3FF]',
    text: 'text-[#1D4ED8]',
    dot: 'bg-[#3B82F6]',
    border: 'border-[#BFDBFE]',
  },
  История: {
    bg: 'bg-[#F8EDFF]',
    text: 'text-[#7E22CE]',
    dot: 'bg-[#A855F7]',
    border: 'border-[#E9D5FF]',
  },
} as const

export const humanStories: StoryCard[] = [
  {
    id: 'story-1',
    title: 'Овчарят, който познава всяко било и птича песен',
    author: 'Инна Герова',
    category: 'Хора',
    readTime: '14 мин',
    image: images.mountains,
    location: 'Белоградчик',
    summary: 'Дядо Стоян прекарва седем десетилетия по високите пасища на Балкана, съхранявайки истории за стари предания.',
    badgeColor: categoryStyles.Хора,
  },
  {
    id: 'story-2',
    title: 'Орехова реколта по първи лъчи на изгрева',
    author: 'Петър Илиев',
    category: 'Село',
    readTime: '8 мин',
    image: images.village,
    location: 'Чипровци',
    summary: 'Всяка есен семействата от с. Върбово се събират в вековните градини за родовата традиция.',
    badgeColor: categoryStyles.Село,
  },
  {
    id: 'story-3',
    title: 'Ръцете на грънчаря и тайните на шарката',
    author: 'Мария Стоянова',
    category: 'Традиция',
    readTime: '6 мин',
    image: images.craftsman,
    location: 'Видин',
    summary: 'Майстор Костадин оформя червената глина по мотиви, предавани от баба на внук в продължение на 120 години.',
    badgeColor: categoryStyles.Традиция,
  },
  {
    id: 'story-4',
    title: 'Утрото край Дунава: Легенди за стария сал',
    author: 'Елена Димитрова',
    category: 'История',
    readTime: '10 мин',
    image: images.river,
    location: 'Видин',
    summary: 'Мъглата над реката крие разкази за речни капитани, рибарски мрежи и изгубени пристанища.',
    badgeColor: categoryStyles.История,
  },
  {
    id: 'story-5',
    title: 'Хлябът, замесен с пелин и планинска изворна вода',
    author: 'Николай Христов',
    category: 'Традиция',
    readTime: '9 мин',
    image: images.bread,
    location: 'Вършец',
    summary: 'Баба Венера пече квасен хляб в автентична подница, спазвайки рецепта от пределите на 19 век.',
    badgeColor: categoryStyles.Традиция,
  },
  {
    id: 'story-6',
    title: 'Последната песен на старото читалище',
    author: 'Георги Петров',
    category: 'Хора',
    readTime: '11 мин',
    image: images.church,
    location: 'Монтана',
    summary: 'Местният хор "Северозападни извори" съживява забравени дунавски мотиви.',
    badgeColor: categoryStyles.Хора,
  },
]

export const ourPlaces = [
  {
    id: 'belogradchik',
    name: 'Белоградчишки скали',
    sub: 'Скала и легенди',
    tag: 'Световно наследство',
    image: images.mountains,
    icon: 'mountain',
    desc: 'Червеникавите скални фигури, формирани преди повече от 200 милиона години.',
  },
  {
    id: 'magura',
    name: 'Пещера Магура',
    sub: 'Праисторическо изкуство',
    tag: 'Пещерни рисунки',
    image: images.museum,
    icon: 'sparkles',
    desc: 'Единствени по рода си скални рисунки с прилепно гуано от бронзовата епоха.',
  },
  {
    id: 'varshets',
    name: 'Вършец & Спанчевци',
    sub: 'Минерални извори',
    tag: 'Лечебен въздух',
    image: images.village,
    icon: 'trees',
    desc: 'Най-старият минерален балнеокурорт с вековен царски парк и чист въздух.',
  },
  {
    id: 'dunav',
    name: 'Дунавски бряг & Баба Вида',
    sub: 'Вечната река',
    tag: 'Историческа крепост',
    image: images.river,
    icon: 'waves',
    desc: 'Единствената изцяло запазена средновековна крепост в България.',
  },
] as const

export const traditionsList = [
  {
    id: 'bread',
    title: 'Традиционен квасен хляб',
    icon: 'bread',
    image: images.bread,
    desc: 'Месене с дива мая, печене в подница и традиция за споделяне на първия залък.',
    accent: '#FBDA61',
  },
  {
    id: 'carpet',
    title: 'Чипровско килимарство',
    icon: 'carpet',
    image: images.festival,
    desc: 'Гладкотъкани килими с двулицеви орнаменти "Канатица" и "Свещи", ЮНЕСКО признати.',
    accent: '#FF5ACD',
  },
  {
    id: 'pottery',
    title: 'Северозападна грънчарска школа',
    icon: 'pottery',
    image: images.craftsman,
    desc: 'Изрисувани с характерни зелени и кафяви растителни багри глинени съдове.',
    accent: '#18BEF2',
  },
  {
    id: 'harvest',
    title: 'Орехова и лозова реколта',
    icon: 'wheat',
    image: images.village,
    desc: 'Сезонни обреди по прибиране на плодовете на земята с песни и общ трапезен празник.',
    accent: '#8AF4C2',
  },
] as const

export const culturalEvents = [
  {
    id: 'event-1',
    day: '12-14',
    month: 'ЮНИ',
    title: 'Фестивал на Чипровския килим',
    location: 'Площад "България", гр. Чипровци',
    tag: 'Фестивал',
    image: images.festival,
    desc: 'Демонстрации на живо тъкане, багрене на вълна с естествени билки и изложба на антични килими.',
  },
  {
    id: 'event-2',
    day: '25-27',
    month: 'ЮЛИ',
    title: 'Фолклорен събор "Врачански Балкан"',
    location: 'Местност Пършевица, гр. Враца',
    tag: 'Фолклор',
    image: images.mountains,
    desc: 'Над 80 танцови и певчески състава от целия Северозапад се събират на открито под скалите.',
  },
  {
    id: 'event-3',
    day: '18-20',
    month: 'АВГУСТ',
    title: 'Празник на дунавските занаяти и кулинария',
    location: 'Крайдунавски парк, гр. Видин',
    tag: 'Кулинария',
    image: images.bread,
    desc: 'Традиционна рибена чорба, домашни пити, дегустация на регионални вина и занаятчийски базар.',
  },
] as const

export const galleryPhotos = [
  {
    id: 'g-1',
    title: 'Скалите в залез',
    category: 'Природа',
    image: images.mountains,
    aspect: 'aspect-[3/4]',
    location: 'Белоградчик',
  },
  {
    id: 'g-2',
    title: 'Чипровски килимарки',
    category: 'Занаяти',
    image: images.festival,
    aspect: 'aspect-[4/3]',
    location: 'Чипровци',
  },
  {
    id: 'g-3',
    title: 'Утро над Дунава',
    category: 'Природа',
    image: images.river,
    aspect: 'aspect-square',
    location: 'Видин',
  },
  {
    id: 'g-4',
    title: 'Грънчарско ателие',
    category: 'Занаяти',
    image: images.craftsman,
    aspect: 'aspect-[3/4]',
    location: 'Видин',
  },
  {
    id: 'g-5',
    title: 'Старата порта',
    category: 'Архитектура',
    image: images.village,
    aspect: 'aspect-[4/3]',
    location: 'с. Върбово',
  },
  {
    id: 'g-6',
    title: 'Баба Вида през зимата',
    category: 'Архитектура',
    image: images.museum,
    aspect: 'aspect-square',
    location: 'Видин',
  },
  {
    id: 'g-7',
    title: 'Традиционен квасен хляб',
    category: 'Хора',
    image: images.bread,
    aspect: 'aspect-[4/3]',
    location: 'Вършец',
  },
  {
    id: 'g-8',
    title: 'Усмивката на баба Мария',
    category: 'Хора',
    image: images.woman,
    aspect: 'aspect-[3/4]',
    location: 'Монтана',
  },
] as const
