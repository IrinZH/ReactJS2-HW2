const employers = ['Alex', '', 'ludmila', 'Viktor', '', ' oleg ', 'iNna  ', 'Ivan', 'Alex', 'Olga', ' Ann'];

let employersNames = employers.filter( name => name.length > 0);
    employersNames = employersNames.map( name => name.toLowerCase().trim());

export {employersNames}; 
