import axios from 'axios';

export const getData = async (api, dataHandler, errorHandler = console.log) => {
  try {
    const { data } = await axios.get(api);
    dataHandler(data);
  } catch (err) {
    errorHandler(err);
  }
};

export const array = [];
