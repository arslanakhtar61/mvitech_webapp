import {fetchUtils, Admin, Resource, ListGuesser } from 'react-admin';
//import dataProvider from './api/DataProvider';
import jsonServerProvider from 'ra-data-json-server';
import simpleRestProvider from 'ra-data-simple-rest';


const fetchJson = (url, options = {}) => {
  if (!options.headers) {
      options.headers = new Headers({ Accept: 'application/json' });
  }
  // add your own headers here
  options.headers.set('X-Custom-Header', 'foobar');
  return fetchUtils.fetchJson(url, options);
}

//const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');
const dataProvider = simpleRestProvider('http://localhost:8081', fetchJson);
const App = () => {
  return (
    <Admin 
      dataProvider={dataProvider}
    >
        <Resource name="vendors" list={ListGuesser} />
        {/* <Resource name="posts" list={ListGuesser} />
        <Resource name="todos" list={ListGuesser} /> */}
    </Admin>
  );
}

export default App;
