class HttpClient {
  get(url: string, headers?: HeadersInit | undefined) {
    fetch(url, { headers })
      .then((resolve) => resolve.json())
      .catch((error) => error);
  }

  post(url: string, headers?: HeadersInit | undefined, body?: any) {
    fetch(url, { headers, method: "POST", body: body });
  }
}

export default new HttpClient();
