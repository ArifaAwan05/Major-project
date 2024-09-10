import React from 'react';

const Navbar= () => {
    return(
        <div>
            <nav>
                <div className='nav-wrapper white'>
                    <a href="/" className='brandLogo left'>Instagram</a>
                    <ul id ="nav-mobile" className='right'>
                        <li><a href="/login">Login</a></li>
                        <li><a href="/signup">Signup</a></li>
                        <li><a href="/profile">Profile</a></li>
                        <li><a href="/create">Create Post</a></li>

                    </ul>
                </div>
            </nav>
        </div>
    )}
    export default Navbar;