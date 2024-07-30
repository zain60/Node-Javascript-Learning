//    ********************* Module Defination  *********************//

A reusable chunk of code that has its own context/purpose . In node js each file is treatd as A  seperate module

//    ********************* Module TYpes  *********************//


1---------> Local modules         == MOdules that we create in our application
2---------> BUilt-in Modules      == Modules node js ships out of the box /pre-written 
3---------> Third party modules   == MOdules that written by  other developers and we can use in our   application

//   ///////////////////////---------------------------//////////////////////////
//    ********************* Local-Modules using Common js  *********************//
//   ///////////////////////---------------------------//////////////////////////

1-each file in node js is  a module that is isolated by default
2- we use require to load other module in our file
3- To make  reusable as many time as we want  a code we need to expose it by EXporting that code as a module.exports = exmplemodule

//    ********************* Modules- Scops  *********************//

1- Each loaded module in node js is wrapped in a IIFE that provides private scoping
    IIFE---> Allows you to repeate variable and function names without any conflict


//    ********************* Modules- Wrapper  *********************//

1-Each module is wrapped in IIFE before being loaded
2- IIFE Contains 5 parameters
    1----> exports
    2----> require
    3----> module
    4----> _ _ filename
    5----> _ _ dirname

//    ********************* Modules- cashing  *********************//

1- when we add a module in our file node js will cash(remmber) it.
2- when we add same module  again in our file node js will take the cashed value instead of loading same module from start
3- see Example Mddule-cashing


//    ********************* CommonJS exporting  *********************//
this are different pattrens to import and export a module in node js , common js and ES modules have therir own pattrens
see difference in example

//   ///////////////////////---------------------------//////////////////////////
//    *********************       BUiltin-Modules         *********************//
//   ///////////////////////--------------------------//////////////////////////

MOdule that are built in by node js
core moduls
we need to import them before using them

there are many modules but we will discuss a few here
    ------------>path
    ------------>events
    ------------>fs
    ------------>stream
    ------------>http


    ========> PATH ===> module provide utilities to work with different files and directories paths 
    ========> Events ===> ALlow to work with events in node js,events are actions that  occured in our application to whom we can responce
