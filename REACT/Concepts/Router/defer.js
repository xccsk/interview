//defer

/*
this is for getting a component rendert even if the data is not fully there by now,
its imported by react router dom 

into this mathod you can pass an object that stores key value pairs the value is a executed function with the data that should load bevore the page is there and you return that. that means that your data wich you extract by useLoaderData is now nested with the diffrent vlaues that eventually load. and you need to return responses now via json normaly in the function when its used as value from defer. 

then you import Await from react router dom into your page where defer is used  this HTML has a value wich is call resolve whre you pass via js the values wich load and between opening and closing you use jsx and define a function wich is ecexuted as soon as the data arrives the param that function takes is the data when it arrives

now you can wrapper the await html with a 
<Suspense> element that has a fallback attribute where you can inject a html element white waiting for data

when you add a await bevore a value in the defer object the page wont move until its there 
*/