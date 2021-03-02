import { useContext } from 'react';
import axios from 'axios';
import { useCallback, useState } from 'react';
import LoaderContext from '../datalayer/LoaderContext';
import AlertMessageContext from '../datalayer/AlertMesageContext';

export const useAxios = () => {
  const [error, setError] = useState('');
  const { setLoader } = useContext(LoaderContext);
  const alertContext = useContext(AlertMessageContext);

  const sendRequest = useCallback(async (method, url, data, headers = {}) => {
    setLoader(true);
    const config = {
      method: method,
      url: `https://myestate-app.herokuapp.com/${url}`,
      data: data,
      headers: headers,
    };
    return new Promise((resolve, reject) => {
      return axios(config)
        .then((res) => {
          setLoader(false);
          return resolve(res.data);
        })
        .catch((err) => {
          setLoader(false);
          alertContext.setOpen(true);
          alertContext.setSuccess(false);
          alertContext.setMsg(err.message || err.statusText);
          return reject(err.response);
        });
    });
  }, []);

  const clearError = () => {
    setError(null);
  };

  return { error, sendRequest, clearError };
};
