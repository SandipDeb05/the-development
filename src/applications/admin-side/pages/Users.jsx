import React from "react";
import DataTable from "../components/DataTable";
import { MdEdit } from "react-icons/md";
import { MdDeleteForever } from "react-icons/md";
import { USERS } from "../DATA";

const columns = [
  {
    field: "id",
    headerName: "id",
  },
  {
    field: "username",
    headerName: "username",
  },
  {
    field: "name",
    headerName: "name",
  },
  {
    field: "email",
    headerName: "email",
  },
  {
    field: "phone",
    headerName: "phone",
  },
  {
    field: "website",
    headerName: "website",
  },
  {
    field: "company",
    headerName: "company",
  },
  {
    field: "action",
    headerName: "action",
    renderCell: (row) => {
      return (
        <div className="flex gap-4">
          <i className="cursor-pointer text-lg">
            <MdEdit />
          </i>
          <i className="cursor-pointer text-lg">
            <MdDeleteForever />
          </i>
        </div>
      );
    },
  },
];

const Users = () => {
  return (
    <div className="relative overflow-x-auto">
      <DataTable rows={USERS} columns={columns} />
    </div>
  );
};

export default Users;
