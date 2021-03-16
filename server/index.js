const express = require('express');
const cors = require('cors');

const { Listing } = require('./database');

let port = process.env.APP_PORT || 7878;

const app = express();

app.use(cors());

const newResponse = () => ({
  result: null,
  error: ''
});

app.get('/api/listing/:id', (req, res) => {
  const { id } = req.params;

  const clientResponse = newResponse();

  Listing.findOne({ listingID: id })
    .then(doc => {

      if (doc) {
        clientResponse.result = doc;

        res.status(200).json(clientResponse);
      } else {
        clientResponse.error = 'listing not found';

        res.status(404).json(clientResponse);
      }
    })
    .catch(err => {
      clientResponse.error = `failed to fetch listing: ${err}`;

      res.status(500).json(clientResponse);
    });
});

app.get('/api/price/:id', (req, res) => {
  const { id } = req.params;

  const clientResponse = newResponse();

  Listing.findOne({ listingID: id }, { _id: 0, minimumPricePerNight: 1 })
    .then(doc => {

      if (doc) {
        clientResponse.result = doc.minimumPricePerNight;

        res.status(200).json(clientResponse);
      } else {
        clientResponse.error = 'listing not found';

        res.status(404).json(clientResponse);
      }
    })
    .catch(err => {
      clientResponse.error = `failed to fetch listing: ${err}`;

      res.status(500).json(clientResponse);
    });
});

app.get('/api/stats/:id', (req, res) => {
  const { id } = req.params;

  const filters = {
    _id: 0,
    maxGuestCount: 1,
    roomType: 1,
    bedCount: 1,
    bathroomCount: 1,
    sharedBathroomCount: 1
  };

  const clientResponse = newResponse();

  Listing.findOne({ listingID: id }, filters)
    .then(doc => {

      if (doc) {
        clientResponse.result = doc;

        res.status(200).json(clientResponse);
      } else {
        clientResponse.error = 'listing not found';

        res.status(404).json(clientResponse);
      }
    })
    .catch(err => {
      clientResponse.error = `failed to fetch listing: ${err}`;

      res.status(500).json(clientResponse);
    });
});

app.get('/api/highlights/:id', (req, res) => {
  const { id } = req.params;

  const filters = {
    _id: 0,
    listingHighlights: 1
  };

  const clientResponse = newResponse();

  Listing.findOne({ listingID: id }, filters)
    .then(doc => {

      if (doc) {
        clientResponse.result = doc;

        res.status(200).json(clientResponse);
      } else {
        clientResponse.error = 'listing not found';

        res.status(404).json(clientResponse);
      }
    })
    .catch(err => {
      clientResponse.error = `failed to fetch listing: ${err}`;

      res.status(500).json(clientResponse);
    });
});

app.get('/api/amenities/:id', (req, res) => {
  const { id } = req.params;

  const filters = {
    _id: 0,
    amenities: 1
  };

  const clientResponse = newResponse();

  Listing.findOne({ listingID: id }, filters)
    .then(doc => {

      if (doc) {
        clientResponse.result = doc;

        res.status(200).json(clientResponse);
      } else {
        clientResponse.error = 'listing not found';

        res.status(404).json(clientResponse);
      }
    })
    .catch(err => {
      clientResponse.error = `failed to fetch listing: ${err}`;

      res.status(500).json(clientResponse);
    });
});

console.log(`app is listening on http://localhost:${port}`);

app.listen(port);
