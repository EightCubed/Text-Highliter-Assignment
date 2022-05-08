import './highlight.css';

const Highlight = ({text='',searchWords=[]}) => {

    let array=[];
    let count=0;
    let done=false;

    searchWords.forEach(element => {
        const start=text.search(element.text);
        const end=text.search(element.text)+element.text.length-1;
        array.push(start,end,element.text,element.annotation);
        console.log(array)
    });

    return(
        <div className='textBody'>
            {text.split("").map((character,i) => {
            if(done===true)
                count+=3;
            done=false;
            if( i<array[count] || i>array[count+1])
            {   
                return <>{character}</>
            }
            for(let temp=i;temp<array[count+2].length;temp++)
            {
                done=true;
                return <mark>{character}</mark>
            }
            })}
        </div>
    );
}

export default Highlight;