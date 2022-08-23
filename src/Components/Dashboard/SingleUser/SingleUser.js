import React from "react";
import { BiUserCircle } from 'react-icons/bi';


const SingleUser = ({ allUser, handleDeleteUser }) => {
  const { _id, email } = allUser;
  return (
    <tr class="bg-white border-b-2 border-gray-200"
      data-aos="flip-down"
      data-aos-duration="2500"
    >
      <td class="px-16 py-2 flex flex-row items-center">
        {allUser?.image ? (
          <img
            class="h-8 w-8 rounded-full object-cover "
            src={allUser?.image}
            alt=""
          />
        ) : (
          <BiUserCircle className="text-4xl text-slate-600"></BiUserCircle>
        )}
      </td>
      <td>
        <span class="text-start block ml-2 font-medium text-slate-600 capitalize">
          {allUser?.displayName}
        </span>
      </td>

      <td class="px-16 py-2 font-medium text-slate-600">{email}</td>

      <td class="px-16 py-2 ">
        <span class="text-yellow-500 flex justify-end">
          {/* <svg
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
          </svg> */}
          <button onClick={() => handleDeleteUser(_id)}>
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
  );
};

export default SingleUser;
