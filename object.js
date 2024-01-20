// Implement the groupBy function on Object prototype
Object.groupBy = function (array, callback) {
    return array.reduce(function (obj, item) {
      const key = callback(item);
      (obj[key] = obj[key] || []).push(item);
      return obj;
    }, {});
  };
  
  const inventory = [
    { name: "asparagus", type: "vegetables", quantity: 5 },
    { name: "bananas", type: "fruit", quantity: 0 },
    { name: "goat", type: "meat", quantity: 23 },
    { name: "cherries", type: "fruit", quantity: 5 },
    { name: "fish", type: "meat", quantity: 22 },
  ];
  
  function myCallback({ quantity }) {
    return quantity > 1 ? "ok" : "restock";
  }
  
  const result = Object.groupBy(inventory, myCallback);
  console.log(result);
  