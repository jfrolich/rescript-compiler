// Generated by ReScript, PLEASE EDIT WITH CARE
'use strict';

let Primitive_array = require("rescript/lib/js/Primitive_array.js");
let Primitive_exceptions = require("rescript/lib/js/Primitive_exceptions.js");

let x = [
  1,
  2
];

let y;

try {
  y = Primitive_array.get(x, 3);
} catch (raw_msg) {
  let msg = Primitive_exceptions.internalToException(raw_msg);
  if (msg.RE_EXN_ID === "Invalid_argument") {
    console.log(msg._1);
    y = 0;
  } else {
    throw msg;
  }
}

let $$Array;

exports.$$Array = $$Array;
exports.x = x;
exports.y = y;
/* y Not a pure module */
