"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[877],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>u});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),h=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=h(e.components);return n.createElement(o.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=h(a),d=r,u=c["".concat(o,".").concat(d)]||c[d]||m[d]||i;return a?n.createElement(u,s(s({ref:t},p),{},{components:a})):n.createElement(u,s({ref:t},p))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,s=new Array(i);s[0]=d;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l[c]="string"==typeof e?e:r,s[1]=l;for(var h=2;h<i;h++)s[h]=a[h];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},9701:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>h});var n=a(7462),r=(a(7294),a(3905));const i={},s="Array Searching",l={unversionedId:"python/linear_data_structures/array/basic_operations/searching",id:"python/linear_data_structures/array/basic_operations/searching",title:"Array Searching",description:"Searching Algorithms are designed to check for an element or retrieve an element from any data structure where it is stored.",source:"@site/docs/python/linear_data_structures/array/basic_operations/searching.md",sourceDirName:"python/linear_data_structures/array/basic_operations",slug:"/python/linear_data_structures/array/basic_operations/searching",permalink:"/DSA/docs/python/linear_data_structures/array/basic_operations/searching",draft:!1,editUrl:"https://github.com/GDSC-BIT-Raipur/DSA/tree/main/docs/python/linear_data_structures/array/basic_operations/searching.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Array Rotation method",permalink:"/DSA/docs/python/linear_data_structures/array/basic_operations/array_rotation"},next:{title:"Implementation in python",permalink:"/DSA/docs/python/"}},o={},h=[{value:"Linear Search",id:"linear-search",level:2},{value:"How linear search works ?",id:"how-linear-search-works-",level:3},{value:"Linear Search Complexity Analysis",id:"linear-search-complexity-analysis",level:3},{value:"Advantages",id:"advantages",level:3},{value:"Disadvantages",id:"disadvantages",level:3},{value:"When to use ?",id:"when-to-use-",level:3},{value:"Interval search",id:"interval-search",level:2},{value:"Binary Search",id:"binary-search",level:3},{value:"How binary search works ?",id:"how-binary-search-works-",level:2},{value:"Complexity Analysis",id:"complexity-analysis",level:3},{value:"Advantages",id:"advantages-1",level:3},{value:"Disadvantages",id:"disadvantages-1",level:3},{value:"When to Use Binary Search",id:"when-to-use-binary-search",level:3}],p={toc:h},c="wrapper";function m(e){let{components:t,...i}=e;return(0,r.kt)(c,(0,n.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"array-searching"},"Array Searching"),(0,r.kt)("p",null,"Searching Algorithms are designed to check for an element or retrieve an element from any data structure where it is stored."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"array_search_image",src:a(5499).Z,width:"1400",height:"368"})),(0,r.kt)("p",null,"Based on the type of search operation, these algorithms are generally classified into two categories:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"- Linear Search \n- Interval Search\n")),(0,r.kt)("h2",{id:"linear-search"},"Linear Search"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"array_search_image",src:a(5499).Z,width:"1400",height:"368"})),(0,r.kt)("p",null,"Linear Search is defined as a sequential search algorithm that starts at one end and goes through each element of a list until the desired element is found, otherwise the search continues till the end of the data set."),(0,r.kt)("h3",{id:"how-linear-search-works-"},"How linear search works ?"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"array_search_image",src:a(3656).Z,width:"438",height:"180"})),(0,r.kt)("p",null,"List: ","[10, 14, 18, 26, 31, 33, 35, 42, 44]"),(0,r.kt)("p",null,"Finding 33 in a List"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Steps:")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Start at the beginning:")," Begin by looking at the first number, which is 10.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Check each number:")," Move through the list one by one.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Match found:")," At the 6th number, which is 33, a match is found!")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Stop:")," The search stops since the desired number has been found."))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'def find(arr: list, key: int) -> int:\n    """\n    Performs a linear search to find a key in the given array.\n    Parameters:\n    arr (list): The list of elements to search through.\n    key (int): The element to search for in the array.\n    \n    Returns:\n    int: The index of the key if found, -1 if not found.\n    """\n    for i in range(0, len(arr)):  # Loop through each index in the array.\n        if arr[i] == key:  # Compare the element at the current index with the key.\n            return i  # If a match is found, return the index.\n    return -1  # If the loop completes without finding a match, return -1.\n\n# Example usage\narray = [10, 14, 18, 26, 31, 33, 35, 42, 44]\nsearch_key = 33\nprint(find(array, search_key))\n\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"5\n")),(0,r.kt)("h3",{id:"linear-search-complexity-analysis"},"Linear Search Complexity Analysis"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Best Case Complexity:")," In the best case, the desired element is the first element in the list. This results in only one comparison, making the best-case time complexity ",(0,r.kt)("strong",{parentName:"p"},"O(1)"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Average Case Complexity:")," On average, in an unordered list, you might need to search through half of the list's elements before finding the target element. This leads to an average time complexity of ",(0,r.kt)("strong",{parentName:"p"},"O(n/2)"),", which simplifies to ",(0,r.kt)("strong",{parentName:"p"},"O(n)"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Worst Case Complexity:")," In the worst case, you might need to search through all the elements in the list before finding the target or concluding that it's not there. The worst-case time complexity is ",(0,r.kt)("strong",{parentName:"p"},"O(n)"),", where ",(0,r.kt)("strong",{parentName:"p"},"n")," is the number of elements in the list.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Space Complexity:")," Linear search doesn't require additional data structures, resulting in a space complexity of ",(0,r.kt)("strong",{parentName:"p"},"O(1)"),", indicating a constant memory usage."))),(0,r.kt)("h3",{id:"advantages"},"Advantages"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"- Linear search can be used irrespective of whether the array is sorted or not. It can be used on arrays of any data type.\n- Does not require any additional memory.\n- It is a well-suited algorithm for small datasets.\n")),(0,r.kt)("h3",{id:"disadvantages"},"Disadvantages"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"- Linear search has a time complexity of O(N), which in turn makes it slow for large datasets.\n- Not suitable for large arrays.\n")),(0,r.kt)("h3",{id:"when-to-use-"},"When to use ?"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"- When we are dealing with a small dataset.\n- When you are searching for a dataset stored in contiguous memory.\n")),(0,r.kt)("h2",{id:"interval-search"},"Interval search"),(0,r.kt)("p",null,"These algorithms are specifically designed for searching in sorted data-structures. These type of searching algorithms are much more efficient than Linear Search as they repeatedly target the center of the search structure and divide the search space in half. For Example: Binary Search."),(0,r.kt)("h3",{id:"binary-search"},"Binary Search"),(0,r.kt)("p",null,"Binary Search is defined as a searching algorithm used in a sorted array by repeatedly dividing the search interval in half. The idea of binary search is to use the information that the array is sorted and reduce the time complexity to O(log N). "),(0,r.kt)("h2",{id:"how-binary-search-works-"},"How binary search works ?"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"binary_search",src:a(9508).Z,width:"640",height:"426"})),(0,r.kt)("p",null," Binary Search for 37"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"List:")," 1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 23, 29, 31, 37, 35, 43, 47, 53, 59"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Steps:")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Start in the Middle:")," You start by looking at the middle number, which is 19."),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Click to expand: How to Calculate the Middle Number"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Calculating the Middle Number:")),(0,r.kt)("p",{parentName:"li"},"To find the middle number for binary search:"),(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"Identify the index of the first number in your range."),(0,r.kt)("li",{parentName:"ol"},"Identify the index of the last number in your range."),(0,r.kt)("li",{parentName:"ol"},"Add the index of the first number to the index of the last number."),(0,r.kt)("li",{parentName:"ol"},"Divide the sum by 2."),(0,r.kt)("li",{parentName:"ol"},"The result is the index of the middle number.")),(0,r.kt)("p",{parentName:"li"},"For example, in the list ",(0,r.kt)("inlineCode",{parentName:"p"},"[1, 3, 5, 7, 9, 11]"),":"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"First number index: 0"),(0,r.kt)("li",{parentName:"ul"},"Last number index: 5"),(0,r.kt)("li",{parentName:"ul"},"(0 + 5) // 2 = 2")),(0,r.kt)("p",{parentName:"li"},"Since indices are whole numbers, the middle number is the element at index 2: 5.")))),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Compare with 37:")," You compare 19 with 37. Since 37 is greater than 19, you know you should look to the right.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"New Middle:")," You now focus on the right half of the list: 23, 29, 31, 37, 35, 43, 47, 53, 59.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Compare with 37 Again:")," You compare the middle number, which is 35, with 37. This time, 37 is greater than 35, so you keep moving to the right.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"New Middle:")," You're now left with 37, 43, 47, 53, 59.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Found!:")," The middle number is 37, which is exactly what you were searching for! You found it."))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"array = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 23, 29, 31, 37, 35, 43, 47, 53, 59]\n\ndef binary_find(arr:list,key:int,start:int,end:int)->int:\n    while start <= end:\n        mid = (start+end)//2\n        if arr[mid] == key:\n            return mid\n        elif arr[mid]>key:\n            end -= 1\n        elif arr[mid]<key:\n            start+= 1    \n\nprint(binary_find(array,37,0,len(array)-1))\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"13\n")),(0,r.kt)("h3",{id:"complexity-analysis"},"Complexity Analysis"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Time Complexity: O(log n)"),(0,r.kt)("li",{parentName:"ul"},"Space Complexity: O(1)")),(0,r.kt)("p",null,"Binary search reduces the search space by half with each comparison, leading to a logarithmic growth rate in relation to the size of the array."),(0,r.kt)("h3",{id:"advantages-1"},"Advantages"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Efficiency"),": Binary search is highly efficient, making it ideal for large datasets. Its logarithmic time complexity ensures rapid convergence to the target element.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Applicability"),": Binary search is specifically designed for sorted arrays. If the data is presorted, binary search provides a significant performance advantage over linear search.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Deterministic"),": Binary search guarantees a definite result \u2013 either the target element is found, or it's determined that the element doesn't exist in the array."))),(0,r.kt)("h3",{id:"disadvantages-1"},"Disadvantages"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Sorted Array Requirement"),": Binary search only works on sorted arrays. If the data isn't sorted, you'd need to sort it first, which could add an O(n log n) step.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Space Overhead"),": Binary search requires minimal additional memory (O(1)) for its iterative implementation. However, recursive implementations may lead to space overhead due to the call stack.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Lack of Flexibility"),": Binary search doesn't adapt well to dynamic or frequently changing data."))),(0,r.kt)("h3",{id:"when-to-use-binary-search"},"When to Use Binary Search"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Sorted Data"),": Binary search is most effective when working with sorted data. If the data can be maintained in a sorted order, binary search offers a significant advantage over linear search.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Large Datasets"),": When dealing with large datasets, binary search's logarithmic time complexity outperforms linear search's linear time complexity.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Predetermined Ordering"),": When the data access pattern is known and doesn't involve frequent insertions or deletions, binary search can be highly efficient."))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Click to expand:  Searching Algorithms"),(0,r.kt)("p",null,' The "best" searching algorithm depends on the specific context and requirements of the search problem. Different algorithms have different strengths and weaknesses, and the choice of algorithm often depends on factors like the size of the dataset, the nature of the data, and the trade-off between time complexity and space complexity. Here are a few commonly used searching algorithms and their characteristics:'),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Linear Search"),": This is the simplest searching algorithm, where each element in the list is checked one by one until the target element is found or the list is exhausted. It works well for small datasets, but its time complexity is O(n) in the worst case, where n is the number of elements in the list.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Binary Search"),": Binary search is highly efficient but requires a sorted list. It works by repeatedly dividing the search interval in half. It has a time complexity of O(log n), making it suitable for large datasets.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Hashing"),": Hashing involves mapping keys to indices in an array using a hash function. If implemented properly, hash-based searching can have an average-case time complexity of O(1), making it extremely fast. However, handling collisions and choosing a good hash function can be challenging."))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"**Note** : Must checkout hashing if want to search in unsorted array\n")),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Jump Search"),": Jump search is similar to binary search but works on a sorted block of data. It jumps ahead by a fixed number of steps, and when a value greater than the target is found, it performs a linear search within the block. It combines aspects of linear and binary search algorithms.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Interpolation Search"),": This algorithm works best for uniformly distributed sorted datasets. It estimates the position of the target element based on its value and the distribution of the data, which can result in faster convergence than binary search for some datasets.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Exponential Search"),": Exponential search is especially useful when the target element lies towards the beginning of a sorted list. It involves doubling the search range until an interval containing the target element is found, and then performing a binary search within that interval.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Ternary Search"),': Ternary search is similar to binary search but divides the dataset into three parts instead of two. It can be effective in cases where the data has a "peak" or "valley" pattern.')),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Fibonacci Search"),": This is a variant of binary search that divides the dataset into Fibonacci-number-sized subarrays. It can be useful for large datasets where the size is not known in advance."))),(0,r.kt)("p",null,'The "best" algorithm depends on your specific use case. For example, if you have a small dataset, a linear search might be sufficient. If you have a large sorted dataset, binary search or interpolation search could be more appropriate. If you have a hash table available, hashing might provide fast access. Always consider the characteristics of your data and the requirements of your search when selecting an algorithm.')),(0,r.kt)("p",null,"Q1 . Given an array with all distinct elements, find the largest three elements. Expected time complexity is O(n) and extra space is O(1). "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"arr  = [10,4,3,50,23,90]\n# using linear search \n\ndef findLargest(arr:list)->tuple:\n    first = second = third = 0\n    for i in range (0,len(arr)):\n        if (arr[i] > first):\n            third = second\n            second = first\n            first =arr[i]\n        elif (arr[i] > second):\n            third = second\n            second = arr[i]\n        elif (arr[i]>third):\n            third = arr[i]\n    return (third,second,first)\n\nprint(findLargest(arr))        \n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"(23, 50, 90)\n")),(0,r.kt)("p",null,"Q2 . Given an array arr[] of size N-1 with integers in the range of ","[1, N]",", the task is to find the missing number from the first N integers."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"}," arr = [1,2,4,6,3,7,8]\n N = 8\n output = 5 \n")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Explanation: The missing number between 1 to 8 is 5")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"# By adding every number\ndef checkMissingNumber(arr:list,n:int)->int:\n    sum = n*(n+1)//2\n    listSum = 0\n    for i in range(0,len(arr)+1):\n        listSum+=i\n    return sum -listSum\n\narr = [1,2,4,6,3,7,8]\nN = 8\nprint(checkMissingNumber(arr,N))\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"8\n")),(0,r.kt)("p",null,"Q3. Given an array of integers arr[], The task is to find the index of first repeating element in it i.e. the element that occurs more than once and whose index of the first occurrence is the smallest. "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"Input: arr[] = {10, 5, 3, 4, 3, 5, 6}\nOutput: 5 \n")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Explanation: 5 is the first element that repeats")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"# find repeating element\ndef findRepeatingElement(arr:list)->int:\n    for i in range(0,len(arr)):\n        for j in range(i+1,len(arr)):\n            if arr[j] == arr[i]:\n                return arr[i]\n    return -1 \narr =  [10, 5, 3,4, 3, 5, 6]  \nprint(findRepeatingElement(arr))\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"5\n")),(0,r.kt)("p",null,"However the above approach is not so efficient so i wont recommend this also uses two loops, instead you can see the below approach which utilses ",(0,r.kt)("inlineCode",{parentName:"p"},"Set"),". ",(0,r.kt)("a",{parentName:"p",href:"%22https://www.w3schools.com/python/python_sets.asp%22"},"Set")," is a collection data type which has property of storing one unique elements. searching for item inside set is not performed linearly it uses hashing hence time complexity of O(1) which makes this approach more efficient even dealing with larger arrays"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"def findRepeatingElemenUsingSet(arr:list)->int:\n    items = set()\n    for element in arr:\n        if element in items:\n            return element\n        else :\n            items.add(element)    \n\n    return -1        \narr =  [10, 5, 3,4, 3, 5, 6]  \nprint(findRepeatingElement(arr))\n\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"5\n")),(0,r.kt)("p",null,"Q4. Given a binary array arr[] of size N, which is sorted in non-increasing order, count the number of 1\u2019s in it. "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"Input: arr[] = {1, 1, 0, 0, 0, 0, 0}\nOutput: 2\n\nInput: arr[] = {1, 1, 1, 1, 1, 1, 1}\nOutput: 7\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"# Using binary Search instead of linear search \ndef countOnes(arr:list)->int:\n    start = 0\n    end = len(arr) -1\n    while start <= end:\n        mid = (start + end)//2\n        if arr[mid] == 1 and  arr[mid+1] == 0:\n            return mid + 1\n        elif arr[mid] == 1 and arr[mid+1]!= 0:\n            start = mid + 1\n        elif arr[mid] == 0 :\n            end = mid -1\n        \n\narr = [0,0,0,0,0,0,0]\nfor i in range(100):\n    arr.insert(0,1)  \nprint(arr.count(1))\nprint(countOnes(arr))     \n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"100\n100\n")))}m.isMDXComponent=!0},9508:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/binary-search-sequence-search-39acddd07ad4ba584d6aee2e8c46b9e5.gif"},3656:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/linear_search_gif-f75e2ce22ccf2c1f5a23c471ee505440.gif"},5499:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/search-1b1874901233ea5431f9bff82599348b.png"}}]);