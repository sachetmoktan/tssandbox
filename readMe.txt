1.
Typescript is subset of Javascript. Browser cannot understand typescript. So, tsc converts Typescript file into Javascript file. tsc stands for typescript compiler.

To install Typescript globally in machine:
cmd run as admin: > npm install -g typescript
-----------------------------------------------------------------------------------------------------------------
2.
Create index.js file.
-----------------------------------------------------------------------------------------------------------------
3.
Create types.ts file.
Write typescipt code inside it.
cmd run as admin: inside tssandbox >  tsc types.ts -w
This code will run tsc to convert types.ts file into types.js. types.js file will be created automatically. Here, -w will reload the browser everytime we reload typescipt file.
-----------------------------------------------------------------------------------------------------------------
4.
Similarly for other .ts files.
