const employers = ['Alex', '', 'ludmila', 'Viktor', '', ' oleg ', 'iNna  ', 'Ivan', 'Alex', 'Olga', ' Ann'];

let employersNames = employers.filter( name => name.length > 0);
    employersNames = employersNames.map( name => name.toLowerCase().trim());

const sponsors = {
    cash: [40000, 5000, 30400, 12000],
    eu: ['SRL', 'PLO', 'J&K'],
    rus: ['RusAuto', 'SBO']
};

const {cash} = sponsors;
const calcCash = (...cash) => {
    let cashItem = cash.reduce((previous, current) => {
        return previous + current;
    });
    return cashItem;
}
let own = 0;
let money = calcCash(own, ...cash);

const makeBusiness = (owner, director = 'Victor', cash, emp) => {
    const {eu, rus} = sponsors;
    const sumSponsors = [...eu, ...rus, 'unexpected sponsor'];
    console.log(`We have a business. Owner: ${owner}, director: ${director}. Our budget: ${cash}. And our employers: ${emp}`);
    console.log('And we have a sponsors: ');
    console.log(...sumSponsors);
    console.log(`Note. Be careful with ${sponsors.eu[0]}. It's a huge risk.`);
}
makeBusiness('Sam', undefined , money, employersNames);
