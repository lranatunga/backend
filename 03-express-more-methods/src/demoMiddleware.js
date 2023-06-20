const array = [
    () => {
      console.log("Function 1");
    },
    () => {
      console.log("Function 2");
    },
    () => {
      console.log("Function 3");
    },
    () => {
      console.log("Function 4");
    },
  ];

  for (let index=0; index<array.length; index++){
    array[index]()
  }