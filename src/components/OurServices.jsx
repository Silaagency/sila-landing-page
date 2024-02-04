import '../styles/ourServices.css';
import ServicesImg from '../images & logos/services.png';
import Wp from '../images & logos/wp.png';
import VideoImage from '../images & logos/vid.png';
import CustomerServiceImage from '../images & logos/customerS.png';
import AdsImage from '../images & logos/ads.png';
import Sm from '../images & logos/sm.png';
import Mg from '../images & logos/mg.png';
import Cvideo from '../images & logos/c-video.png';
import CamS from '../images & logos/camS.png';
import Code from '../images & logos/code.png';

function OurServices() {
  return (
    <div id='services' className='our-services'>
        <div className="title">
            <img src={ServicesImg} alt="" />
            <h1>خدماتنا</h1>
        </div>

        <div className="sections">
            <div className="left-sec">
                <div className="creative-vid">
                    <div>
                        <h1>creatives videos</h1>
                        <p>مقاطع الفيديو الإبداعية تشير إلى محتوى فيديو يتميز بالابتكار والتميز في العرض والتصوير والقصة، مما يجعلها جذابة ومثيرة للاهتمام للمشاهدين.</p>
                    </div>

                    <img src={Cvideo} alt="" />
                </div>

                <div className="shooting-vid">
                    <div>
                        <h1>Shooting videos</h1>
                        <p>تصوير مقاطع الفيديو في سياق الوكالة يعني عملية تنفيذ وتنظيم تصوير الفيديو لعملاء الوكالة، سواء كان ذلك لأغراض تسويقية، إعلانية، أو غيرها. يتضمن هذا العمل تخطيط وتنسيق الإنتاج بشكل متكامل، بما في ذلك اختيار المواقع، وتجهيز العتاد والمعدات، وتوجيه الطاقم، وتنفيذ الرؤية الإبداعية لتحقيق النتائج المرجوة من العميل.</p>
                    </div>

                    <img src={CamS} alt="" />
                </div>

                <div className="motion-graphics">
                    <div>
                        <h1>Motion graphics videos</h1>
                        <p>مقاطع الفيديو بالرسوم المتحركة تعتمد على استخدام الرسومات المتحركة والتأثيرات البصرية لتوصيل المعلومات والرسائل بشكل مبتكر وجذاب.</p>
                    </div>

                    <img src={Mg} alt="" />
                </div>

                <div className="wordpress">
                    <div>
                        <h1>WordPress Website Creation</h1>
                        <p>إنشاء موقع ويب باستخدام ووردبريس يتضمن استخدام منصة ووردبريس لإنشاء وتصميم موقع ويب. تعتمد هذه العملية على استخدام قوالب جاهزة أو تصميم مخصص لتلبية احتياجات العميل. يتضمن العمل على ووردبريس تركيب القوالب، وتخصيص التصميم، وإضافة المحتوى، وتفعيل الميزات المختلفة مثل النماذج، والمدونات، والمتاجر الإلكترونية، بحسب متطلبات العميل وأهداف الموقع.</p>
                    </div>

                    <img src={Wp} alt="" />
                </div>
            </div>
            <div className="right-sec">
                <div className="dev">
                    <div>
                        <h1>Agency ad accounts</h1>
                        <p>حسابات الإعلان للوكالات هي حسابات مخصصة تُدار من قبل وكالات الإعلان لصالح عملائها على منصات الإعلان تُتيح هذه الحسابات للوكالات تصميم ومراقبة وتحسين حملات الإعلان بفعالية، مما يسهل التواصل والتعاون مع العملاء لتحقيق أهدافهم التسويقية.</p>
                    </div>

                    <img src={AdsImage} alt="" />
                </div>

                <div className="vid">
                    <div>
                        <h1>Media buying E-commerce</h1>
                        <p>تتعلق عملية شراء الوسائط في مجال التجارة الإلكترونية بشراء وتسويق الإعلانات والمساحات الإعلانية عبر الوسائط المختلفة على الإنترنت، مثل مواقع الويب ومواقع التواصل الاجتماعي والتطبيقات الرقمية، بهدف تعزيز مبيعات المنتجات عبر الإنترنت. تتضمن هذه العملية تحليل البيانات واختيار الوسائط الأنسب وتنفيذ الحملات الإعلانية التي تستهدف الجماهير المناسبة وتحقق أقصى قدر من العائد على الاستثمار للشركات التجارية عبر الإنترنت.</p>
                    </div>

                    <img src={VideoImage} alt="" />
                </div>

                <div className="customer-service">
                    <div>
                        <h1>Marketing strategy for companies</h1>
                        <p>استراتيجية تسويق للشركات تشمل خطة شاملة تحدد كيف ستحقق الشركة أهدافها التسويقية والأهداف المحددة بالتسويق بشكل مخطط.</p>
                    </div>

                    <img src={CustomerServiceImage} alt="" />
                </div>

                <div className="socialmedia-manager">
                    <div>
                        <h1>Social Media manager</h1>
                        <p>مدير وسائل التواصل الاجتماعي هو المسؤول عن تطوير وتنفيذ استراتيجيات التواصل عبر منصات وسائل التواصل الاجتماعي للشركة أو العميل. يشمل ذلك إدارة المحتوى، وزيادة التفاعل، وبناء العلاقات مع الجمهور، وقياس أداء الحملات لتحقيق أهداف التسويق والتواصل.</p>
                    </div>

                    <img src={Sm} alt="" />
                </div>

                <div className="dev">
                    <div>
                        <h1>Development app/web</h1>
                        <p>تطوير التطبيقات أو المواقع الإلكترونية يشمل عملية برمجة وتصميم التطبيقات الجديدة أو المواقع على الإنترنت. يتضمن هذا العمل استخدام لغات البرمجة والأدوات المناسبة لتطوير وتصميم واجهات المستخدم، وتكوين قواعد البيانات، وتجربة المستخدم، وضمان الأمان والأداء الجيد للتطبيق أو الموقع.</p>
                    </div>

                    <img src={Code} alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default OurServices