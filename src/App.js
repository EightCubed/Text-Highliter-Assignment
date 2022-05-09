import { useState } from 'react';
import './App.css';
import AnnotationList from './Components/AnnotationList';
import AnnotationWindow from './Components/AnnotationWindow';
import Records from './Components/Records';

const recordsData = [
  {
    "id": 0,
    "heading": "Record 1",
    "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    "id": 1,
    "heading": "Record 2",
    "body": "In the deep bosom of the ocean buried.Now are our brows bound with victorious wreaths;Our bruised arms hung up for  monuments; Our stern alarums changed to merry meetings, Our dreadful marches to delightful measures. Grim-visaged war hath smooth'd his wrinkled front; And now, instead of mounting barded steeds To fright the souls of fearful adversaries,He capers nimbly in a lady's chamber",
  },  
  {
    "id": 2,
    "heading": "Record 3",
    "body":  "Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna.",
  },
  {
    "id": 3,
    "heading": "Record 4",
    "body": "Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla",
  },
]

const Annotations = [
  {
    "name" : "Person",
    "id" : 1,
  },
  {
    "name" : "Org",
    "id" : 2,
  },
]

const annotationListData=[
      {
        "id":0,
        "text": "nostrud",
        "annotation": 1,
      },
      {
        "id":0,
        "text": "mollit",
        "annotation": 2,
      },
      {
        "id": 1,
        "text": "buried",
        "annotation": 1,
      },
      {
        "id": 1,
        "text": "alarums",
        "annotation": 1,
      },
      {
        "id": 2,
        "text": "amet",
        "annotation": 1,
      },
      {
        "id": 2,
        "text": "tempus",
        "annotation": 2,
      },
      {
        "id": 3,
        "text": "consequat",
        "annotation": 2,
      },
      {
        "id": 3,
        "text": "ante",
        "annotation": 1,
      },
      {
        "id": 3,
        "text": "Aliquam",
        "annotation": 2,
      },
    ]

function App() {

  const [selectedID,setSelectedID]=useState(null)
  const [data,setData]=useState(recordsData);
  const [annotationList,setAnnotationList]=useState(annotationListData)

  const changeRecord = (id) => {
    setSelectedID(id)
  }

  const handleRemove = (text) => {
    const newList = annotationList.filter(c => c.text !== text );
    console.log(newList)
    setAnnotationList(newList);
  }

  return (
    <div className="App">
      <Records data={data} selected={selectedID} changeRecord={changeRecord} />
      <AnnotationList data={data} selected={selectedID} annotations={Annotations} annotationList={annotationList}/>
      <AnnotationWindow data={data} selected={selectedID} handleRemove={handleRemove} annotationList={annotationList}/>
    </div>
  );
}

export default App;
