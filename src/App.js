
import './App.css';
import { Header } from './components/Header';
import { Messages } from './components/Messages';
import { useState } from 'react';
const App = () => {
  
  const [data,setData] = useState([
    {date:'16Feb 2021',dealno:"897123",rowcontent:"PH563187240-SUPPLY AC Stator Coil 183702-19388 Supply Ac Stator Coil 183702....",price:"50,000.00",msg:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, aspernatur tenetur, eos mollitia nihil sit dolorem nemo accusantium illo magni omnis error eveniet maiores! Voluptates obcaecati quasi molestiae cumque temporibus ducimus ea harum reiciendis? Expedita magnam libero repudiand inventore soluta aut iste doloribus qui natus. Pariatur nostrumest hic voluptatum. Maiores, modi dicta reiciendis quae consequuntur repellat id,.... "},
    {date:'26Feb 2021',dealno:"897125",rowcontent:"PH563187240-SUPPLY AC Stator Coil 183702-19388 Supply Ac Stator Coil 183702....",price:"50,000.00",msg:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, aspernatur tenetur, eos mollitia nihil sit dolorem nemo accusantium illo magni omnis error eveniet maiores! Voluptates obcaecati quasi molestiae cumque temporibus ducimus ea harum reiciendis? Expedita magnam libero repudiand inventore soluta aut iste doloribus qui natus. Pariatur nostrum est hic voluptatum. Maiores, modi dicta reiciendis quae consequuntur repellat id,...."},
    {date:'16Feb 2021',dealno:"897127",rowcontent:"PH563187240-SUPPLY AC Stator Coil 183702-19388 Supply Ac Stator Coil 183702....",price:"50,000.00",msg:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, aspernatur tenetur, eos mollitia nihil sit dolorem nemo accusantium illo magni omnis error eveniet maiores! Voluptates obcaecati quasi molestiae cumque temporibus ducimus ea harum reiciendis? Expedita magnam libero repudiand inventore soluta aut iste doloribus qui natus. Pariatur nostrum est hic voluptatum. Maiores, modi dicta reiciendis quae consequuntur repellat id,...."}
  ])
  const handleInput=(e)=>{
      // console.log(value)
      for(let i=0;i<data.length;i++){
        if(e.target.value === data[i].dealno){
          console.log("hello",data[i])

          setData([data[i]])
        }
      }
     //check_no()
  }


  return (
    <div className="App">
       <Header clickHandler={handleInput}  />
       <br></br>
        <Messages data={data}/>
    </div>
  );
}

export default App;
