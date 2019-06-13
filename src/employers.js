"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.employersNames = void 0;
var employers = ['Alex', '', 'ludmila', 'Viktor', '', ' oleg ', 'iNna  ', 'Ivan', 'Alex', 'Olga', ' Ann'];
var employersNames = employers.filter(function (name) {
  return name.length > 0;
});
exports.employersNames = employersNames;
exports.employersNames = employersNames = employersNames.map(function (name) {
  return name.toLowerCase().trim();
});