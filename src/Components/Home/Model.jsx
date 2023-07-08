import './Home.css'


const Model = () => {
  return (
    <div>
              <div className="models-section">
          <div className="models-text">
            <h3 className="text-xl font-bold mt-5">Vehicle Models</h3>
            <h2 className="text-4xl font-bold mt-5 mb-3">Our rental fleet</h2>
            <p>
              Choose from a variety of our amazing vehicles to rent for your
              next adventure or business trip
            </p>
          </div>
          <div className="models-body">
            <div className="button-section">
              <button className="models-option">Audi A1 S-Line</button>
              <button className="models-option">Audi A1 S-Line</button>
              <button className="models-option">Audi A1 S-Line</button>
              <button className="models-option">Audi A1 S-Line</button>
              <button className="models-option">Audi A1 S-Line</button>
              <button className="models-option">Audi A1 S-Line</button>
            </div>
            <div className="car-img">
              <img src="/src/assets/audia1.jpg" alt="" />
            </div>
            <div className="car-info">
              <table>
                <thead>
                  <th>$45</th>
                  <th>/rent per day</th>
                </thead>
                <tbody>
                  <tr>
                    <td>Model</td>
                    <td>Model</td>
                  </tr>
                  <tr>
                    <td>Model</td>
                    <td>Model</td>
                  </tr>
                  <tr>
                    <td>Model</td>
                    <td>Model</td>
                  </tr>
                  <tr>
                    <td>Model</td>
                    <td>Model</td>
                  </tr>
                  <tr>
                    <td>Model</td>
                    <td>Model</td>
                  </tr>
                  <tr>
                    <td>Model</td>
                    <td>Model</td>
                  </tr>
                  <tr>
                    <td>Model</td>
                    <td>Model</td>
                  </tr>
                </tbody>
              </table>
              <button className="reserve-btn">Reserve Now</button>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Model
