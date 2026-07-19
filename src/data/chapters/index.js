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
