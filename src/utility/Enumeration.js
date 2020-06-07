export const QuizEnumeration = Object.freeze({
  State: Object.freeze({
    INITIALIZATION: 'Initialization',
    ONGOING: 'Ongoing',
    FINISH: 'Finish'
  }),
  Mode: Object.freeze({
    QUICK: 'Quick',
    SURVIVAL: 'Survival'
  }),
  Format: Object.freeze({
    JPK_ZH: 'Japanese w/ Kanji → Chinese',
    JPNK_ZH: 'Japanese w/o Kanji → Chinese',
    ZH_JPK: 'Chinese → Japanese w/ Kanji',
    ZH_JPNK: 'Chinese → Japanese w/o Kanji',
    JPK_EN: 'Japanese w/ Kanji → English',
    JPNK_EN: 'Japanese w/o Kanji → English',
    EN_JPK: 'English → Japanese w/ Kanji',
    EN_JPNK: 'English → Japanese w/o Kanji'
  })
});
