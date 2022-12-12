import './App.css';

import { useState } from 'react';

import ProductsList from './components/ProductsList';
import ScrollInfo from './components/ScrollInfo';
import Users from './components/Users';

function App() {
    const [showScrollPosition, setScrollPositionVisibility] = useState(true);

    const toggleScrollPositionVisibility = () => {
        setScrollPositionVisibility((previousValue) => !previousValue);
    };

    return (
        <div className="App">
            <ProductsList />
            <button onClick={toggleScrollPositionVisibility}>
                Toggle Scroll Position Visibility
            </button>
            {showScrollPosition && <ScrollInfo />}
            <Users />
        </div>
    );
}

export default App;
