const MARK_WEIGHT = 95;
const JOHN_WEIGHT = 85;
const MARK_HEIGHT = 1.88;
const JOHN_HEIGHT = 1.76;

const MARK_BMI = MARK_WEIGHT / MARK_HEIGHT ** 2;
const JOHN_BMI = JOHN_WEIGHT / JOHN_HEIGHT ** 2;

const markHigherBMI = MARK_BMI > JOHN_BMI;
console.log(MARK_BMI, JOHN_BMI);
console.log('Does Mark has higher BMI? ' + '\nThe result is ' + markHigherBMI);

// Leet code problem

/**
 * Definition for singly-linked list.
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
// var detectCycle = function (head) {
//    let mainArray = [];
//    let cpyArr = [];

//    let headList = head;

//    let notedIndex = -1;
//    let sizeMainArray = 0;
//    let myStack = [];
//    let sizeStack = -1;
//    let index = 0;
//    let headCpy;
//    let matched = true;
//    let nowInsert = false;
//    let fullMatch = false;

//    while (headList !== null) {
//       if (index === 0) {
//          //console.log('Atleast 1 val');

//          mainArray.push(headList.val);
//          headList = headList.next;
//          ++sizeMainArray;
//       }
//       //console.log('Size is :' + mainArray.length);
//       //console.log(mainArray);
//       if (mainArray.length > 0) {
//          //console.log('main arr.length > 0');
//          for (let i = 0; i < sizeMainArray; i++) {
//             if (!headList) {
//                return null;
//             }
//             //console.log(
//             //    'Looping over main arr' +
//             //       ' encountered mainarr elem : ' +
//             //       mainArray[i] +
//             //       ' headlist val is ' +
//             //       headList.val
//             // );

//             if (mainArray[i] === headList.val) {
//                //console.log('Match');
//                notedIndex = i;

//                myStack = mainArray.slice(i + 1, mainArray.length).reverse();

//                sizeStack = myStack.length;
//                //console.log('Main array is : ' + mainArray);
//                //console.log(
//                // `Noted index is ${notedIndex} and stack is ${myStack} with size ${sizeStack}`
//                //);
//                headCpy = headList;
//                let newCount = 0;
//                while (headCpy) {
//                   // console.log(
//                   //    'Matching with stack top value: ' +
//                   //       myStack[sizeStack - 1] +
//                   //       ' with listcpy val: ' +
//                   //       headCpy.val
//                   // );
//                   cpyArr.push(headCpy.val);
//                   if (newCount === 0) {
//                      headCpy = headCpy.next;
//                   }
//                   ++newCount;
//                   //console.log('Will now scan in stack val: '+ headCpy.val);
//                   if (myStack[sizeStack - 1] === headCpy.val) {
//                      myStack.pop();
//                      --sizeStack;
//                      headCpy = headCpy.next;
//                      // console.log(
//                      //    'POPPED now stack is ' +
//                      //       myStack +
//                      //       ' with size ' +
//                      //       sizeStack
//                      // );
//                   } else {
//                      // console.log(
//                      //    'Stack not fully size to 0 NO FULL MATCH main arr before: ' +
//                      //       mainArray +
//                      //       ' cpyArray: ' +
//                      //       cpyArr +
//                      //       ' will be pushed to mainArr'
//                      // );
//                      notedIndex = -1;
//                      mainArray = [...mainArray, ...cpyArr];
//                      //console.log('Main arr now after cpy is : ' + mainArray);
//                      matched = false;
//                      break;
//                   }

//                   if (sizeStack === 0) {
//                      console.log('FULL MATCH DETECTED _________');
//                      fullMatch = true;
//                   }
//                }
//             } else {
//                nowInsert = true;
//             }
//             if (matched === false) {
//                break;
//             }
//             if (fullMatch === true) {
//                break;
//             }
//          }

//          if (fullMatch === true) {
//             break;
//          }

//          if (nowInsert === true && matched === true) {
//             //console.log('Inserting ' + headList.val + ' in mainArray');
//             mainArray.push(headList.val);
//             //console.log('Now main array is ' + mainArray);
//             nowInsert = false;
//          }
//       }
//       sizeMainArray = mainArray.length;
//       matched = true;

//       if (matched === 0) {
//          break;
//       }
//       console.log('FINAL RESULT IS :' + notedIndex);
//       ++index;
//       headList = headList.next;
//       if (index > 100) {
//          return null;
//          break;
//       }
//       let steps = 0;
//       let ll = head;
//       while (steps < notedIndex) {
//          if (!ll) {
//             return null;
//          }
//          ll = ll.next;
//       }
//       return ll.next;
//    }
//    // return node distance notedIndex from our ll
// };

let result = 0;
let fact = function (n) {
   if (n === 0) {
      return 1;
   } else {
      return fact(n - 1) * n;
   }
};

console.log('THE HECK');
console.log(fact(4));
