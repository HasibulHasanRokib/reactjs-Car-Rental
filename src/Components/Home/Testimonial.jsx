import clintOne from "/src/assets/cilent-1.png"
import clintTwo from "/src/assets/cilent-2.png"


const Testimonial = () => {
  return (
    <>
          <section className="bg-[#e9e9e9] lg:h-screen py-8">
          <div className="lg:w-2/5 md:w-3/5 w-full text-center mx-auto pt-5 ">
            <h5 className="text-xl font-bold mt-3">Reviewed by People</h5>
            <h3 className="text-5xl font-bold mt-3 mb-4">
              Client`s Testimonials
            </h3>
            <p className="mt-5 max-md:px-4">
              Discover the positive impact we`ve made on the our clients by
              reading through their testimonials. Our clients have experienced
              our service and results, and they`re eager to share their positive
              experiences with you
            </p>
          </div>
          <div className="flex max-lg:flex-col items-center gap-4 max-lg:justify-center lg:justify-around mt-20">
            <div className="bg-white lg:w-2/5 w-4/5 px-5 py-3 rounded">
              <article>
                <p className="text-xl font-bold mt-3">
                  We rented a car from this website and had an amazing
                  experience! The booking was easy and the rental rates were
                  very affordable.
                </p>
              </article>
              <div className="flex items-center gap-3 mt-5">
                <img
                  className="w-16 rounded-full h-16 border"
                  src={clintOne}
                  alt=""
                />
                <article>
                  <h2 className="font-bold">Ron Rizzly</h2>
                  <h5>Novi Sad</h5>
                </article>
              </div>
            </div>
            <div className="bg-white lg:w-2/5 w-4/5 px-5 py-3 rounded">
              <article>
                <p className="text-xl font-bold mt-3">
                  We rented a car from this website and had an amazing
                  experience! The booking was easy and the rental rates were
                  very affordable.
                </p>
              </article>
              <div className="flex items-center gap-3 mt-5">
                <img
                  className="w-16 rounded-full h-16 border"
                  src={clintTwo}
                  alt=""
                />
                <article>
                  <h2 className="font-bold">Ron Rizzly</h2>
                  <h5>Novi Sad</h5>
                </article>
              </div>
            </div>

          </div>
        </section>
    </>
  )
}

export default Testimonial

