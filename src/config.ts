const dev = {
  API_URL: 'http://localhost:3002',
};

const prod = {
  API_URL: 'https://api.hoclieu.vn',
};

const config = process.env.NODE_ENV === 'production' ? prod : dev;

export default {
  ...config,
};
