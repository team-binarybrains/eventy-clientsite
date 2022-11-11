import axios from "axios";
import React, { useEffect, useState } from "react";
import { BiUserCircle } from "react-icons/bi";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
// import SingleUser from "../SingleUser/SingleUser";

const AllEmployee = () => {
  const [employee, setEmployee] = useState([]);
  // console.log(employee);
  useEffect(() => {
    axios
      .get("https://eventy-serversite-production.up.railway.app/employee")
      .then((res) => {
        const { data } = res;
        setEmployee(data);
      });
  }, []);
  const handleDeleteUser = (id) => {
    // const proceed = window.confirm("Are you sure?");

    // if (proceed) {
    //    const url = `https://eventy-serversite-production.up.railway.app/delete-employee/${id}`;
    //    fetch(url, {
    //       method: "DELETE",
    //    })
    //       .then((res) => res.json())
    //       .then((data) => {
    //          const remaining = employee.filter((toDo) => toDo._id !== id);
    //          setEmployee(remaining);
    //       });
    // }
    Swal.fire({
      title: "Are you sure?",
      text: "You are sure to delete employee information",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it !",
    }).then((result) => {
      if (result.isConfirmed) {
        const url = `https://eventy-serversite-production.up.railway.app/delete-employee/${id}`;
        fetch(url, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            const remaining = employee.filter((toDo) => toDo._id !== id);
            setEmployee(remaining);
          });
        Swal.fire(
          "Deleted!",
          "Employee information has been deleted.",
          "success"
        );
      } else {
        // console.log("no delete");
        return;
      }
    });
  };

  return (
    <div class="my-12">
      <div className="overflow-x-visible ">
        <table class="max-w-5xl w-full mx-auto table-auto border">
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
                colSpan={2}
              >
                <span class="text-gray-100 font-semibold">Setting</span>
              </th>
            </tr>
          </thead>

          <tbody class="bg-gray-200">
            {employee.map((employee) => (
              <tr
                class="bg-white border-b-2 border-gray-200"
                data-aos="flip-down"
                data-aos-duration="2500"
              >
                <td class="pl-2 md:px-16 lg:px-16 xl:px-16 py-2 flex flex-row items-center">
                  {employee?.image ? (
                    <img
                      class="h-[41px] w-10 p-[1px] rounded-full border border-green-800 object-cover m-auto"
                      src={employee?.image}
                      alt=""
                    />
                  ) : (
                    <BiUserCircle className="m-auto text-4xl h-[41px] w-10 text-slate-600"></BiUserCircle>
                  )}
                </td>
                <td>
                  <span class=" block ml-2 font-medium text-slate-600 capitalize text-center">
                    {employee?.name}
                  </span>
                </td>

                <td class="px-16 py-2 font-medium text-slate-600 text-center">
                  {employee.email}
                </td>
                {/* <td> <Link to={''}></Link> </td> */}
                <td class="px-16 py-2 ">
                  <span class="text-yellow-500 flex justify-center px-2">
                    <Link to={`/dashboard/update-employee/${employee._id}`}>
                      {" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-5 w-5 text-green-700 mx-2"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
                        <path
                          fill-rule="evenodd"
                          d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                          clip-rule="evenodd"
                        />
                      </svg>{" "}
                    </Link>
                    <button
                      onClick={() => handleDeleteUser(employee._id)}
                      className=""
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-5 w-5 text-red-600"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </button>
                  </span>
                </td>
              </tr>
              // console.log(employee)
              // <SingleUser
              //    employee={employee}
              //    handleDeleteUser={handleDeleteUser}
              //    key={employee._id}
              // ></SingleUser>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllEmployee;
