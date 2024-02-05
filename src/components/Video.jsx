import '../styles/video.css';
import AnalyticImg from '../images & logos/analytic.png';

function Video() {
  return (
    <div className="video">
        <div className="title">
            <img src={AnalyticImg} alt="" />
            <h1 className='analytic-text'>طريقة عملنا</h1>
        </div>
        
        <iframe className='video-frame' width="610" height="343" src="https://www.youtube.com/embed/s7r4k3nlQWQ" title="خدمة تسيير الحملات الاعلانية و المشاريع الالكترونية - sila marketing Agency" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
  )
}

export default Video