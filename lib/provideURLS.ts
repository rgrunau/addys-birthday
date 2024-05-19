export const getEnvironmentURL = () => { 
  if (process.env.NODE_ENV === 'development') {
    return process.env.DEV_URL;
  } else {
    return process.env.PROD_URL;
  }
};