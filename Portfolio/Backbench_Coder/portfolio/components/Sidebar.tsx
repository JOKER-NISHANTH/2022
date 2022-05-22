import { AiFillGithub, AiFillLinkedin, AiFillTwitterCircle } from 'react-icons/ai'
import { GoLocation } from 'react-icons/go';
import { GiTie } from "react-icons/gi"
const Sidebar = () => {
    return (
        <div>
            <img src="https://avatars.githubusercontent.com/u/67851976?s=400&u=eff8293134810288c8b0d3bc6294c30c405a1652&v=4" alt="profile" className='w-32 h-32 mx-auto rounded-full' />
            <h3 className='my-4 text-3xl font-medium  font-poppins'><span>Nishanth</span>M</h3>
            <p className='px-2 py-1 my-3 bg-gray-200 rounded-full '>Web Developer</p>
            <a
                href="" className='flex items-center justify-center px-2 py-1 my-3 bg-gray-200 rounded-full'
                download="name">
                <GiTie className='w-6 h-6 ' /> Download Resume
            </a>
            {/* Social Icon */}
            <div className='flex justify-around w-9/12 mx-auto my-5 text-green-500 md:w-full'>
                <a href=""><AiFillGithub className='w-8 h-8 cursor-pointer' />   </a>
                <a href=""><AiFillLinkedin className='w-8 h-8 cursor-pointer' /> </a>
                <a href=""><AiFillTwitterCircle className='w-8 h-8 cursor-pointer' /></a>
            </div>
            {/* Address */}
            <div className='py-4 my-5 bg-gray-200' style={{ marginLeft: '-1rem', marginRight: '-1rem' }}>
                <div className='flex items-center justify-center space-x-2'>
                    < GoLocation />
                    <span>Tamilnadu,India</span>
                </div>
                <p className='my-2 '>nishanth@gmail.com</p>
                <p className='my-2 '>9876543210</p>
            </div>

            {/* Email Button */}
            <button className='w-8/12 py-2 my-2 text-white rounded-full bg-gradient-to-r from-green-400 to-blue-400'>Email Me</button>
            <button className='w-8/12 py-2 my-2 text-white rounded-full bg-gradient-to-r from-green-400 to-blue-400'>Toggle Theme</button>
        </div>
    )
}

export default Sidebar