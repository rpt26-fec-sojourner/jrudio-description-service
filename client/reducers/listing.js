export const initialState = {
  listingID: 0,
  minimumPricePerNight: 0,
  roomCount: 0,
  roomType: '',
  bedCount: 0,
  bathroomCount: 0,
  sharedBathroomCount: 0,
  maxGuestCount: 0,
  description: '',
  listingHighlights: [],
  cancellationPolicy: '',
  houseRules: {},
  sleepingArrangements: [],
  amenities: [],
  healthAndSafety: {},
  title: '',
  hostName: '',
  errorMessage: ''
};

export default (state = initialState, action) => {
  switch (action.type) {
  case 'FULL_LISTING_LOADED':
    return {
      ...state,
      ...action.data
    };
  case 'TITLE_LOADED':
    return {
      ...state,
      title: action.data
    };
  case 'FULL_LISTING_ERROR':
    return {
      ...state,
      errorMessage: action.data
    };
  default:
    return state;
  }
};