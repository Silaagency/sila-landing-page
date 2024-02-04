import '../styles/contactUs.css';
import ContactImg from '../images & logos/contact.jpg';

function ContactUs() {
  return (
    <div className='contact-us'>
        <div className="contact-window">
            <div className="left-section-c">
                <h1>تواصل معنا</h1>
                <div className="name-input">
                    <p>الاسم الشخصي</p>
                    <input type="text" />
                </div>
                <div className="email-input">
                    <p>الايميل</p>
                    <input type="text" />
                </div>
                <div className="phone-input">
                    <p>رقم الهاتف</p>
                    <input type="text" />
                </div>
                <div className="message-input">
                    <p>الرسالة</p>
                    <input type="text" />
                </div>
                <button>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-send-fill" viewBox="0 0 16 16">
                        <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471z"/>
                    </svg>
                    <p>أرسل</p>
                </button>
            </div>
            <div className="right-section-c">
                <img className='contact-img' src={ContactImg} alt="" />
            </div>
        </div>
    </div>
  )
}

export default ContactUs