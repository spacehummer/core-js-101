/* *************************************************************************************************
 *                                                                                                *
 * Please read the following tutorial before implementing tasks:                                   *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling  *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration              *
 *                                                                                                *
 ************************************************************************************************ */


/**
 * Returns the 'Fizz','Buzz' or an original number using the following rules:
 * 1) return original number
 * 2) but if number multiples of three return 'Fizz'
 * 3) for the multiples of five return 'Buzz'
 * 4) for numbers which are multiples of both three and five return 'FizzBuzz'
 *
 * @param {number} num
 * @return {any}
 *
 * @example
 *   2 =>  2
 *   3 => 'Fizz'
 *   5 => 'Buzz'
 *   4 => 4
 *  15 => 'FizzBuzz'
 *  20 => 'Buzz'
 *  21 => 'Fizz'
 *
 */
function getFizzBuzz(num) {
  let result;
  if (num % 3 === 0 && num % 5 === 0) {
    result = 'FizzBuzz';
  } else if (num % 3 === 0) {
    result = 'Fizz';
  } else if (num % 5 === 0) {
    result = 'Buzz';
  } else {
    result = num;
  }
  return result;
}


/**
 * Returns the factorial of the specified integer n.
 *
 * @param {number} n
 * @return {number}
 *
 * @example:
 *   1  => 1
 *   5  => 120
 *   10 => 3628800
 */
function getFactorial(n) {
  let res = 1;

  if (n === 0) {
    return 1;
  }
  if (n < 0) {
    return undefined;
  }
  for (let i = n; i > 0; i -= 1) {
    res *= i;
    // eslint-disable-next-line no-console
    // console.log(res);
  }
  return res;
}


/**
 * Returns the sum of integer numbers between n1 and n2 (inclusive).
 *
 * @param {number} n1
 * @param {number} n2
 * @return {number}
 *
 * @example:
 *   1,2   =>  3  ( = 1+2 )
 *   5,10  =>  45 ( = 5+6+7+8+9+10 )
 *   -1,1  =>  0  ( = -1 + 0 + 1 )
 */
function getSumBetweenNumbers(n1, n2) {
  let res = 0;

  for (let i = n1; i <= n2; i += 1) {
    res += i;
  }

  return res;
}


/**
 * Returns true, if a triangle can be built with the specified sides a, b, c
 * and false in any other ways.
 *
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {Boolean}
 *
 * @example:
 *   1,2,3    =>  false
 *   3,4,5    =>  true
 *   10,1,1   =>  false
 *   10,10,10 =>  true
 */
function isTriangle(a, b, c) {
  // fix error in JSDoc (bool -> Boolean)
  return a > 0
    && b > 0
    && c > 0
    && a + b > c
    && a + c > b
    && c + b > a;
}


/**
 * Returns true, if two specified axis-aligned rectangles overlap, otherwise false.
 * Each rectangle representing by object
 *  {
 *     top: 5,
 *     left: 5,
 *     width: 20,
 *     height: 10
 *  }
 *
 *  (5;5)
 *     -------------
 *     |           |
 *     |           |  height = 10
 *     -------------
 *        width=20
 *
 * NOTE: Please use canvas coordinate space
 * (https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes#The_grid),
 * it differs from Cartesian coordinate system.
 *
 * @param {object} rect1
 * @param {object} rect2
 * @return {Boolean}
 *
 * @example:
 *   { top: 0, left: 0, width: 10, height: 10 },
 *   { top: 5, left: 5, width: 20, height: 20 }    =>  true
 *
 *   { top: 0, left: 0, width: 10, height: 10 },
 *   { top:20, left:20, width: 20, height: 20 }    =>  false
 *
 */
function doRectanglesOverlap(rect1, rect2) {
  // fix error in JSDoc (bool -> Boolean)

  // Define collision status
  let xCollision = false;
  let yCollision = false;

  // Test rects
  if ((rect1.left + rect1.width >= rect2.left)
    && (rect1.left <= rect2.left + rect2.width)) {
    xCollision = true;
  }
  if ((rect1.top + rect1.height >= rect2.top)
    && (rect1.top <= rect2.top + rect2.height)) {
    yCollision = true;
  }

  return xCollision && yCollision;
}


