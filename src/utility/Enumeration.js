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
  }),
  JPN_VOCAB_QUIZ_RANGE: Object.freeze({
    GREETING: Object.freeze({
      label: 'Greetings',
      value: 0
    }),
    LESSON1: Object.freeze({
      label: 'Lesson 1',
      value: 1
    }),
    LESSON2: Object.freeze({
      label: 'Lesson 2',
      value: 2
    }),
    LESSON3: Object.freeze({
      label: 'Lesson 3',
      value: 3
    }),
    LESSON4: Object.freeze({
      label: 'Lesson 4',
      value: 4
    }),
    LESSON5: Object.freeze({
      label: 'Lesson 5',
      value: 5
    }),
    LESSON6: Object.freeze({
      label: 'Lesson 6',
      value: 6
    }),
    LESSON7: Object.freeze({
      label: 'Lesson 7',
      value: 7
    }),
    LESSON8: Object.freeze({
      label: 'Lesson 8',
      value: 8
    }),
    LESSON9: Object.freeze({
      label: 'Lesson 9',
      value: 9
    }),
    LESSON10: Object.freeze({
      label: 'Lesson 10',
      value: 10
    }),
    LESSON11: Object.freeze({
      label: 'Lesson 11',
      value: 11
    }),
    LESSON12: Object.freeze({
      label: 'Lesson 12',
      value: 12
    }),
    LESSON13: Object.freeze({
      label: 'Lesson 13',
      value: 13
    }),
    LESSON14: Object.freeze({
      label: 'Lesson 14',
      value: 14
    }),
    LESSON15: Object.freeze({
      label: 'Lesson 15',
      value: 15
    }),
    LESSON16: Object.freeze({
      label: 'Lesson 16',
      value: 16
    }),
    LESSON17: Object.freeze({
      label: 'Lesson 17',
      value: 17
    }),
    LESSON18: Object.freeze({
      label: 'Lesson 18',
      value: 18
    }),
    LESSON19: Object.freeze({
      label: 'Lesson 19',
      value: 19
    }),
    LESSON20: Object.freeze({
      label: 'Lesson 20',
      value: 20
    }),
    LESSON21: Object.freeze({
      label: 'Lesson 21',
      value: 21
    }),
    LESSON22: Object.freeze({
      label: 'Lesson 22',
      value: 22
    }),
    LESSON23: Object.freeze({
      label: 'Lesson 23',
      value: 23
    })
  })
});

export default Enumeration;
