const mongoose = require('mongoose');
const username = process.env.MONGO_USER;
const password = process.env.MONGO_PASSWORD;
const host = process.env.MONGO_HOST || '127.0.0.1';
const port = process.env.MONGO_PORT || 27017;
const database = 'description_service';
let db = null;
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true
};

if (username) {
  db = mongoose.connect(`mongodb://${username}:${password}@${host}:${port}/${database}`, options);
} else {
  db = mongoose.connect(`mongodb://${host}:${port}/${database}`, options);
}

const Schema = mongoose.Schema;

// Listing Collection
const ThingsAllowedSchema = {
  smoking: Boolean,
  pets: Boolean,
  parties: Boolean,
  longTerm: Boolean
};

/*
  Sleeping arrangement examples:

  - 'Common spaces'
    1 couch
  - 'Bedroom 1'  - 'Bedroom 2'
    1 queen bed     1 double bed, 1 single bed
  - 'Bedroom 1'  - 'Common spaces'
    1 queen bed     1 sofa bed

*/
const SleepingArrangementSchema = {
  name: String,
  subtitle: String
};

const HouseRulesSchema = {
  checkIn: String,
  checkOut: String,
  selfCheckIn: Boolean,
  additionalRules: String,
  allowed: ThingsAllowedSchema
};

const AmenitiesSchema = {
  title: String, // e.g. Basic, Facilities, Dining, Guest Access, etc
  amenity: [ {
    name: String,
    isAvailable: Boolean // this controls whethere the amenity has a strikethrough
  } ]
};

const ListingHighlightsSchema = {
  // TODO: add an icon field here
  title: String,
  subtitle: String
};

const HealthAndSafetySchema = {
  notes: [ {
    icon: String,
    text: String
  } ],
  mustAcknowledge: [
    {
      icon: String,
      text: String
    }
  ]
};

const ListingSchema = new Schema({
  listingID: { type: Number, default: 1 }, // an id used by our api endpoints instead of using the default ObjectID on the _id field
  minimumPricePerNight: Number, // Weekends and holidays can make this fluctuate
  roomCount: Number,
  roomType: String,
  bedCount: Number,
  bathroomCount: Number,
  sharedBathroomCount: Number,
  maxGuestCount: Number,
  description: String,
  listingHighlights: [ ListingHighlightsSchema ],
  cancellationPolicy: String,
  houseRules: HouseRulesSchema, // listings don't require house rules: https://www.airbnb.com/rooms/42150674
  sleepingArrangements: [ SleepingArrangementSchema ], // it's possible there are no sleeping arrangements: https://www.airbnb.com/rooms/42150674
  amenities: [ AmenitiesSchema ],
  healthAndSafety: HealthAndSafetySchema
});

module.exports.Listing = mongoose.model('Listing', ListingSchema);

module.exports.db = db;
