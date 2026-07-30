export const images = {
  heroPerson: "/heroimg.jpg",
  featuredStory: "/forest.jpg",
  mountains: "/mountains.jpg",
  village: "/village.jpg",
  river: "/river.jpg",
  bread: "/bread.jpg",
  festival: "/festival.jpg",
  craftsman: "/craftsman.jpg",
  museum: "/meseum.jpg",
  church: "/church.jpg",
  woman: "/woman.jpg",
} as const;

export const featuredStories = {
  primary: {
    category: "Човешки истории",
    title: "Овчарят, който познава всяко било наизуст",
    author: "Инна Герова",
    readTime: "14 мин",
    image: images.mountains,
    location: "Белоградчик",
  },
  secondary: [
    {
      title: "Орехова реколта по изгрев",
      location: "Чипровци",
      image: images.village,
      readTime: "8 мин",
    },
    {
      title: "Ръцете на грънчаря през зимата",
      location: "Видин",
      image: images.craftsman,
      readTime: "6 мин",
    },
    {
      title: "Утрото край Дунава",
      location: "Видин",
      image: images.river,
      readTime: "10 мин",
    },
  ],
} as const;

export const mapPins = [
  {
    id: "belogradchik",
    name: "Белоградчик",
    x: 62,
    y: 48,
    preview: {
      title: "Скалите, които пазят спомени",
      excerpt: "Легенди, издълбани в камъка през вековете.",
      image: images.mountains,
    },
  },
  {
    id: "vidin",
    name: "Видин",
    x: 18,
    y: 38,
    preview: {
      title: "Там, където Дунавът завива",
      excerpt: "Животът край реката в северозападния край на България.",
      image: images.river,
    },
  },
  {
    id: "vratsa",
    name: "Враца",
    x: 58,
    y: 62,
    preview: {
      title: "Подножието на Балкана",
      excerpt: "Скали, пещери и духът на планината.",
      image: images.mountains,
    },
  },
  {
    id: "montana",
    name: "Монтана",
    x: 42,
    y: 42,
    preview: {
      title: "Полета между епохите",
      excerpt: "Земя, където традицията живее и днес.",
      image: images.village,
    },
  },
  {
    id: "chiprovtsi",
    name: "Чипровци",
    x: 35,
    y: 52,
    preview: {
      title: "Нишките на паметта",
      excerpt: "Чипровските килими като живо културно наследство.",
      image: images.craftsman,
    },
  },
  {
    id: "varshets",
    name: "Вършец",
    x: 48,
    y: 55,
    preview: {
      title: "Лечебните води",
      excerpt: "Курортен град, сгушен сред зелените склонове.",
      image: images.village,
    },
  },
] as const;

export const humanStories = [
  {
    title: "Ана-Мария и ореховите пътища",
    author: "Инна Герова",
    image: images.woman,
  },
  {
    title: "Последният камбанар",
    author: "Петър Илиев",
    image: images.church,
  },
  {
    title: "Хляб преди изгрев",
    author: "Мария Стоянова",
    image: images.bread,
  },
  {
    title: "Фестивална вечер в Чипровци",
    author: "Елена Димитрова",
    image: images.festival,
  },
  {
    title: "Пазителите на музея",
    author: "Николай Христов",
    image: images.museum,
  },
  {
    title: "Пазителят на Дунав",
    author: "Георги Петров",
    image: images.river,
  },
] as const;

export const places = [
  {
    name: "Белоградчик",
    image: images.mountains,
    span: "tall" as const,
  },
  {
    name: "Магура",
    image: images.mountains,
    span: "wide" as const,
  },
  {
    name: "Вършец",
    image: images.village,
    span: "normal" as const,
  },
  {
    name: "Дунав",
    image: images.river,
    span: "tall" as const,
  },
] as const;

export const traditions = [
  {
    title: "Традиционен хляб",
    image: images.bread,
  },
  {
    title: "Народни носии",
    image: images.festival,
  },
  {
    title: "Фолклорни празници",
    image: images.festival,
  },
  {
    title: "Орехова реколта",
    image: images.village,
  },
  {
    title: "Грънчарство",
    image: images.craftsman,
  },
] as const;
