import { Helmet } from 'react-helmet-async';
import { MapPin, Phone, Mail, Clock, Send, MessageSquare, Globe, Users } from 'lucide-react';

const ContactPage = () => {
  return (
    <>
      <Helmet>
        <title>Get in Touch | DNKA Supermarket Koforidua</title>
        <meta name="description" content="Get in touch with DNKA Supermarket in Koforidua. We are always open to serve you with premium quality and refined service." />
      </Helmet>

      <div className="post-header" style={{ backgroundImage: 'linear-gradient(rgba(8, 28, 21, 0.8), rgba(8, 28, 21, 0.9)), url("https://images.unsplash.com/photo-1534536281715-e28d76689b4d?auto=format&fit=crop&w=1920&q=80")', padding: '150px 0 100px' }}>
        <div className="container">
          <h1 style={{fontSize: '64px'}}>Connect With Us</h1>
          <p style={{ marginTop: '20px', fontFamily: "'Playfair Display', serif", fontSize: '24px', opacity: 0.9 }}>We are always here to assist you with refined service.</p>
        </div>
      </div>

      <section className="section bg-white" style={{ paddingTop: '80px' }}>
        <div className="container">
          <div className="blog-layout" style={{ gap: '80px' }}>
            
            {/* Contact Info */}
            <div className="contact-info-panel">
              <h2 style={{ fontSize: '42px', marginBottom: '30px', color: 'var(--primary-green)' }}>Our Concierge Team is Ready to Help</h2>
              <p style={{ marginBottom: '40px', fontSize: '18px', color: 'var(--text-light)', lineHeight: '1.8' }}>
                Whether you have a question about our curated product selection, need assistance with a specialized order, or simply wish to share your shopping experience, our team is at your disposal 24/7.
              </p>
              
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px', marginBottom: '40px' }}>
                <div style={{ display: 'flex', gap: '20px' }}>
                  <div style={{ backgroundColor: 'rgba(212, 175, 55, 0.1)', width: '50px', height: '50px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary-orange)', flexShrink: 0 }}><MapPin size={24} /></div>
                  <div>
                    <h4 style={{fontSize: '18px', marginBottom: '5px'}}>Flagship Store</h4>
                    <p style={{fontSize: '15px', color: 'var(--text-light)'}}>Box 1255, Koforidua,<br/>Eastern Region, Ghana</p>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '20px' }}>
                  <div style={{ backgroundColor: 'rgba(212, 175, 55, 0.1)', width: '50px', height: '50px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary-orange)', flexShrink: 0 }}><Phone size={24} /></div>
                  <div>
                    <h4 style={{fontSize: '18px', marginBottom: '5px'}}>Client Support</h4>
                    <p style={{fontSize: '15px', color: 'var(--text-light)'}}><a href="tel:0599087140">059 908 7140</a></p>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '20px' }}>
                  <div style={{ backgroundColor: 'rgba(212, 175, 55, 0.1)', width: '50px', height: '50px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary-orange)', flexShrink: 0 }}><Mail size={24} /></div>
                  <div>
                    <h4 style={{fontSize: '18px', marginBottom: '5px'}}>Email Enquiries</h4>
                    <p style={{fontSize: '15px', color: 'var(--text-light)'}}><a href="mailto:info@dnkasupermarket.com">info@dnkasupermarket.com</a></p>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '20px' }}>
                  <div style={{ backgroundColor: 'rgba(212, 175, 55, 0.1)', width: '50px', height: '50px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary-orange)', flexShrink: 0 }}><Clock size={24} /></div>
                  <div>
                    <h4 style={{fontSize: '18px', marginBottom: '5px'}}>Always Open</h4>
                    <p style={{fontSize: '15px', color: 'var(--text-light)'}}>Available 24/7,<br/>365 Days a Year</p>
                  </div>
                </div>
              </div>

              <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '30px' }}>
                <h4 style={{fontSize: '18px', marginBottom: '20px'}}>Follow Our Journey</h4>
                <div style={{ display: 'flex', gap: '15px' }}>
                  {[Globe, Users, Send].map((Icon, i) => (
                    <a key={i} href="#" style={{ width: '45px', height: '45px', borderRadius: '50%', border: '1px solid var(--border-color)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary-green)', transition: 'all 0.3s ease' }} onMouseOver={e => e.currentTarget.style.borderColor = 'var(--primary-orange)'} onMouseOut={e => e.currentTarget.style.borderColor = 'var(--border-color)'}>
                      <Icon size={20} />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div style={{ backgroundColor: 'var(--white)', padding: '50px', borderRadius: '8px', border: '1px solid var(--border-color)', boxShadow: '0 20px 40px rgba(0,0,0,0.05)' }}>
              <h3 style={{ fontSize: '28px', marginBottom: '10px' }}>Send an Inquiry</h3>
              <p style={{ marginBottom: '30px', color: 'var(--text-light)' }}>Expected response time: within 2 hours.</p>
              <form onSubmit={(e) => { e.preventDefault(); alert('Inquiry sent successfully! Our concierge team will contact you shortly.'); }}>
                <div style={{ marginBottom: '25px' }}>
                  <label style={{ display: 'block', marginBottom: '10px', fontWeight: '700', fontSize: '14px', textTransform: 'uppercase', letterSpacing: '1px' }}>Full Name</label>
                  <input type="text" required style={{ width: '100%', padding: '15px 20px', border: '1px solid var(--border-color)', borderRadius: '4px', outline: 'none', fontFamily: 'inherit', fontSize: '16px' }} placeholder="Enter your full name" />
                </div>
                <div style={{ marginBottom: '25px' }}>
                  <label style={{ display: 'block', marginBottom: '10px', fontWeight: '700', fontSize: '14px', textTransform: 'uppercase', letterSpacing: '1px' }}>Email Address</label>
                  <input type="email" required style={{ width: '100%', padding: '15px 20px', border: '1px solid var(--border-color)', borderRadius: '4px', outline: 'none', fontFamily: 'inherit', fontSize: '16px' }} placeholder="Enter your email address" />
                </div>
                <div style={{ marginBottom: '25px' }}>
                  <label style={{ display: 'block', marginBottom: '10px', fontWeight: '700', fontSize: '14px', textTransform: 'uppercase', letterSpacing: '1px' }}>Department</label>
                  <select style={{ width: '100%', padding: '15px 20px', border: '1px solid var(--border-color)', borderRadius: '4px', outline: 'none', fontFamily: 'inherit', fontSize: '16px', background: 'var(--white)' }}>
                    <option>General Inquiry</option>
                    <option>Bulk Orders</option>
                    <option>Delivery Support</option>
                    <option>Vendor Partnerships</option>
                    <option>Feedback</option>
                  </select>
                </div>
                <div style={{ marginBottom: '30px' }}>
                  <label style={{ display: 'block', marginBottom: '10px', fontWeight: '700', fontSize: '14px', textTransform: 'uppercase', letterSpacing: '1px' }}>Message</label>
                  <textarea rows="6" required style={{ width: '100%', padding: '15px 20px', border: '1px solid var(--border-color)', borderRadius: '4px', outline: 'none', fontFamily: 'inherit', fontSize: '16px', resize: 'vertical' }} placeholder="How can our concierge assist you today?"></textarea>
                </div>
                <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: '18px', fontSize: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
                  <Send size={18} /> Send Inquiry
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section bg-light">
        <div className="container">
          <div className="text-center" style={{marginBottom: '50px'}}>
            <h2 style={{fontSize: '32px', marginBottom: '15px'}}>Find Us in Koforidua</h2>
            <p style={{fontFamily: "'Playfair Display', serif", fontSize: '18px', color: 'var(--text-light)'}}>Located at the heart of the community for your convenience.</p>
          </div>
          <div className="map-container" style={{ height: '500px', borderRadius: '8px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
            <iframe 
              title="DNKA Supermarket Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126839.29955375306!2d-0.34759685324632836!3d6.08415712170327!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf7054f02882ad%3A0xbccdc81a95a8b75e!2sKoforidua%2C%20Ghana!5e0!3m2!1sen!2sus!4v1713838421000!5m2!1sen!2sus" 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>

      {/* FAQ Short Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center" style={{marginBottom: '60px'}}>
            <h2 style={{fontSize: '32px', marginBottom: '15px'}}>Common Enquiries</h2>
            <p style={{fontFamily: "'Playfair Display', serif", fontSize: '18px', color: 'var(--text-light)'}}>Quick answers to our most frequent visitor questions.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '40px' }}>
            <div style={{ padding: '30px', border: '1px solid var(--border-color)', borderRadius: '4px' }}>
              <h4 style={{fontSize: '20px', marginBottom: '15px', color: 'var(--primary-green)', display: 'flex', alignItems: 'center', gap: '10px'}}><MessageSquare size={20}/> Do you offer international delivery?</h4>
              <p style={{color: 'var(--text-light)'}}>Currently, we offer express delivery within Koforidua and surrounding areas in the Eastern Region. International shipping is under consideration for our gourmet selection.</p>
            </div>
            <div style={{ padding: '30px', border: '1px solid var(--border-color)', borderRadius: '4px' }}>
              <h4 style={{fontSize: '20px', marginBottom: '15px', color: 'var(--primary-green)', display: 'flex', alignItems: 'center', gap: '10px'}}><MessageSquare size={20}/> Can I place bulk orders for events?</h4>
              <p style={{color: 'var(--text-light)'}}>Yes, we specialize in bulk provisions for weddings, corporate events, and festivals. Please use the contact form or call our concierge for a custom quote.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
