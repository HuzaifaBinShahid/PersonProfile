import img from '../assets/Huzaifa-Bin-Shahid.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faHeart, faShareAlt, faComment } from '@fortawesome/free-solid-svg-icons';

const Box = () => {
    return (
        <section id="box" className='py-5'>
            <div className="container mx-auto max-w-[500px] relative">
                <div className='bg-[#3F70F4] min-h-[200px] rounded-tl-[20px] rounded-tr-[20px]'></div>
                <div className="card shadow-lg rounded-[20px]">
                    <div className="image absolute top-12 left-1/2 -translate-x-1/2">
                        <img src={img} alt="person-img" className='rounded-full w-[200px] border-8' />
                    </div>

                    <div className="content text-center pt-[8rem]">
                        <h1 className='font-bold text-[28px]'>Huzaifa Bin Shahid</h1>
                        <h3 className='text-[#939185] text-[30px] font-bold'>Youtuber & Blogger</h3>
                    </div>

                    <div className="social-icons flex gap-x-5 justify-center py-5">
                        <FontAwesomeIcon icon={faFacebook} className='text-[#1877F2] text-[2rem]' />

                        <FontAwesomeIcon icon={faTwitter} className='text-[#1DA1F2] text-[2rem]' />

                        <FontAwesomeIcon icon={faInstagram} className='text-[#E4405F] text-[2rem]' />

                        <FontAwesomeIcon icon={faYoutube} className='text-[#FF0000] text-[2rem]' />

                    </div>

                    <div className="buttons flex justify-center gap-x-5 py-5">
                        <button className='bg-[#3F70F4] text-white text-[20px] font-semibold px-7 py-3 rounded-full'>Subscribe</button>
                        <button className='bg-[#3F70F4] text-white text-[20px] font-semibold px-7 py-3 rounded-full'>Message</button>
                    </div>

                    <div className="share-icons flex gap-x-5 py-5 text-[#939185] justify-center">

                        <div className="heart flex  border-r-2">
                            <FontAwesomeIcon icon={faHeart} className='text-[1.5rem] py-2'/>
                            <p className='text-[25px] font-bold px-3'>60.4k</p>
                        </div>

                        <div className="comment flex border-r-2 ">
                            <FontAwesomeIcon icon={faComment}  className='text-[1.5rem] py-2 ' />
                            <p className='text-[25px] font-bold px-3'>20k</p>
                        </div>

                        <div className="share flex">
                            <FontAwesomeIcon icon={faShareAlt}  className='text-[1.5rem] py-2' />
                            <p className='text-[25px] font-bold '>12.4k</p>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Box