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

const {eu, rus} = sponsors;
const sumSponsors = [...eu, ...rus, 'unexpected sponsor'];

export {eu, rus, cash, money, sumSponsors}; 