import './Contact.css'
import Banner from '/src/Components/About/Banner'

const Contact = () => {
  return (
    <>
     <div className="contact-section">
        <div className="contact-text">
        <h2 className='text-4xl font-bold my-4'>Need additional information?</h2>
        <p className='my-4 text-gray-500'>A multifaceted professional skilled in multiple fields of research, development as well as a learning specialist. Over 15 years of experience.</p>
        <ul>
            <li className='my-3 font-bold text-lg'><a href="#"><i className="fa-solid fa-phone text-red-500 mx-2"></i> (123) 456-7869</a></li>
            <li className='my-3 font-bold text-lg'><a href="#">  <i className="fa-solid fa-envelope-open-text text-red-500 mx-2"></i>carrental@carmail.com</a></li>
            <li className='my-3 font-bold text-lg'><a href="#"><i className="fa-solid fa-location-dot text-red-500 mx-2"></i>Dhaka,Bangladesh</a></li>
        </ul>
        </div>
        <div className="contact-form">
         <form>
            <label className='text-xl font-bold' htmlFor="name">Full Name <span className='text-red-500'>*</span></label> <br/>
            <input className="contact-input" type="text" name="name" id="name" placeholder='E.g:"Joe Shmoe"' required /><br/>
            <label className='text-xl font-bold' htmlFor="email">Email <span className='text-red-500'>*</span></label> <br/>
            <input className="contact-input" type="email" name="email" id="contact-email" placeholder='youremail@example.com"' required /><br/>
            <label className='text-xl font-bold' htmlFor="name">Tell us about it<span className='text-red-500'>*</span></label> <br/>
           <textarea className="contact-input" name="comment" id="text-box" cols="30" rows="10" placeholder='Write here...'></textarea>
           <button className='contact-btn'><i className="fa-solid fa-envelope-open-text text-white mx-2"></i>Sent Message</button>
         </form>
        </div>
     </div> 
     <Banner/>

    </>
  )
}

export default Contact
