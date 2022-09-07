/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
function findMedianSortedArrays(nums1, nums2) {
  let shortArr;
  let longArr;
  let median;
  if (nums1.length > nums2.length) {
    shortArr = nums2;
    longArr = nums1;
  } else {
    shortArr = nums1;
    longArr = nums2;
  }
  for (let i = 0; i < shortArr.length; i++) {
    temp1 = shortArr[i];
    console.log(temp1);
    for (let j = 0; j < longArr.length; j++) {
      if (temp1 == longArr[j]) {
        longArr.splice(j + 1, 0, temp1);
        break;
      }
      if (temp1 < longArr[0]) {
        longArr.unshift(temp1);
        break;
      }
      if (temp1 > longArr[j] && temp1 < longArr[j + 1]) {
        longArr.splice(j + 1, 0, temp1);
        break;
      }
      if (temp1 > longArr[longArr.length - 1]) {
        longArr.push(temp1);
        break;
      }
    }
  }
  if (longArr.length % 2 == 1) {
    median = longArr[Math.floor(longArr.length / 2)];
  } else {
    median =
      (longArr[longArr.length / 2] + longArr[longArr.length / 2 - 1]) / 2;
  }
  console.log(longArr);

  return median;
}

nums1 = [2, 2, 4, 4];
nums2 = [2, 2, 4, 4];

console.log(findMedianSortedArrays(nums1, nums2));
