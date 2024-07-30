const user = {
    id: 459,
    name: 'JS snippets',
    age:29,
    education:{
     degree: 'Masters'
    }
   }
   
   const {education : {degree}} = user
   console.log(degree) //Masters