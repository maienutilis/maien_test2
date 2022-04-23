import DrowDown from "../components/dropDown";
import Graph from '../components/barChart'
import { useState, useEffect} from 'react';
import axios from "axios";

const Home = ()=>{
  const [terms, setTerms] = useState();
  const [showGraph, setShowGraph] = useState(0);
  const [types, setTypes] = useState();
  const [selectedType, SetSelectedType] = useState();

  // function get all terms by type
  // input selected type
  const getTerms = async (typeNumber)=>{
    try{
      const result = await axios.get(`${process.env.NEXT_PUBLIC_API}/terms/${typeNumber}`);
      const arrData = []
      for (let key in result.data){
        arrData.push({name:key , number: result.data[key]});
      }
      setTerms(arrData)
    }
    catch(err){
      console.log (err)
    }
  }

  // first get all types from DB 
  // send get requset to server using axios to get
  // all types from db and insert them into select option
  const getTypes = async ()=>{
    try{
      const result = await axios.get(`${process.env.NEXT_PUBLIC_API}/types`);
      // initialize first value of types
      SetSelectedType(result.data[0])
      setTypes(result.data)
    }
    catch(err){
      console.log(err);
    }
  }

  // useEffect on types
  useEffect( ()=>{ if (!types){ getTypes(); } },[types]);

  // on click button ok show graph 
  const showTermsGraph =()=>{
    // call function get terms, send get request to backend and get 
    // all terms with selected id from DB 
    getTerms(selectedType) 
    // flag to show graph
    setShowGraph(1);
  }
  
  // set type on select change
  const changeValue = (e)=>{ SetSelectedType(e.target.value);}

  return (
      <>
        <DrowDown 
          types = {types}
          showTermsGraph = {showTermsGraph}
          changeValue = {changeValue}/>

        {showGraph==1? (<Graph terms={terms}/>) : ("") }
  </>
  
  );
}

export default Home; 