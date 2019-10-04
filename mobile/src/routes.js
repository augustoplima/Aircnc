import { createAppContainer,createSwitchNavigator  } from 'react-navigation';

import Login from './Pages/Login';
import List from './Pages/List';
import Book from './Pages/Book';


const Routes = createAppContainer(
    createSwitchNavigator({
        Login,
        List,
        Book,
    })
);

export default Routes;
