export const getListingID = () => {
  const { pathname } = window.location;
  const path = pathname.split('/');

  let id = null;

  if (path.length <= 1) {
    return id;
  }

  const hasTrailingSlash = path[path.length - 1] === '/';

  if (hasTrailingSlash) {
    id = path[path.length - 2];
  } else {
    id = path[path.length - 1];
  }

  return id;
};

export const getHighlightType = (name = '') => {
  name = name.toLowerCase();

  if (name.indexOf('enhanced') > -1 || name.indexOf('clean') > -1) {
    return 'enhanced';
  } else if(name.indexOf('home') > -1) {
    return 'home';
  } else if (name.indexOf('check-in') > -1) {
    return 'check-in';
  }

  return 'home';
};

export const getSleepingArrangementType = (arrangement = '') => {
  arrangement = arrangement.toLowerCase();

  if (arrangement.indexOf('bed') > -1) {
    return 'bed';
  } else if(arrangement.indexOf('couch') > -1) {
    return 'sofa';
  }

  return 'bed';
};

export const combineStyles = (...styles) => {
  let combinedStyles = [];

  styles.forEach(style => combinedStyles.push(style));

  return combinedStyles.join(' ');
};