const Launch = () => {
   
    console.time("O (1)");
    // O (1)
    const items = [1,2,5,8,9];
    const getLast = item => item[items.length-1]
    console.timeEnd("O (1)");

    console.time("O (N)");
    // O (1)
    const items2 = [1,2,5,8,9,7,3];
    const findIndex = (items, match) => {
        for (let i = 0, total = items.length; i < total; i++)
          if (items[i] == match)
            return i;
         return -1;
      };
    console.log("Index Found: ",findIndex( items2, 9 ));
    console.timeEnd("O (N)");
}

window.onload = Launch;