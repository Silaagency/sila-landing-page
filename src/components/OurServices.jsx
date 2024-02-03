import '../styles/ourServices.css';
import ServicesImg from '../images & logos/services.png';
import DevImage from '../images & logos/landing.png';
import VideoImage from '../images & logos/vid.png';
import CustomerServiceImage from '../images & logos/customerS.png';
import AdsImage from '../images & logos/ads.png';
import FbImage from '../images & logos/fb.png';
import UnlockImage from '../images & logos/unlock.png';

function OurServices() {
  return (
    <div id='services' className='our-services'>
        <div className="title">
            <img src={ServicesImg} alt="" />
            <h1>خدماتنا</h1>
        </div>

        <div className="sections">
            <div className="left-sec">
            <div className="ads">
                    <div>
                        <h1>إدارة الحملات الإعلانية</h1>
                        <p>نساعد مقاولات و شركات التجارة الإلكترونية على تحقيق عائد مالي مرتفع من خلال الإعلانات المدفوعة</p>
                    </div>

                    <img src={AdsImage} alt="" />
                </div>

                <div className="fb">
                    <div>
                        <h1>توفير حسابات فيسبوك & بيزنس مانجر</h1>
                        <p>نوفر لك كل ما تحتاجه لضمان استمرارية حملاتك الإعلانية و تفادي حظر الفيسبوك العشوائي</p>
                    </div>

                    <img src={FbImage} alt="" />
                </div>

                <div className="unlock">
                    <div>
                        <h1>توفير حسابات إعلانية دائمــة و غيـــر محدودة</h1>
                        <p>نوفـــر خدمة حســابــات عـــالية الجودة للتخلص من مشاكل الحظر و الإغلاق العشـــوائي و تضمن لــك الإستمرارية لإعلانتك</p>
                    </div>

                    <img src={UnlockImage} alt="" />
                </div>
            </div>
            <div className="right-sec">
                <div className="dev">
                    <div>
                        <h1>إنشاء صفحات الهبوط</h1>
                        <p>نوفر لك صفحات هبوط إحترافية تزيد من معدلات تحويلك اليومية</p>
                    </div>

                    <img src={DevImage} alt="" />
                </div>

                <div className="vid">
                    <div>
                        <h1>إنشاء فديوهات إعلانية</h1>
                        <p>بصفتنا وكالة تسويق مختصة في التجارة الالكترونية ، فإننا نعمل بشكل دائم على إبتكار محتوى إعلاني يتميز بالإبداع و الإقناع من أجل عرض ناجح لمنتجاتك</p>
                    </div>

                    <img src={VideoImage} alt="" />
                </div>

                <div className="customer-service">
                    <div>
                        <h1>خدمة عملاء ممتازة</h1>
                        <p>خدمة عملاء ممتازة لجميع الحسابات الإعلانية في فايسبوك وسناب شات و تيكتوك</p>
                    </div>

                    <img src={CustomerServiceImage} alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default OurServices