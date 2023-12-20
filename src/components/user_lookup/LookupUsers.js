import { useState } from "react";
import "./LookupUsers.css";
import "./UserItem.css";
import axios from "axios";
import apiUrl from "../../apiConfig";
import { useUserContext } from "../../managers/User";

export default function LookupUsers({onSelectUser}) {
    const [users, setUsers] = useState(null);
    const [search, setSearch] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const {getUserId} = useUserContext();
    const myId = getUserId();

    const onSearchChange = (event) => {
        setIsLoading(true);
        const searchValue = event.target.value;
        setSearch(searchValue);
        if (!searchValue) {
            setIsLoading(false);
            setUsers(null);
            return;
        }

        const url = apiUrl + "/users/approximately/" + searchValue.trim();
        axios.get(url).then(response => {
            setIsLoading(false);
            if (response.data.hint != searchValue)
                return;
            const result = response.data.users?.filter(user => user._id != myId);
            if(result.length == 0){
                setUsers(null);
                return;
            }
            setUsers(result);
        }).catch(error => {
            console.log("Error lookingup users:", error);
            setUsers(null);
            setIsLoading(false);
        });
    }

    return (
        <div className="lookup-users">
            <form className="lookup-users-header">
                <input
                    type="text"
                    value={search}
                    placeholder="Enter the user's email or phone number..."
                    onChange={onSearchChange}
                />
            </form>
            <div className="lookup-users-content">
                {
                    users ? 
                    users.map((user, index) => (
                        <UserItem key={index} user={user} onSelectUser={onSelectUser}/>
                    ))
                    :
                    <p className="empty-users-list">Find your contacts!</p>
                }
                {isLoading &&
                    <div className="loading-panel">
                        <p>...</p>
                    </div>
                }
            </div>
        </div>
    );
}

function UserItem({ user, onSelectUser }) {
    const handleSelectUser = ()=>{
        onSelectUser(user);
    }
    return (
        <div className="user-item" onClick={handleSelectUser}>
            <p className="no-margin">{user.firstName} {user.lastName}</p>
            <p className="no-margin"><b>Role: </b> {user.role}</p>
            <p className="no-margin"><b>Email: </b> {user.email}</p>
            <p className="no-margin"><b>Phone: </b>{user.phoneNumber}</p>
        </div>
    );
}