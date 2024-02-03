import '../styles/ourTeam.css';
import TeamImg from '../images & logos/tm.png';
import Member1Img from '../images & logos/1.webp';
import Member2Img from '../images & logos/2.webp';
import Member3Img from '../images & logos/3.webp';
import Member4Img from '../images & logos/4.webp';
import Member5Img from '../images & logos/5.webp';
import Member6Img from '../images & logos/6.webp';
import Member7Img from '../images & logos/7.webp';
import { useRef } from 'react';

function OurTeam() {

    const sliderImg = useRef(null);
    const slider = useRef(null);

    const prev = () => {
        if (slider.current && sliderImg.current) {
            slider.current.scrollLeft -= sliderImg.current.clientWidth;
        }
    };

    const next = () => {
        if (slider.current && sliderImg.current) {
            slider.current.scrollLeft += sliderImg.current.clientWidth;
        }
    };

  return (
    <div className='our-team'>
        <div className="title">
            <img src={TeamImg} alt="" />
            <h1>فريقنا</h1>
        </div>

        <div className="slider-container">
            <div ref={slider} className="slider">
                <img ref={sliderImg} src={Member1Img} alt="" />
                <img src={Member2Img} alt="" />
                <img src={Member3Img} alt="" />
                <img src={Member4Img} alt="" />
                <img src={Member5Img} alt="" />
                <img src={Member6Img} alt="" />
                <img src={Member7Img} alt="" />
            </div>

            <button onClick={prev} className="prev">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-left-fill" viewBox="0 0 16 16">
                    <path d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z"/>
                </svg>
            </button>
            <button onClick={next} className="next">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-right-fill" viewBox="0 0 16 16">
                    <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
                </svg>
            </button>
        </div>
    </div>
  )
}

export default OurTeam