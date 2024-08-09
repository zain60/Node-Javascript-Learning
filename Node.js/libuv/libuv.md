//    ********************* what is LibUV   *********************//


libuv is cross platform open source library written in c language


//    ********************* why we need LibUV   *********************//

libuv handles asynchronous operations in node js

//    ********************* How LibUV does that?    *********************//
 by using two main  features
1----->  Thread pool
2----->  Event loop

//    ********************* ThreadPool   *********************//

 see the example we have used ffor  async method
 Js main thread will ask {libuv}  that  i have a time consuming function  please handle that so that untill that resolves i will run other task with  blocking. LIbuv {THreadPool}  will say yes js  unlike you i have multiple pools so i can handle that for you



        MAIN-THREAD                                       LIBUV

             ------------------------------------------->   THreadPool
                                                                .
                                                                .
              <------------------------------------------------..
                                                
1-  BY default LIbuv THreadpool has size of 4  threads
2- howevre we can change the size of threadpools by  process envoirmnt variable
3-  but we can increase size according to over CPU capcity, if it has enough cors otherwise it will result extra time

4-Netwrok i/o dosnt  use thread pool
5-libuv delegates netwrok calls to CPU kernal



//    ************* HOw code is Executed in node js {V8 -Engine}   ***************//


 ...........................................................................................................
                                                               .
                                                               .
                                                               .
           V8                                                  .                    LIBUV
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