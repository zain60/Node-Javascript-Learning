
//    ********************* stream and buffers  *********************//

A stream is a Sequance of data that moves from one postion to other overtime
steam can move 64 bytes data by default
builtin module like fs are using streams to handle /read wnd write file data 

-> NOde js can t control the pace in which data is arriving in streams,
data can be too low
data can b more then capacity at time
node maintain a space/memnory in runtime to process stream of data this waiting area is called buffer
BUffers have very limited memory

//    ********************* Pipes  *********************//

pipes take readable stream and connect it with writeable stream\
pipes are a better way to read and write data instead of streams
it work on readble stream
it returns destination stream which enables chaining if destination stream is {duplex, transaorm, readable stream};