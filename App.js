import React, {useState, useEffect} from "react"; 
import './App.css';
import Axios from 'axios'

function App() {

  const [student, setStudent] = useState({
    fname: "",
    lname: "",
    rollno: "",
    branch: ""
  });

  const [studentList, setStudentList] = useState([])
  const [updStudent, setUpdStudent] = useState({
    first_name: "",
    last_name: "",
    roll_number: "",
    branch: ""
  })

  useEffect(() => {
    Axios.get("http://localhost:3001/api/get").then((response) => {
      setStudentList(response.data);
      console.log(studentList);
    })
  },[])


  // const [fname, setFname] = useState("");
  // const [lname, setLname] = useState("");
  // const [rollno, setRollno] = useState("");
  // const [branch, setBranch] = useState("");

  const submitData = () => {

       Axios.post("http://localhost:3001/api/insert", {fname: student.fname, lname: student.lname, rollno: student.rollno, branch: student.branch});

       setStudentList([...studentList,{fname: student.fname, lname: student.lname, roll_no: student.rollno, branch: student.branch}])
  };

  const studentData = (e) => {
       setStudent({...student,[e.target.name]:e.target.value})
       console.log(student)
  }

  const deleteData = (roll_no) => {
    Axios.delete(`http://localhost:3001/api/delete/${roll_no}`);
  }

  const updateData = (roll_no) => {
    Axios.put("http://localhost:3001/api/update", {
      fname: updStudent.first_name, lname: updStudent.last_name, rollno: updStudent.roll_number, branch: updStudent.branch
      
    });
    setUpdStudent({
      first_name: "",
      last_name: "",
      roll_number: "",
      branch: ""
    })
  

  }

  const upStudentData = (e) => {
     setUpdStudent({...updStudent, [e.target.name]:e.target.value})
     console.log(updStudent)

  }

  return (
    <div className="App">
      <h1>STUDENT APPLICATION</h1>
      
      <div className="form">
      <label>First Name:</label>
      <input type="text" name="fname" onChange={(e)=> {
        studentData(e)
      }}/>
      <br></br>
      <label>Last Name:</label>
      <input type="text" name="lname" onChange={(e)=> {
        studentData(e)
      }}/>
      <br></br>
      <label>Roll No:</label>
      <input type="text" name="rollno" onChange={(e)=> {
        studentData(e)
      }}/>
      <br></br>
      <label>Branch:</label>
      <input type="text" name="branch" onChange={(e)=> {
        studentData(e)
      }}/>

      <button onClick={submitData}>SUBMIT</button>



      </div>

       
       
      <div className="container">

      <table>
      <tr>
      <th>ROLL NUMBER</th>
      <th>FIRST NAME</th>
      <th>LAST NAME</th>
      <th>BRANCH</th>
      </tr>
      {studentList.map((val) => {
          return (
          
          
          
          <tr key={val.roll_no}> 

          <td>{val.roll_no}</td>
          <td>{val.fname}</td>
          <td>{val.lname}</td>
          <td>{val.branch}</td>
          

          </tr>

          
          )
        
        })}

        </table>
        </div>

        <div className="card-cont">
        {studentList.map((val) => {
          return (
          
            <div className="card">
          <div key={val.roll_no}>
          <h1>{val.fname} {val.lname} </h1>
          <p>{val.roll_no}</p>
          <p>{val.branch}</p>

          <div className="input-cont">
          <input type="text" name='first_name' placeholder="First name" className="updateInput" onChange={(e) => {upStudentData(e)}}/>
          <input type="text" name='last_name' placeholder="Last name" className="updateInput" onChange={(e) => {upStudentData(e)}}/>
          <input type="text" name='roll_number' placeholder={"( "+val.roll_no + " )"} className="updateInput" onChange={(e) => {upStudentData(e)}}/>
          <input type="text" name='branch' placeholder="Branch" className="updateInput" onChange={(e) => {upStudentData(e)}}/>
          <br></br>
          <button onClick={(e) => {updateData(val.roll_no)}}>Update</button>
          <button onClick={(e)=>{deleteData(val.roll_no)}}>Delete</button>
          </div>


          </div>
          </div>
          )
        
        })}



      </div>


      
       


      
   

    </div>
  );
}

export default App;
