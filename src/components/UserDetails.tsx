import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { IUser } from "../models/IUser";
import { UserService } from "../services/UserService";
import { Link } from 'react-router-dom';
interface URLParam {
  id: string
}
interface IProps { }
interface IStates {
  loading: boolean,
  user: IUser,
  errorMessage: string
}
let UserDetails: React.FC<IProps> = () => {
  let { id } = useParams<URLParam | any>();
  let [state, setState] = useState<IStates>(
    {
        loading: false,
        user: {} as IUser,
        errorMessage: ''
    }
);

useEffect(() => {
  setState({ ...state, loading: true });
if(id){
  UserService.getUser(id).then((respond) => {
    setState(
        {
            ...state,
            loading: false,
            user: respond.data,
        }
    );
}).catch((error) => {
    setState(
        {
            ...state,
            loading: false,
            errorMessage: error.message,
        }
    );
});
}
}, []);

 

  // useEffect(() => {
  //   setState({ ...state, loading: true });
  //   if (id) {
  //     UserService.getUser(id).then((response) => {
  //       console.log('response.data>>>',response.data);
  //       setState({
  //         ...state,
  //         loading: false,
  //         user: response.data,
  //       });

  //     }).catch((error) => {
  //       setState(
  //         {
  //           ...state,
  //           loading: false,
  //           errorMessage: error.message,
  //         }
  //       );
  //     });
  //   }
  // }, [id]);

  let { loading, user, errorMessage } = state;
  console.log('users ---->',user.name);
  return (<React.Fragment>
    <div className="container">
    {loading && <div className="row">
            <div className="d-flex justify-content-center">
                <div className="spinner-border text-success" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        </div>}
      <div className="row">
        <div className="col">
          <p className="h3 text-success fw-bold">User Details</p>
        </div>
      </div>
    { Object.keys(user).length > 0 &&       <div className="row">
        <div className="col">
          <ul className="list-group">
            <li className="list-group-item">Name: <span className="fw-bold">{user.name}</span></li>
            <li className="list-group-item">User Name: <span className="fw-bold">{user.username}</span></li>
            <li className="list-group-item">email: <span className="fw-bold">{user.email}</span></li>
            <li className="list-group-item">City: <span className="fw-bold">{user.address.city}</span></li>
            <li className="list-group-item">Zip: <span className="fw-bold">{user.address.zipcode}</span></li>
          </ul>
        </div>
      </div>}
      <div className="row">
        <div className="col">
        <Link to={"/"} className="btn btn-success m-3">Back</Link>
        </div>
              </div>
    </div>

        </React.Fragment>);
}
export default UserDetails;