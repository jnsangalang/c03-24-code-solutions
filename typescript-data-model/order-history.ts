interface Order {
  orderNumber: string;
  item: string;
  title?: string;
  author?: string;
  cost: string;
  item2?: string;
  title2?: string;
  author2?: string;
  cost2?: string;
  totalCost?: string;
  returnWindow: string;
  refund: string;
  refund2?: string;
  dateOrdered: string;
  delivered: string;
  shipTo: string;
}
const orderHistory: Order[] = [
  {
    orderNumber: 'ORDER# 114-3941689-8772232',
    item: 'Book',
    title: 'Javascript for Impatient programmers',
    author: 'Rauschmayer, Dr. Axel',
    cost: '$34.00',
    returnWindow: 'Sep 7, 2020',
    refund: '$31.55',
    dateOrdered: 'Aug 4, 2020',
    delivered: 'Aug 8, 2020',
    shipTo: 'JS Masher',
  },

  {
    orderNumber: 'ORDER# 113-9984268-1280257',
    item: 'Book',
    title: 'The Timeless Way of Building',
    author: 'RAlexander, Christopher',
    cost: '$44.53',
    returnWindow: 'Aug 19, 2020',
    refund: '$41.33',
    dateOrdered: 'July 19, 2020',
    delivered: 'July 20, 2020',
    shipTo: 'JS Masher',
  },

  {
    orderNumber: 'ORDER# 114-2875557-9059409',
    item: 'Gamecube Controller Adapter',
    title: 'Super Smash Bros Switch Gamecube Adapter for Wii U',
    cost: '$17.22',
    returnWindow: 'Aug 5, 2020',
    refund: '$15.98',
    dateOrdered: 'July 4, 2020',
    delivered: 'July 7, 2020',
    shipTo: 'JS Masher',
  },

  {
    orderNumber: 'ORDER# 113-2883177-2648248',
    item: 'Gamecube Controller',
    title: 'Super Smash Bros. Edition (Nintentdo Switch)',
    cost: '$94.95',

    item2: 'Book',
    title2: 'The Art of Sql',
    author2: 'Faroult, Stephane',
    cost2: '$33.99',
    totalCost: '$138.93',
    returnWindow: 'Aug 4, 2020',
    refund: '$94.95',
    refund2: '$33.99',
    dateOrdered: 'July 3, 2020',
    delivered: 'July 5, 2020',
    shipTo: 'JS Masher',
  },
];

console.log('Order history:', orderHistory);
