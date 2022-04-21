import React from 'react';
import ReactPaginate from 'react-paginate';

function Pagination(props) {
    const {setPageNumber , pageNumber , info} = props;

    // let prev = () => { 
    //     if(pageNumber === 1) return
    //     setPageNumber((x)=>x-1);
    // };

    // let next = () => { 
    //     setPageNumber((x)=>x+1);
    // };

    // console.log(info.pages);
    return (

        <div className='container d-flex justify-content-center gap-5 my-5'>
            <ReactPaginate
            className='pagination gap-4 my-4 '
            forcePage={pageNumber===1? 0 : pageNumber - 1} 
            nextLabel = "Next"
            nextClassName='btn btn-outline-primary'
            previousLabel = "Prev"
            previousClassName='btn btn-outline-primary'
            pageClassName='page-item'
            pageLinkClassName='page-link'
            activeClassName='active'
            onPageChange = {(data)=>{setPageNumber(data.selected+1)}}
            pageCount={info?.pages} />
            {/* <button onClick={prev} className="btn btn-primary">Prev</button> */}
            {/* <button onClick={next} className="btn btn-primary">Next</button> */}
        </div>
    )
}

export default Pagination;
