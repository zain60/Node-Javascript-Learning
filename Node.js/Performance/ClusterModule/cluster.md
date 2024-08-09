we use cluster module because

1----> node is single threaded
2----> node will use only single core of CPU no metter how many cpu cores you have
2- if your code is cpu intensive your application might struggle with performance

3-----> cluster mdule enables the creation of child processes(workers) that run simantanusely
4- all created workers share the smae port


see exmaple: no-cluster js
1-if i run slow page route and then if i run anny other route oure req will be blocked untill slow page rote  req is completd ,
2- this is very slower and dmaging the perfromance
3- for this ve need cluster module solution

//    ************* HOw it works  ***************//

 
 ----------------------------------------------------------------

                 Cluster master  
                   -           . . . . .> WOrker 2
                   .
                   .
                WOrker 1

 1->  Master cluster is only  incharge of worker
 2-> starting, stoping of workers

 3----> working are responsible of req and responces
 4----> each worker have ots own event loop, memorr, v8 etc
 5----> we need atleast 2 worker thread mnimum 
 6----> we should only create as many worker as the syatem CPU is suporting in which the node app is running