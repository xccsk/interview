//using useMemo Hook

/*When you have a function that is not necessary to rerun every time the components is rerendert eg. a sorting of a list   */

import React, { useMemo } from "react";

const SomeComponent = (porps) => {
  const { name } = props;

  const sortedList = useMemo(() => {
    return props.items.sort((a, b) => a - b);
  }, [name]);

  /*useMemo takes as first argument a function that returns the value and as second argument a depenencies that need to be change to to updated it */

  /*you also need to use the memo effect on the data that is passed via props couse its a object in memory*/

  return (
    <div>
      <h2>{porps.name}</h2>
      <p>lorem safohsohfhsruv sfsf af af fFASR AR</p>
      <ul>
        {sortedList.map((item) => (
          <li> {item.value} </li>
        ))}
      </ul>
    </div>
  );
};

export default React.memo(SomeComponent);
