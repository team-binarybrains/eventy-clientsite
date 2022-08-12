import axios from "axios";
import React, { useEffect, useState } from "react";
import SingleUser from "../SingleUser/SingleUser";

const AllUsers = () => {
  const [allUsers, setAllUsers] = useState([]);
  // console.log(allUsers);

  useEffect(() => {
    axios.get("https://fathomless-hamlet-59180.herokuapp.com/allusers").then((res) => {
      const { data } = res;
      setAllUsers(data);
    });
  }, []);
  const handleDeleteUser = (id) => {
    const proceed = window.confirm("Are you sure?");
    if (proceed) {
      const url = `https://fathomless-hamlet-59180.herokuapp.com/delete-user/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          const remaining = allUsers.filter((toDo) => toDo._id !== id);
          setAllUsers(remaining);
        });
    }
  };

  return (
    <div class="mt-10">
      <table class="max-w-5xl mx-auto table-auto border">
        <thead class="justify-between">
          <tr class="bg-green-600">
            <th class="text-center py-2">
              <span class="text-gray-100 font-semibold">Avatar</span>
            </th>
            <th class="text-center py-2 ">
              <span class="text-gray-100 font-semibold">Name</span>
            </th>

            <th class="text-center py-2">
              <span class="text-gray-100 font-semibold">Email</span>
            </th>

            <th class="text-center py-2">
              <span class="text-gray-100 font-semibold">Setting</span>
            </th>
          </tr>
        </thead>
        <tbody class="bg-gray-200">
          {allUsers.map((allUser) => (
            <SingleUser
              allUser={allUser}
              handleDeleteUser={handleDeleteUser}
              key={allUser._id}
            ></SingleUser>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllUsers;
