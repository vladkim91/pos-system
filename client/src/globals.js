export const BASE_URL =
  // process.env.NODE_ENV === 'production'
  process.env.NODE_ENV === 'something'
    ? `${window.location.origin}/api`
    : 'http://localhost:3001/api';
