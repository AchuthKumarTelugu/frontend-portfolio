import React from 'react'

function LeftSider() {
    return (
        <div className='flex flex-col sm:flex-row gap-3 w-fit items-center fixed left-0 bottom-0 pl-8 sm:static sm:gap-10 sm:pl-0 sm:py-5'>
            <a href="https://www.linkedin.com/in/achuthkumar-telugu" target="_blank" rel="noopener noreferrer">  <i className="cursor-pointer hover:text-white ri-linkedin-fill text-gray-600 text-xl" ></i> </a>
            <a href="https://github.com/AchuthKumarTelugu" target="_blank" rel="noopener noreferrer">  <i className="cursor-pointer hover:text-white ri-github-fill text-gray-600 text-xl" ></i> </a>
            <a href="https://flowcv.com/resume/qbqlo1031c" target="_blank" rel="noopener noreferrer">  <i className="cursor-pointer hover:text-white ri-profile-line text-gray-600 text-xl" ></i> </a>
            <a href="mailto:achuthkumar.telugu123@gmail.com" target="_blank" rel="noopener noreferrer">  <i className="cursor-pointer hover:text-white ri-mail-line text-gray-600 text-xl" ></i> </a>
            <div className=' bg-gray-600 sm:hidden w-[1px] h-56'></div>
        </div>
    )
}

export default LeftSider
