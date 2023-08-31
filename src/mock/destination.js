import { getRandomValue } from '../utils/utils.js';
import { POINT_TYPE, DESCRIPTION } from '../constanst.js';

function generateDestination() {
  const city = getRandomValue(POINT_TYPE);

  return {
    id: crypto.randomUUID(),
    name: city,
    description: getRandomValue(DESCRIPTION),
    pictures: {
      src: `https://loremflickr.com/248/152?random=${crypto.randomUUID()}`,
      description: `${city} description`,
    },
  };
}
export { generateDestination };
