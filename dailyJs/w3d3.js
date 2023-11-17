/* Secret Key
Problem:
You are given a variable, 'nestedObj', containing a JSON string representing a deeply nested object with multiple sub-objects and arrays. Your task is to parse, modify, then stringify nestedObj as detailed in the instructions below:

Instructions:
1. Using variable reassignment, parse nestedObj into a Javascript object.                  Asking us to parse nestedObj into JS object
2. Access the nested 'secretKey' property and modify its value to "I found it!".           Access 'secretKey' and change its value to "I found it!"
3. Using variable reassignment, convert nestedObj back into a JSON string.                 Convert nestedObj back into a JSON string.
Note:
We encourage the use of console.logs to view the contents of nestedObj along the way in VSCode or Replit to aid in troubleshooting, but DO NOT include any console.logs in your submitted solution! */

let nestedObj = '{"name": "John", "age": 30, "city": "New York", "details": {"hobbies": ["reading", "coding", "gaming"], "education": {"highSchool": "XYZ High School", "university": "ABC University", "secretKey": "oldValue"}}}';
// name = John
// age = 30
// city = New York
// details =
//      hobbies = [reading, coding, gaming]
//      education =
//          highschool = XYZ High School
//          university = ABC University
//          secret key = old value

// Step 1:
nestedObj = JSON.parse(nestedObj)
// console.log(nestedObj)

// Step 2:
nestedObj.details.education.secretKey = "I found it!"
// console.log(nestedObj)

// Step 3:
nestedObj = JSON.stringify(nestedObj)
// console.log(nestedObj)
