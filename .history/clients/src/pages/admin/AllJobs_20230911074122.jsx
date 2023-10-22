import React from "react";
import RowForm from "../../components/Form/RowForm";
import SelectRow from "../../components/Form/SelectRow";

const AllJobs = () => {
  const valSel = ["all", "pending", "interview", "declined"];
  return (
    <div>
      <form className="form">
        <h2>All Jobs</h2>

        <RowForm type="text" label="position" className="row_marg" />

        <SelectRow lab>

        <button className="btn">Add Job</button>
      </form>
    </div>
  );
};

export default AllJobs;