/**
 * Returns true, if point lies inside the circle, otherwise false.
 * Circle is an object of
 *  {
 *     center: {
 *       x: 5,
 *       y: 5
 *     },
 *     radius: 20
 *  }
 *
 * Point is object of
 *  {
 *     x: 5,
 *     y: 5
 *  }
 *
 * @param {object} circle
 * @param {object} point
 * @return {Boolean}
 *
 * @example:
 *   { center: { x:0, y:0 }, radius:10 },  { x:0, y:0 }     => true
 *   { center: { x:0, y:0 }, radius:10 },  { x:10, y:10 }   => false
 *
 */
function isInsideCircle(circle, point) {
  // fix error in JSDoc (bool -> Boolean)

  // Declare point status variables
  // let xIsInside = false;
  // let yIsInside = false;

  // Get x and y distance
  const xDistance = point.x - circle.center.x;
  const yDistance = point.y - circle.center.y;

  // Get 2D distance between circle center and point
  const distance = Math.sqrt(xDistance ** 2 + yDistance ** 2);

  return distance < circle.radius;
}


/**
 * Returns the first non repeated char in the specified strings otherwise returns null.
 *
 * @param {string} str
 * @return {string}
 *
 * @example:
 *   'The quick brown fox jumps over the lazy dog' => 'T'
 *   'abracadabra'  => 'c'
 *   'entente' => null
 */
function findFirstSingleChar(str) {
  const symbolsCountMap = new Map();
  const symbolsArr = str.split('');
  const singleCharsArr = [];

  symbolsArr.forEach((symbol) => {
    if (symbolsCountMap.has(symbol)) {
      symbolsCountMap.set(symbol, symbolsCountMap.get(symbol) + 1);
    } else {
      symbolsCountMap.set(symbol, 1);
    }
  });

  symbolsArr.forEach((symbol) => {
    if (symbolsCountMap.get(symbol) === 1) {
      singleCharsArr.push(symbol);
    }
  });

  // eslint-disable-next-line no-console
  // console.log(symbolsCountMap);
  return singleCharsArr[0];
}


/**
 * Returns the string representation of math interval,
 * specified by two points and include / exclude flags.
 * See the details: https://en.wikipedia.org/wiki/Interval_(mathematics)
 *
 * Please take attention, that the smaller number should be the first in the notation
 *
 * @param {number} a
 * @param {number} b
 * @param {Boolean} isStartIncluded
 * @param {Boolean} isEndIncluded
 * @return {string}
 *
 * @example
 *   0, 1, true, true   => '[0, 1]'
 *   0, 1, true, false  => '[0, 1)'
 *   0, 1, false, true  => '(0, 1]'
 *   0, 1, false, false => '(0, 1)'
 * Smaller number has to be first :
 *   5, 3, true, true   => '[3, 5]'
 *
 */
function getIntervalString(a, b, isStartIncluded, isEndIncluded) {
  // fix error in JSDoc (bool -> Boolean)
  // Briefly solution:
  return `${isStartIncluded ? '[' : '('}${Math.min(a, b)}`
    + `, ${Math.max(a, b)}${isEndIncluded ? ']' : ')'}`;
}


/**
 * Reverse the specified string (put all chars in reverse order)
 *
 * @param {string} str
 * @return {string}
 *
 * @example:
 * 'The quick brown fox jumps over the lazy dog' => 'god yzal eht revo spmuj xof nworb kciuq ehT'
 * 'abracadabra' => 'arbadacarba'
 * 'rotator' => 'rotator'
 * 'noon' => 'noon'
 */
function reverseString(str) {
  return str.split('').reverse().join('');
}


/**
 * Reverse the specified integer number (put all digits in reverse order)
 *
 * @param {number} num
 * @return {number}
 *
 * @example:
 *   12345 => 54321
 *   1111  => 1111
 *   87354 => 45378
 *   34143 => 34143
 */
function reverseInteger(num) {
  return Number(num.toString(10).split('').reverse().join(''));
}


