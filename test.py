num = [1,2,3,4,5,6,7]

def twoSum(nums, target):    
    for ind, i in enumerate(nums):
        first = i
        second = nums[ind+1]
        if (first + second) == target:
            return [ind, ind+1]
            break
            


print(twoSum(num, 7))