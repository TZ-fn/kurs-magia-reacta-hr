import axios from 'axios';

export const getData = async (api, dataHandler, errorSetter = null) => {
  try {
    const { data } = await axios.get(api);
    dataHandler(data);
    errorSetter(false);
  } catch (err) {
    errorSetter(true);
  }
};

export const array = [];
