''' 
 In order to reverse an array using the iterative method where you need to start the loop from start = 0
 to end = n-1, where n = len(array), after each iteration, do start +1 and end -1
'''

array = [10,20,30,40]


def reverse(item:list)->list:
    start = 0   
    end = len(item) - 1
    
    # This approach can also be used at the same time here a temporary variable is created behind the scenes by the 
    # interpreter
    # while start < end:
    #     A[start], A[end] = A[end], A[start]
    #     start += 1
    #     end -= 1
    
    while start<end:
        temp = array[start]
        array[start] = array[end]
        array[end] = temp
        start+=1
        end-=1
    return item


print(reverse(array))



