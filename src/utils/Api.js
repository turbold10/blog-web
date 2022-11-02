import axios from "axios";

export const sendRequest = async (url, method, data) => {
  const request_url = 'https://dummyapi.io/data/v1/' + url;
  const response = await axios({
    url: request_url,
    method,
    headers: {
      "app-id": '61e4da7877c7a055ee794c63',
      "Content-type": "application/json",
    },
    data,
  });
  return response
};