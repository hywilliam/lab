/**
 * Created by hywilliam on 9/16/15.
 *
 * url: https://leetcode.com/problems/zigzag-conversion/
 * No: 6
 * difficult: easy
 */

// TEST
// ----

// convert("PAYPALISHIRING", 3)
// PAHNAPLSIIGYIR

/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {

  var len = s.length;
  var map = [];
  var censor = 0;

  map.length = numRows;

  for (var j = 0; j < len; j++) {
    map[censor++] = s.charAt(j);
  }
};

var test = convert('ABCDEFGHIJKLMNOPQ', 4);
console.log(test);