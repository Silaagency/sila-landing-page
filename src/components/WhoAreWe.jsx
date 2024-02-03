import '../styles/whoAreWe.css';
import HandsImg from '../images & logos/5ae8f95e100e6a1c8b24bc69ec30a34b.png';

function WhoAreWe() {
  return (
    <div id='who-are-we' className='who-are-we-sec'>
        <div className="who-are-we-text">
            <h1>من نحن؟</h1>
            <p>وكالة متخصصة في التجارة و التسويق الإلكتروني متعددة الخدمات ذات خبرة عالية في التجارة الإلكترونية</p>
            <p>مكونة من فريق عمل متكامل من صناع المحتوى و محترفي التصوير و الديزاين و فريق التسويق الرقمي ذو تجربة كبيرة في المجال</p>
        </div>
        <div className="who-are-we-img">
            <img src={HandsImg} alt="" />
        </div>

        <div className="dots">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-three-dots-vertical" viewBox="0 0 16 16">
            <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"/>
          </svg>
        </div>
    </div>
  )
}

export default WhoAreWe