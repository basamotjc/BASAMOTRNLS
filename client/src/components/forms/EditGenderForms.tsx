import { Link } from "react-router-dom";
const DeleteGenderForm = () => {
  return (
    <>
      <div className="formgroup">
        <div className="mb-3">
          <label htmlFor="Edit">Edit</label>
          <input type="text" className="form-control" id="edit" name="edit" />
        </div>
        <div className="d-flex justify-content-end">
          <span>
            <Link to={"#"} type="button" className="btn btn-primary">
              Edit
            </Link>
          </span>
        </div>
        <div className="d-flex justify-content-end">
          <span>
            <Link to={"/"} type="button" className="btn btn-primary">
              Cancel
            </Link>
          </span>
        </div>
      </div>
    </>
  );
};

export default DeleteGenderForm;
