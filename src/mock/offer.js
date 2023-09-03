import { getRandomInteger, getRandomValue } from '../utils/utils.js';
import { Price } from '../constanst.js';
import { OOFFER_TITLE } from '../constanst.js';

function generateOffer() {
  return {
    id: crypto.randomUUID(),
    title: `${getRandomValue(OOFFER_TITLE)}`,
    price: getRandomInteger(Price.MIN, Price.MAX / 10),
  };
}
export { generateOffer };
