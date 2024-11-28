import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { apiUpdateUser } from '../api/apiUpdateUser';
import { apiGetUsers } from '../api/apiGetUsers';

const EditUser = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [userVal, setUserVal] = useState({});
  const { userlist } = useSelector(state => state.UserReducer);
  const { id } = useParams();
  const UserObj = userlist.find((obj) => (obj.id).toString() === id);

  useEffect(() => {
    if(!!UserObj){
      setUserVal(UserObj)
    }
  }, [UserObj])

  const handleChange = (e) => {
    const { name, value } = e.target;

    setUserVal({
      ...userVal,
      [name]: value
    })
  }

  const updateUser = async (e) => {
    e.preventDefault();
    console.log("this User = ", userVal);
    const response = await apiUpdateUser(id , userVal);
    if(response !== 404){
      apiGetUsers(dispatch);
      navigate("/users")
    }
  }

  return (
    <div>
      <h1>EditUser</h1>

      <div>
        <h4>Update User</h4>
        <form onSubmit={updateUser}>
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
            <button type="submit">Update</button>
          </form>
      </div>

      <Link to={"/users"}>Go To Users</Link>
      <br />
      <Link to={"/"}>Go To Home</Link>


    </div>
  )
}

export default EditUser