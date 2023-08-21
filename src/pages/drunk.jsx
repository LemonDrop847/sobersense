import "./styles/drunk.css";

export default function Drunk() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h2>YOU ARE DRUNK !!</h2>
            <button className="btn btn-brand">Book Now</button>
          </div>

          <div className="col-md-6">
            <img
              src="https://static.vecteezy.com/system/resources/previews/021/789/338/non_2x/don-t-drink-and-drive-concept-drunk-driving-is-not-allowed-drink-and-drive-awareness-car-driving-home-vector.jpg"
              className="img-fluid"
              alt="Responsive Image"
            />
          </div>
        </div>
      </div>
    </>
  );
}
