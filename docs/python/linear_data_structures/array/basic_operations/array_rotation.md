# Array Rotation method 

Using reversal algorithm here we reverse two arrays


```python
arr = [1,2,3,4,5,6,7]

def reverse(arr:list,start:int,end:int)->list:
    while start < end:
        arr[start],arr[end] = arr[end],arr[start]
        start+=1
        end-=1
    return arr

# d = 3 
def rightRotateByJuggling(arr:list,d:int)->list:
    reverse(arr,0,d)
    reverse(arr,d+1,len(arr)-1)
    reverse(arr,0,len(arr)-1)
    return arr   

        
print(rightRotateByJuggling(arr,3))
```
