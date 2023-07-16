import Banner from "../About/Banner"
import Testimonial from "../Home/Testimonial"

const Testimonials = () => {
  return (
    <div className="testimonial-section ">
        <div className="testimonial-heading mt-12 px-10">
          <h2 className="text-3xl font-bold">Testimonials</h2>
          <h5 className="font-bold my-5">Home / Testimonials</h5>
        </div>
    <Testimonial/>
    <Banner/>
    </div>
  )
}

export default Testimonials
