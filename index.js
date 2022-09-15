const inquirer = require('inquirer');
const fs = require('fs');
const generatePage = require('./utils/generatePage')

inquirer
.prompt ([
   {
      type: 'input',
      name: 'title',
      message: 'What is the title of your project?'
   },
   { 
      type: 'input' ,
      name: 'description' ,
      message: 'Provide a description of the project'
   },
   {
    type: 'input' ,
    name: 'installation' ,
    message: 'How is your project installed?'
    },
    {
    type: 'input' ,
    name: 'usage' ,
    message: 'How is your project used?'
    },
    {
        type: 'input' ,
        name: 'author' ,
        message: 'List your collaborators'
    },
    {
      type: 'checkbox',
      name: 'languages',
      message: 'What did you build this project with? (check all that apply)',
      choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node']
   } ,
    {
        type: 'list',
        name: 'license',
        message: 'What did you build this project with? (check all that apply)',
        choices: ['MIT', 'Apache', 'GNU', 'None']
     } ,
])
.then((answers) =>{
   fs.writeFile ('./newREADME.md', generatePage(answers), (err) => {
      if (err) {  
       console.log(err)
      } else {
      console.log('the readme has been made')}
    })
})
.catch (err => {
   console.log(err);
})




