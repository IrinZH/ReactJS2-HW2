import {eu, rus, cash, money, sumSponsors} from './cash';
import {employersNames} from './employers';

class MakeBusiness {
  constructor (owner, director = 'Victor', cash, emp)
  {
    this.owner = owner;
    this.director = director;
    this.cash = cash;
    this.emp = emp;
  }
  showResults() {
  console.log(`We have a business. Owner: ${this.owner}, director: ${this.director}. Our budget: ${this.cash}. And our employers: ${this.emp}`);
  console.log('And we have a sponsors: ');
  console.log(...sumSponsors);
  console.log(`Note. Be careful with ${eu[0]}. It's a huge risk.`);
  }
}
const makeBusiness = new MakeBusiness('Sam', undefined , money, employersNames);
makeBusiness.showResults();
