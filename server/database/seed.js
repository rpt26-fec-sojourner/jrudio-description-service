const faker = require('faker');

const { getRandomElement } = require('../helpers');

const roomTypes = [
  'house',
  'apartment',
  'bed and breakfast',
  'boutique hotel',
  'bungalow',
  'cabin',
  'chalet',
  'cottage',
  'guest suite',
  'guesthouse',
  'hostel',
  'hotel',
  'loft',
  'resort',
  'serviced apartment',
  'townhouse',
  'villa'
];

const amenityType = [
  'bathroom',
  'bedroom and laundry',
  'entertainment',
  'heating and cooling',
  'home safety',
  'internet and office',
  'kitchen and dining',
  'location features',
  'outdoor',
  'parking and facilities',
  'services',
  'not included'
];

const amenities = [
  'kitchen',
  'shampoo',
  'heating',
  'air conditioning',
  'washer',
  'dryer',
  'wifi',
  'indoor fireplace',
  'hangers',
  'iron',
  'hair dryer',
  'dedicated workspace',
  'tv',
  'self check-in',
  'smoke alarm',
  'carbon monoxide alarm',
  'private bathroom',
  'piano',
  'beachfront'
];

const sleepingArrangementTypes = [
  'common spaces',
  'bedroom'
];

const bedTypes = [
  'king',
  'queen',
  'double bed',
  'couch',
  'floor mattress'
];

// generateDescription returns a string of lorem ipsum
const generateDescription = () => faker.lorem.paragraphs();

// generateRoomStats generates the room count, bathroom/shared bathrooms, room type, minimum per night price, and guest count
const generateRoomStats = () => {
  const minimumPricePerNight = faker.random.number({ min: 70, max: 999 });
  const roomCount = faker.random.number({ min: 1, max: 4 });
  const roomType = getRandomElement(roomTypes);
  const bedCount = faker.random.number({ min: 1, max: 16 });
  const bathroomCount = faker.random.number({ min: 1, max: 4 }); // max I have seen is 11.5: https://www.airbnb.com/rooms/33747647
  const sharedBathroomCount = faker.random.number({ min: 0, max: 1 });
  const maxGuestCount = faker.random.number({ min: 2, max: 16 });

  return {
    // $70 - $999
    minimumPricePerNight,
    roomCount,
    roomType,
    bedCount,
    bathroomCount,
    sharedBathroomCount,
    maxGuestCount
  };
};

// generateSleepingArrangements generates the sleeping arrangements from 0-5
const generateSleepingArrangements = (bedCount) => {
  const arrangements = [];
  let commonAreaCount = faker.random.number({ min: 0, max: 2 });

  for (let i = 1; i <= bedCount; i++) {
    arrangements.push({
      name: `bedroom ${i}`,
      subtitle: `1 ${getRandomElement(bedTypes)}`
    });
  }

  while (commonAreaCount > 0) {
    arrangements.push({
      name: sleepingArrangementTypes[0],
      subtitle: getRandomElement(bedTypes)
    });

    commonAreaCount--;
  }

  return arrangements;
};

// generateListHighlights returns an array of 5 random elements about the listing
const generateListingHighlights = () => {};

// generateCancellationPolicy returns a lorem ipsum string
const generateCancellationPolicy = () => faker.lorem.paragraphs();

// generateHouseRules generates the check-in/out, if it has self check-in, some additional house rules, smoking is allowed, pets, etc
const generateHouseRules = () => {
  let checkIn = getRandomElement([
    '1:00 PM - 4:00 PM',
    'After 3:00 PM',
    '3:00 PM - 2:00 AM',
  ]);

  let checkOut = getRandomElement(['11:00 AM', '10:00 AM', '10:30 AM']);

  return {
    checkIn,
    checkOut,
    selfCheckIn: faker.random.boolean(),
    additionalRules: faker.lorem.paragraph(),
    allowed: {
      smoking: faker.random.boolean(),
      pets: faker.random.boolean(),
      parties: faker.random.boolean(),
      longTerm: faker.random.boolean()
    }
  };
};

// generateAmenities generates a list of amenites from a fixed amount of options
const generateAmenities = () => {
  const generatedAmenities = [];
  let amenityTypeCount = faker.random.number({ min: 5, max: amenityType.length });

  const generateSubAmenities = () => {
    const subAmenities = [];
    let amenityCount = faker.random.number({ min: 6, max: amenities });

    while (amenityCount > 0) {
      subAmenities.push({
        name: getRandomElement(amenities),
        isAvailable: faker.ranomd.boolean()
      });

      amenityCount--;
    }

    return subAmenities;
  };

  while (amenityTypeCount > 0) {
    generatedAmenities.push({
      title: getRandomElement(amenityType),
      amenity: generateSubAmenities()
    });

    amenityTypeCount--;
  }

  return generatedAmenities;
};

// generateHealthAndSafety generates health and safety notes, and the mustAcknowledge fields
const generateHealthAndSafety = () => {
  const icons = [ 'star', 'clean', 'checkmark', 'car', 'credit-card' ];
  let notesCount = faker.random.number({ min: 2, max: 6 });
  let mustAcknowledgeCount = faker.random.number({ min: 1, max: 3 });

  const healthAndSafetyPolicy = {
    notes: [],
    mustAcknowledge: []
  };

  while (notesCount > 0) {
    healthAndSafetyPolicy.notes.push({
      icon: getRandomElement(icons),
      text: faker.lorem.sentence()
    });

    notesCount--;
  }

  // TODO: both of these while loops do the same work, but on different properties. REFACTOR!
  while (mustAcknowledgeCount > 0) {
    healthAndSafetyPolicy.mustAcknowledge.push({
      icon: getRandomElement(icons),
      text: faker.lorem.sentence()
    });

    mustAcknowledgeCount--;
  }

  return healthAndSafetyPolicy;
};


const generateListing = () => {
  return Object.assign(
    {},
    generateDescription(),
    generateRoomStats(),
    generateSleepingArrangements(),
    // generateListingHighlights(),
    generateCancellationPolicy(),
    generateHouseRules(),
    generateAmenities(),
    generateHealthAndSafety()
  );
};

// TODO: finish generateListingHighlights
// TODO: fix generateListing
// console.log(generateAmenities())