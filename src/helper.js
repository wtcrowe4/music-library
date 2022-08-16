const fetchSearch = async (search) => {
  const response = await fetch(`https://itunes.apple.com/search?term=${search}`);
  const data = await response.json();
  return data.results;
}

const wrapPromise = (promise) => {
  let status = 'pending';
  let result = '';
  let suspender = promise.then(
    (r) => {
      status = 'success';
      result = r;
    }
  ).catch(
    (e) => {
      status = 'error';
      result = e;
    }
  );
  return {
    read() {
      if (status === 'pending') {
        throw suspender;
      } else if (status === 'error') {
        throw result;
      } else if (status === 'success') {
        return result;
      }
    }
  }
}

export const createResource = (search) => {
  return {
    results: wrapPromise(fetchSearch(search))
  };
};