import { useState, useEffect} from 'react';
import ComponentDocument from "../components/document";
import axios from "axios";

const Document = ()=>{

    const [type, setType] = useState("");
    const [terms, setTerms] = useState("");

    // handel submit and add new terms 
    const handleSubmit = async (e)=>{
        e.preventDefault();
        // check if type is number
        if (Number.isInteger(parseInt(type))){
            const numType = parseInt(type);
            const arrTerms = terms.split(",").map((a)=>{return a.trim();})
            
            const result = await axios.post(
                `${process.env.NEXT_PUBLIC_API}/add-terms`,
                {type: numType, terms:arrTerms});
            
            if (result.data.ok){
                alert("New Terms added successfully");
                setTerms("")
                setType("")
            }else{
                alert ("error in adding terms");
            }
        }
        else {
            alert ("type error")
        }
    }

    return (
        <>
            <ComponentDocument 
                handleSubmit={handleSubmit}
                type={type}
                setType={setType}
                terms={terms}
                setTerms={setTerms}
            />
        </>
    );
}

export default Document;