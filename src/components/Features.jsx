import '../styles/features.css';
import VerifiedImg from '../images & logos/verified.png';
import EcommerceImg from '../images & logos/e-commerce.png';
import VidEditImg from '../images & logos/vid-edit.png';
import DashboardImg from '../images & logos/dashboard.png';

function Features() {
  return (
    <div id='features' className='features'>
        <div className="container">
            <div className="verified">
                <div>
                    <h1>توفير حسابات اعلانية موثقة و غير محدودة</h1>
                    <p>احصل على حسابات إعلانات لوسائل التواصل الاجتماعي واستمتع بنجاح حملاتك الإعلانية!</p>
                </div>

                <img src={VerifiedImg} alt="" />
            </div>

            <div className="e-commerce">
                <img src={EcommerceImg} alt="" />

                <div>
                    <h1>انشاء متاجر الكترونية و صفحات هبوط</h1>
                    <p>صفحات هبوط إحترافية تزيد من معـــدلات تحويـــلك اليــومــية</p>
                </div>
            </div>

            <div className="video-editing">
                <div>
                    <h1>انشاء فيديوهات اعلانية احترافية</h1>
                    <p>تصميم وإنتاج فيديوهات إعلانية عالية الجودة تلفت الانتباه وتساعدك في نشر رسالتك وترويج منتجاتك بشكل متميز.</p>
                </div>

                <img src={VidEditImg} alt="" />
            </div>

            <div className="dashboard">
                <img src={DashboardImg} alt="" />

                <div>
                    <h1>تسيير مشاريع و حملات الكترونية</h1>
                    <p>يعمل فريقنا المتخصص على تخطيط وتنفيذ استراتيجيات فعالة، بما في ذلك تحليل السوق، وإدارة المحتوى، وتحسين تجربة المستخدم، وتحقيق النتائج المرجوة.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Features