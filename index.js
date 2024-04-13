// Code your solution
function findMatching (drivers, name){
    return drivers.filter(function (drivers){
        return(drivers.toUpperCase() === name.toUpperCase())
    }
)

}

function fuzzyMatch(drivers, letter) {
    return drivers.filter(function(driver) {
      return driver.toLowerCase().startsWith(letter.toLowerCase());
    });
  }

function matchName (driversInfo, hometown) {
  return driversInfo.filter(function(record) {
    return record.name === hometown
    });
}

const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']
const driversInfo = [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' },
    {
      name: 'Sammy',
      hometown: 'New York' } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay' }
  ]
console.log(fuzzyMatch(drivers, "sa"))