import { isEmpty } from 'lodash';
import './highlight.css';

const Highlight = ({text='',searchWords=[]}) => {

    const nullArray=isEmpty(searchWords);
    const array=text.split(" ");
    const annotationText=[];
    const annotationArray={};

    searchWords.forEach(element => {
        annotationText.push(element.text)
        const temp=element.annotation===1?"Person":"Org";
        annotationArray[`${element.text}`]=temp;
    });

    console.log(annotationArray)

    return(
        <div className='textBody'>
            {nullArray && <div>{text}</div>}
            {!nullArray && 
                (array.map( (element) =>{
                    if( annotationText.includes(element))
                    {    
                        console.log(element)
                        return <mark className='annot'>{element}<mark className='annotName'>{annotationArray[`${element}`]}</mark></mark>
                    }
                    else
                    {
                        return <p>{element}{' '}</p>
                    }
                }))
            }
        </div>
    );
}

export default Highlight;