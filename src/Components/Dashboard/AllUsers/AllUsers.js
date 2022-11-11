import axios from "axios";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import SingleUser from "../SingleUser/SingleUser";

const AllUsers = () => {
  const [allUsers, setAllUsers] = useState([]);
  // console.log(allUsers);

  useEffect(() => {
    axios
      .get("https://eventy-serversite-production.up.railway.app/allusers")
      .then((res) => {
        const { data } = res;
        setAllUsers(data);
      });
  }, []);
  // const handleDeleteUser = (id) => {
  //   const proceed = window.confirm("Are you sure?");
  //   if (proceed) {
  //     const url = `https://eventy-serversite-production.up.railway.app/delete-user/${id}`;
  //     fetch(url, {
  //       method: "DELETE",
  //     })
  //       .then((res) => res.json())
  //       .then((data) => {
  //         const remaining = allUsers.filter((toDo) => toDo._id !== id);
  //         setAllUsers(remaining);
  //       });
  //   }
  // };
  const handleDeleteUser = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You are sure to delete user information",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it !",
    }).then((result) => {
      if (result.isConfirmed) {
        const url = `https://eventy-serversite-production.up.railway.app/delete-user/${id}`;
        fetch(url, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            const remaining = allUsers.filter((toDo) => toDo._id !== id);
            setAllUsers(remaining);
          });
        Swal.fire("Deleted!", "User information has been deleted.", "success");
      } else {
        // console.log("no delete");
        return;
      }
    });
  };
  return (
    <div class="my-12">
      <table class="max-w-5xl mx-auto table-auto border">
        <thead class="justify-between">
          <tr class="bg-green-600">
            <th
              class="text-center py-2"
              data-aos="zoom-in"
              data-aos-duration="2500"
            >
              <span class="text-gray-100 font-semibold">Avatar</span>
            </th>
            <th
              class="text-center py-2 "
              data-aos="zoom-in"
              data-aos-duration="2500"
            >
              <span class="text-gray-100 font-semibold">Name</span>
            </th>

            <th
              class="text-center py-2"
              data-aos="zoom-in"
              data-aos-duration="2500"
            >
              <span class="text-gray-100 font-semibold">Email</span>
            </th>

            <th
              class="text-center py-2"
              data-aos="zoom-in"
              data-aos-duration="2500"
            >
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
