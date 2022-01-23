import React, {useState, useEffect} from 'react'
import axios from 'axios'
import ReactPaginate from 'react-paginate';

export default function  FunctionalComponentPagination() {

    const [offset, setOffset] = useState(0);
    const [data, setData] = useState([]);
    const [perPage] = useState(10);
    const [pageCount, setPageCount] = useState(0)
  
  
    const getData = async() => {
        const res = await axios.get(`https://jsonplaceholder.typicode.com/photos`)
        const data = res.data;
                  const slice = data.slice(offset, offset + perPage)
                  const postData = slice.map(pd => <div key={pd.id}>
                      <p>{pd.title}</p>
                      <img src={pd.thumbnailUrl} alt=""/>
                  </div>)
                  setData(postData)
                  setPageCount(Math.ceil(data.length / perPage))
    }
    const handlePageClick = (e) => {
      const selectedPage = e.selected;
      setOffset(selectedPage + 1)
  };
  
   useEffect(() => {
     getData()
   }, [offset])
  
    return (
      <>
      <center><h1>Functional component pagination</h1></center>
          <a href={'/'}>Return Home</a>

      <div className="DataTable">
        {data}
         <ReactPaginate
                      previousLabel={"prev"}
                      nextLabel={"next"}
                      breakLabel={"..."}
                      breakClassName={"break-me"}
                      pageCount={pageCount}
                      marginPagesDisplayed={2}
                      pageRangeDisplayed={5}
                      onPageChange={handlePageClick}
                      containerClassName={"pagination"}
                      subContainerClassName={"pages pagination"}
                      activeClassName={"active"}/>
      </div>
      </>
    );
  }
