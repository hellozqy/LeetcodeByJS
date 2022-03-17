/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  magazine = magazine.split('');
  for (let i = 0; i < ransomNote.length; i++) {
    if (magazine.includes(ransomNote[i])) {
      magazine.splice(magazine.indexOf(ransomNote[i]), 1);
    } else {
      return false;
    }
  }
  return true;
};
