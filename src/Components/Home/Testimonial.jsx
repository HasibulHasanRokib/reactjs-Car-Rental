import clintOne from "/src/assets/cilent-1.png"
import clintTwo from "/src/assets/cilent-2.png"


const Testimonial = () => {
  return (
    <div>
              <div className="testimonials-section">
          <div className="testimonials-text">
            <h5 className="text-xl font-bold mt-3">Reviewed by People</h5>
            <h3 className="text-5xl font-bold mt-3 mb-4">
              Client's Testimonials
            </h3>
            <p>
              Discover the positive impact we`ve made on the our clients by
              reading through their testimonials. Our clients have experienced
              our service and results, and they`re eager to share their positive
              experiences with you
            </p>
          </div>
          <div className="testimonials-card-section">
            <div className="testimonials-card rounded">
              <div className="testimonials-card-text">
                <p className="text-2xl font-bold">
                  We rented a car from this website and had an amazing
                  experience! The booking was easy and the rental rates were
                  very affordable.
                </p>
              </div>
              <div className="testimonials-card-body flex">
                <img
                  className="cilent-img"
                  src={clintOne}
                  alt=""
                />
                <div className="testimonials-clint-name">
                  <h2 className="font-bold">Ron Rizzly</h2>
                  <h5>Novi Sad</h5>
                </div>
              </div>
            </div>
            <div className="testimonials-card rounded">
              <div className="testimonials-card-text">
                <p className="text-2xl font-bold">
                  "We rented a car from this website and had an amazing
                  experience! The booking was easy and the rental rates were
                  very affordable."
                </p>
              </div>
              <div className="testimonials-card-body flex">
                <img
                  className="cilent-img"
                  src={clintTwo}
                  alt=""
                />
                <div className="testimonials-clint-name">
                  <h2 className="font-bold">Ron Rizzly</h2>
                  <h5>Novi Sad</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Testimonial

