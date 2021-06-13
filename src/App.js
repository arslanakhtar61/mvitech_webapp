import { Admin, Resource, ListGuesser } from 'react-admin';
//import dataProvider from './api/DataProvider';
import jsonServerProvider from 'ra-data-json-server';
import simpleRestProvider from 'ra-data-simple-rest';

//const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');
const dataProvider = simpleRestProvider('http://localhost:8081/');
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
