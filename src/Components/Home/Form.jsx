import './Home.css'
const Form = () => {
  return (
    <div>
              <div className="form-section">
          <form className="form-body">
            <div>
              <label className="text-red-500 font-bold block" htmlFor="car">
                <i className="fa-solid fa-car"></i> Select Your Car Type{" "}
                <sup>*</sup>
              </label>
              <input
                className="mt-1 block w-80 px-3 py-2 bg-white border border-slate-300  text-sm shadow-sm placeholder-slate-400
      focus:outline-none
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                type="text"
                placeholder="Select your car type"
              />
            </div>

            <div>
              <label className="text-red-500 font-bold block" htmlFor="Pick-up">
                <i className="fa-solid fa-location-dot"></i> Pick-up<sup>*</sup>
              </label>
              <input
                className="mt-1 block w-80 px-3 py-2 bg-white border border-slate-300 text-sm shadow-sm placeholder-slate-400
      focus:outline-none
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                type="text"
                placeholder="Select pick-up location"
              />
            </div>
            <div>
              <label
                className="text-red-500 font-bold block"
                htmlFor="Drop-of "
              >
                <i className="fa-solid fa-location-dot"></i> Drop-of<sup>*</sup>
              </label>
              <input
                className="mt-1 block w-80 px-3 py-2 bg-white border border-slate-300 text-sm shadow-sm placeholder-slate-400
      focus:outline-none
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                type="text"
                placeholder="Select drop-of location"
              />
            </div>
            <div>
              <label
                className="text-red-500 font-bold block"
                htmlFor="Drop-of "
              >
                <i className="fa-solid fa-calendar-days"></i> Pick-up Date
                <sup>*</sup>
              </label>
              <input
                className="mt-1 block w-80 px-3 py-2 bg-white border border-slate-300 text-sm shadow-sm placeholder-slate-400
      focus:outline-none
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                type="date"
                placeholder="Select drop-of location"
              />
            </div>
            <div>
              <label
                className="text-red-500 font-bold block"
                htmlFor="Drop-of "
              >
                <i className="fa-solid fa-calendar-days"></i> Drop-of Date
                <sup>*</sup>
              </label>
              <input
                className="mt-1 block w-80 px-3 py-2 bg-white border border-slate-300  text-sm shadow-sm placeholder-slate-400
      focus:outline-none
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                type="date"
                placeholder="Select drop-of location"
              />
            </div>
            <button className="search-btn">Search</button>
          </form>
        </div>
    </div>
  )
}

export default Form
