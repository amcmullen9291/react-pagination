import React from 'react';

export default function Homepage() {

return (
    <>
    <div>
        <center><a href={'/class-component-example'}><button>Class component example</button></a></center>
        <hr/>
        <center><a href={'/functional-component-example'}><button>Functional component example</button></a></center>
        <hr/>
        <hr/>
        <center><a href={'/no-library'}><button>Pagination without a library frameowrk</button></a></center>
    </div>
    </>
);
}
