import { Helmet } from 'react-helmet-async';
import { MapPin, Phone, Mail, Clock, Send, MessageSquare, Globe, Users } from 'lucide-react';

const ContactPage = () => {
  return (
    <>
      <Helmet>
        <title>Get in Touch | DNKA Supermarket Koforidua</title>
        <meta name="description" content="Get in touch with DNKA Supermarket in Koforidua. We are always open to serve you with premium quality and refined service." />
      </Helmet>

      {/* Hero Header */}
      <div className="contact-hero post-header">
        <div className="container">
          <h1 className="contact-hero-title">Connect With Us</h1>
          <p className="contact-hero-sub">We are always here to assist you with refined service.</p>
        </div>
      </div>

      {/* Main Contact Section */}
      <section className="section bg-white" style={{ paddingTop: '60px' }}>
        <div className="container">
          <div className="contact-layout">

            {/* Contact Info */}
            <div className="contact-info-panel">
              <h2 className="contact-panel-title">Our Concierge Team is Ready to Help</h2>
              <p className="contact-panel-sub">
                Whether you have a question about our curated product selection, need assistance with a
                specialized order, or simply wish to share your shopping experience, our team is at your
                disposal 24/7.
              </p>

              <div className="contact-details-grid">
                {[
                  { icon: MapPin, label: 'Flagship Store', text: 'Box 1255, Koforidua,\nEastern Region, Ghana' },
                  { icon: Phone,  label: 'Client Support',  text: '059 908 7140', href: 'tel:0599087140' },
                  { icon: Mail,   label: 'Email Enquiries', text: 'info@dnkasupermarket.com', href: 'mailto:info@dnkasupermarket.com' },
                  { icon: Clock,  label: 'Always Open',     text: 'Available 24/7,\n365 Days a Year' },
                ].map(({ icon: Icon, label, text, href }) => (
                  <div className="contact-detail-item" key={label}>
                    <div className="contact-detail-icon"><Icon size={22} /></div>
                    <div>
                      <h4 className="contact-detail-label">{label}</h4>
                      {href
                        ? <a href={href} className="contact-detail-text">{text}</a>
                        : <p className="contact-detail-text">{text.split('\n').map((l, i) => <span key={i}>{l}{i === 0 && <br/>}</span>)}</p>
                      }
                    </div>
                  </div>
                ))}
              </div>

              <div className="contact-social">
                <h4 style={{ fontSize: '16px', marginBottom: '15px', fontWeight: '700' }}>Follow Our Journey</h4>
                <div style={{ display: 'flex', gap: '12px' }}>
                  {[Globe, Users, Send].map((Icon, i) => (
                    <a key={i} href="#" className="social-circle">
                      <Icon size={18} />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="contact-form-card">
              <h3 style={{ fontSize: '26px', marginBottom: '8px' }}>Send an Inquiry</h3>
              <p style={{ marginBottom: '28px', color: 'var(--text-light)', fontSize: '15px' }}>Expected response time: within 2 hours.</p>
              <form onSubmit={(e) => { e.preventDefault(); alert('Inquiry sent successfully! Our concierge team will contact you shortly.'); }}>
                <div className="form-group">
                  <label className="form-label">Full Name</label>
                  <input type="text" required className="form-input" placeholder="Enter your full name" />
                </div>
                <div className="form-group">
                  <label className="form-label">Email Address</label>
                  <input type="email" required className="form-input" placeholder="Enter your email address" />
                </div>
                <div className="form-group">
                  <label className="form-label">Department</label>
                  <select className="form-input">
                    <option>General Inquiry</option>
                    <option>Bulk Orders</option>
                    <option>Delivery Support</option>
                    <option>Vendor Partnerships</option>
                    <option>Feedback</option>
                  </select>
                </div>
                <div className="form-group">
                  <label className="form-label">Message</label>
                  <textarea rows="5" required className="form-input" placeholder="How can our concierge assist you today?" style={{ resize: 'vertical' }}></textarea>
                </div>
                <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: '16px', fontSize: '15px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
                  <Send size={16} /> Send Inquiry
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section bg-light" style={{ paddingTop: '60px' }}>
        <div className="container">
          <div className="text-center" style={{ marginBottom: '40px' }}>
            <h2 style={{ fontSize: '28px', marginBottom: '12px' }}>Find Us in Koforidua</h2>
            <p style={{ fontFamily: "'Playfair Display', serif", fontSize: '17px', color: 'var(--text-light)' }}>
              Located at the heart of the community for your convenience.
            </p>
          </div>
          <div className="map-container" style={{ borderRadius: '12px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
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

      {/* FAQ Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center" style={{ marginBottom: '50px' }}>
            <h2 style={{ fontSize: '28px', marginBottom: '12px' }}>Common Enquiries</h2>
            <p style={{ fontFamily: "'Playfair Display', serif", fontSize: '17px', color: 'var(--text-light)' }}>Quick answers to our most frequent visitor questions.</p>
          </div>
          <div className="faq-grid">
            <div className="faq-item">
              <h4 className="faq-question"><MessageSquare size={18} /> Do you offer international delivery?</h4>
              <p className="faq-answer">Currently, we offer express delivery within Koforidua and surrounding areas in the Eastern Region. International shipping is under consideration for our gourmet selection.</p>
            </div>
            <div className="faq-item">
              <h4 className="faq-question"><MessageSquare size={18} /> Can I place bulk orders for events?</h4>
              <p className="faq-answer">Yes, we specialize in bulk provisions for weddings, corporate events, and festivals. Please use the contact form or call our concierge for a custom quote.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
