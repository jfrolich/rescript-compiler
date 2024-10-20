// Generated by ReScript, PLEASE EDIT WITH CARE
'use strict';

let Belt_Array = require("rescript/lib/js/Belt_Array.js");

function f(_n, _acc) {
  while (true) {
    let acc = _acc;
    let n = _n;
    if (n === 0) {
      return acc();
    }
    _acc = () => {
      console.log(n.toString());
      return acc();
    };
    _n = n - 1 | 0;
    continue;
  };
}

function test_closure() {
  let arr = Belt_Array.make(6, x => x);
  for (let i = 0; i <= 6; ++i) {
    arr[i] = param => i;
  }
  return arr;
}

f(10, () => {});

exports.f = f;
exports.test_closure = test_closure;
/*  Not a pure module */
