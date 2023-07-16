import './Members.css'
import Banner from '/src/Components/About/Banner'

import member1 from "/src/assets/2.f41d050c1c5b9e59fc22.png"
import member2 from "/src/assets/3.1d499e4b69de7b9e10fb.png"
import member3 from "/src/assets/5.e46bcc8b44d7c4298aea.png"
import member4 from "/src/assets/4.0e752081a69322c59b26.png"
import member5 from "/src/assets/6.528b8c60ae315bc6a52a.png"

const Members = () => {
  return (
    <div>
      <div className="members-section">
        <div className="members-card">
            <img className='members-img' src={member1} alt="" />
            <div className="members-card-body my-4">
                <h3 className='text-3xl font-bold'>Michael Diaz</h3>
                <p>Business Owner</p>
            </div>
        </div>
        <div className="members-card">
            <img className='members-img' src={member2} alt="" />
            <div className="members-card-body my-4">
                <h3 className='text-3xl font-bold'>Briana Ross</h3>
                <p>Photographer</p>
            </div>
        </div>
        <div className="members-card">
            <img className='members-img' src={member3} alt="" />
            <div className="members-card-body my-4">
                <h3 className='text-3xl font-bold'>Martin Rizz</h3>
                <p>Mechanic</p>
            </div>
        </div>
        <div className="members-card">
            <img className='members-img' src={member4} alt="" />
            <div className="members-card-body my-4">
                <h3 className='text-3xl font-bold'>Lauren Rivera</h3>
                <p>Car Detailist</p>
            </div>
        </div>
        <div className="members-card">
            <img className='members-img' src={member5} alt="" />
            <div className="members-card-body my-4">
                <h3 className='text-3xl font-bold'>Caitlyn Hunt</h3>
                <p>Menager</p>
            </div>
        </div>
      </div>
      <Banner/>
    </div>
  )
}

export default Members
