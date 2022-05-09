import { isEmpty } from 'lodash';
import './highlight.css';

const constantAnnot={};
constantAnnot['Person']=1;
constantAnnot['Org']=2;

const Highlight = ({text='',activeAnnotation=0,handleAdd,searchWords=[]}) => {

    const nullArray=isEmpty(searchWords);
    const array=text.split(" ");
    const annotationText=[];
    const annotationArray={};

    searchWords.forEach(element => {
        annotationText.push(element.text)
        const temp=element.annotation===1?"Person":"Org";
        annotationArray[`${element.text}`]=temp;
    });

    const handleSelect = () => {
        handleAdd(window.getSelection().toString(),activeAnnotation);
    }

    return(
        <div className='textBody'>
            {nullArray && <div>{text}</div>}
            {!nullArray && 
                (array.map( (element) =>{
                    if( annotationText.includes(element))
                    {    
                        if ( activeAnnotation===0 )
                            return <mark className='annot'>{element}<mark className='annotName'>{annotationArray[`${element}`]}</mark></mark>
                        else if ( constantAnnot[annotationArray[`${element}`]]===activeAnnotation )
                            return <mark className='annot'>{element}<mark className='annotName'>{annotationArray[`${element}`]}</mark></mark>
                        else
                            return <p>{element}{' '}</p>
                    }
                    else
                    {
                        return <p onMouseUp={handleSelect}>{element}{' '}</p>
                    }
                }))
            }
        </div>
    );
}

export default Highlight;