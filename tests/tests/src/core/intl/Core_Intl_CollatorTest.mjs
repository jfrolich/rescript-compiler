// Generated by ReScript, PLEASE EDIT WITH CARE


console.log("---");

console.log("Intl.Collator");

new Intl.Collator();

new Intl.Collator(["en-US"]);

let _collator = new Intl.Collator([
  "en-US",
  "en-GB"
]);

let collator = new Intl.Collator(["en-US"], {
  sensitivity: "base",
  ignorePunctuation: true,
  numeric: true,
  caseFirst: "upper"
});

Intl.Collator.supportedLocalesOf([
  "en-US",
  "en-GB"
]);

Intl.Collator.supportedLocalesOf([
  "en-US",
  "en-GB"
], {
  localeMatcher: "lookup"
});

console.log(collator.resolvedOptions());

console.log(collator.compare("hi", "hï"));

console.log(Intl.Collator.supportedLocalesOf(["hi"]));

export {
  _collator,
  collator,
}
/*  Not a pure module */
