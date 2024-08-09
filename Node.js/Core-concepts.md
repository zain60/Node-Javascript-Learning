
//    ********************* Node js Defination  *********************//
    
Node js is a open source Rnn time java script envoirment built on top of chrome V8 engine

JavaScript is a scripting language that conforms to the ECMAScript specification. ECMAScript was developed to standardize JavaScript and ensure compatibility across different web browsers.


//    ********************* V8 -Engine   *********************//

v8 is a javascript engine that converts javascript code into machine code ,ther are  differnt javascript engines but the core of node js is v8 chrome engine by google
V8 is written in  c++
by ading v8 in your c++ code you can  add new fuctionalties in javascript



//    ********************* Javascript Runtime    *********************//

this means that node js provides all necessary componnets in order to use javascript  outside browser
 Web APIs: Provide functionalities such as HTTP requests, file I/O, and more.
Event Loop: Manages the execution of code, collecting and processing events and executing sub-tasks.
JavaScript Engine: The engine that executes JavaScript code (V8 in the case of Node.js).

Overall it includes following  Components

                    // 1---------------> Dependencies
                                //------------> v8
                                //------------> libuv
                                //------------> zlip  etc

                    // 2---------------> c/c++ fetures
                    // 3---------------> Js library
                               
Node.js is not a language or a framework. It is a runtime environment that enables JavaScript to be executed server-side.


//    ************* HOw code is Executed in node js {V8 -Engine}   ***************//


 ...........................................................................................................
                                                .
                                                .
                                                .
           V8                                   .                                      LIBUV
 ...........................................................................................................
          MEMORY-HEAP                   .    CALL-STACK        .
                                        .                      .
  1-  Variable /function declaration    .                      .
                                        .   pushed in call     .
                                        .   stack and on       .
                                        .   completion poped   .
                                            off from call stack.
                                                               .
                                                               .
                                                               .
                                                               .
    
                                                                 1- when we  execute a async function it is offloaded from call stack to Libuv and libuv will put it into a threadpool , on completion it will be retuirned to call stack and then it will be poped off
         
