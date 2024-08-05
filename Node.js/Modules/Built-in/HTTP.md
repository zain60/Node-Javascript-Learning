//    ********************* lets first understand how web works *********************//

1- computers connected to internet called clients and servers
2-client are computer/modile devices that have internet connection along with web accessing  software installed  like browsers

3-SErvers are computers that stores  web pages, sites or Apps 



  CLIENT ------------------{request} acces to a web page------------------------> SERVER
  CLIENT <-----copy of web page  is dowloaded and send as {responce} to server--- SERVER

                    this is called client server model


  this is how web pages is displayes in client  devices, as data transforms form client to server and then from server to client, but in which formate. this is wher HTTP module comes in picture


  //    ********************* HTTP *********************//

  hypertext  transfer protocol
  it defines the formate of data in whic client and server can  speack to  each other

  using nodejs we can create a server as node has access to opertaing systme functionality like networking

  nod  has event loop so it can handle multiple request simultanesouly
  so HTTP module  allows web server creations that can transfer data over HTTP
