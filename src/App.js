import React from 'react';
import './App.css';

const App = () => {
    return (
        <div className='app-wrapper'>
            <header className='header'>
                <img
                    src='https://lh3.googleusercontent.com/proxy/0wCPQJ3qH0jXHRvDo7hfqNDoi5ZbuhU51JxoqLeOedfIwJrO8j3dP6yxfyzeZ9bKdzBdIxCwFfFq3koyHYEFfikaniDUyUR6ehSqwqo1Fz168ySwuhB6rgsMzcSTpcdePavH'/>
            </header>
            <nav className='nav'>
                <div>
                    Profile
                </div>
                <div>
                    Messages
                </div>
                <div>
                    News
                </div>
                <div>
                    Music
                </div>
                <div>
                    Settings
                </div>
            </nav>
            <div className='content'>
                <div>
                    <img src='https://klike.net/uploads/posts/2019-09/1568880410_2.jpg'/>
                </div>
                <div>
                    Avatar + descr
                </div>
                <div>
                    My posts
                    <div>
                        New post
                    </div>
                    <div>
                        post 1
                    </div>
                    <div>
                        post 2
                    </div>
                </div>
            </div>
        </div>
    )
};


export default App;
