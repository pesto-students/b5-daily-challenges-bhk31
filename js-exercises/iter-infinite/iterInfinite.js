// function count(start, step = 1) {
//   const counter = {
//     [Symbol.iterator]() {
//       let i = start;
//       return {
//         next() {
//           return {
//             done: false,
//             value: (i += step),
//           };
//         },
//       };
//     },
//   };

//   for (const num of counter) {
//     console.log(num);
//   }
// }

// const cycle = (iter, n = 0) => {
//   if (iter[Symbol.iterator] === undefined) {
//     throw TypeError(`Expected iterable found ${typeof iter} which is not iterable`);
//   }

//   if (n !== 0) {
//     let i = 0;
//     while (i < n) {
//       for (const el of iter) {
//         console.log(el);
//       }
//       i += 1;
//     }
//   } else {
//     while ( true ) {
//       for (const el of iter) {
//         console.log(el);
//       }
//     }
//   }
// };

// function repeat(value, n = Infinity) {
//   const repeater = {
//     [Symbol.iterator]() {
//       let i = 0;
//       return {
//         next() {
//           if (n === 1) {
//             return {
//               done: true,
//               value,
//             };
//           }

//           i += 1;
//           return {
//             done: i > n,
//             value,
//           };
//         },
//       };
//     },
//   };

//   for (const num of repeater) {
//     console.log(num);
//   }
// }

function* count(start, step = 1) {
  let i = start;
  while (true) {
    yield i += step;
  }
}

function* cycle(iter, n = 0) {
  if (iter[Symbol.iterator] === undefined) {
    throw TypeError(`Expected iterable found ${typeof iter} which is not iterable`);
  }

  if (n !== 0) {
    let i = 0;
    while (i < n) {
      for (const el of iter) {
        yield el;
      }
      i += 1;
    }
  } else {
    while (true) {
      for (const el of iter) {
        yield el;
      }
    }
  }
}

function* repeat(value, n = Infinity) {
  let i = 0;
  while (n > i) {
    yield value;
    i += 1;
  }
}

export {
  count,
  cycle,
  repeat,
};
