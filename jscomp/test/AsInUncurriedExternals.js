// Generated by ReScript, PLEASE EDIT WITH CARE
'use strict';


function mo(prim0, prim1) {
  return {
    objectMode: false,
    name: prim0,
    someOther: true
  };
}

let options = {
  objectMode: false,
  name: "foo",
  someOther: true
};

function shouldNotFail(objectMode, name) {
  return 3;
}

exports.mo = mo;
exports.options = options;
exports.shouldNotFail = shouldNotFail;
/* No side effect */
