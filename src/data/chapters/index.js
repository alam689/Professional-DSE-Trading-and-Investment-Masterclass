import ch01 from './ch01';
import ch02 from './ch02';
import ch03 from './ch03';
import ch04 from './ch04';
import ch05 from './ch05';
import ch06 from './ch06';
import ch07 from './ch07';
import ch08 from './ch08';
import ch09 from './ch09';
import ch11 from './ch11';
import ch13 from './ch13';
import ch14 from './ch14';
import ch15 from './ch15';
import ch16 from './ch16';
import ch17 from './ch17';
import ch19 from './ch19';
import ch20 from './ch20';
import ch10 from './ch10';
import ch12 from './ch12';
import ch18 from './ch18';
import ch21 from './ch21';
import ch22 from './ch22';
import ch25 from './ch25';
import ch23 from './ch23';
import ch24 from './ch24';
import ch26 from './ch26';
import ch27 from './ch27';
import ch28 from './ch28';
import ch29 from './ch29';
import ch30 from './ch30';
import ch35 from './ch35';
import ch32 from './ch32';
import ch31 from './ch31';
import ch33 from './ch33';
import ch34 from './ch34';
import ch36 from './ch36';
import ch43 from './ch43';
import ch39 from './ch39';
import ch38 from './ch38';
import ch42 from './ch42';
import ch40 from './ch40';
import ch45 from './ch45';
import ch41 from './ch41';
import ch37 from './ch37';
import ch44 from './ch44';

/**
 * Authored chapter content, keyed by chapter number.
 * Adding a chapter = write chNN.js, import it, add it here, and flip
 * that chapter's `status` to 'complete' in ../curriculum.js.
 */
const CONTENT = {
  1: ch01,
  2: ch02,
  3: ch03,
  4: ch04,
  5: ch05,
  6: ch06,
  7: ch07,
  8: ch08,
  9: ch09,
  11: ch11,
  13: ch13,
  14: ch14,
  15: ch15,
  16: ch16,
  17: ch17,
  19: ch19,
  20: ch20,
  10: ch10,
  12: ch12,
  18: ch18,
  21: ch21,
  22: ch22,
  25: ch25,
  23: ch23,
  24: ch24,
  26: ch26,
  27: ch27,
  28: ch28,
  29: ch29,
  30: ch30,
  31: ch31,
  32: ch32,
  33: ch33,
  34: ch34,
  35: ch35,
  36: ch36,
  43: ch43,
  38: ch38,
  39: ch39,
  42: ch42,
  40: ch40,
  45: ch45,
  41: ch41,
  37: ch37,
  44: ch44,
};

export const getContent = (n) => CONTENT[Number(n)] || null;

/** The fixed 13-block structure, in canonical order. */
export const BLOCK_ORDER = [
  'theory',
  'simple',
  'example',
  'formula',
  'manual',
  'excel',
  'python',
  'mistakes',
  'tips',
  'exercises',
  'interview',
  'quiz',
  'summary',
];

export default CONTENT;