/**
 * Validates the CCN (credit card number) and return true if CCN is valid
 * and false otherwise.
 *
 * See algorithm here : https://en.wikipedia.org/wiki/Luhn_algorithm
 *
 * @param {number} ccn
 * @return {boolean}
 *
 * @example:
 *   79927398713      => true
 *   4012888888881881 => true
 *   5123456789012346 => true
 *   378282246310005  => true
 *   371449635398431  => true
 *
 *   4571234567890111 => false
 *   5436468789016589 => false
 *   4916123456789012 => false
 */
function isCreditCardNumber(ccn) {
  // Fix error in JSDoc: cnn -> ccn

  // 7      9 9      2 7      3 9      8 7      1 3
  // 14 - 9   18 - 9   14 - 9   18 - 9   14 - 9   6 < 9
  // 5      9 9      2 5      3 9      8 5      1 3
  const ccnDigitsArr = ccn.toString(10).split('').map((char) => Number(char));
  // const ccnDigitsArr = (4561261212345464).toString(10).split('').map((char) => Number(char));

  const controlNumberArr = [];
  let isEven = true;

  if (ccnDigitsArr.length % 2 === 0) {
    ccnDigitsArr.forEach((digit) => {
      const currentSourceDigit = digit;
      const multipliedCurrentDigit = currentSourceDigit * 2;
      let newDigit;
      if (isEven && (multipliedCurrentDigit > 9)) {
        newDigit = multipliedCurrentDigit - 9;
      } else if (isEven && (multipliedCurrentDigit <= 9)) {
        newDigit = multipliedCurrentDigit;
      } else {
        newDigit = currentSourceDigit;
      }

      controlNumberArr.push(newDigit);
      isEven = !isEven;
    });
  } else {
    ccnDigitsArr.forEach((digit) => {
      const currentSourceDigit = digit;
      const multipliedCurrentDigit = currentSourceDigit * 2;
      let newDigit;
      if (!isEven && (multipliedCurrentDigit > 9)) {
        newDigit = multipliedCurrentDigit - 9;
      } else if (!isEven && (multipliedCurrentDigit <= 9)) {
        newDigit = multipliedCurrentDigit;
      } else {
        newDigit = currentSourceDigit;
      }

      controlNumberArr.push(newDigit);
      isEven = !isEven;
    });
  }

  // eslint-disable-next-line no-console
  // console.log(
  //   ccnDigitsArr,
  //   controlNumberArr,
  //   controlNumberArr.reduce((acc, cur) => acc + cur, 0),
  // );

  return controlNumberArr.reduce((acc, cur) => acc + cur, 0) % 10 === 0;
}

/**
 * Returns the digital root of integer:
 *   step1 : find sum of all digits
 *   step2 : if sum > 9 then goto step1 otherwise return the sum
 *
 * @param {number} num
 * @return {number}
 *
 * @example:
 *   12345 ( 1+2+3+4+5 = 15, 1+5 = 6) => 6
 *   23456 ( 2+3+4+5+6 = 20, 2+0 = 2) => 2
 *   10000 ( 1+0+0+0+0 = 1 ) => 1
 *   165536 (1+6+5+5+3+6 = 26,  2+6 = 8) => 8
 */
function getDigitalRoot(num) {
  // fix error in JSDoc (n -> num)
  // Using recursion.
  const currentSum = num.toString(10).split('')
    .reduce((acc, cur) => acc + Number(cur), 0);
  // eslint-disable-next-line no-console
  // console.log(currentSum);
  return currentSum > 9 ? getDigitalRoot(currentSum) : currentSum;
}


/**
 * Returns true if the specified string has the balanced brackets and false otherwise.
 * Balanced means that is, whether it consists entirely of pairs of opening/closing brackets
 * (in that order), none of which mis-nest.
 * Brackets include [],(),{},<>
 *
 * @param {string} str
 * @return {boolean}
 *
 * @example:
 *   '' => true
 *   '[]'  => true
 *   '{}'  => true
 *   '()   => true
 *   '[[]' => false
 *   ']['  => false
 *   '[[][][[]]]' => true
 *   '[[][]][' => false
 *   '{)' = false
 *   '{[(<{[]}>)]}' = true
 */
