import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Send, ArrowRight, CheckCircle, AlertCircle } from 'lucide-react';

/**
 * EduSafe - Feedback Page
 * Allow users to submit feedback and suggestions
 */
function Feedback() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    category: 'general',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    setError('');
  };

  const validateForm = () => {
    if (!formData.name.trim()) {
      setError('Please enter your name');
      return false;
    }
    if (!formData.email.trim() || !formData.email.includes('@')) {
      setError('Please enter a valid email address');
      return false;
    }
    if (!formData.subject.trim()) {
      setError('Please enter a subject');
      return false;
    }
    if (!formData.message.trim()) {
      setError('Please enter your feedback');
      return false;
    }
    if (formData.message.trim().length < 10) {
      setError('Feedback must be at least 10 characters long');
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setLoading(true);

    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        category: 'general',
        subject: '',
        message: ''
      });

      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    }, 1500);
  };

  return (
    <div className="feedback-page">
      {/* Header */}
      <header className="feedback-header">
        <Link to="/" className="back-link">
          <ArrowRight size={18} style={{ transform: 'rotate(180deg)' }} />
          Back to Dashboard
        </Link>
        <div className="feedback-header-content">
          <h1>Send Us Your Feedback</h1>
          <p className="feedback-subtitle">Help us improve EduSafe with your thoughts and suggestions</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="feedback-main">
        <div className="feedback-container">
          {/* Left Column - Info */}
          <div className="feedback-info">
            <div className="info-card">
              <h3>Why Your Feedback Matters</h3>
              <p>
                We're committed to continuously improving EduSafe. Your feedback, bug reports, and feature suggestions help us build a better platform for educators and students.
              </p>
            </div>

            <div className="info-card">
              <h3>What Can We Help With?</h3>
              <ul className="feedback-list">
                <li>🐛 Report bugs or issues</li>
                <li>💡 Suggest new features</li>
                <li>✨ Share improvement ideas</li>
                <li>📝 General feedback</li>
                <li>❓ Questions or concerns</li>
              </ul>
            </div>

            <div className="info-card">
              <h3>Response Time</h3>
              <p>
                We read every piece of feedback! Our team typically responds to messages within 24-48 hours.
              </p>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="feedback-form-container">
            {submitted && (
              <div className="success-message">
                <CheckCircle size={24} />
                <h3>Thank You!</h3>
                <p>Your feedback has been received. We'll review it and get back to you if needed.</p>
              </div>
            )}

            {!submitted && (
              <form onSubmit={handleSubmit} className="feedback-form">
                {error && (
                  <div className="error-message">
                    <AlertCircle size={18} />
                    {error}
                  </div>
                )}

                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="category">Feedback Category *</label>
                  <select
                    id="category"
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    required
                  >
                    <option value="general">General Feedback</option>
                    <option value="bug">Bug Report</option>
                    <option value="feature">Feature Request</option>
                    <option value="improvement">Improvement Suggestion</option>
                    <option value="question">Question</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject *</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Brief subject of your feedback"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Your Feedback *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Please share your detailed feedback, thoughts, or bug description..."
                    rows={6}
                    required
                  />
                  <span className="character-count">
                    {formData.message.length} characters
                  </span>
                </div>

                <button
                  type="submit"
                  className="submit-button"
                  disabled={loading}
                >
                  {loading ? (
                    <>
                      <span className="spinner"></span>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      Send Feedback
                    </>
                  )}
                </button>

                <p className="form-note">
                  Fields marked with * are required. We'll never share your email address.
                </p>
              </form>
            )}
          </div>
        </div>

        {/* FAQ Section */}
        <section className="feedback-faq">
          <h2>Frequently Asked Questions</h2>
          
          <div className="faq-grid">
            <div className="faq-card">
              <h3>How do I report a bug?</h3>
              <p>Select "Bug Report" as the category and provide as much detail as possible: what you were doing, what went wrong, and what you expected to happen.</p>
            </div>

            <div className="faq-card">
              <h3>Can I suggest a feature?</h3>
              <p>Absolutely! Select "Feature Request" and explain what feature you'd like and how it would improve your experience with EduSafe.</p>
            </div>

            <div className="faq-card">
              <h3>Will you implement my suggestion?</h3>
              <p>We review all suggestions carefully. While we can't implement every request, your ideas help shape our product roadmap.</p>
            </div>

            <div className="faq-card">
              <h3>Is my feedback anonymous?</h3>
              <p>No, we ask for your name and email so we can follow up if needed. Your contact information is kept private.</p>
            </div>

            <div className="faq-card">
              <h3>How long until you respond?</h3>
              <p>We aim to respond within 24-48 hours. For urgent issues, please contact support@edusafe.com directly.</p>
            </div>

            <div className="faq-card">
              <h3>Can I track my feedback status?</h3>
              <p>We'll send you email updates if your feedback requires follow-up. Check your inbox and spam folder.</p>
            </div>
          </div>
        </section>

        {/* Contact Info */}
        <section className="feedback-contact">
          <h2>Other Ways to Reach Us</h2>
          <div className="contact-grid">
            <div className="contact-card">
              <h3>📧 Email</h3>
              <p>For urgent matters</p>
              <a href="mailto:support@edusafe.com">support@edusafe.com</a>
            </div>
            <div className="contact-card">
              <h3>💬 Live Chat</h3>
              <p>Get instant help</p>
              <a href="#">Start conversation</a>
            </div>
            <div className="contact-card">
              <h3>📞 Phone</h3>
              <p>Call our support team</p>
              <a href="tel:+1234567890">+1 (234) 567-890</a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Feedback;
