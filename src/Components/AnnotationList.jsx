import React from 'react';
import './annotationlist.css';
import Highlighter from 'react-highlight-words';
import Highlight from './Highlight';

const AnnotationList = ({data=[],annotations=[],selected=0}) =>{

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
                    <Highlight text={data.body} searchWords={data.annotations} />
                    {/* <Highlighter
                        highlightClassName="YourHighlightClass"
                        searchWords={data.annotations}
                        autoEscape={true}
                        textToHighlight={data.body}
                    /> */}
                </div>)
            )}
        </div>
    );
}

export default AnnotationList;