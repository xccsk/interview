//React Loader

//for e.g look into react playground mutipale applications

/*
When you define youre route you can add the loader prop to it, that takes a function as an argument.

that functions needs to be executed before the page is acually loaded 

and you can acceses it in the page by {useLoaderData} and this will get the neares loader data,it also just returns data not the promise

this data is available in every component that is used under the route you define it 

Where should you use loader()?
inside the page where the loader data is used then export it and point to it in the router

when you threw an error in a loader react threws the neares error (most cases the error element defined in app.js)

when to use {useRouteLoderData(routeID)} when you use childrens that both needs to accces the loader from the route you would use this hook and pass the route id to is
*/