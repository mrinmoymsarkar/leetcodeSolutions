//https://leetcode.com/problems/two-sum/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {

let indices= []
    for(let i = 0; i<nums.length ; i++){
        for(let j = 0; j<nums.length ; j++){
        if(nums[i] + nums[j] == target && i !== j ){
            indices=[i, j]
            console.log(indices)
            return indices
        }
    }
    } 
};
