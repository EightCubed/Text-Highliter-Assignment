import './highlight.css';

const Highlight = ({text='',searchWords=[]}) => {

    let array=[];
    let count=0;

    searchWords.forEach(element => {
        const start=text.search(element.text);
        const end=text.search(element.text)+element.text.length-1;
        array.push(start,end,element.text,element.annotation);
    });

    return(
        <div className='textBody'>
            {/* eslint-disable-next-line */}
            {text.split("").map((character,i) => {
            if( i>array[count+1] && count<array.length/4)
            {
                count+=4;
            }
            if( i<array[count] || i>array[count+1])
            {   
                return <p>{character}</p>
            }
            if(i===array[count+1])
                return <p className='annot'>{array[count+2]}<p className='annotName'>{array[count+3]===1?"Person":"Org"}</p></p>
            })}
        </div>
    );
}

export default Highlight;