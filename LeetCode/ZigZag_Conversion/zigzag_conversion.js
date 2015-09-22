/**
 * Created by hywilliam on 9/16/15.
 *
 * url: https://leetcode.com/problems/zigzag-conversion/
 * No: 6
 * difficult: easy
 */

/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */

var convert = function (s, numRows) {

  if (numRows === 1) {
    return s
  }

  // 之字形路线构成图的每一行是map中的一个元素
  var map = [];
  // 检测指针censor是上行还是下行
  var isUp = true;
  // 之字形路线行走的指针
  var censor = 0;

  for (var i = 0; i < numRows; i++) {
    map[i] = ''
  }

  for (var j = 0, len = s.length; j < len; j++) {
    if (isUp) {
      map[censor++] += s.charAt(j);
      if (censor === numRows) {
        censor = censor - 2;
        isUp = false
      }
    } else {
      map[censor--] += s.charAt(j);
      if (censor === -1) {
        censor = censor + 2;
        isUp = true
      }
    }
  }

  return map.join('')
};

var test = convert('AB', 1);
