export interface IContent {
  translation: string
  transcript?: string
  picture?: string
}

export const words: Record<string, IContent> = {
  it: {
    translation: 'оно, это',
    transcript: '/ɪt/',
  },
  you: {
    translation: 'ты, вы',
    transcript: '/juː/',
  },
  he: {
    translation: 'он',
    transcript: '/hiː/',
  },
  she: {
    translation: 'она',
    transcript: '/ʃiː/',
  },
  we: {
    translation: 'мы',
    transcript: '/wiː/',
  },
  they: {
    translation: 'они',
    transcript: '/ðeɪ/',
  },
  this: {
    translation: 'этот',
    transcript: '/ðɪs/',
  },
  that: {
    translation: 'тот',
    transcript: '/ðæt/',
  },
  is: {
    translation: 'есть (форма глагола be)',
    transcript: '/ɪz/',
  },
  are: {
    translation: 'есть (форма глагола be)',
    transcript: '/ɑːr/',
  },
  water: {
    translation: 'вода',
    transcript: '/ˈwɔːtər/',
  },
  food: {
    translation: 'еда',
    transcript: '/fuːd/',
  },
  house: {
    translation: 'дом',
    transcript: '/haʊs/',
  },
  city: {
    translation: 'город',
    transcript: '/ˈsɪti/',
  },
  car: {
    translation: 'машина',
    transcript: '/kɑːr/',
  },
  work: {
    translation: 'работа',
    transcript: '/wɜːrk/',
  },
  school: {
    translation: 'школа',
    transcript: '/skuːl/',
  },
  friend: {
    translation: 'друг',
    transcript: '/frend/',
  },
  family: {
    translation: 'семья',
    transcript: '/ˈfæməli/',
  },
  money: {
    translation: 'деньги',
    transcript: '/ˈmʌni/',
  },
}
