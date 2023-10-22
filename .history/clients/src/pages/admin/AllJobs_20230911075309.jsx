import React from "react";
import RowForm from "../../components/RowForm";
import SelectRow from '../../components/Form/SelectRow';


const AllJobs = () => {
  const statusSel = ["all", "pending", "interview", "declined"];
  return (
    <div>
      <form className="form">
        <h2>All Jobs</h2>

        <RowForm type="text" label="position" className="row_marg" />

         <SelectRow label='status' values={statusSel}/>
         <SelectRow label='type'   values={typesSel}/>
         <SelectRow label='sort' values={sortSel}/>

        <button className="btn">Add Job</button>
      </form>
    </div>
  );
};

export default AllJobs;
