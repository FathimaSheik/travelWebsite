import React from "react";
import "./Destination.css";
const DestinationSection = () => {
  return (
    <>
      <div className="maincontent">
        <div className="card" style={{ width: "38rem" }}>
          <div className="card-body">
            <h3>Plan Your Destination Now!</h3>
            <p>From</p>
            <select className="form-select" aria-label="Default select example">
              <option selected>Mumbai</option>
              <option value={1}>Banglore</option>
              <option value={2}>Visakhapatnam</option>
              <option value={3}>Hyderabad</option>
            </select>
            <p>To</p>
            <select className="form-select" aria-label="Default select example">
              <option selected>USA</option>
              <option value={1}>Switzerland</option>
              <option value={2}>Italy</option>
              <option value={3}>Russia</option>
            </select>
            <form className="row g-3">
              <div className="col-auto">
                <p>Departure Date</p>
                <label
                  htmlFor="inputPassword2"
                  className="visually-hidden"
                ></label>
                <input
                  type="Date"
                  className="form-control"
                  id="inputPassword2"
                  placeholder="Choose the Date"
                />
              </div>
              <div className="col-auto">
                <p>Days Of Stay</p>
                <label
                  htmlFor="inputPassword2"
                  className="visually-hidden"
                ></label>
                <input
                  type="Number"
                  className="form-control"
                  id="inputPassword2"
                  placeholder="Days Count"
                />
              </div>
            </form>
            <form className="row g-3">
              <div className="col-auto">
                <p>Adults</p>
                <label
                  htmlFor="inputPassword2"
                  className="visually-hidden"
                ></label>
                <input
                  type="Number"
                  className="form-control"
                  id="inputPassword2"
                  placeholder="Enter Number"
                />
              </div>
              <div className="col-auto">
                <p>Children</p>
                <label
                  htmlFor="inputPassword2"
                  className="visually-hidden"
                ></label>
                <input
                  type="Number"
                  className="form-control"
                  id="inputPassword2"
                  placeholder="Enter Number"
                />
              </div>
            </form>
            <div className="d-grid gap-2">
              <button className="btn btn-primary" type="button">
                Search For Flight
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DestinationSection;