const DrowDown = ({terms, showTermsGraph, changeValue})=>{
    return (
        <>
            Select Type 
            <select id="terms" onChange={changeValue}>
                {
                    terms?
                    (terms.map((term)=>{ 
                        return(<option value={term.type}>{term.type}</option>);
                    }))
                    :("")
                }
            </select>
           
            <button onClick={showTermsGraph}>Ok</button>
        </>
            
    );
}


export default DrowDown;