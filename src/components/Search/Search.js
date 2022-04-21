import React from 'react'
import styles from "./Search.module.scss";

function Search(props) {
    const {setSearch ,setPageNumber} = props;
    return (
        <form action="" className="d-flex justify-content-center mb-5 gap-4">
            <input onChange = {e=>{
                setPageNumber(1);
                setSearch(e.target.value);
            }} type="text" className={`${styles.input}`} placeholder='Search for Characters'/>
            <button onClick={(e) => e.preventDefault()} className= {`${styles.btn} btn btn-primary fs-5`}>Search</button>
        </form>
    )
}

export default Search;
