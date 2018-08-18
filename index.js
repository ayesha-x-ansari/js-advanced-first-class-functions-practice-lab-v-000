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

const cb = function (el, i, arr) {
  if el.hometown === driversTown
    console.log(el.name);
  end
};


function logDriversByHometown(driversTown) {
  drivers.forEach(cb);

}



function driversByRevenue() {

}

function totalRevenue() {

}

function averageRevenue() {

}
