const aCar = {
    owner :'Joe Bloggs',
    type :{make:'Toyota', model:'Corolla', CC:'1.8'},
    registration : {year: '201', countycode:'WD',number:'1058'}
};
console.log(aCar.owner + ' drives '+aCar.type['make']);
console.log(aCar.registration.year+'-'+aCar.registration.countycode+'-'+aCar.registration.number);
console.log(aCar);