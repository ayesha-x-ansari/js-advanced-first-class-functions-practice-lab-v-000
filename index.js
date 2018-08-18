  // Code your solution in this file!
const drivers = [
  { name: 'Bobby',   hometown: 'Pittsburgh',  revenue: 3000 },
  { name: 'Sally',   hometown: 'New York',    revenue: 2000 },
  { name: 'Sammy',   hometown: 'Pittsburgh',  revenue: 2500 },
  { name: 'Annette', hometown: 'Los Angeles', revenue: 6000 },
  { name: 'Bobby',   hometown: 'Tampa Bay',   revenue: 5000 }
];

const callback = function (el, i, arr) {
  console.log(el.name);
};

function logDriverNames() {
  drivers.forEach(callback);
}

function logDriversByHometown(drivers, driversTown) {
  const callback = function (el, i, arr) {
    if (el.hometown === driversTown) {
      console.log(el.name);
    }
  };
  drivers.forEach(callback);
}

function driversByRevenue() {
  newDrivers = [...drivers]
  newDrivers.sort(function (a, b) {
    return a.revenue - b.revenue })
  return newDrivers
}

function driversByName () {
  newDrivers = [...drivers]
  newDrivers.sort(function (a, b) {
   return a.name.localeCompare(b.name);
});
  return newDrivers
}

const reduceRevenue = function (total, el, i, arr) {


  console.log("The current element's name is:", el.name);
  console.log("The current element's revenue is:", el.revenue);
  console.log("The current total is:", total  + el.revenue);

  if (i ====  drivers.length - 1) {
    console.log("The current total isSSSS:", total);
    return total ;
  }
};

function totalRevenue() {
  drivers.reduce(reduceRevenue, 0);
}

function averageRevenue() {

}
