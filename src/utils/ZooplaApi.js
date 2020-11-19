import axios from 'axios';

const getUrlForSearchOnPlaceName = value => {
  const data = {
    // country: 'uk',
    // pretty: '1',
    api_key: '8u5b2ey3r3p26j8fvchsfeyr',
    // encoding: 'json',
    // listing_type: 'buy',
    // action: 'search_listings',
    // page: 1,
    area: value
  };

  const querystring = Object.keys(data)
    .map(k => `${k}=${encodeURIComponent(data[k])}`)
    .join('&');

  return `https://api.zoopla.co.uk/api/v1/property_listings.js?${querystring}`;
};

export const fetch = async placeName => {
  const url = getUrlForSearchOnPlaceName(placeName);

  return axios.get(url).then(json => {
    console.log(json);
    return json;
  });
};
