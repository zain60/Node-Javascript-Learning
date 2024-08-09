//    ********************* what is EVentloop   *********************//

1-  its a C program that is associated with node js
2-  its a pattren that co-ordinates the execution of asycn and sycn  code in node js
3-  this program is like a loop that runs untill our node app is running

4- Every iteration has 6 diffrent Ques
    1----------> Timer Queu      :  this has callback assocated with setTimeput(),
                                    setINterval() methods
    2----------> I/O Queu        :  this has callback for all async methods ike fs and http
    3----------> check Queu      :  for setImediate() function
    4----------> close Queu      :  for  function clsoing 
    5----------> Microtask Queu  :   these are two ques
    (these  two are not part of libuv queus)
         1-----> nextTick Queu   :
         2-----> Promise  Queu   :  callbaskc for native promises in js 

//    *************** HOw these QUesu are executed  in EVentloop   ***************//

1- First Microtask Queus are  executed, first nextTick  Queu then promise Queu
2- All tasks in Timer Queu are executed
3- Task in Microtask Queus if present are  executed, first nextTick  QUeu then promise Queu
4- All task  in I/O Queu are executed 
5- Task in Microtask Queus if present are  executed, first nextTick  QUeu then promise Queu
6- Tasks in check Quesu are executed
7- Task in Microtask Queus if present are  executed, first nextTick  QUeu then promise Queu
8- callbacks in close Queu are executed

pont to be noted: I/O tasks are polled and only added on i/o queu when i/o tasks are completed






     
 