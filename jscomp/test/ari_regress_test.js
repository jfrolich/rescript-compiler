// Generated by ReScript, PLEASE EDIT WITH CARE
'use strict';

let Mt = require("./mt.js");

let g = 7;

let h = {
  contents: 0
};

function g1(x, y) {
  let u = x + y | 0;
  h.contents = h.contents + 1 | 0;
  return function (xx, yy) {
    return (xx + yy | 0) + u | 0;
  };
}

let u = 8;

let x = (function (z) {
  return u + z | 0;
})(6);

function v(yy) {
  return g1(3, 4)(6, yy);
}

let suites_0 = [
  "curry",
  (function (param) {
    return {
      TAG: "Eq",
      _0: g,
      _1: 7
    };
  })
];

let suites_1 = {
  hd: [
    "curry2",
    (function (param) {
      return {
        TAG: "Eq",
        _0: 14,
        _1: (v(1), v(1))
      };
    })
  ],
  tl: {
    hd: [
      "curry3",
      (function (param) {
        return {
          TAG: "Eq",
          _0: x,
          _1: 14
        };
      })
    ],
    tl: {
      hd: [
        "File \"ari_regress_test.res\", line 35, characters 5-12",
        (function (param) {
          return {
            TAG: "Eq",
            _0: h.contents,
            _1: 2
          };
        })
      ],
      tl: /* [] */0
    }
  }
};

let suites = {
  hd: suites_0,
  tl: suites_1
};

Mt.from_pair_suites("Ari_regress_test", suites);

/* x Not a pure module */
