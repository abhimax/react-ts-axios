import React, { useEffect, useState } from "react";
import { IUser } from "../models/IUser";
import { UserService } from "../services/UserService";
interface IProps { }
interface IStates {
    loading: boolean,
    users: IUser[],
    errorMessage: string
}
let UserList: React.FC<IProps> = () => {
    let [state, setState] = useState<IStates>(
        {
            loading: false,
            users: [] as IUser[],
            errorMessage: ''
        }
    );

    useEffect(() => {
        setState({ ...state, loading: true });
        UserService.getAllUsers().then((respond) => {
            setState(
                {
                    ...state,
                    loading: false,
                    users: respond.data,
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
    }, []);

    let { loading, users, errorMessage } = state;
    return <div className="container">
        {loading && <div className="row">
            <div className="d-flex justify-content-center">
                <div className="spinner-border text-success" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        </div>}
        <div className="row">
            <table className="table table-hover text-center table-striped">
                <thead className="bg-success text-white">
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>User Name</th>
                        <th>email</th>
                        <th>City</th>
                    </tr>
                </thead>
                <tbody>

                    {users.map(
                        value => {
                            return <tr key={value.id}>
                                <td>{value.id}</td>
                                <td>{value.name}</td>
                                <td>{value.username}</td>
                                <td>{value.email}</td>
                                <td>{value.address.city}</td>
                            </tr>
                        }
                    )}

                </tbody>
            </table>
        </div>
    </div>
}
export default UserList;