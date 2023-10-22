import React from "react";
import RowForm from "../../components/Form/RowForm";

const AllJobs = () => {
  const valSel = ["all", "pending", "interview", "declined"];
  return (
    <div>
      <form className="form">
        <h2>All Jobs</h2>

        <RowForm type="text" label="position" className="row_marg" />

        <div>
          <label htmlFor="status">Job status</label>
          <select name="status" id="status">
            {/* recive value from server */}
            
        </div>

        <button className="btn">Add Job</button>
      </form>
    </div>
  );
};

export default AllJobs;
