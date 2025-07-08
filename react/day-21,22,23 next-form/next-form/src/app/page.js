"use client"
import Image from "next/image";
import styles from "./page.module.css";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Container, Row } from "react-bootstrap";
import axios from "axios";
import Table from 'react-bootstrap/Table';
import { useEffect, useState } from "react";

export default function Home() {

  const [storeData, setStoreData] = useState([])

  let displayData = () => {
    axios.get("https://form-backend-by-py.onrender.com/api/website/user/getuser")
      .then((ress) => {
        setStoreData(ress.data.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  let userForm = (e) => {
    e.preventDefault()

    axios.post("https://form-backend-by-py.onrender.com/api/website/user/register", e.target)
      .then((ress) => {
        alert("Formt Register")
      })
      .catch((err) => {
        console.log(err.response.data)
        alert("something went wrong")
      })
      displayData()
  }


  // delete work
let DeleteRow=(myId)=>{
  axios.delete(`https://form-backend-by-py.onrender.com/api/website/user/single-user-delete/${myId}`)
  .then((ress)=>{
    alert(ress.data.message)
    displayData()
  })
  .catch((error)=>{
    console.log(error)
  })
 
} 

// input handel
let handelInput=(e)=>{
  console.log(e)
}


  useEffect(() => {
    displayData()
  }, [])



  return (
    <>
      <Container className="border py-5 bg-white " >
        <h1 className="py-4 text-center " > User Form Application </h1>
        <Form onSubmit={userForm} >
          <Form.Group className="mb-3" >
            <Form.Label>Enter Name</Form.Label>
            <Form.Control type="text" name="name" placeholder="Enter Name" />

          </Form.Group>


          <Form.Group className="mb-3" >
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" name="email" placeholder="Enter email" />

          </Form.Group>


          <Form.Group className="mb-3" >
            <Form.Label>contact</Form.Label>
            <Form.Control type="text" name="contact" placeholder="Enter contact" />

          </Form.Group>


          <Form.Group className="mb-3" >
            <Form.Label>Enter Gender</Form.Label>
            <input type="radio" className="mx-3" name="gender" value={"male"} /> Male
            <input type="radio" className="mx-3" name="gender" value={"female"} /> Female

          </Form.Group>



          <Form.Group className="mb-3" >
            <Form.Label>profilePicture</Form.Label>
            <Form.Control type="file" placeholder="Enter email" name="profilePicture" />

          </Form.Group>

          <Form.Group className="mb-3" >
            <Form.Label>address</Form.Label>
            <br />
            <textarea name="address" placeholder="enter address" className="w-75 p-5" ></textarea>

          </Form.Group>

          <Form.Group className="mb-3" >
            <Form.Label>DOB</Form.Label>
            <Form.Control type="date" name="dob" />

          </Form.Group>

          <Form.Group className="mb-3 d-flex gap-5 " >
            <Form.Label>qualification</Form.Label>
            <Form.Check
              type="checkbox" name="qualification" value={"10th"}
            /> 10th

            <Form.Check
              type="checkbox" name="qualification" value={"12th"}
            /> 12th

            <Form.Check
              type="checkbox" name="qualification" value={"UG"}
            /> UG

            <Form.Check
              type="checkbox" name="qualification" value={"PG"}
            /> PG

          </Form.Group>


          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>

        <Row className="pt-4" >
          <Table striped bordered hover>
            <thead>
              <tr>
                <th><input type="checkbox" />  </th>
                <th>Sr.</th>
                <th>Name</th>
                <th>Email</th>
                <th>Contact</th>
                <th>Gender</th>
                <th>ProfileImage</th>
                <th style={{width:"100px"}} >Adress</th>
                <th>Qulification</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>

              {storeData.length > 0
                ?
                storeData.map((v, i) => {
                  return (
                    <tr>
                      <td> <input type="checkbox" onChange={(e)=>handelInput(e)} value={v._id}  /> </td>
                      <td> {i+1} </td>
                      <td> {v.name} </td>
                      <td>{v.email} </td>
                      <td> {v.contact} </td>
                      <td>{v.gender}</td>
                      <td> <img src={`https://form-backend-by-py.onrender.com/uploads/${v.profilePicture}`} width={80} height={80} /> </td>
                      <td style={{width:"100px"}} > {v.address} </td>
                      <td  > {v.qualification}  </td>
                      <td> <button onClick={()=>DeleteRow(v._id)} > Delete </button> </td>
                    </tr>
                  )
                })
                :
                "please wait......"
              }


            </tbody>
          </Table>
        </Row>
      </Container>
    </>
  );
}
