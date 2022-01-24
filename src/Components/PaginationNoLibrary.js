import React, { useEffect, useState } from "react";


function PaginationNoLibrary() {
    const [data, setData] = useState([]);
    let [page, setPage ] = useState(1);

  useEffect(() => {
    fetch(`https://api.instantwebtools.net/v1/passenger?page=${page}&size=10`)
      .then((response) => response.json())
      .then((resp) => setData(resp.data))
  }, [page]);
  
  if(Object.keys(data).length > 1) {
    console.log("data set: ", data);
  }

  function changePageUp(e){
    e.preventDefault();
    page = parseInt(page);
    page+=1;
    setPage(page);
  }

  function changePageDown(e){
    e.preventDefault();
    page = parseInt(page);
    page-=1;
    setPage(page);
    if(page<0){
      page = 0;
      alert("no more entries")
      setPage(page);
    }
  }

  function jumpToSpecificPage(e, requestedPage){
    e.preventDefault();
    setPage(requestedPage);
    console.log( "page number ", requestedPage);
  }


  return (
    <>
    <div id="sidenav">
      <h1>Passenger Listings</h1><br />
      <a href={'/'}>Return Home</a>
      <br/><br/>
      <div id="buttonsArea">
      <button className="navigationButtons" onClick={(e) => {changePageDown(e)}}>{`<`}Previous Page </button>
      <button className="navigationButtons" onClick={(e) => {changePageUp(e)}}> Next Page{`>`}</button>
      </div>
      <center><div><b>Page# {page}</b></div></center>
      <br/>
      <form onSubmit={(e) => {jumpToSpecificPage(e, e.target.value)}}>
        <label>
          Go to specific page:
          <input type="text" pattern="[0-9]*"
     onChange={(e) => {jumpToSpecificPage(e, e.target.value)}} defaultValue="" id="choosePageNumber" />
        </label>
      </form>
      <hr/>
      </div>
      {data && (
      <div id="mainBackgroundNoLibrary"><table id="FetchWithLimitTable">
        <thead>
          <tr>
            <td>trip ID</td>
            <td>Passenger name</td>
            <td># of trips</td>
          </tr>
        </thead>
        <tbody>
        {data.map((person) => (
            <tr key={person.id}>
            <td>{person._id}</td>
            <td>{person.name}</td>
            <center><td>{person.trips}</td></center>
            </tr>
        ))}
        </tbody>
</table>
      </div>
    )}
    </>
  );
}

export default PaginationNoLibrary;