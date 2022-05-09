import React, { useState } from 'react';
import './annotationlist.css';
import Highlight from './Highlight';

const AnnotationList = ({data=[],annotations=[],handleAdd,selected,annotationList}) =>{

    const [activeAnnotation,setActiveAnnotation]=useState();
    let thisAnnotation=[]
    thisAnnotation=annotationList.filter( c => {
        if( c.id === selected)
            return c
    });

    const handleClick = (e,id) => {
        setActiveAnnotation(id)
    }

    const handleAddAnnotation = (data,activeAnnotation) => {
        handleAdd(data,activeAnnotation)
    }

    return(
        <div className='annotationlist'>
            <div className='title2'>
                {annotations.map( (annotations)=> 
                    <div onClick={(e)=>handleClick(e,annotations.id)} className={annotations.id===activeAnnotation?"annotationsActive":"annotations"} key={annotations.id}>{annotations.name}<div className='annotationNumber'>{annotations.id}</div></div>
                )}
            </div>
            {data.map( data => 
                (data.id===selected && 
                <div className='recordBody' key={data.id}>
                    <Highlight text={data.body} handleAdd={handleAddAnnotation} activeAnnotation={activeAnnotation} searchWords={thisAnnotation} />
                </div>)
            )}
        </div>
    );
}

export default AnnotationList;