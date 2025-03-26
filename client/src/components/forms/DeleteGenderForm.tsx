import { Link } from "react-router-dom";
const DeleteGenderForm = () => {
  return (
    <>
      <div className="formgroup">
        <div className="mb-3">
          <label htmlFor="delete">Delete</label>
          <input
            type="text"
            className="form-control"
            id="delete"
            name="delete"
          />
        </div>
        <div className="d-flex justify-content-end">
          <span>
            <Link to={"/"} type="submit" className="btn btn-danger">
              No
            </Link>
          </span>
        </div>
        <div className="d-flex justify-content-end">
          <span>
            <Link to={"#"} type="submit" className="btn btn-danger">
              Yes
            </Link>
          </span>
        </div>
      </div>
    </>
  );
};

export default DeleteGenderForm;
