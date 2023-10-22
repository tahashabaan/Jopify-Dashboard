import React from "react";
import RowForm from "../../components/RowForm";
import SelectRow from '../'
const AllJobs = () => {
  const statusSel = ["all", "pending", "interview", "declined"];
  return (
    <div>
      <form className="form">
        <h2>All Jobs</h2>

        <RowForm type="text" label="position" className="row_marg" />

         <SelectRow/>

        <button className="btn">Add Job</button>
      </form>
    </div>
  );
};

export default AllJobs;
