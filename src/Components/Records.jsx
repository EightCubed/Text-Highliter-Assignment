/* eslint-disable react/jsx-no-duplicate-props */
import React from 'react';
import './records.css';

const MAX_LENGTH=38;

const Records = ({data ,selected ,changeRecord }) =>{
    
    const handleChange = (e,id) => {
        changeRecord(id)
    }        

    return(
        <div className='records'>
            <div className='title'>Records</div>
            {data.map(({id,heading,body})=> 
                <div className='record' key={id} onClick={(e)=>handleChange(e,id)} className={id===selected?'selected':'unselected'}>
                    <div className='body'>
                        {body.length > MAX_LENGTH ?
                        (<div className='list'>
                            {id+1} . {' '} 
                            {`${body.substring(0, MAX_LENGTH)}...`}
                        </div>
                        ) :
                        <p>{body}</p>
                        }
                    </div>
                </div>
            )}
        </div>
    );
}

export default Records;