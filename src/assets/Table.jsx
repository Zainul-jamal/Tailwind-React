// import React from "react";
import Table from "react-bootstrap/Table";

function Data() {
  const users = [
    {
      id: 1,
      firstName: "Emily",
      lastName: "Johnson",
      maidenName: "Smith",
      age: 28,
      gender: "female",
      email: "emily.johnson@x.dummyjson.com",
      phone: "+81 965-431-3024",
      username: "emilys",
      password: "emilyspass",
      birthDate: "1996-5-30",
    },
    {
      id: 2,
      firstName: "Michael",
      lastName: "Williams",
      maidenName: "",
      age: 35,
      gender: "male",
      email: "michael.williams@x.dummyjson.com",
      phone: "+49 258-627-6644",
      username: "michaelw",
      password: "michaelwpass",
      birthDate: "1989-8-10",
    },
    {
      id: 3,
      firstName: "Sophia",
      lastName: "Brown",
      maidenName: "",
      age: 42,
      gender: "female",
      email: "sophia.brown@x.dummyjson.com",
      phone: "+81 210-652-2785",
      username: "sophiab",
      password: "sophiabpass",
      birthDate: "1982-11-6",
    },
    {
      id: 4,
      firstName: "James",
      lastName: "Davis",
      maidenName: "",
      age: 45,
      gender: "male",
      email: "james.davis@x.dummyjson.com",
      phone: "+49 614-958-9364",
      username: "jamesd",
      password: "jamesdpass",
      birthDate: "1979-5-4",
    },
    {
      id: 5,
      firstName: "Emma",
      lastName: "Miller",
      maidenName: "Johnson",
      age: 30,
      gender: "female",
      email: "emma.miller@x.dummyjson.com",
      phone: "+91 759-776-1614",
      username: "emmaj",
      password: "emmajpass",
      birthDate: "1994-6-13",
    },
    {
      id: 6,
      firstName: "Olivia",
      lastName: "Wilson",
      maidenName: "",
      age: 22,
      gender: "female",
      email: "olivia.wilson@x.dummyjson.com",
      phone: "+91 607-295-6448",
      username: "oliviaw",
      password: "oliviawpass",
      birthDate: "2002-4-20",
    },
    {
      id: 7,
      firstName: "Alexander",
      lastName: "Jones",
      maidenName: "",
      age: 38,
      gender: "male",
      email: "alexander.jones@x.dummyjson.com",
      phone: "+61 260-824-4986",
      username: "alexanderj",
      password: "alexanderjpass",
      birthDate: "1986-10-20",
    },
  ];

  return (
    <div className=" p-4">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Phone</th>
            <th>Gender</th>
            <th>Email</th>
            <th>Password</th>
            <th>Age</th>
            <th>Birthday</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={user.id}>
              <td>{index + 1}</td>
              <td>{`${user.firstName} ${user.lastName}`}</td>
              <td>{user.phone}</td>
              <td>{user.gender}</td>
              <td>{user.email}</td>
              <td>{user.password}</td>
              <td>{user.age}</td>
              <td>{user.birthDate}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
import React from 'react'




export default Data;
