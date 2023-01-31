/*with useCallback we safe a function and it should not be reevaluated with every execution so the same function is stored (if its passed down for a comperson) for the comparesen with React.memo because rember objects are never the same in js */

import React,{useCallback} from "react";

const dummyfunction = useCallback(()=>{
    console.log('now its the same')
},[])

//this array is there for the depenencis in the function that are passed threw state e.g.