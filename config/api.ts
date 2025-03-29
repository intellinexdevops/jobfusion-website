import axios from "axios";

class Api {
  static async POST(
    endpoint: string,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    data?: any,
    token?: string | null
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ): Promise<any> {
    const url = `${process.env.NEXT_PUBLIC_API_URL}/${endpoint}`;

    axios.defaults.headers.common["Content-Type"] =
      "application/x-www-form-urlencoded";

    if (token) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    }

    const response = await axios.post(url, data);
    return response.data;
  }

  static async GET(
    endpoint: string,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    params?: any,
    token?: string | null
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ): Promise<any> {
    const url = `${process.env.NEXT_PUBLIC_API_URL}/${endpoint}`;

    axios.defaults.headers.common["Content-Type"] = "application/json";

    if (token) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    }

    const response = await axios.get(url, params);
    return response.data;
  }
}

export default Api;
