import { Routes, Route} from 'react-router-dom';

import Home from './router/home/home';
import Navigation from './router/navigation/navigation';

const Shop = () => {
    return <h1>I am the shop page</h1>
}

const App = () => {
    return (
        <Routes>
            <Route path='/' element={<Navigation/>}>
                <Route index={true} element={<Home />} />
                <Route path='shop' element={<Shop />} />
            </Route>
        </Routes>
    );
}

export default App;
