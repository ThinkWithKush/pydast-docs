const getStarted = [
  ["page-title", "Get Started"],
  ["subheading", "Installation"],
  ["general-text", <div>The easiest and most preferred method is to install directly from pip (preferred package installer) from the pydast distribution available on PyPi.org<br/>To install the package, run the following command in your Terminal</div>],
  ["shell-block","pip install pydast"],
  ["general-text","Make sure you have Python installed in your system before running this command"],
  ["general-text",<div className="text-center"><strong>OR</strong></div>],
  ["general-text",<div>Another way to install the package is to download the wheel file of the package directly from <a className="text-blue-200 font-semibold hover:underline hover:font-bold" href="https://pypi.org/project/pydast/">here</a></div>],
  ["general-text",<div>After downloading the wheel file of the package 
    <ul>
      <li className="p-1"> 1. Open the Folder where you have downloaded the Wheel (.whl) File of the package </li>
      <li className="p-1"> 2. Open Powershell or Terminal Window in the Folder </li>
      <li className="p-1"> 3. Run the following command to install the file </li>
    </ul>
    </div>],
  ["shell-block","pip install pydast-0.0.1-py3-none-any.whl"],
  ["break",<div><br/></div>],
  ["subheading", "Importing Module in local python file"],
  ["codeblock","import pydast as pds"]
]

export default getStarted;