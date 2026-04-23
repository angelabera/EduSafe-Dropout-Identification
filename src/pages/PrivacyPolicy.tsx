import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Shield, Lock, Eye, Users, Server, Mail, ArrowRight } from 'lucide-react';

/**
 * EduSafe - Privacy Policy Page
 * Comprehensive privacy and data protection information
 */
function PrivacyPolicy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="privacy-page">
      {/* Header */}
      <header className="privacy-header">
        <Link to="/" className="back-link">
          <ArrowRight size={18} style={{ transform: 'rotate(180deg)' }} />
          Back to Dashboard
        </Link>
        <div className="privacy-header-content">
          <h1>Privacy Policy</h1>
          <p className="privacy-subtitle">Your privacy and data protection are our top priorities</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="privacy-main">
        {/* Last Updated */}
        <section className="privacy-section">
          <p className="last-updated">
            <strong>Last Updated:</strong> April 23, 2026
          </p>
        </section>

        {/* Introduction */}
        <section className="privacy-section">
          <h2><Shield size={24} /> Introduction</h2>
          <p>
            Welcome to EduSafe ("we," "us," "our," or "Company"). We are committed to protecting your privacy and ensuring you have a positive experience on our platform. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our website and services.
          </p>
          <p>
            Please read this Privacy Policy carefully. By accessing or using EduSafe, you acknowledge that you have read, understood, and agree to be bound by all the provisions of this Privacy Policy.
          </p>
        </section>

        {/* 1. Information We Collect */}
        <section className="privacy-section">
          <h2><Eye size={24} /> 1. Information We Collect</h2>
          
          <div className="privacy-subsection">
            <h3>1.1 Data You Provide</h3>
            <p>When you use EduSafe, we may collect the following information:</p>
            <ul className="privacy-list">
              <li><strong>CSV Upload Data:</strong> Student records including attendance percentages, test scores, and attempt information</li>
              <li><strong>Usage Information:</strong> Information about how you interact with our platform</li>
              <li><strong>Contact Information:</strong> Email addresses provided voluntarily for support inquiries</li>
            </ul>
          </div>

          <div className="privacy-subsection">
            <h3>1.2 Automatically Collected Information</h3>
            <ul className="privacy-list">
              <li><strong>Browser Information:</strong> Browser type, version, and operating system</li>
              <li><strong>Device Information:</strong> Device type, screen resolution, and device identifiers</li>
              <li><strong>Usage Statistics:</strong> Pages viewed, time spent on pages, and click patterns</li>
              <li><strong>IP Address:</strong> Your internet protocol address</li>
              <li><strong>Cookies:</strong> We use cookies to enhance your experience (see section 6)</li>
            </ul>
          </div>

          <div className="privacy-subsection">
            <h3>1.3 Third-Party Information</h3>
            <p>We may receive information about you from third parties, including analytical services and web partners, to enhance our understanding of your needs.</p>
          </div>
        </section>

        {/* 2. How We Use Your Information */}
        <section className="privacy-section">
          <h2><Server size={24} /> 2. How We Use Your Information</h2>
          <p>We use the information we collect for the following purposes:</p>
          
          <ul className="privacy-list">
            <li><strong>Service Delivery:</strong> To provide, maintain, and improve our risk identification services</li>
            <li><strong>Analysis:</strong> To analyze student data and generate risk assessments and reports</li>
            <li><strong>Communication:</strong> To respond to your inquiries and provide customer support</li>
            <li><strong>Technical Improvement:</strong> To identify bugs, security issues, and optimize platform performance</li>
            <li><strong>Research:</strong> To conduct research and analytics on educational trends (with anonymized data)</li>
            <li><strong>Legal Compliance:</strong> To comply with legal obligations and protect our legal rights</li>
            <li><strong>Security:</strong> To detect, prevent, and address fraud, abuse, and security incidents</li>
            <li><strong>Marketing:</strong> To send you promotional materials (only with your consent)</li>
          </ul>
        </section>

        {/* 3. Data Processing & Client-Side Analysis */}
        <section className="privacy-section">
          <h2><Lock size={24} /> 3. Data Processing & Client-Side Analysis</h2>
          
          <div className="privacy-subsection">
            <h3>3.1 Browser-Based Processing</h3>
            <p>
              <strong>Important:</strong> All CSV data uploaded to EduSafe is processed entirely in your browser using client-side JavaScript. This means:
            </p>
            <ul className="privacy-list">
              <li>Your student data is <strong>never sent to our servers</strong></li>
              <li>All risk calculations happen locally on your device</li>
              <li>No data is stored on our backend infrastructure</li>
              <li>Your information remains completely under your control</li>
            </ul>
          </div>

          <div className="privacy-subsection">
            <h3>3.2 Data Deletion</h3>
            <p>
              Since data is processed locally, you have complete control over your information. You can:
            </p>
            <ul className="privacy-list">
              <li>Clear your browser cache and cookies to remove all cached data</li>
              <li>Close the browser tab to immediately stop data processing</li>
              <li>Use the "Reset All Data" button within the application to clear uploaded data</li>
            </ul>
          </div>
        </section>

        {/* 4. Data Sharing & Disclosure */}
        <section className="privacy-section">
          <h2><Users size={24} /> 4. Data Sharing & Disclosure</h2>
          
          <div className="privacy-subsection">
            <h3>4.1 What We Don't Share</h3>
            <p>
              Since all data processing occurs on your device and no student data is transmitted to our servers, we <strong>do not share your student records</strong> with any third parties.
            </p>
          </div>

          <div className="privacy-subsection">
            <h3>4.2 What We May Share</h3>
            <p>We may share the following non-personal information with:</p>
            <ul className="privacy-list">
              <li><strong>Analytics Providers:</strong> Aggregated usage statistics (without student data)</li>
              <li><strong>Service Providers:</strong> Hosting providers and infrastructure partners</li>
              <li><strong>Legal Authorities:</strong> When required by law or to protect our rights</li>
            </ul>
          </div>

          <div className="privacy-subsection">
            <h3>4.3 Business Transfers</h3>
            <p>In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction. We will notify you of any such change and any choices you may have.</p>
          </div>
        </section>

        {/* 5. Data Security */}
        <section className="privacy-section">
          <h2><Lock size={24} /> 5. Data Security</h2>
          
          <p>We implement comprehensive security measures to protect your information:</p>
          
          <div className="privacy-subsection">
            <h3>5.1 Technical Security</h3>
            <ul className="privacy-list">
              <li>HTTPS encryption for all data in transit</li>
              <li>Client-side processing eliminates server-side data storage risks</li>
              <li>Regular security audits and vulnerability assessments</li>
              <li>Secure hosting infrastructure with DDoS protection</li>
            </ul>
          </div>

          <div className="privacy-subsection">
            <h3>5.2 Administrative Security</h3>
            <ul className="privacy-list">
              <li>Access controls and authentication requirements</li>
              <li>Employee privacy training and confidentiality agreements</li>
              <li>Regular backup procedures</li>
              <li>Incident response protocols</li>
            </ul>
          </div>

          <div className="privacy-subsection">
            <h3>5.3 Limitations</h3>
            <p>
              While we use industry-standard security practices, no method of transmission over the internet or electronic storage is 100% secure. We cannot guarantee absolute security but are committed to using reasonable precautions.
            </p>
          </div>
        </section>

        {/* 6. Cookies & Tracking */}
        <section className="privacy-section">
          <h2><Eye size={24} /> 6. Cookies & Tracking Technologies</h2>
          
          <div className="privacy-subsection">
            <h3>6.1 Types of Cookies We Use</h3>
            <ul className="privacy-list">
              <li><strong>Session Cookies:</strong> Maintain your login session and user preferences</li>
              <li><strong>Analytics Cookies:</strong> Track usage patterns to improve the platform</li>
              <li><strong>Functional Cookies:</strong> Remember your settings and choices</li>
            </ul>
          </div>

          <div className="privacy-subsection">
            <h3>6.2 Cookie Management</h3>
            <p>You can control cookies through your browser settings. Most browsers allow you to:</p>
            <ul className="privacy-list">
              <li>Block all cookies</li>
              <li>Allow only certain cookies</li>
              <li>Delete cookies after each session</li>
              <li>Receive notifications when cookies are set</li>
            </ul>
            <p className="note">Note: Disabling cookies may affect the functionality of our platform.</p>
          </div>
        </section>

        {/* 7. Your Rights */}
        <section className="privacy-section">
          <h2><Users size={24} /> 7. Your Privacy Rights</h2>
          
          <p>Depending on your location, you may have the following rights:</p>
          
          <div className="privacy-subsection">
            <h3>7.1 Access & Portability</h3>
            <p>You have the right to access the personal information we hold about you and receive it in a portable format.</p>
          </div>

          <div className="privacy-subsection">
            <h3>7.2 Correction & Deletion</h3>
            <p>You can request correction of inaccurate information or deletion of your personal data (subject to legal limitations).</p>
          </div>

          <div className="privacy-subsection">
            <h3>7.3 Withdrawal of Consent</h3>
            <p>You may withdraw consent for specific uses of your information at any time by contacting us.</p>
          </div>

          <div className="privacy-subsection">
            <h3>7.4 Objection</h3>
            <p>You can object to certain types of data processing, including marketing communications.</p>
          </div>

          <div className="privacy-subsection">
            <h3>7.5 GDPR & CCPA Rights</h3>
            <p>
              If you're in the EU, you have rights under the General Data Protection Regulation (GDPR). If you're in California, you have rights under the California Consumer Privacy Act (CCPA). Contact us to exercise these rights.
            </p>
          </div>
        </section>

        {/* 8. Children's Privacy */}
        <section className="privacy-section">
          <h2><Shield size={24} /> 8. Children's Privacy</h2>
          
          <p>
            EduSafe is not intended for children under the age of 13. We do not knowingly collect personal information from children under 13. If we become aware that we have collected information from a child under 13, we will delete such information immediately.
          </p>
          <p>
            For educational institutions using EduSafe, student data is processed with parental/guardian consent and in compliance with FERPA (Family Educational Rights and Privacy Act) and other applicable laws.
          </p>
        </section>

        {/* 9. Data Retention */}
        <section className="privacy-section">
          <h2><Server size={24} /> 9. Data Retention</h2>
          
          <div className="privacy-subsection">
            <h3>9.1 Student Records</h3>
            <p>
              Since student data is processed only in your browser and never stored on our servers, retention is entirely within your control. Once you close the application or clear your browser, the data is no longer retained.
            </p>
          </div>

          <div className="privacy-subsection">
            <h3>9.2 Logs & Analytics</h3>
            <p>
              We retain server logs and analytics data for up to 90 days for security, debugging, and performance optimization purposes.
            </p>
          </div>

          <div className="privacy-subsection">
            <h3>9.3 User Accounts</h3>
            <p>
              If you create an account, we retain your information for as long as your account is active and for a reasonable period after deletion for legal compliance.
            </p>
          </div>
        </section>

        {/* 10. Third-Party Links */}
        <section className="privacy-section">
          <h2><Shield size={24} /> 10. Third-Party Links & Services</h2>
          
          <p>
            Our website may contain links to third-party websites and services. We are not responsible for the privacy practices of these external sites. We encourage you to review their privacy policies before providing any personal information.
          </p>
        </section>

        {/* 11. International Data Transfers */}
        <section className="privacy-section">
          <h2><Server size={24} /> 11. International Data Transfers</h2>
          
          <p>
            If you access EduSafe from outside your country of residence, your information may be transferred to, stored in, and processed in countries other than your country of residence. These countries may have data protection laws that differ from your home country.
          </p>
          <p>
            By using EduSafe, you consent to the transfer of your information to countries outside of your country of residence.
          </p>
        </section>

        {/* 12. Changes to Privacy Policy */}
        <section className="privacy-section">
          <h2>📝 12. Changes to This Privacy Policy</h2>
          
          <p>
            We may update this Privacy Policy from time to time to reflect changes in our practices, technology, or legal requirements. We will notify you of material changes by posting the updated policy on our website and updating the "Last Updated" date.
          </p>
          <p>
            Your continued use of EduSafe following such notifications constitutes your acceptance of the updated Privacy Policy.
          </p>
        </section>

        {/* 13. Contact Us */}
        <section className="privacy-section privacy-section-last">
          <h2><Mail size={24} /> 13. Contact Us</h2>
          
          <p>
            If you have questions about this Privacy Policy or our privacy practices, please contact us:
          </p>
          
          <div className="contact-box">
            <div className="contact-item">
              <h4>📧 Email</h4>
              <a href="mailto:privacy@edusafe.com">privacy@edusafe.com</a>
            </div>
            <div className="contact-item">
              <h4>🏢 Mailing Address</h4>
              <p>
                EduSafe Inc.<br />
                Privacy Department<br />
                123 Education Street<br />
                Tech City, TC 12345<br />
                United States
              </p>
            </div>
            <div className="contact-item">
              <h4>📝 Data Protection Officer</h4>
              <a href="mailto:dpo@edusafe.com">dpo@edusafe.com</a>
            </div>
          </div>

          <div className="response-time">
            <p>We will respond to privacy inquiries within 30 days. For GDPR or CCPA requests, we comply with statutory response times.</p>
          </div>
        </section>

        {/* Additional Info */}
        <section className="privacy-section">
          <div className="privacy-notice">
            <h3>Additional Information</h3>
            <p>
              This Privacy Policy is designed to be transparent and user-friendly. We believe in putting your privacy first. If any part of this policy is unclear or if you have additional questions, please don't hesitate to contact us.
            </p>
            <p>
              <strong>Thank you for trusting EduSafe with your educational data.</strong>
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}

export default PrivacyPolicy;
