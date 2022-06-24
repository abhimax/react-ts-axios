import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { IUser } from "../models/IUser";
import { UserService } from "../services/UserService";
interface URLParam {
    id : string
}
interface IProps{}
interface IStates{
  loading: boolean,
  users: IUser[],
  errorMessage: string
}
let UserDetails: React.FC<IProps> = () => {
  let [state, setState] = useState({
    loading: false,
    users: [] as IUser[],
    errorMessage: '' 
  });

  let {id} = useParams<URLParam | any>();

  useEffect(()=>{
    setState({ ...state, loading: true });

    UserService.getUser('1').then().catch();
  },[]);
    return <React.Fragment>
      <p className="h2">User Details</p>
      <p>{id}</p>
    </React.Fragment>
}
export default UserDetails;