function isBracketsBalanced(str) {
  // eslint-disable-next-line no-console
  // console.log(str);

  function check(strLocal, bracketsConfig = [
    ['(', ')'],
    ['[', ']'],
    ['{', '}'],
    ['|', '|'],
    ['<', '>'],
  ]) {
    /*
     * Использовался алгоритм с двумя стеками. Имелись ложные срабатывания `|()|(||)||`.
     * */

    /*
     * Вторая версия: алгоритм с одним стеком для обоих типов скобок. Сразу работаю с исходным
     * конфигом в виде двумерного массива.
     * */

    /**
     * Main brackets check function.
     */
    function checkBrackets(checkedStr, bracketsConfigLocal) {
      // Debug info: objects to watch:
      // str, charIndex, currentSymbol, similarBracketsStack,
      // openBracketsStack, similarBracketsStatus, regularBracketsStatus

      // Вывести в лог текущую строку со скобками:
      // console.log('\nTesting string:', checkedStr);

      // Вывести в лог текущий конфиг проверяемых скобок:
      // console.log('Brackets config:', bracketsConfig);

      // Массив, описывающий типы открывающих скобок
      // const openBracketsTypesArr = ['(', '{', '[', '|'];

      // Словарь (map), который задаёт пару скобок. Он из себя на уровне JS представляет
      // объект.
      // Ключи - закрывающие скобки.
      // Значения - открывающие скобки.
      // Используя эту структуру, будем проверять, какой тип скобки должен
      // лежать на верхушке стека, чтобы его убрать.
      // const bracketsPairsMap = {
      //   ')': '(',
      //   '}': '{',
      //   ']': '[',
      // };

      // const similarBracketsPairMap = {
      //   '|': '|',
      // };

      // Создаём стек для накопления открывающих скобок, которые встречаются в строке.
      // Когда находим закрывающую - убираем последнюю открывающую из стека,
      // удаляя верхний элемент.
      const openBracketsStack = [];

      // Создаём стек для скобок такого типа, при котором открывающаяся и закрывающая одним и тем
      // же символом обозначается.
      // let similarBracketsStack = [];

      // Переменные для хранения результата анализа для каждого типа скобок.
      // let regularBracketsStatus = true;
      // let similarBracketsStatus = true;

      // Переменная для хранения состояния того, отработало ли хотя бы одно условие на проверку
      // классических парных скобок.
      // Not used in current version.
      // const regularBracketsStatementsStatus = false;

      // Необходимо найти способ работать с исходным конфигом скобок.
      // Если работаем, как со строкой. `.replace()` с регулярным выражением уберёт скобки,
      // которые появятся из-за вложенности массивов.
      // Not used in current version.
      // const bracketsConfigStr = bracketsConfigLocal.join('').replace(/,/g, '');


      // Функция для проверки типа скобки (является ли она открывающейся).
      // Если работаем с исходным массивом.
      function isBracketsIsOpen(bracketsConfigLocalLocal, bracketChecked) {
        let isOpenStatus = false;

        bracketsConfigLocalLocal.forEach((bracketPair) => {
          if (bracketPair[0] === bracketChecked) {
            isOpenStatus = true;
          }
        });

        return isOpenStatus;
      }

      // Функция для получения идентификатора типа скобки исходя из данной конфигурации скобок.
      // Это будет номер вложенного массива с парой скобок.
      // Функция применяется, если работаем с исходным массивом.
      function getBracketsPairTypeNumber(bracketsConfigLocalLocal, bracketChecked) {
        let bracketPairIndexOutput = null;

        bracketsConfigLocalLocal.forEach((bracketPair, bracketPairIndex) => {
          if (bracketPair.includes(bracketChecked)) {
            bracketPairIndexOutput = bracketPairIndex;
          }
        });

        return bracketPairIndexOutput;
      }


      // Main loop - for iterate through source string
      for (let charIndex = 0; charIndex < checkedStr.length; charIndex += 1) {
        // Temporal const (update every iteration) - current symbol of source string.
        const currentSymbol = checkedStr[charIndex];

        // Работаем с конфигом скобок, как с массивом двумерным, строка не нужна.
        // let bracketsIndex = bracketsConfigStr.indexOf(currentSymbol)

        // Get brackets pair type from config: it is number of inner Array in outer Array.
        // 0 < bracketsPairTypeNumber < bracketsConfig.length - 1
        const bracketsPairTypeNumber = getBracketsPairTypeNumber(
          bracketsConfigLocal,
          currentSymbol,
        );

        // Get brackets type of pair (opening or closing) by it position in inner config Array.
        // 0 - opening;
        // 1 - closing.
        const bracketsInPairIndex = bracketsConfigLocal[bracketsPairTypeNumber]
          .indexOf(currentSymbol);

        // Класть в стек и обрабатывать объект с информаций о скобке?..
        // Not used in current version.
        // const bracketInfo = {
        //   pairTypeNumber: bracketsPairTypeNumber,
        //   bracketsInPairIndex,
        // };

        // Текущая скобка открывающаяся?
        if (isBracketsIsOpen(bracketsConfigLocal, currentSymbol)) {
          // Если текущая скобка (открывающаяся), обозначена таким же символом, как закрывающаяся,
          // и текущий тип скобок (тип текущей скобки) лежит в стеке сверху:
          // => извлечь из стека верхний элемент.
          if (currentSymbol === bracketsConfigLocal[bracketsPairTypeNumber][1]
            && openBracketsStack[openBracketsStack.length
            - 1] === bracketsConfigLocal[bracketsPairTypeNumber][bracketsInPairIndex]) {
            openBracketsStack.pop();
            // иначе: если текущая скобка (открывающаяся), обозначена таким же символом, как
            // закрывающаяся, и текущий тип скобок не соответствует типу скобки, которая лежит в
            // стеке сверху: => добавить текущую скобку в стек.
          } else if (
            currentSymbol === bracketsConfigLocal[bracketsPairTypeNumber][1]
            && openBracketsStack[openBracketsStack.length
            - 1] !== bracketsConfigLocal[bracketsPairTypeNumber][bracketsInPairIndex]) {
            openBracketsStack
              .push(bracketsConfigLocal[bracketsPairTypeNumber][bracketsInPairIndex]);
          } else {
            // иначе (это если скобка разными символами слева и справа обозначается):
            // => добавить текущую скобку в стек.
            openBracketsStack
              .push(bracketsConfigLocal[bracketsPairTypeNumber][bracketsInPairIndex]);
          }
        } else {
          // иначе (если текущая скобка закрывающаяся, причём закрывающаяся кодируемая разными
          // символами слева и справа):

          // Если текущая скобка, которая должна быть закрывающейся, не является таковой
          // для скобки, лежащей вверху стека:
          // => остановить выполнение функции и вернуть `false`.
          if (openBracketsStack[openBracketsStack.length
          - 1] !== bracketsConfigLocal[bracketsPairTypeNumber][bracketsInPairIndex - 1]) {
            return false;
          }

          // В любом случае извлеки верхний элемент стека:
          openBracketsStack.pop();
        }
      }

      // Если проверки в цикле не прервали выполнение функции, но мы дошли до конца строки,
      // проверяем, пустой ли стек.
      // Если стек пустой - то вернётся `true` - все скобки закрываются и отбалансированы.
      // Если строка закончилась, а стек не пустой - то вернётся `false` - какие-то скобки не
      // закрыты.
      return openBracketsStack.length === 0;
    }

    return checkBrackets(strLocal, bracketsConfig);
  }

  return check(str);

  // throw new Error('Not implemented');
}


