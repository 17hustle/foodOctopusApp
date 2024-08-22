import React from "react";

export default function Card() {
  return (
    <div>
      <div>
        <div
          className="card mt-3"
          style={{ width: "18rem", maxHeight: "300px" }}
        >
          <img
            className="card-img-top"
            src="http://s4.scoopwhoop.com/ach/momo/13.jpg"
            alt="Card image cap"
          />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">This is some important text </p>
            <div className="container w-100"></div>
            <select name="m-2 h-100 w-100 bg-success">
              {Array.from(Array(6), (e, i) => {
                return (
                  <option key={i + 1} value={i + 1}>
                    {i + 1}
                  </option>
                );
              })}
            </select>
            <select name="m-2 h-100  bg-success">
              <option value="half">Half</option>
              <option value="full">Full</option>
            </select>
            <div className="d-inline-block h-100 w-10">Total Price </div>
          </div>
        </div>
      </div>
    </div>
  );
}
