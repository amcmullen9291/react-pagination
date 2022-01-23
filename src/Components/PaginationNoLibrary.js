import React, { useEffect, useState } from "react";


function PaginationNoLibrary() {
    const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://api.instantwebtools.net/v1/passenger?page=0&size=10")
      .then((response) => response.json())
      .then((resp) => setData(resp.data))
  }, []);
  
  if(Object.keys(data).length > 1) {
    console.log("data set: ", data);
  }


  return (
    <>
    <div id="sidenav">
      <h1>Passenger Listings</h1><br />
      <a href={'/'}>Return Home</a>
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