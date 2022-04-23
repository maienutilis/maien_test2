const DrowDown = ({types, showTermsGraph, changeValue})=>{

    const divStyle = {
        marginTop: 10
      };
      

    return (
        <>
            <div style={divStyle}>Select Type </div>
            <select id="terms" onChange={changeValue}>
                {
                    types?
                    (types.map((type, index)=>{  
                        return(<option key={index} value={type}>{type}</option>);
                    }))
                    :("")
                }
            </select>           
            <button onClick={showTermsGraph}>Ok</button>
        </>
            
    );
}

export default DrowDown;