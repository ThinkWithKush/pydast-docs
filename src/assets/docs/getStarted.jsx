const getStarted = [
  ["page-title", "Get Started"],
  ["subheading", "Installation"],
  ["highlight","Make sure to have Python installed in your system before installing the module"],
  ["text", <div>The easiest and most preferred method is to install directly from pip (Python Installs Package) from the pydast distribution available on PyPi.org<br/>To install the package, run the following command in your Terminal</div>],
  ["shell-block","pip install pydast"],
  ["text",<div className="text-center"><strong>OR</strong></div>],
  ["text",<div>Another way to install the package is to download the wheel file of the package directly from <a className="text-blue-200 font-semibold hover:underline hover:font-bold" href="https://pypi.org/project/pydast/">PyPI.org</a></div>],
  ["text",<div>After downloading the wheel file of the package 
    <ul className="first:pt-2">
      <li className="p-1"> 1. Open the Folder where you have downloaded the Wheel (.whl) File of the package </li>
      <li className="p-1"> 2. Open Powershell or Terminal Window in the Folder </li>
      <li className="p-1"> 3. Run the following command to install the file </li>
    </ul>
    </div>],
  ["shell-block","pip install pydast-0.0.1-py3-none-any.whl"],
  ["break"],

  ["subheading", "Importing Module in local python file"],
  ["text", <div>To include and use the package in your python project, use the <span className="code">import</span> keyword </div>],
  ["text","The most general way is to just import and start using. This can be done simply as : "],
  ["codeblock","import pydast\n\nobj = pydast.Structure()"],
  ["text",<div>However, now in order to any structure available in the package, you will have to use the full package-name in order to create an instance of a structure available in it. So you'll do something like <span className="code">{"pydast.Structure()"}</span></div>],
  ["text",<div>Rather create an alias name for the package using the <span className="code">as</span> keyword</div>],
  ["codeblock","import pydast as pds\n\nobj = pds.Structure()"],
  ["text",<div>You can also import just the Structures directly. This way, you can use them without requirement of referencing them through the module.</div>],
  ["text",<div>This can be done using the <span className="code">from</span> keyword </div>],
  ["codeblock","from pydast import Structure\n\nobj = Structure()"],
  ["break"],

  ["subheading","Basic Usage"],
  ["text",<div>Pydast provides Data Structures in the form of Python classes.</div>],
  ["text",<div> So in order to use those classes, you can simply invoke the class to initialize the Object using the constructor</div>],
  ["text",<strong>An example of creating a heap object is as below : </strong>],
  ["codeblock","from pydast import minHeap\n\nhp=minHeap()"],
  ["text", "Next, you can use the Methods associated with that Object to perform the desired task"],
  ["text",<strong>An example of using an associated method is as below : </strong>],
  ["codeblock",`from pydast import Trie\n\ntr = Trie()\ntr.add("Hello, World")`],
  ["break"]
]

export default getStarted;