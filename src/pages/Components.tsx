import banannyfavicon from "../assets/banannyfavicon.svg";
import banannyfavicon2 from "../assets/banannyfavicon2.svg";
import banannyfavicon3 from "../assets/banannyfavicon3.svg";

export function Components() {
  return (
    <>
      <div className="container mx-auto mt-6 gap-2 grid grid-cols-3">
        <div className="card W-80 bg-base-100 shadow-xl">
          <figure>
            <img src={banannyfavicon2} alt="bananamoon" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Bananamoon!</h2>
            <p>banana moons for pink raccoons</p>
            <div className="card-actions justify-end">
              <button className="btn btn-accent">Buy Now</button>
            </div>
          </div>
        </div>
        <div className="card W-80 bg-base-100 shadow-xl">
          <figure>
            <img src={banannyfavicon} alt="bananamoon" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Bananamoon!</h2>
            <p>banana moons for purple raccoons</p>
            <div className="card-actions justify-end">
              <button className="btn btn-accent">Buy Now</button>
            </div>
          </div>
        </div>
        <div className="card W-80 bg-base-100 shadow-xl">
          <figure>
            <img src={banannyfavicon3} alt="bananamoon" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Bananamoon!</h2>
            <p>banana moons for blue raccoons</p>
            <div className="card-actions justify-end">
              <button className="btn btn-accent">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
