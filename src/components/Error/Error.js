import React from 'react';

const Error = ({message}) => {
    
    return (
        <div className='text-[red]'>
            {message}
        </div>
    );
};

export default Error;