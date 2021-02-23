const convertPattern = {
    1: {
        0: '',
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine',
    },
    digit1019: {
        0: 'ten',
        1: 'eleven',
        2: 'twelve',
        3: 'thirteen',
        4: 'fourteen',
        5: 'fifteen',
        6: 'sixteen',
        7: 'seventeen',
        8: 'eighteen',
        9: 'nineteen',
    },
    2: {
        0: '',
        1: '--',
        2: 'twenty',
        3: 'thirty',
        4: 'forty',
        5: 'fifty',
        6: 'sixty',
        7: 'seventy',
        8: 'eighty',
        9: 'ninety'
    },
    3: {
        0: '',
        1: 'one hundred',
        2: 'two hundred',
        3: 'three hundred',
        4: 'four hundred',
        5: 'five hundred',
        6: 'six hundred',
        7: 'seven hundred',
        8: 'eight hundred',
        9: 'nine hundred',

    },
    4: {
        0: '',
        1: 'one thousand',
        2: 'two thousand',
        3: 'three thousand',
        4: 'four thousand',
        5: 'five thousand',
        6: 'six thousand',
        7: 'seven thousand',
        8: 'eight thousand',
        9: 'nine thousand',
    },
    5: {
        0: '',
        1: 'one hundred thousand',
        2: 'two hundred thousand',
        3: 'three hundred thousand',
        4: 'four hundred thousand',
        5: 'five hundred thousand',
        6: 'six hundred thousand',
        7: 'seven hundred thousand',
        8: 'eight hundred thousand',
        9: 'nine hundred thousand',
    }
};

// const convert = function(number) {
//     if (Math.abs(number) >= 1e6) {
//         return 'Number too long';
//     }
//     let arr = String(Math.abs(Math.floor(number))).split('');
//     let arrLastIndex = arr.length - 1;
//     let is1019 = arrLastIndex >= 1 && arr[arrLastIndex - 1] === '1';
//     return arr
//     .reduce(function (sum, item, index, arr) {
//         if (is1019) {
//             if (index == (arrLastIndex - 1)) {
//                 return sum + convertPattern['digit1019'][arr[arrLastIndex]];
//             }
//             if (index == arrLastIndex) {
//                 return sum;
//             }
//         }
//         if (item == '0' || index == arrLastIndex) {
//         return sum + convertPattern[arr.length - index][item];
//         } else {
//             return sum + convertPattern[arr.length - index][item] + ' ';
//         }
//     }, '')
//     .trim();

// };
// console.log('"' + convert(20200) + '"');

module.exports = function toReadable(number) {
    if (Math.abs(number) >= 1e6) {
        return 'Number too long';
    }
    if (number === 0) {
        return 'zero';
    }
    let arr = String(Math.abs(Math.floor(number))).split('');
    let arrLastIndex = arr.length - 1;
    let is1019 = arrLastIndex >= 1 && arr[arrLastIndex - 1] === '1';
    return arr
    .reduce(function (sum, item, index, arr) {
        if (is1019) {
            if (index == (arrLastIndex - 1)) {
                return sum + convertPattern['digit1019'][arr[arrLastIndex]];
            }
            if (index == arrLastIndex) {
                return sum;
            }
        }
        if (item == '0' || index == arrLastIndex) {
        return sum + convertPattern[arr.length - index][item];
        } else {
            return sum + convertPattern[arr.length - index][item] + ' ';
        }
    }, '')
    .trim();

};
