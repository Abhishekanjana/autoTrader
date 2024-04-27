import axios from 'axios';

export async function fetchCarInfo(reg) {
  try {
    const url = 'https://api.attestr.com/api/v1/public/checkx/rc';
    const requestBody = {
      "reg": reg
    };
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Basic T1gwWDRrSEpLRG9YWjJlc1o4LjJjYTE2YWI2YzEzODI4YmY0YzRlNzc5Mzc4NWIxYjY2OjkwZTAxNDVkNmVjNTIwNGJhNTMwZGRhNTM4MDc1ZjAwMDk4Y2NiOGUwYmY0ZTZiMg==`
      },
      data: JSON.stringify(requestBody) // Use `data` instead of `body` for Axios
    };

    // Use Axios to make the request
    const response = await axios.post(url, options.data, { headers: options.headers });

    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
}