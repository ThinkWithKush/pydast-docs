const heapMethods = {
  header:["Operation","Info","Big-O Complexity"],
  body:[
    ["push","Add an Element into the Heap"],
    ["pop","Take out the minimum value element in the heap"],
    ["peek","Checking the minimum value element in the heap"],
    ["isEmpty", "Checking if the heap is Empty"],
    ["updateKey", "Udating the Comparision Key for minimum values"]
  ],
}

const heaps = [
  ["page-title", "Heaps"],
  ["subheading","Introduction"],
  ["text", "Heaps are powerful Data Structures which help in maintaining record of the lowest value in a list of values. The list of values can keep changing, and heaps can have fast insertion and fast retrieval of the smallest value"],
  ["text", <div>Two types of heap objects are available in Pydast</div>],
  ["text", <div><span className="code">minHeap</span> : Tracks the minimum value element<br/><span className="code">maxHeap</span> : Tracks the maximum value element</div>],
  ["break"],

  ["subheading","List of Operations"],
  ["text",<strong>A List of all the methods available for Heaps in pydast are as follows</strong>],
  ["table",heapMethods],
  ["break"],

  ["subheading","Initializing the Heap"],
  ["text","The way to initialize a heap object is to invoke the Heap class constructor"],
  ["codeblock","from pydast import minHeap\n\nhp = minHeap()"],
  ["break"],

  ["subheading","Operations"],
  ["highlight","Only comparable values should be added to the heap. In cases of uncomparable values, erros might occur"],
  ["text",<strong>Push</strong>],
  ["text","Pushing is simply adding a value to the Heap"],
  ["text",<strong>Pop</strong>],
  ["text","Taking the Highest Priority Value out of the tree"]
]

export default heaps;