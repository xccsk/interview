//React hast the React Dom and rerendes there every component where state and props are changes while in the real dome only the specific element will be rerendert and not the hole page.

//if the parent changed every child will be reevalued but if in the child nothing changes the realdom dont change

/* So if you have a child component that is not nessesary to rerender for every time some state in the parent changes that doesent effect the child you can use React memo  by adding it to the export of the component*/

import React from "react";


const Dummy = () =>{
    console.log(test)
}

export default React.memo(Dummy)


//state changes and rerendering 

/*  */