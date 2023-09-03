import { getRandomInteger, getRandomValue } from '../utils/utils.js';
import { Price } from '../constanst.js';
import { POINT_TYPE } from '../constanst.js';
import dayjs from 'dayjs';

function generatePoint(offerIds, destinationId) {
  return {
    id: crypto.randomUUID(),
    basePrice: getRandomInteger(Price.MIN, Price.MAX),
    dataFrom: dayjs().format('HH:mm'),
    dataTo: dayjs().add(1,'hour').add(10,'minute').format('HH:mm'),
    dataStart: dayjs().format('MMM d').toUpperCase(),
    destination: destinationId,
    offers: offerIds,
    isFavorite: !!getRandomInteger(0, 1),
    type: getRandomValue(POINT_TYPE),
  };
}

export {generatePoint};
