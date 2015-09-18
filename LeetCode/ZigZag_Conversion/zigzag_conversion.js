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
  var isUp = true;
  var censor = 0;

  // 每一行是一个数组元素
  map.length = numRows;

  for (var j = 0; j < len; j++) {
    if(isUp) {
      map[censor++] = s.charAt(j);
      if(censor === numRows - 1) isUp = false
    } else {
      map[censor--] = s.charAt(j);
      if(censor === -1) isUp = true
    }
  }
};

var test = convert('ABCDEFGHIJKLMNOPQ', 4);
console.log(test);