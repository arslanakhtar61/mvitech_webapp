import { Admin, Resource, ListGuesser } from 'react-admin';
import dataProvider from './api/DataProvider';

const App = () => {
  return (
    <Admin 
      dataProvider={dataProvider}
    >
        <Resource name="accounts" list={ListGuesser} />
        <Resource name="transactions" list={ListGuesser} />
    </Admin>
  );
}

export default App;
