const PriorityQueueMethods = {
  body:[
    ["push","Add an Element into the Priority Queue"],
    ["pop","Take out the minimum value element in the heap"],
    ["peek","Checking the minimum value element in the heap"],
    ["isEmpty", "Checking if the heap is Empty"],
    ["updateKey", "Udating the Priority Key for minimum values"]
  ],
}

const priority_queue = [
  ["page-title", "Priority Queue"],
  ["subheading","Introduction"],
  ["text", <div>Priority Queues are powerful Data Structures which help in maintaining record of the value having lowest Priority in a list of values. <br/>
  The default priority is the value of the objects itself.<br/>
  The list of values can keep changing, and Priority Queues can have fast insertion and fast retrieval of the lowest Priority value</div>],
  ["break"],

  ["subheading","List of Operations"],
  ["table", PriorityQueueMethods],
  ["break"],

  ["subheading","Initializing and Constructor"],
  ["text","The way to initialize a Priorty Queue object is to invoke the PriorityQueue class constructor"],
  ["codeblock","from pydast import PriorityQueue\n\nhp = PriorityQueue()"],
  ["text",<div>The constructor declaration for PriorityQueue is as below </div>],
  ["codeblock","class PriorityQueue:\n\tdef __init__(self,arr=[],key=lambda x:x,reverse=False): ..."],
  ["text",<div>
    
  </div>],
  ["break"],

  // ["subheading","Operations"],
  // ["highlight","Only comparable values should be added to the heap. In cases of uncomparable values, erros might occur"],
  // ["text",<strong>Push</strong>],
  // ["text","Pushing is simply adding a value to the Heap"],
  // ["text",<strong>Pop</strong>],
  // ["text","Taking the Highest Priority Value out of the tree"],
  // ["break"],

  // ["subheading","Working with keys"],
  // ["text",<div>Pydast heaps also work based on Comparision keys. Comparision Keys here refer to functions that returns some value, and if you add a key, comparisions will be done based on the value returned by key</div>],
  // ["text",<div>Formally, the minHeap will return the element which has the lowest value after passing to the key.</div>],
]

export default priority_queue;