/**
 * Returns the string with n-ary (binary, ternary, etc, where n <= 10)
 * representation of specified number.
 * See more about
 * https://en.wikipedia.org/wiki/Binary_number
 * https://en.wikipedia.org/wiki/Ternary_numeral_system
 * https://en.wikipedia.org/wiki/Radix
 *
 * @param {number} num
 * @param {number} n, radix of the result
 * @return {string}
 *
 * @example:
 *   1024, 2  => '10000000000'
 *   6561, 3  => '100000000'
 *    365, 2  => '101101101'
 *    365, 3  => '111112'
 *    365, 4  => '11231'
 *    365, 10 => '365'
 */
function toNaryString(num, n) {
  return num.toString(n);
}


/**
 * Returns the common directory path for specified array of full filenames.
 *
 * @param {array} pathes
 * @return {string}
 *
 * @example:
 *   ['/web/images/image1.png', '/web/images/image2.png']  => '/web/images/'
 *   ['/web/assets/style.css', '/web/scripts/app.js',  'home/setting.conf'] => ''
 *   ['/web/assets/style.css', '/.bin/mocha',  '/read.me'] => '/'
 *   ['/web/favicon.ico', '/web-scripts/dump', '/verbalizer/logs'] => '/'
 */
function getCommonDirectoryPath(pathes) {
  // eslint-disable-next-line no-console
  // console.log(pathes);
  if (pathes.filter((path) => path[0] === '/').length < pathes.length) {
    return '';
  }

  const similarComponents = [];
  const pathesExploded = pathes.map((path) => path.replace(new RegExp(/\//, ''), '').split('/'));
  // eslint-disable-next-line no-console
  console.log(pathesExploded);
  const pathLengths = pathesExploded.map((path) => path.length);
  const maxLength = Math.max(...pathLengths);
  // eslint-disable-next-line prefer-const
  let isSimilar = true;

  for (let i = 0; (i < maxLength) && (isSimilar); i += 1) {
    for (let j = 0; j < (pathesExploded.length) && (isSimilar); j += 1) {
      if (j === 0) {
        similarComponents.push(pathesExploded[j][i]);
        // eslint-disable-next-line no-console
        console.log(similarComponents);
      }
      if (similarComponents[i] !== pathesExploded[j][i]) {
        isSimilar = false;
        similarComponents.pop();
      }
    }
  }

  const similarComponentsRawStr = similarComponents.join('/');

  // eslint-disable-next-line no-console
  console.log(similarComponentsRawStr === '' ? '/' : `/${similarComponentsRawStr}/`);

  // return '/web/images/';
  return similarComponentsRawStr === '' ? '/' : `/${similarComponentsRawStr}/`;
}


/**
 * Returns the product of two specified matrixes.
 * See details: https://en.wikipedia.org/wiki/Matrix_multiplication
 *
 * @param {array} m1
 * @param {array} m2
 * @return {array}
 *
 * @example:
 *   [[ 1, 0, 0 ],       [[ 1, 2, 3 ],           [[ 1, 2, 3 ],
 *    [ 0, 1, 0 ],   X    [ 4, 5, 6 ],     =>     [ 4, 5, 6 ],
 *    [ 0, 0, 1 ]]        [ 7, 8, 9 ]]            [ 7, 8, 9 ]]
 *
 *                        [[ 4 ],
 *   [[ 1, 2, 3]]    X     [ 5 ],          =>     [[ 32 ]]
 *                         [ 6 ]]
 *
 */
function getMatrixProduct(m1, m2) {
  /*
  * Matrix product rule.
  * [[a11, a12], * [[b11, b12], = [a11 * b11 + a12 * b21,  a11 * b12 + a12 * b22],
  *  [a21, a22]]    [b21, b22]]    [a21 * b11 + a22 * b21, a21 * b12 + a22 * b22]]
  *
  * or
  *
  * [[M1.row1 * M2.column1, M1.row1 * M2.column2],
  *  [M1.row2 * M2.column1, M1.row2 * M2.column2]]
  *
  * */
  // `for` loop is more faster, as `.map` and etc.
  const m1RowsCount = m1.length;
  const m1ColsCount = m1[0].length;
  const m2ColsCount = m2[0].length;
  // Initialize array of rows - new matrix
  const resultMatrix = Array.from({ length: m1RowsCount });
  // eslint-disable-next-line no-console
  // console.log(resultMatrix);
  // Loop throw array of rows
  for (let row = 0; row < m1RowsCount; row += 1) {
    // Initialize the current row Array
    resultMatrix[row] = Array.from({ length: m2ColsCount });
    // Loop throw row
    for (let column = 0; column < m2ColsCount; column += 1) {
      // Initialize the current cell of row of array of row
      resultMatrix[row][column] = 0;
      for (let i = 0; i < m1ColsCount; i += 1) {
        // Multiply pairs of cells of m1 row and m2 column and accumulate it in current cell
        resultMatrix[row][column] += m1[row][i] * m2[i][column];
        // eslint-disable-next-line no-console
        // console.log(resultMatrix);
      }
    }
  }
  return resultMatrix;
}


/**
 * Returns the evaluation of the specified tic-tac-toe position.
 * See the details: https://en.wikipedia.org/wiki/Tic-tac-toe
 *
 * Position is provides as 3x3 array with the following values: 'X','0', undefined
 * Function should return who is winner in the current position according to the game rules.
 * The result can be: 'X','0',undefined
 *
 * @param {array} position
 * @return {string}
 *
 * @example
 *
 *   [[ 'X',   ,'0' ],
 *    [    ,'X','0' ],       =>  'X'
 *    [    ,   ,'X' ]]
 *
 *   [[ '0','0','0' ],
 *    [    ,'X',    ],       =>  '0'
 *    [ 'X',   ,'X' ]]
 *
 *   [[ '0','X','0' ],
 *    [    ,'X',    ],       =>  undefined
 *    [ 'X','0','X' ]]
 *
 *   [[    ,   ,    ],
 *    [    ,   ,    ],       =>  undefined
 *    [    ,   ,    ]]
 *
 */
function evaluateTicTacToePosition(position) {
  // Declare symbols
  const symbol = {
    x: 'X',
    o: '0',
  };

  const status = {
    xIsWin: false,
    oIsWin: false,
    outputStatus: undefined,
  };

  // eslint-disable-next-line no-console
  // console.log('================\n', position, '\n================\n');

  function transposeMatrix(matrix) {
    // [[1, 2, 3],
    //   [4, 5, 6],
    //   [7, 8, 9]]
    //
    // Get array indexes of every column in Array of Array by Object.keys(matrix[0]);
    // (example: [ '0', '1', '2' ]);
    // map through it and in callback map through source Array of Array, here we now
    // can access row index and row
    return Object.keys(matrix[0])
      .map((colNumber) => matrix.map((row) => row[colNumber.toString()]));
    // another solution: output = array[0].map((_, colIndex) => array.map(row => row[colIndex]));
  }

  /**
   * Check winner in row in Array of Array
   * @param positionLocal {Array[]}
   */
  function checkWinnerInRow(positionLocal) {
    positionLocal.forEach((row) => {
      if (row.every((cell) => cell === symbol.x) && (row.length === 3)) {
        status.xIsWin = true;
        status.outputStatus = symbol.x;
      } else if (row.every((cell) => cell === symbol.o) && (row.length === 3)) {
        status.oIsWin = true;
        status.outputStatus = symbol.o;
      }
    });
  }

  // Check source Array of Array
  checkWinnerInRow(position);

  // eslint-disable-next-line no-console
  // console.log(status);

  // Check transposed Array of Array
  checkWinnerInRow(transposeMatrix(position));

  // eslint-disable-next-line no-console
  // console.log(status);

  let winnerSymbol = null;
  // Check diagonals manually, without loop, because the cycle is not rational to apply
  // for matrix 3x3.
  if (typeof position[1][1] !== 'undefined') {
    // Detect, what center of matrix is defined
    if ([position[0][0], position[1][1], position[2][2]]
      .every((cell) => cell === position[1][1])) {
      [, [, winnerSymbol]] = position;
    } else if ([position[0][2], position[1][1], position[2][0]]
      .every((cell) => cell === position[1][1])) {
      [, [, winnerSymbol]] = position;
    }
  }

  switch (winnerSymbol) {
    case symbol.x:
      status.xIsWin = true;
      status.outputStatus = symbol.x;
      break;
    case symbol.o:
      status.oIsWin = true;
      status.outputStatus = symbol.o;
      break;
    default:
      break;
  }

  // eslint-disable-next-line no-console
  // console.log(status);

  return status.outputStatus;
}


module.exports = {
  getFizzBuzz,
  getFactorial,
  getSumBetweenNumbers,
  isTriangle,
  doRectanglesOverlap,
  isInsideCircle,
  findFirstSingleChar,
  getIntervalString,
  reverseString,
  reverseInteger,
  isCreditCardNumber,
  getDigitalRoot,
  isBracketsBalanced,
  toNaryString,
  getCommonDirectoryPath,
  getMatrixProduct,
  evaluateTicTacToePosition,
};
