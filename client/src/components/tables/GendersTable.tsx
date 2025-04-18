import { Link } from "react-router-dom";
import Spinner from "./Spinner";
import GenderService from "../../services/GenderService";
import Genders from "../../interfaces/Genders";
import { useState } from "react";
import ErrorHandler from "../../handler/ErrorHandler";
import { useEffect } from "react";

interface GendersTableProps {
  refreshGenders: boolean;
}

const GendersTable = ({ refreshGenders }: GendersTableProps) => {
  const [state, setState] = useState({
    loadingGenders: true,
    genders: [] as Genders[],
  });

  const handleLoadGenders = () => {
    GenderService.loadGenders()
      .then((res) => {
        if (res.status === 200 && Array.isArray(res.data.genders)) {
          setState((prevState) => ({
            ...prevState,
            genders: res.data.genders,
          }));
        } else {
          console.error("Unexpected response format:", res);
          setState((prevState) => ({
            ...prevState,
            genders: [],
          }));
        }
      })
      .catch((error) => {
        ErrorHandler(error, null);
      })
      .finally(() => {
        setState((prevState) => ({
          ...prevState,
          loadingGenders: false,
        }));
      });
  };

  useEffect(() => {
    handleLoadGenders();
  }, [refreshGenders]);

  return (
    <>
      <table className="table table-hover">
        <thead>
          <tr className="align-middle">
            <th>No.</th>
            <th>Gender</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {state.loadingGenders ? (
            <tr className="align-middle">
              <td colSpan={3} className="text-center">
                <Spinner />
              </td>
            </tr>
          ) : state.genders.length > 0 ? (
            state.genders.map((gender, index) => (
              <tr className="align-middle" key={index}>
                <td>{index + 1}</td>
                <td>{gender.gender}</td>
                <td>
                  <div className="btn-group">
                    <Link
                      to={`gender/edit/:${gender.gender_id}`}
                      className="btn btn-primary"
                    >
                      Edit this!
                    </Link>

                    <Link
                      to={"gender/delete"}
                      type="button"
                      className="btn btn-danger"
                    >
                      Delete this!
                    </Link>
                  </div>
                </td>
              </tr>
            ))
          ) : (
            <tr className="allign-middle">
              <td className="text-center" colSpan={3}>
                404 No Genders Found!
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  );
};

export default GendersTable;
