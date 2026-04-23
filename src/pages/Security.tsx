import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Shield, Lock, Check, AlertTriangle, Server, Bug, Key, ArrowRight } from 'lucide-react';

/**
 * EduSafe - Security Page
 * Comprehensive security information and practices
 */
function Security() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="security-page">
      {/* Header */}
      <header className="security-header">
        <Link to="/" className="back-link">
          <ArrowRight size={18} style={{ transform: 'rotate(180deg)' }} />
          Back to Dashboard
        </Link>
        <div className="security-header-content">
          <h1>Security & Compliance</h1>
          <p className="security-subtitle">Your data protection and platform security are our top priorities</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="security-main">
        {/* Introduction */}
        <section className="security-section">
          <h2><Shield size={24} /> Security at EduSafe</h2>
          <p>
            At EduSafe, security is not an afterthought—it's built into every layer of our platform. We employ industry-leading practices, compliance standards, and continuous monitoring to protect your educational data and ensure the integrity of our system.
          </p>
        </section>

        {/* Client-Side Processing */}
        <section className="security-section">
          <h2><Lock size={24} /> 1. Client-Side Data Processing</h2>
          
          <div className="security-subsection">
            <h3>Your Data, Your Control</h3>
            <p>
              The most important security measure we implement is <strong>client-side processing</strong>. This means:
            </p>
            <ul className="security-list">
              <li>✓ All CSV data uploaded to EduSafe is processed entirely in your browser</li>
              <li>✓ Student records are <strong>never transmitted to our servers</strong></li>
              <li>✓ No data is stored in our databases</li>
              <li>✓ All risk calculations happen locally on your device</li>
              <li>✓ You maintain complete ownership and control of your data</li>
            </ul>
          </div>

          <div className="security-subsection">
            <h3>Why This Matters</h3>
            <p>
              By processing data locally, we eliminate the largest security risk: server-side data storage. Even if our infrastructure were compromised, your student records would remain completely secure because they never leave your device.
            </p>
          </div>
        </section>

        {/* Data Encryption */}
        <section className="security-section">
          <h2><Key size={24} /> 2. Data Encryption</h2>
          
          <div className="security-subsection">
            <h3>HTTPS/TLS Encryption</h3>
            <p>
              All communication between your browser and our servers is encrypted using:
            </p>
            <ul className="security-list">
              <li>TLS 1.3 encryption protocol</li>
              <li>256-bit encryption for data in transit</li>
              <li>SSL/TLS certificates from trusted Certificate Authorities</li>
              <li>Perfect Forward Secrecy (PFS) for enhanced security</li>
            </ul>
          </div>

          <div className="security-subsection">
            <h3>Browser Security Features</h3>
            <ul className="security-list">
              <li>Content Security Policy (CSP) headers to prevent XSS attacks</li>
              <li>HTTP Strict Transport Security (HSTS)</li>
              <li>X-Frame-Options to prevent clickjacking</li>
              <li>X-Content-Type-Options to prevent MIME-type sniffing</li>
            </ul>
          </div>
        </section>

        {/* Infrastructure Security */}
        <section className="security-section">
          <h2><Server size={24} /> 3. Infrastructure Security</h2>
          
          <div className="security-subsection">
            <h3>Hosting & CDN</h3>
            <ul className="security-list">
              <li>Enterprise-grade cloud hosting with redundancy</li>
              <li>DDoS protection and mitigation</li>
              <li>Global CDN with security edge</li>
              <li>Automatic scaling and load balancing</li>
              <li>Regular security patches and updates</li>
            </ul>
          </div>

          <div className="security-subsection">
            <h3>Access Controls</h3>
            <ul className="security-list">
              <li>Multi-factor authentication for admin access</li>
              <li>Role-based access control (RBAC)</li>
              <li>IP whitelisting for sensitive operations</li>
              <li>VPN required for internal access</li>
              <li>Session timeouts and automatic logouts</li>
            </ul>
          </div>

          <div className="security-subsection">
            <h3>Network Security</h3>
            <ul className="security-list">
              <li>Firewall protection at multiple layers</li>
              <li>Web Application Firewall (WAF)</li>
              <li>Intrusion detection and prevention systems</li>
              <li>Regular network penetration testing</li>
              <li>Network segmentation for isolation</li>
            </ul>
          </div>
        </section>

        {/* Code Security */}
        <section className="security-section">
          <h2><Bug size={24} /> 4. Code & Application Security</h2>
          
          <div className="security-subsection">
            <h3>Secure Development Practices</h3>
            <ul className="security-list">
              <li>OWASP Top 10 vulnerability prevention</li>
              <li>Secure coding standards and guidelines</li>
              <li>Code reviews by multiple developers</li>
              <li>Input validation and sanitization</li>
              <li>Output encoding to prevent injection attacks</li>
            </ul>
          </div>

          <div className="security-subsection">
            <h3>Dependency Management</h3>
            <ul className="security-list">
              <li>Regular npm package audits</li>
              <li>Automated dependency scanning for vulnerabilities</li>
              <li>Minimal dependency footprint</li>
              <li>Trusted and well-maintained libraries only</li>
              <li>Automated updates for security patches</li>
            </ul>
          </div>

          <div className="security-subsection">
            <h3>Version Control & CI/CD</h3>
            <ul className="security-list">
              <li>Git-based version control with access restrictions</li>
              <li>Commit signing and verification</li>
              <li>Protected branches requiring code review</li>
              <li>Automated security testing in CI/CD pipeline</li>
              <li>Staging environment testing before production</li>
            </ul>
          </div>
        </section>

        {/* Vulnerability Management */}
        <section className="security-section">
          <h2><AlertTriangle size={24} /> 5. Vulnerability Management</h2>
          
          <div className="security-subsection">
            <h3>Vulnerability Disclosure Program</h3>
            <p>
              We take security vulnerabilities seriously. If you discover a vulnerability, please report it responsibly:
            </p>
            <div className="security-notice">
              <p>
                <strong>Email:</strong> <a href="mailto:security@edusafe.com">security@edusafe.com</a><br />
                <strong>Response Time:</strong> 24-48 hours<br />
                <strong>We will:</strong> Acknowledge receipt, confirm the vulnerability, and provide fixes
              </p>
            </div>
          </div>

          <div className="security-subsection">
            <h3>Security Patching</h3>
            <ul className="security-list">
              <li>Critical security updates deployed within 24 hours</li>
              <li>Regular security updates on a defined schedule</li>
              <li>Zero-day vulnerability response team</li>
              <li>Automated monitoring for emerging threats</li>
              <li>Security incident response plan</li>
            </ul>
          </div>

          <div className="security-subsection">
            <h3>Penetration Testing</h3>
            <ul className="security-list">
              <li>Annual third-party penetration testing</li>
              <li>Quarterly internal security audits</li>
              <li>Continuous vulnerability scanning</li>
              <li>Red team exercises</li>
            </ul>
          </div>
        </section>

        {/* Compliance & Standards */}
        <section className="security-section">
          <h2><Check size={24} /> 6. Compliance & Standards</h2>
          
          <div className="security-subsection">
            <h3>Educational Privacy Laws</h3>
            <ul className="security-list">
              <li><strong>FERPA (Family Educational Rights and Privacy Act)</strong> - Compliance with U.S. education privacy law</li>
              <li><strong>GDPR (General Data Protection Regulation)</strong> - Full compliance for EU users</li>
              <li><strong>CCPA (California Consumer Privacy Act)</strong> - Data protection for California residents</li>
              <li><strong>COPPA (Children's Online Privacy Protection Act)</strong> - Protection for users under 13</li>
              <li><strong>FERPA Business Associate Agreements</strong> - Available upon request</li>
            </ul>
          </div>

          <div className="security-subsection">
            <h3>Security Standards</h3>
            <ul className="security-list">
              <li><strong>ISO/IEC 27001</strong> - Information Security Management System certification</li>
              <li><strong>NIST Cybersecurity Framework</strong> - Alignment with national guidelines</li>
              <li><strong>SOC 2 Type II</strong> - Security, availability, processing integrity, and confidentiality</li>
              <li><strong>OWASP Standards</strong> - Web application security best practices</li>
            </ul>
          </div>

          <div className="security-subsection">
            <h3>Data Protection Certifications</h3>
            <ul className="security-list">
              <li>Third-party security audit certifications</li>
              <li>Annual compliance assessments</li>
              <li>Regular updates for regulatory changes</li>
            </ul>
          </div>
        </section>

        {/* Incident Response */}
        <section className="security-section">
          <h2><AlertTriangle size={24} /> 7. Incident Response & Business Continuity</h2>
          
          <div className="security-subsection">
            <h3>Incident Response Plan</h3>
            <ul className="security-list">
              <li>24/7 security monitoring and alerting</li>
              <li>Incident response team on call</li>
              <li>Classification and severity assessment procedures</li>
              <li>Communication protocols for affected users</li>
              <li>Post-incident analysis and improvements</li>
            </ul>
          </div>

          <div className="security-subsection">
            <h3>Business Continuity</h3>
            <ul className="security-list">
              <li>99.9% uptime SLA (Service Level Agreement)</li>
              <li>Automatic failover and redundancy</li>
              <li>Regular backup procedures (daily)</li>
              <li>Disaster recovery plan with regular testing</li>
              <li>Multiple geographic data centers</li>
            </ul>
          </div>
        </section>

        {/* User Security */}
        <section className="security-section">
          <h2><Key size={24} /> 8. User Security Best Practices</h2>
          
          <div className="security-subsection">
            <h3>Protect Your Account</h3>
            <ul className="security-list">
              <li>Use a strong, unique password (14+ characters)</li>
              <li>Enable two-factor authentication when available</li>
              <li>Never share your login credentials</li>
              <li>Log out after each session, especially on shared devices</li>
              <li>Regularly review your account activity</li>
            </ul>
          </div>

          <div className="security-subsection">
            <h3>Data Security</h3>
            <ul className="security-list">
              <li>Always use HTTPS (verify the padlock icon)</li>
              <li>Be cautious with CSV files containing sensitive data</li>
              <li>Use the "Reset All Data" button to clear sensitive information</li>
              <li>Don't leave the application open on public computers</li>
              <li>Keep your browser and operating system updated</li>
            </ul>
          </div>

          <div className="security-subsection">
            <h3>Device Security</h3>
            <ul className="security-list">
              <li>Use updated antivirus and anti-malware software</li>
              <li>Keep your operating system patched and updated</li>
              <li>Use a firewall</li>
              <li>Avoid public Wi-Fi for sensitive operations</li>
              <li>Use a VPN on public networks if possible</li>
            </ul>
          </div>
        </section>

        {/* Third-Party Security */}
        <section className="security-section">
          <h2><Server size={24} /> 9. Third-Party Security</h2>
          
          <div className="security-subsection">
            <h3>Vendor Management</h3>
            <ul className="security-list">
              <li>All vendors and service providers are vetted for security</li>
              <li>Data processing agreements in place</li>
              <li>Regular vendor security assessments</li>
              <li>Contractual security requirements</li>
              <li>Right to audit vendor security practices</li>
            </ul>
          </div>

          <div className="security-subsection">
            <h3>Subprocessors</h3>
            <ul className="security-list">
              <li>Cloud hosting providers (ISO 27001 certified)</li>
              <li>CDN and DDoS protection services</li>
              <li>Monitoring and logging services</li>
              <li>All subprocessors maintain comparable security standards</li>
            </ul>
          </div>
        </section>

        {/* Security Monitoring */}
        <section className="security-section">
          <h2><Bug size={24} /> 10. Continuous Security Monitoring</h2>
          
          <div className="security-subsection">
            <h3>Real-Time Monitoring</h3>
            <ul className="security-list">
              <li>24/7 security operations center (SOC)</li>
              <li>Real-time intrusion detection systems</li>
              <li>Automated threat detection and alerting</li>
              <li>Log aggregation and analysis</li>
              <li>Anomaly detection algorithms</li>
            </ul>
          </div>

          <div className="security-subsection">
            <h3>Threat Intelligence</h3>
            <ul className="security-list">
              <li>Integration with threat intelligence feeds</li>
              <li>Zero-day vulnerability monitoring</li>
              <li>Proactive threat hunting</li>
              <li>Security research and analysis</li>
            </ul>
          </div>
        </section>

        {/* Security Updates */}
        <section className="security-section">
          <h2><Check size={24} /> 11. Security Updates & Notifications</h2>
          
          <div className="security-subsection">
            <h3>Keeping You Informed</h3>
            <p>
              We regularly publish security updates and maintain transparency about our security practices:
            </p>
            <ul className="security-list">
              <li>Monthly security bulletins</li>
              <li>Security incident notifications (when applicable)</li>
              <li>Platform updates and changelog</li>
              <li>Security blog with best practices</li>
              <li>Subscribe to security notifications</li>
            </ul>
          </div>
        </section>

        {/* Contact & Support */}
        <section className="security-section security-section-last">
          <h2><Shield size={24} /> 12. Security Contact & Support</h2>
          
          <p>For security-related questions or concerns, please contact us:</p>
          
          <div className="security-contact-box">
            <div className="security-contact-item">
              <h4>🔒 Security Team</h4>
              <a href="mailto:security@edusafe.com">security@edusafe.com</a>
            </div>
            <div className="security-contact-item">
              <h4>📋 Compliance Officer</h4>
              <a href="mailto:compliance@edusafe.com">compliance@edusafe.com</a>
            </div>
            <div className="security-contact-item">
              <h4>🎯 General Inquiries</h4>
              <a href="mailto:support@edusafe.com">support@edusafe.com</a>
            </div>
          </div>

          <div className="security-notice">
            <h3>Security Commitment</h3>
            <p>
              We are committed to maintaining the highest standards of security and protecting your educational data. Security is an ongoing process, and we continuously invest in improving our defenses and staying ahead of emerging threats.
            </p>
            <p>
              <strong>Your trust is our responsibility.</strong>
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Security;
