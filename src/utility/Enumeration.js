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

const Enumeration = Object.freeze({
  JPN_VOCAB_QUIZ_SESSION_STATE: Object.freeze({
    INITIALIZATION: 0,
    ONGOING: 1,
    FINISH: 2
  }),
  JPN_VOCAB_QUIZ_FORMAT: Object.freeze({
    JPK_EN: Object.freeze({
      label: 'Japanese w/ Kanji → English',
      value: 0
    }),
    JPNK_EN: Object.freeze({
      label: 'Japanese w/o Kanji → English',
      value: 1
    }),
    EN_JPK: Object.freeze({
      label: 'English → Japanese w/ Kanji',
      value: 2
    }),
    EN_JPNK: Object.freeze({
      label: 'English → Japanese w/o Kanji',
      value: 3
    })
  })
});

export default Enumeration;
