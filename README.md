# book-library

Making a library app that takes user input of Book title, author, number of pages, and if it has been read completely. Uses HTML, CSS, JS.





Use as future project template for ESLint & Prettier. 

Setting up prettier
1) npm install --save-dev --save-exact prettier in the repo you’re working on so on a per project basis
2) echo {}> .prettierrc.json to create a file that is needed to recognise this repo uses prettier
3) create a .prettierignore file with touch .prettierignore and put files to be ignored in it based on your ESLintignore and/or gitignore file (gitignore would be recommended to copy over)
4) install Prettier extension in VSCode to be able to format using a shortcut or set it up to run on save etc.

Note for step 3:
My .prettierignore file is set up like this, not sure if this is correct yet, so take this with a grain of salt and do your own research for now:
node_modules
package-lock.json
build
.DS_Store
CVS
Thumbs.db

For more info on setting up a gitignore file: https://www.freecodecamp.org/news/gitignore-file-how-to-ignore-files-and-folders-in-git/

Setting up ESLint
5) run npm init or npm init --yes (the last to answer the prompts with yes automatically) in the repo/project you’ll be working on. This is to get a package.json file in there if it's not there yet.

6/7) npm init @eslint/config to hit two birds with one stone (intitialize and creating the config file) 
NOTE there was another 6/7 option I removed after feedback above in this thread

8) configure the resulting eslintrc.js file first by the prompts and/or review https://www.digitalocean.com/community/tutorials/linting-and-formatting-with-eslint-in-vs-code for prompt decisions and later adjusting of config 
9) install the ESLint VSCode extension for visual clues during programming and maybe even configure it to do it's magic on each save automatically, also explained on the above DigitalOcean lesson

Setting up eslint-config-prettier
10) npm install --save-dev eslint-config-prettier in the same repo to make ESLint and Prettier work nicely together without conflict
11)   add "prettier" to the "extends" array in your .eslintrc.* file at the end of the file 
example:
 
 "extends": [
        "airbnb-base",
        "prettier"
    ],


12) npx eslint-config-prettier path/to/main.js to see if there are conflicts

Now to manually use prettier for formatting you can use the shortcut shift+alt+f or use the command npx prettier --write <filename> 
To see all the errors and warnings for ESLint you can use the command npx eslint <filename> but they're also shown in the VSCode Problems section 

13) set up ESLint to automatically fix syntax and formatting issues upon save by following Step 4 and 5 of this article: https://www.digitalocean.com/community/tutorials/linting-and-formatting-with-eslint-in-vs-code