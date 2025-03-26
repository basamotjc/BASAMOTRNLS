import { Link } from "react-router-dom";

const GendersTable = () => {
  return (
    <>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>No.</th>
            <th>Gender</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Male</td>
            <Link to={"gender/edit"} type="button" className="btn btn-primary">
              Edit
            </Link>
            <Link to={"gender/delete"} type="button" className="btn btn-danger">
              Delete
            </Link>
          </tr>
          <tr>
            <td>2</td>
            <td>Female</td>
            <Link to={"gender/edit"} type="button" className="btn btn-primary">
              Edit
            </Link>
            <Link to={"gender/delete"} type="button" className="btn btn-danger">
              Delete
            </Link>
          </tr>
          <tr>
            <td>3</td>
            <td>Gay</td>
            <Link to={"gender/edit"} type="button" className="btn btn-primary">
              Edit
            </Link>
            <Link to={"gender/delete"} type="button" className="btn btn-danger">
              Delete
            </Link>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default GendersTable;
