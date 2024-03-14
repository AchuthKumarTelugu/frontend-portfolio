import React from 'react'
import SectionTitle from '../../components/SectionTitle'
import contactImage from '../../assets/contactus-image.png'
import { useSelector } from 'react-redux'
function Contact() {
    const {portfolioData}=useSelector(state=>state.root)
    const {contact}=portfolioData
    const {name,email,mobile,age,gender,address}=contact;
    const user = {
        "name": name,
        "age": age,
        "gender": gender,
        "email": email,
        "mobile": mobile,
        "address": address
    }
    return (
        <div>
            <SectionTitle title={"Say Hello"} />
            <div className="flex items-center sm:flex-col sm:gap-16 py-10 ">
                <div className='w-1/2  pl-16 sm:pl-0 sm:flex sm:justify-center ' >
                    <pre className='text-tertiary '>
                        {JSON.stringify(user, null, 2)}
                    </pre>
                </div >
                <div className='text-white w-1/2 sm:w-full '>
                  <img src={contactImage} alt="" />
                </div>

            </div>

        </div>
    )
}

export default Contact
