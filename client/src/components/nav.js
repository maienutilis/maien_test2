const Nav = ()=>{
    return(
        <>
            <ul className="nav bg-dark">
                <li className="nav-item justify-content center">
                    <a className="nav-link active" href="/">Home</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/document">Document</a>
                </li>
            </ul>
        </>
    );
}

export default Nav;