import React from 'react';
import './annotationlist.css';
import Highlight from './Highlight';

const AnnotationList = ({data=[],annotations=[],selected,annotationList}) =>{

    let thisAnnotation=[]
    thisAnnotation=annotationList.filter( c => {
        if( c.id === selected)
            return c
    });
    console.log(thisAnnotation)


    return(
        <div className='annotationlist'>
            <div className='title'>
                {annotations.map( (annotations)=> 
                    <div className='annotations' key={annotations.id}>{annotations.name}<div className='annotationNumber'>{annotations.id}</div></div>
                )}
            </div>
            {data.map( data => 
                (data.id===selected && 
                <div className='recordBody' key={data.id}>
                    <Highlight text={data.body} searchWords={thisAnnotation} />
                </div>)
            )}
        </div>
    );
}

export default AnnotationList;