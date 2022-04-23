import DrowDown from "../components/dropDown";
import Graph from '../components/barChart'
import { useState, useEffect} from 'react';
import axios from "axios";

const Home = ()=>{
    
    const [terms, setTerms] = useState();
    const [type, setType] = useState(0);
    const [showGraph, setShowGraph] = useState(0);
    const [data, setData] = useState();

    const getTerms = async ()=>{
      console.log ("Sdfdsf")
      const { aaaaa } = await axios.get(`http://localhost:8000/api/terms`);
      console.log (aaaaa);
    }

    useEffect( ()=>{
        if (!terms){
          getTerms();
            const tt = [
                { type:1, terms: ['bug','bug','book','cart','cart']},
                { type:2, terms: ['bug','book','cart']}] 
            
            setTerms(tt);
            setType(tt[0].type);
        }
    },[terms]);

    // on click button ok show graph 
    const showTermsGraph =()=>{ 
      setShowGraph(1);
      
      let dataGraph = [];
      let selectedType = []
      
      // find json type selected 
      for (let i=0; i<terms.length; i++){
        if (terms[i].type ==type){
          selectedType = terms[i];
        }
      }
      
      
      // go over json type selected and count number of terms
      // and create data array to display graph 
      // example array [{name : book , number : 5}, {name: bug, number:1 }]
      for (let i=0; i<selectedType.terms.length ; i++){  
        let flag = false;
        for (let j=0 ; j<dataGraph.length; j++){
          if (dataGraph[j].name == selectedType.terms[i]){
            dataGraph[j].number++;
            flag = true;
          }
        }
        if (!flag){
          dataGraph.push({name:selectedType.terms[i] , number:1});
        }
      }
      setData (dataGraph);
    }
    

    // set type on select change
    const changeValue = (e)=>{setType(e.target.value);}

    return (
        <>

          <DrowDown 
            terms = {terms}
            showTermsGraph = {showTermsGraph}
            changeValue = {changeValue}/>

          {showGraph==1? (<Graph data={data}/>) : ("") }
    </>
    
    );
}

export default Home; 