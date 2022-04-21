import React from 'react';
import Gender from './Categories/Gender';
import Species from './Categories/Species';
import Status from './Categories/Status';

function Filter(props) {
    const {setStatus,setPageNumber,setGender , setSpecies} = props;
    let clear = () => {
        setStatus("");
        setPageNumber("");
        setGender(""); 
        setSpecies("");
        window.location.reload();
    }

    return (
        <div className='col-3'>
            <div className="text-center fw-bold fs-4 mb-2">Filter</div>
            <div style={{ cursor: "pointer " }} 
            onClick={clear}
            className="text-center text-decoration-underline mb-4">
                Clear Filter</div>

            <div className="accordion" id="accordionExample">

                <Status setPageNumber ={setPageNumber} setStatus = {setStatus}/>
                <Species setSpecies = {setSpecies} setPageNumber = {setPageNumber} />
                <Gender setGender = {setGender} setPageNumber = {setPageNumber}/>

            </div>

        </div>
    )
}

export default Filter;
