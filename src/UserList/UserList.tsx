import React from "react";
import { IUser } from '../Interfaces/Global';
 
export interface UserList {
    users: IUser[]
}
const UserList: React.FunctionComponent<UserList> = (props) => {
    return (
        <div className="userList">
         { props.users.map(user => <h3>{user.name} | {user.phone} | {user.address.city} | {user.address.street}</h3>)}   
        </div>
    );
}
export default UserList;