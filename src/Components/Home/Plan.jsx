import planOne from "/src/assets/download (2).png"
import planTwo from "/src/assets/download (1).png"
import planThree from "/src/assets/download.png"

const Plan = () => {
  return (
    <div>
              <div className="plan-section">
          <div className="plan-text ">
            <h4 className="text-2xl font-bold">Plan your trip now</h4>
            <h3 className="text-5xl font-bold mt-5">Quick & easy car rental</h3>
            <div className="plan-card">
              <div className="card">
                <div className="card-img">
                  <img src={planOne} alt="" />
                </div>
                <div className="card-body">
                  <h2 className="text-xl font-bold mb-3">Select Car</h2>
                  <p>
                    We offers a big range of vehicles for all your driving
                    needs. We have the perfect car to meet your needs
                  </p>
                </div>
              </div>
              <div className="card">
                <div className="card-img">
                  <img src={planTwo} alt="" />
                </div>
                <div className="card-body">
                  <h2 className="text-xl font-bold mb-3">Contact Operator</h2>
                  <p>
                    Our knowledgeable and friendly operators are always ready to
                    help with any questions or concerns
                  </p>
                </div>
              </div>
              <div className="card">
                <div className="card-img">
                  <img src={planThree} alt="" />
                </div>
                <div className="card-body">
                  <h2 className="text-xl font-bold mb-3">Let`s Drive</h2>
                  <p>
                    Whether you're hitting the open road, we've got you covered
                    with our wide range of cars
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Plan
