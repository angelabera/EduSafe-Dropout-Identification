import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, FileText, HelpCircle, Shield, Info, ArrowRight, Zap } from 'lucide-react';

/**
 * EduSafe - Documentation Page
 * Comprehensive guide for users on how to use the platform
 */
function Documentation() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="documentation-page">
      {/* Header */}
      <header className="doc-header">
        <Link to="/" className="back-link">
          <ArrowRight size={18} style={{ transform: 'rotate(180deg)' }} />
          Back to Dashboard
        </Link>
        <div className="doc-header-content">
          <h1>EduSafe Documentation</h1>
          <p className="doc-subtitle">Complete guide to using the Student Dropout Risk Identification System</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="doc-main">
        {/* Quick Start Section */}
        <section className="doc-section">
          <h2><Zap size={24} /> Quick Start Guide</h2>
          <p>Get started with EduSafe in just 3 simple steps:</p>
          
          <div className="doc-cards">
            <div className="doc-card">
              <div className="card-number">1</div>
              <h3>Prepare Your Data</h3>
              <p>Organize your student data into three CSV files: Attendance, Assessment, and Attempts. Download sample files if needed.</p>
            </div>
            <div className="doc-card">
              <div className="card-number">2</div>
              <h3>Upload Files</h3>
              <p>Navigate to the upload section and upload all three CSV files. EduSafe will validate the format automatically.</p>
            </div>
            <div className="doc-card">
              <div className="card-number">3</div>
              <h3>View Results</h3>
              <p>Instantly see risk scores, charts, and detailed student profiles with actionable insights.</p>
            </div>
          </div>
        </section>

        {/* Data Format Section */}
        <section className="doc-section">
          <h2><FileText size={24} /> Data Format Requirements</h2>
          
          <div className="doc-subsection">
            <h3>Attendance Data</h3>
            <p>CSV file containing student attendance information</p>
            <table className="doc-table">
              <thead>
                <tr>
                  <th>Column</th>
                  <th>Type</th>
                  <th>Description</th>
                  <th>Example</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><code>StudentID</code></td>
                  <td>String</td>
                  <td>Unique student identifier</td>
                  <td>STU001</td>
                </tr>
                <tr>
                  <td><code>AttendancePercentage</code></td>
                  <td>Number (0-100)</td>
                  <td>Student attendance percentage</td>
                  <td>85</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="doc-subsection">
            <h3>Assessment Data</h3>
            <p>CSV file containing student test scores</p>
            <table className="doc-table">
              <thead>
                <tr>
                  <th>Column</th>
                  <th>Type</th>
                  <th>Description</th>
                  <th>Example</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><code>StudentID</code></td>
                  <td>String</td>
                  <td>Unique student identifier</td>
                  <td>STU001</td>
                </tr>
                <tr>
                  <td><code>TestScore1</code></td>
                  <td>Number (0-100)</td>
                  <td>First test score</td>
                  <td>75</td>
                </tr>
                <tr>
                  <td><code>TestScore2</code></td>
                  <td>Number (0-100)</td>
                  <td>Second test score</td>
                  <td>80</td>
                </tr>
                <tr>
                  <td><code>TestScore3</code></td>
                  <td>Number (0-100)</td>
                  <td>Third test score</td>
                  <td>72</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="doc-subsection">
            <h3>Attempts Data</h3>
            <p>CSV file containing assignment/test attempt information</p>
            <table className="doc-table">
              <thead>
                <tr>
                  <th>Column</th>
                  <th>Type</th>
                  <th>Description</th>
                  <th>Example</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><code>StudentID</code></td>
                  <td>String</td>
                  <td>Unique student identifier</td>
                  <td>STU001</td>
                </tr>
                <tr>
                  <td><code>AttemptsUsed</code></td>
                  <td>Number</td>
                  <td>Number of attempts used</td>
                  <td>1</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Risk Scoring Section */}
        <section className="doc-section">
          <h2><Shield size={24} /> Risk Scoring System</h2>
          <p>EduSafe calculates student dropout risk using a comprehensive scoring system based on multiple factors:</p>
          
          <div className="scoring-table">
            <table className="doc-table">
              <thead>
                <tr>
                  <th>Risk Factor</th>
                  <th>Points</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Low Attendance</td>
                  <td className="score-high">+30</td>
                  <td>Attendance percentage below 75%</td>
                </tr>
                <tr>
                  <td>Poor Performance</td>
                  <td className="score-high">+30</td>
                  <td>Average test score below 40%</td>
                </tr>
                <tr>
                  <td>Declining Grades</td>
                  <td className="score-medium">+20</td>
                  <td>Downward trend in test scores</td>
                </tr>
                <tr>
                  <td>Multiple Attempts</td>
                  <td className="score-medium">+20</td>
                  <td>2 or more attempts used</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="risk-levels-section">
            <h3>Risk Categories</h3>
            <div className="risk-levels-large">
              <div className="risk-level-item safe">
                <div className="level-badge">0-30</div>
                <h4>Safe</h4>
                <p>Student is on track with no immediate concerns</p>
              </div>
              <div className="risk-level-item watchlist">
                <div className="level-badge">31-60</div>
                <h4>Watchlist</h4>
                <p>Student showing some warning signs, monitor closely</p>
              </div>
              <div className="risk-level-item at-risk">
                <div className="level-badge">61-100</div>
                <h4>At Risk</h4>
                <p>Student requires immediate intervention and support</p>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="doc-section">
          <h2><BookOpen size={24} /> Key Features</h2>
          
          <div className="features-list">
            <div className="feature-item">
              <h3>📊 Risk Distribution Chart</h3>
              <p>Visual representation of your student population across risk categories. Quickly understand the overall health of your cohort.</p>
            </div>
            <div className="feature-item">
              <h3>⚠️ Alert Banner</h3>
              <p>Prominent display showing the number of students at risk. Get instant awareness of critical situations.</p>
            </div>
            <div className="feature-item">
              <h3>👥 Student Risk Profiles</h3>
              <p>Detailed table with all student data, risk scores, and individual risk factors. Click on any student to see their breakdown.</p>
            </div>
            <div className="feature-item">
              <h3>📈 Real-time Analysis</h3>
              <p>Instant processing of thousands of records. Get insights in seconds, not hours.</p>
            </div>
            <div className="feature-item">
              <h3>🔒 Data Privacy</h3>
              <p>Your data is processed securely. All analysis happens locally in your browser.</p>
            </div>
            <div className="feature-item">
              <h3>⏱️ Easy Reset</h3>
              <p>Clear all data with a single click and start fresh analysis with new datasets.</p>
            </div>
          </div>
        </section>

        {/* Troubleshooting Section */}
        <section className="doc-section">
          <h2><HelpCircle size={24} /> Troubleshooting</h2>
          
          <div className="faq-section">
            <div className="faq-item">
              <h3>Why is my CSV file not uploading?</h3>
              <p>Make sure your CSV file follows the correct format with proper column headers (StudentID, AttendancePercentage, etc.). The file should be a valid CSV with comma-separated values.</p>
            </div>
            
            <div className="faq-item">
              <h3>Why are some students missing from the results?</h3>
              <p>Students appear in results only if they exist in ALL three uploaded files. Ensure each student ID is present in attendance.csv, assessment.csv, and attempts.csv.</p>
            </div>
            
            <div className="faq-item">
              <h3>Can I upload data without test scores?</h3>
              <p>All three files are required: Attendance, Assessment, and Attempts. Each file is essential for accurate risk calculation.</p>
            </div>
            
            <div className="faq-item">
              <h3>How is the risk score calculated?</h3>
              <p>The risk score is the sum of points from all risk factors. See the "Risk Scoring System" section above for the complete breakdown.</p>
            </div>
            
            <div className="faq-item">
              <h3>Can I export the results?</h3>
              <p>You can use your browser's print function or take screenshots of the results. The data is not stored on our servers.</p>
            </div>

            <div className="faq-item">
              <h3>Is my data secure?</h3>
              <p>Yes! All data processing happens in your browser. No information is sent to external servers. Your student data remains completely private.</p>
            </div>
          </div>
        </section>

        {/* Tips Section */}
        <section className="doc-section">
          <h2><Info size={24} /> Best Practices & Tips</h2>
          
          <ul className="tips-list">
            <li>Keep CSV file names lowercase and without spaces for best compatibility</li>
            <li>Use StudentID consistently across all three files - any mismatch will exclude that student</li>
            <li>Ensure numeric values (percentages, scores) are actual numbers, not text</li>
            <li>Review high-risk students first and plan interventions accordingly</li>
            <li>Update your data regularly to track progress and identify new at-risk students</li>
            <li>Use the "Reset All Data" button before analyzing a new cohort</li>
            <li>Combine EduSafe insights with your personal knowledge of students for best outcomes</li>
          </ul>
        </section>

        {/* Support Section */}
        <section className="doc-section doc-section-last">
          <h2>📞 Need More Help?</h2>
          <div className="support-box">
            <p>If you have questions or need assistance, please reach out to our support team:</p>
            <div className="support-links">
              <a href="mailto:support@edusafe.com" className="support-link">📧 support@edusafe.com</a>
              <a href="#" className="support-link">💬 Live Chat Support</a>
              <a href="#" className="support-link">📋 Submit Feedback</a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Documentation;
