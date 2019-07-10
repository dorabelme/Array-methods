/**
 * @instructions
 * `sum(numbers): Number`
 * Given an array of numbers, return a sum total of all the numbers.
 */
function sum(numbers) {
  // TODO: Add your solution here.
  const s = numbers.reduce((p, c) => {
    return p + c;
  }, 0);

  return s;
}

/**
 * @instruction
 * `doubleNumbers(numbers): Array`
 * Given an array of numbers, return an array where each element is double its original value.
 */
function doubleNumbers(numbers) {
  // TODO: Add your solution here.
  return numbers.map(n => n * 2);
}

/**
 * @instruction
 * `doubleCharacters(chars): Array`
 * Given a string, return an array where each element is double its original value. (e.g. 'ab' -> 'aabb')
 */
function doubleCharacters(chars) {
  // TODO: Add your solution here.
  let result = "";
  for (let char of chars) {
    result += char + char;
  }
  return result;
}

/**
 * @instruction
 * `backwardsify(array): Array`
 * Reverse or flip the values in the array.
 */
function backwardsify(array) {
  // TODO: Add your solution here.
  if (array.length === 0) {
    return {};
  } else {
    return array.reverse();
  }
}

/**
 * @instruction
 * `interleave(list1, list2): Array`
 * Should return a combined single array, with individual values alternating between list1 & list2.
 */
function interleave(list1, list2) {
  // TODO: Add your solution here.
  if (list1.length !== list2.length) {
    return null;
  } else {
    return list1.reduce((acc, elem, idx) => {
      return acc.concat(elem, list2[idx]);
    }, []);
  }
}

/**
 * @instruction
 * `makeRange(count, fillString): Array`
 * Return array of `count` length where each element is set to `fillString`
 */
function makeRange(count, fillString) {
  // TODO: Add your solution here.
  if (count < 0) {
    return [];
  } else {
    return Array(count).fill(fillString);
  }
}

/**
 * @instuction
 * `countByFirstLetter(words): Object`
 * Given an array of words, return an object using *lowercase* letters as keys. The value should be a Number, with the count of words with same starting character.
 *
 * @example
 *
 * const input = ['cat', 'kitty', 'catzilla', 'fluffykins']
 * countByFirstLetter(input)
 * // will return:
 * // {
 * //  c: 2, // cat + catzilla
 * //  k: 1, // kitty
 * //  f: 1  // fluffykins
 * // }
 */

function countByFirstLetter(words) {
  // TODO: Add your solution here.
  let d = words.reduce((acc, elem) => {
    let firstLetter = elem.toLowerCase()[0];

    if (firstLetter in acc) {
      acc[firstLetter]++;
    } else {
      acc[firstLetter] = 1;
    }

    return acc;
  }, {});

  return d;
}

/**
 * @instructions
 * `groupByFirstLetter(words): Object`
 * Given an array of words, return an object using *lowercase* letters as keys.
 * The key value should be an array with only the words sharing a starting character.
 *
 * @example
 *
 * const input = ['Cat', 'Kitty', 'catzilla', 'fluffykins']
 * const result = groupByFirstLetter(input)
 * // result deep equals:
 * // {
 * //  c: ['cat', 'catzilla'],
 * //  k: ['kitty'],
 * //  f: ['fluffykins']
 * // }
 *
 */

function groupByFirstLetter(words) {
  // TODO: Add your solution here.
  if (typeof words !== "object" || words === null || words.length < 1) {
    return {};
  }

  let d = words.reduce((acc, elem) => {
    let firstLetter = elem.toLowerCase()[0];

    if (firstLetter in acc) {
      acc[firstLetter] = acc[firstLetter].concat(elem.toLowerCase());
    } else {
      acc[firstLetter] = [elem.toLowerCase()];
    }

    return acc;
  }, {});

  return d;
}

/// ////// END OF CHALLENGE /////////
/// ////// END OF CHALLENGE /////////
/// ////// END OF CHALLENGE /////////

if (typeof exports !== "undefined") {
  // IGNORE: Test/Env Detected
  // For Node/Non-browser test env
  module.exports = {
    sum,
    doubleCharacters,
    doubleNumbers,
    backwardsify,
    interleave,
    makeRange,
    countByFirstLetter,
    groupByFirstLetter
  };
}
