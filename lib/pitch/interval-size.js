var parsePitch = require('./parse-pitch.js')

// order of note letter names in an octave cycle
var LETTERS = 'CDEFGAB'

/**
 * the generic interval size between two pitch strings, disregarding accidentals
 *
 * @param {String} sciPitch1 - a pitch in scientific pitch notation.
 * @param {String} sciPitch2 - a pitch in scientific pitch notation.
 * @returns {Number} the interval size between the two pitches.
 *
 * @throws Will throw an error if string is not a valid pitch
 *
 * @example
 * intervalSize('C4', 'E4')    => 3
 * intervalSize('E4', 'C4')    => 3
 * intervalSize('C4', 'E5')    => 10
 * intervalSize('C4', 'Eb5')   => 10
 * intervalSize('C5', 'C5')    => 1
 */

var intervalSize = function (sciPitch1, sciPitch2) {
  var p = parsePitch(sciPitch1)
  var q = parsePitch(sciPitch2)
  if (!p || !q) throw Error('At least one invalid pitch name:', sciPitch1, sciPitch2)
  return Math.abs(LETTERS.indexOf(p.letter) - LETTERS.indexOf(q.letter) +
    LETTERS.length * (p.octave - q.octave)) + 1      // add 1 for music's 1-based numbering
}

module.exports = intervalSize