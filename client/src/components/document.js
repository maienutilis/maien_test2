const Document = ({handleSubmit, type, setType, terms, setTerms})=>{
    
    const divStyle = {
        marginTop: 10
      };
    return(
        <>
            <div style={divStyle}>Create New Document</div>
            <form onSubmit={handleSubmit}>
                <br></br>
                <div className="form-group">
                    <label htmlFor="type">Type</label>
                    <input value={type} required
                     onChange={e => setType(e.target.value)}
                    type="text" className="form-control" id="type"  placeholder="Type"/>
                </div>
                <br></br>
                <div className="form-group">
                    <label htmlFor="terms">Terms</label>
                    <input required value= {terms} onChange={e=> setTerms(e.target.value)} type="text" className="form-control" id="terms" placeholder="example = bug, book, cart"/>
                </div>
                <br></br>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </>
    );
}

export default Document;