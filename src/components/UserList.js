import React, { useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { apiPostUser } from "../api/apiPostUser";
import { apiGetUsers } from "../api/apiGetUsers";
import { useNavigate } from "react-router";
import { apiDeleteUser } from "../api/apiDeleteUser";
import { Link } from "react-router-dom";

const UserList = () => {

  const { userlist } = useSelector((state) => state.UserReducer);

  const dispatch = useDispatch();
  const navigate = useNavigate()

  const defaultUserVal = useMemo(() =>{
    return {
      id : 0,
      name : '',
      age : "",
      address : ""
    }
  },[]);
  const [userVal , setUserVal] = useState(defaultUserVal);

  const handleEdit = (id) =>{
    navigate(`/editUser/${id}`)
  }

  const handleDelete = async(id) =>{
    const response = await apiDeleteUser(id);
    if(response !== 404){
      apiGetUsers(dispatch);
    }
  }

  const handleChange = (e) =>{
    const { name , value } = e.target;

    setUserVal({
      ...userVal,
      [name] : value
    })
  }

  const saveUser = async (e) =>{
    e.preventDefault();
    userVal['id'] = userlist.length ? userlist[userlist.length - 1].id + 1 : 1
    const response = await apiPostUser(userVal);
    if(response !== 404){
      apiGetUsers(dispatch);
      setUserVal(defaultUserVal)
    }
  }

  return (
    <div>
      <h1>UserList</h1>

      <div>
        <h4>Add User</h4>
        <form onSubmit={saveUser}>
          <input 
            type="text"
            name="name"
            value={userVal.name}
            onChange={handleChange} 
            required
          />
          <input 
            type="text"
            name="age"
            value={userVal.age}
            onChange={handleChange} 
            required
          />
          <input 
            type="text"
            name="address"
            value={userVal.address}
            onChange={handleChange} 
            required
          />
          <button type="submit">Save</button>
        </form>
      </div>

      {(!!userlist && userlist.length) ? (
          <table style={{margin:'auto'}}>
            <thead>
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Age</th>
                <th>Address</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {userlist.map((user) =>(
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.age}</td>
                  <td>{user.address}</td>
                  <td>
                    <button onClick={() => handleEdit(user.id)}>Edit</button>
                    <button onClick={() => handleDelete(user.id)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
      ) : (
        <p>
          No Users
        </p>
      )}

      <Link to="/">Go to Home</Link>

    </div>
  );
};

export default UserList;
