import { ChangeEvent, FormEvent, useState } from "react";
import GenderServices from "../../services/GenderServices";
import ErrorHandler from "../../handler/ErrorHandler";
import GenderFieldErrors from "../../interfaces/GenderFieldErrors";

const AddGenderForm = () => {
  const [state, setState] = useState({
    loadingstore: false,
    gender: "",
    errors: {} as GenderFieldErrors,
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleStoreGender = (e: FormEvent) => {
    e.preventDefault();
    setState((prevState) => ({ ...prevState, loadingstore: true }));

    GenderServices.storeGender(state)
      .then((res) => {
        if (res.status === 200) {
          setState((prevState) => ({
            ...prevState,
            gender: "",
            errors: {} as GenderFieldErrors,
          }));
        } else {
          console.error("Unexpected error occurred: ", res.status);
        }
      })
      .catch((error) => {
        if (error.response.status === 422) {
          setState((prevState) => ({
            ...prevState,
            errors: error.response.data.errors,
          }));
        } else {
          ErrorHandler(error, null);
        }
      })
      .finally(() => {
        setState((prevState) => ({ ...prevState, loadingstore: false }));
      });
  };

  return (
    <>
      <form onSubmit={handleStoreGender}>
        <div className="formgroup">
          <div className="mb-3">
            <label htmlFor="gender">Gender</label>
            <input
              type="text"
              className={`form-control ${
                state.errors.gender ? "is-invalid" : ""
              }`}
              id="gender"
              name="gender"
              value={state.gender}
              onChange={handleInputChange}
            />
            {state.errors.gender && (
              <p className="text-danger">{state.errors.gender[0]}</p>
            )}
          </div>

          <div className="d-flex justify-content-end">
            {state.loadingstore ? (
              <button className="btn btn-primary" type="button" disabled>
                <span
                  className="spinner-border spinner-border-sm"
                  aria-hidden="true"
                ></span>
                <span role="status">Loading...</span>
              </button>
            ) : (
              <button type="submit" className="btn btn-primary">
                Save!
              </button>
            )}
          </div>
        </div>
      </form>
    </>
  );
};

export default AddGenderForm;
