import React, { useEffect, useState } from "react";

const renderData = (data) => {
  return (
    <ul>
      {data.map((person, id) => {
        return <><li key={id}>{person.name}</li><li>{person.country}</li><hr/></>;

      })}
    </ul>
  );
};

function PaginationNoLibrary() {
    const [data, setData] = useState([]);
    const [pageNumberLimit, setpageNumberLimit] = useState(5);
    const [maxPageNumberLimit, setmaxPageNumberLimit] = useState(5);
    const [minPageNumberLimit, setminPageNumberLimit] = useState(0);

    const [currentPage, setcurrentPage] = useState(1);
    const [itemsPerPage, setitemsPerPage] = useState(5);

  const pages = [];
  for (let i = 1; i <= Math.ceil(data.length / itemsPerPage); i++) {
    pages.push(i);
  }

  useEffect(() => {
    fetch("https://api.instantwebtools.net/v1/airlines")
      .then((response) => response.json())
      .then((resp) => setData(resp))
  }, []);
  
  if(Object.keys(data).length > 1) {
    console.log("data set: ", data);
  }
     

  return (
    <>
      <h1>Passenger Listings</h1> <br />
      <a href={'/'}>Return Home</a>
      <div>
      {renderData(data)}
      </div>
    </>
  );
}

export default PaginationNoLibrary;