const express = require('express');
const cors = require('cors');
const path = require('path');

const { Listing } = require('./database');

let port = process.env.APP_PORT || 7878;

const app = express();
const staticFilesPath = path.resolve(__dirname, '..', 'client', 'dist');

app.use(cors());

app.get('/', (req, res) => {
  res.redirect('/rooms/1');

  res.end();
});

app.get('/index.js', (req, res) => {
  res.sendFile(path.join(staticFilesPath, 'index.js'));
});

// handle bundle.js as well!
app.get('/bundle.js', (req, res) => {
  res.redirect('/index.js');
});

app.get('/rooms/:id', (req, res, next) => {
  // catch invalid id
  const id = req.params.id;
  const indexPath = path.join(staticFilesPath, 'index.html');
  const validIDRange = 100;

  if (!id) {
    res.sendStatus(404);

    return;
  }

  const idToNumber = Number(id);
  const isInvalidID = typeof idToNumber === NaN || idToNumber <= 0 || id > 100;

  if (isInvalidID) {
    console.log('invalid id requested');

    res.sendStatus(404);
    return;
  }

  res.sendFile(indexPath);
});

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
