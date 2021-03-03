import { Schema } from 'mongoose';

// Listing Collection
const ThingsAllowedSchema = new Schema({
  smoking: Boolean,
  pets: Boolean,
  parties: Boolean,
  longTerm: Boolean
});

/*
  Sleeping arrangement examples:

  - 'Common spaces'
    1 couch
  - 'Bedroom 1'  - 'Bedroom 2'
    1 queen bed     1 double bed, 1 single bed
  - 'Bedroom 1'  - 'Common spaces'
    1 queen bed     1 sofa bed

*/
const SleepingArrangementSchema = new Schema({
  name: String,
  subtitle: String
});

const HouseRulesSchema = new Schema({
  checkIn: String,
  checkOut: String,
  selfCheckIn: Boolean,
  additionalRules: String,
  allowed: ThingsAllowedSchema
});

const AmenitiesSchema = new Schema({
  title: String, // e.g. Basic, Facilities, Dining, Guest Access, etc
  amenity: [ new Schema({
    name: string,
    isAvailable: Boolean // this controls whethere the amenity has a strikethrough
  }) ]
});

const ListingHighlightsSchema = new Schema({
  houseRules: HouseRulesSchema, // listings don't require house rules: https://www.airbnb.com/rooms/42150674
});

const HealthAndSafetySchema = new Schema({
  notes: [ new Schema({
    icon: String,
    text: String
  }) ],
  mustAcknowledge: [
    new Schema({
      icon: String,
      text: String
    })
  ]
});

const ListingSchema = new Schema({
  minimumPricePerNight: Number, // Weekends and holidays can make this fluctuate
  roomCount: Number,
  bathroomCount: Number,
  maxGuestCount: Number,
  description: String,
  listingHighlights: ListingHighlightsSchema,
  amenities: [ AmenitiesSchema ],
  sleepingArrangements: [ SleepingArrangementSchema ], // it's possible there are no sleeping arrangements: https://www.airbnb.com/rooms/42150674
  healthAndSafety: HealthAndSafetySchema
});
