// Generated by ReScript, PLEASE EDIT WITH CARE
'use strict';

let Mt = require("./mt.js");
let Belt_List = require("rescript/lib/js/Belt_List.js");

let suites = {
  contents: /* [] */0
};

let test_id = {
  contents: 0
};

function eq(loc, x, y) {
  test_id.contents = test_id.contents + 1 | 0;
  suites.contents = {
    hd: [
      loc + (" id " + test_id.contents.toString()),
      () => ({
        TAG: "Eq",
        _0: x,
        _1: y
      })
    ],
    tl: suites.contents
  };
}

console.log("你好，\n世界");

console.log("\x3f\u003f\b\t\n\v\f\r\0\"'");

function convert(s) {
  return Belt_List.fromArray(Array.from(s, x => {
    let x$1 = x.codePointAt(0);
    if (x$1 !== undefined) {
      return x$1;
    }
    throw {
      RE_EXN_ID: "Assert_failure",
      _1: [
        "chn_test.res",
        24,
        16
      ],
      Error: new Error()
    };
  }));
}

eq("File \"chn_test.res\", line 32, characters 4-11", "你好，\n世界", "你好，\n世界");

eq("File \"chn_test.res\", line 38, characters 4-11", convert("汉字是世界上最美丽的character"), {
  hd: 27721,
  tl: {
    hd: 23383,
    tl: {
      hd: 26159,
      tl: {
        hd: 19990,
        tl: {
          hd: 30028,
          tl: {
            hd: 19978,
            tl: {
              hd: 26368,
              tl: {
                hd: 32654,
                tl: {
                  hd: 20029,
                  tl: {
                    hd: 30340,
                    tl: {
                      hd: 99,
                      tl: {
                        hd: 104,
                        tl: {
                          hd: 97,
                          tl: {
                            hd: 114,
                            tl: {
                              hd: 97,
                              tl: {
                                hd: 99,
                                tl: {
                                  hd: 116,
                                  tl: {
                                    hd: 101,
                                    tl: {
                                      hd: 114,
                                      tl: /* [] */0
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
});

eq("File \"chn_test.res\", line 62, characters 5-12", convert("\x3f\x3fa"), {
  hd: 63,
  tl: {
    hd: 63,
    tl: {
      hd: 97,
      tl: /* [] */0
    }
  }
});

eq("File \"chn_test.res\", line 63, characters 5-12", convert("??a"), {
  hd: 63,
  tl: {
    hd: 63,
    tl: {
      hd: 97,
      tl: /* [] */0
    }
  }
});

eq("File \"chn_test.res\", line 64, characters 5-12", convert("\u003f\x3fa"), {
  hd: 63,
  tl: {
    hd: 63,
    tl: {
      hd: 97,
      tl: /* [] */0
    }
  }
});

eq("File \"chn_test.res\", line 65, characters 5-12", convert("🚀🚀a"), {
  hd: 128640,
  tl: {
    hd: 128640,
    tl: {
      hd: 97,
      tl: /* [] */0
    }
  }
});

eq("File \"chn_test.res\", line 66, characters 5-12", convert("\uD83D\uDE80a"), {
  hd: 128640,
  tl: {
    hd: 97,
    tl: /* [] */0
  }
});

eq("File \"chn_test.res\", line 67, characters 5-12", convert("\uD83D\uDE80\x3f"), {
  hd: 128640,
  tl: {
    hd: 63,
    tl: /* [] */0
  }
});

eq("File \"chn_test.res\", line 71, characters 5-12", convert("\uD83D\uDE80\uD83D\uDE80a"), {
  hd: 128640,
  tl: {
    hd: 128640,
    tl: {
      hd: 97,
      tl: /* [] */0
    }
  }
});

eq("No inline string length", "\uD83D\uDE80\0".length, 3);

eq("File \"chn_test.res\", line 78, characters 4-11", "\uD83D\uDE80\0".codePointAt(0), 128640);

eq("File \"chn_test.res\", line 83, characters 5-12", "🚀".codePointAt(0), 128640);

eq("File \"chn_test.res\", line 88, characters 5-12", convert("\uD83D\uDE80"), {
  hd: 128640,
  tl: /* [] */0
});

eq("File \"chn_test.res\", line 89, characters 5-12", convert("\uD83D\uDE80\uD83D\uDE80"), {
  hd: 128640,
  tl: {
    hd: 128640,
    tl: /* [] */0
  }
});

eq("File \"chn_test.res\", line 90, characters 5-12", convert(" \b\t\n\v\f\ra"), {
  hd: 32,
  tl: {
    hd: 8,
    tl: {
      hd: 9,
      tl: {
        hd: 10,
        tl: {
          hd: 11,
          tl: {
            hd: 12,
            tl: {
              hd: 13,
              tl: {
                hd: 97,
                tl: /* [] */0
              }
            }
          }
        }
      }
    }
  }
});

eq("File \"chn_test.res\", line 96, characters 5-12", convert(" \b\t\n\v\f\r\"'\\\0a"), {
  hd: 32,
  tl: {
    hd: 8,
    tl: {
      hd: 9,
      tl: {
        hd: 10,
        tl: {
          hd: 11,
          tl: {
            hd: 12,
            tl: {
              hd: 13,
              tl: {
                hd: 34,
                tl: {
                  hd: 39,
                  tl: {
                    hd: 92,
                    tl: {
                      hd: 0,
                      tl: {
                        hd: 97,
                        tl: /* [] */0
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
});

Mt.from_pair_suites("Chn_test", suites.contents);

let $$String;

exports.$$String = $$String;
exports.suites = suites;
exports.test_id = test_id;
exports.eq = eq;
exports.convert = convert;
/*  Not a pure module */
