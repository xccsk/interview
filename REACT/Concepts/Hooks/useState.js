// markup useState 

const [state,changeState] = useState()


/* For updating a state that depense on the privious state you should update via function pass and not via true and false */

//eg 

changeState((prevState)=>!prevState) //switch ture flase via function pass

/* When you change the state after the hole component rerendert is updated but if you use the function form react makes sure to actually use the last state even if the component is not rerendert yet it uses the updated state */