let tab1 = [1, 2, 3, 4]
let tab2 = [6, 7, 9, 10]


function findMedianSortedArrays(nums1, nums2) {
  // TODO : écrire ton code ici
  for(let i=0; i < nums2.length; i++){
    nums1.push(nums2[i])
  }
   nums1.sort((a, b) => a - b);
  if(nums1.length % 2 === 0){
    let total = 0;
    for(let i = 0; i < nums1.length;i++){
      total = total + nums1[i]
    }
    let valeur1 = Math.floor(nums1.length/2)
    let valeur2= valeur1 -1
    let mediane = (nums1[valeur1] + nums1[valeur2]) /2
    return mediane;
  } else{
    return nums1[Math.floor(nums1.length / 2)]
  }
}


// --------------------
// Tests (au moins 3)
// --------------------
console.log(findMedianSortedArrays([1, 3], [2])); // attendu: 2
console.log(findMedianSortedArrays([1, 2], [3, 4])); // attendu: 2.5
console.log(findMedianSortedArrays([], [1])); // attendu: 1 (cas limite)
