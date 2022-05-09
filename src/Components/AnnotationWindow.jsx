import React from 'react';
import './annotationwindow.css';

const AnnotationWindow = ({data=[],annotationList,selected,handleRemove}) =>{ 

    const handleDelete = (e,text) => {
        handleRemove(text,selected);
    }

    return(
        <div className='annotationwindow'>
            <div className='title3'>Annotations</div>
            <table>{annotationList.map( (element) => {
                if(element.id===selected)
                {
                    return <tr className='list'>
                                <th className='text'>{element.text}</th>
                                <th className='bold'>{element.annotation===1?"Person":"Org"}</th>
                                <th onClick={(e)=>handleDelete(e,element.text)}>&#10006;</th>
                            </tr>
                }
            })}</table>
        </div>
    );
}

export default AnnotationWindow;