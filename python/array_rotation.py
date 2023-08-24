'''
There are two types of array rotation left side rotation or right side rotatiion one can visualise it 
by stick in right and left side in order to understand the shifting positions and indexes
'''


# in left rotation the first element becomes the last element 
# and so on

# ========================================== ONE BY ONE ===========================================================

def leftArrayRotation(arr:list,d:int)->list:  # [2,3,4,5,6]
    currentStep = 0
    while currentStep < d :
        temp = arr[0]
        for i in range(0,len(arr)):

            if i < len(arr) - 1 :
                arr[i] = arr[i+1]
            else:
                arr[i] = temp 
        currentStep += 1          
    return arr         


arr = [2,3,4,5,6]
print(leftArrayRotation(arr,2))            

# time complexity :  O(n*d)
# space complexity : O(1)

def right_rotate_one_by_one(arr, steps):
    n = len(arr)
    steps = steps % n 

    for _ in range(steps):
        last_element = arr[n - 1]

        for i in range(n - 1, 0, -1):
            arr[i] = arr[i - 1]

        arr[0] = last_element
    return arr


arr = [2,3,4,5,6,5,6,7,8,9]
print(right_rotate_one_by_one(arr,5))     


# ===================================================================================================================


# ========================================== ARRAY ROTATION BY ARRAY METHOD ==========================================


''''
Unlike we did earlier here we will create a new array and initialize it with value we want to be replaced for example
consider 

```python

arr = [2,3,4,5,6,7]

```

case right-rotation by 2 steps

the last two items ie 6,7 will be replaced by first two indexes, so in this case we will create a new array with two items 6,7 
and then add the rest one ie (2,3,4,5)

case left-rotation by 2 steps

the first two items ie 2,3 will be replaced by last two indexes, so in this case we will create a new array with two items 2,3 
and then insert the rest before 2,3 ie (4,5,6,7)

'''


def leftRotationByArray(arr:list,d:int):
    k  = len(arr)
    anotherArr = arr[d::] + arr[:d]
    return anotherArr

arr = [1,2,3,4,5,6]
print(leftRotationByArray(arr,2))


# Time complexity = O(n)
# Space Complexity = O(n)


#============================================================================================================

