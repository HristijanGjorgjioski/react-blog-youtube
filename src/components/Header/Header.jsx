import { useContext } from 'react';
import { BsSun } from 'react-icons/bs';

import { MainContext } from '../../context/context';

import './Header.css';

const Header = () => {
    const { toggleTheme, theme } = useContext(MainContext)

    return (
        <div className='header'>
            <p className='toggle-theme' onClick={toggleTheme}>
                <BsSun className={`${theme}`} />
            </p>
            <h2>Inc. This Morning</h2>
            <h1>
                <span>"</span> Nauci Programiranje <span>"</span>
            </h1>
            <p>
                awesome place to make oneself <br />
                productive and entertained through daily updates.
            </p>
        </div>
    )
};

export default Header;
