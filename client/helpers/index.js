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