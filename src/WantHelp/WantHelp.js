import "./WantHelp.css";
import food from "../assests/food.jpg"
import clothes from "../assests/clothes.jpg"
import monitoring from "../assests/monitoring.jpg"

function WantHelp() {
  return (
    <>
      <div>
      <div>
          <h1>Want to do monetary help</h1>
          <div className="whole">
            <div class="card">
            <img src={monitoring} alt="Card 1" />
              {/* <h3>For food</h3> */}
              <p>Small donations matter</p>
              <button>Pay</button>
            </div>
          </div>
        </div>

        <hr />


        <div>
          <h1>Want to distribute</h1>
          <div className="whole">
            <div class="card">
              <img src={clothes} alt="Card 1" />
              <h3>Clothes</h3>
              <p></p>
              <button>Donate</button>
            </div>

            <div class="card">
            <img src={food} alt="Card 1" />
              <h3>Food</h3>
              <button>Donate</button>
            </div>
          </div>
        </div>

        
      </div>
    </>
  );
}

export default WantHelp;
