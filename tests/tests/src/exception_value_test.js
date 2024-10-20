// Generated by ReScript, PLEASE EDIT WITH CARE
'use strict';

let Exn = require("rescript/lib/js/Exn.js");
let Primitive_exceptions = require("rescript/lib/js/Primitive_exceptions.js");

function f() {
  throw {
    RE_EXN_ID: "Not_found",
    Error: new Error()
  };
}

function assert_f(x) {
  if (x <= 3) {
    throw {
      RE_EXN_ID: "Assert_failure",
      _1: [
        "exception_value_test.res",
        4,
        11
      ],
      Error: new Error()
    };
  }
  return 3;
}

function hh() {
  throw {
    RE_EXN_ID: "Not_found",
    Error: new Error()
  };
}

let A = /* @__PURE__ */Primitive_exceptions.create("Exception_value_test.A");

let B = /* @__PURE__ */Primitive_exceptions.create("Exception_value_test.B");

let C = /* @__PURE__ */Primitive_exceptions.create("Exception_value_test.C");

let u = {
  RE_EXN_ID: A,
  _1: 3
};

function test_not_found(f, param) {
  try {
    return f();
  } catch (raw_exn) {
    let exn = Primitive_exceptions.internalToException(raw_exn);
    if (exn.RE_EXN_ID === "Not_found") {
      return 2;
    }
    throw exn;
  }
}

function test_js_error2() {
  try {
    return JSON.parse(" {\"x\" : }");
  } catch (raw_e) {
    let e = Primitive_exceptions.internalToException(raw_e);
    if (e.RE_EXN_ID === Exn.$$Error) {
      console.log(e._1.stack);
      throw e;
    }
    throw e;
  }
}

function test_js_error3() {
  try {
    JSON.parse(" {\"x\"}");
    return 1;
  } catch (e) {
    return 0;
  }
}

exports.f = f;
exports.assert_f = assert_f;
exports.hh = hh;
exports.A = A;
exports.B = B;
exports.C = C;
exports.u = u;
exports.test_not_found = test_not_found;
exports.test_js_error2 = test_js_error2;
exports.test_js_error3 = test_js_error3;
/* No side effect */
