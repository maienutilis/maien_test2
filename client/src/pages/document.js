import { useState, useEffect} from 'react';
import ComponentDocument from "../components/document";


const Document = ()=>{

    const [type, setType] = useState();
    const [terms, setTerms] = useState();

    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log(type, terms)
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