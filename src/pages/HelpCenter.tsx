import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { HelpCircle, Search, ChevronDown, Phone, Mail, MessageSquare, BookOpen, ArrowRight, Lightbulb, Lock } from 'lucide-react';

/**
 * EduSafe - Help Center Page
 * Comprehensive support and FAQ resources
 */
function HelpCenter() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const faqCategories = [
    {
      title: 'Getting Started',
      icon: <BookOpen size={20} />,
      faqs: [
        {
          id: 1,
          question: 'How do I get started with EduSafe?',
          answer: 'Simply visit our platform, prepare your CSV files with student data (Attendance, Assessment, and Attempts), and upload them. EduSafe will automatically process your data and display risk profiles in seconds.'
        },
        {
          id: 2,
          question: 'What are the system requirements?',
          answer: 'EduSafe works on any modern web browser (Chrome, Firefox, Safari, Edge) with JavaScript enabled. No installation or special software is required. Just open the website and start uploading your data.'
        },
        {
          id: 3,
          question: 'Do I need to create an account?',
          answer: 'No, EduSafe does not require account creation. All data processing happens in your browser, so you can use the platform immediately without registration.'
        },
        {
          id: 4,
          question: 'Is there a free trial or paid plan?',
          answer: 'EduSafe is currently free to use. We believe education data analysis should be accessible to all educators.'
        }
      ]
    },
    {
      title: 'Data & Uploads',
      icon: <Search size={20} />,
      faqs: [
        {
          id: 5,
          question: 'What format should my CSV files be in?',
          answer: 'Your CSV files should be comma-separated with proper headers. For Attendance: StudentID, AttendancePercentage. For Assessment: StudentID, TestScore1, TestScore2, TestScore3. For Attempts: StudentID, AttemptsUsed.'
        },
        {
          id: 6,
          question: 'Why is my CSV file not being recognized?',
          answer: 'Check that your file has the correct headers and uses comma as the delimiter. Ensure StudentIDs are consistent across all three files. Try using sample data from our documentation if the issue persists.'
        },
        {
          id: 7,
          question: 'Where does my data go after upload?',
          answer: 'Your data stays entirely on your device. All processing happens in your browser. We never store or send your student data to our servers, ensuring complete privacy and control.'
        },
        {
          id: 8,
          question: 'How many students can I analyze at once?',
          answer: 'EduSafe can handle thousands of student records. The only limitation is your browser\'s performance. For very large datasets (10,000+ students), you may want to split into smaller batches.'
        },
        {
          id: 9,
          question: 'Can I upload the same data multiple times?',
          answer: 'Yes, you can upload new data sets as many times as you want. Use the "Reset All Data" button to clear previous uploads and start fresh analysis.'
        }
      ]
    },
    {
      title: 'Risk Assessment',
      icon: <Lightbulb size={20} />,
      faqs: [
        {
          id: 10,
          question: 'How is the risk score calculated?',
          answer: 'Risk scores are based on four factors: Attendance below 75% (+30 points), Average test score below 40% (+30 points), Declining test score trend (+20 points), and 2+ attempts used (+20 points). Scores range from 0-100, with 61-100 indicating at-risk students.'
        },
        {
          id: 11,
          question: 'What do the risk categories mean?',
          answer: 'Safe (0-30): Student is on track with no concerns. Watchlist (31-60): Student showing warning signs that need monitoring. At Risk (61-100): Student requires immediate intervention and support.'
        },
        {
          id: 12,
          question: 'Why is a student marked as at-risk?',
          answer: 'Click on any student in the table to see their detailed risk breakdown. This shows exactly which factors contributed to their risk score, helping you understand and address their specific needs.'
        },
        {
          id: 13,
          question: 'Can I adjust the risk scoring rules?',
          answer: 'Currently, the risk scoring rules are fixed. However, we\'re working on customizable scoring in future updates. For now, use the detailed breakdowns to make informed decisions.'
        }
      ]
    },
    {
      title: 'Features & Functionality',
      icon: <HelpCircle size={20} />,
      faqs: [
        {
          id: 14,
          question: 'Can I export the results?',
          answer: 'You can use your browser\'s print function to print or save results as PDF. You can also take screenshots. In future updates, we\'ll add direct CSV export functionality.'
        },
        {
          id: 15,
          question: 'How do I interpret the Risk Distribution Chart?',
          answer: 'The chart shows the number of students in each risk category (Safe, Watchlist, At Risk). The percentages show what portion of your cohort falls into each category, helping you understand overall class health.'
        },
        {
          id: 16,
          question: 'What information is shown in the Student Table?',
          answer: 'The table displays Student ID, Risk Score, Attendance %, Average Test Score, Attempts Used, and specific risk factors. Click any row to expand and see detailed explanations for that student\'s risk assessment.'
        },
        {
          id: 17,
          question: 'Can I sort or filter the student list?',
          answer: 'The list is automatically sorted by risk score (highest first). Future updates will include filtering and sorting options for better data analysis.'
        }
      ]
    },
    {
      title: 'Troubleshooting',
      icon: <HelpCircle size={20} />,
      faqs: [
        {
          id: 18,
          question: 'The page is loading slowly, what should I do?',
          answer: 'Try closing other browser tabs and applications to free up memory. If the issue persists, try a different browser or clear your browser cache. Very large datasets may process slower—consider splitting into smaller batches.'
        },
        {
          id: 19,
          question: 'My data disappeared after I closed the browser',
          answer: 'This is normal and by design! EduSafe processes data only in your current browser session. When you close the tab, the data is cleared for privacy. You can always upload fresh data.'
        },
        {
          id: 20,
          question: 'Why are some students missing from the results?',
          answer: 'Students only appear if they exist in ALL three CSV files. Make sure every StudentID is present in attendance.csv, assessment.csv, and attempts.csv. Check for spelling differences or extra spaces in IDs.'
        },
        {
          id: 21,
          question: 'The app keeps freezing with my data',
          answer: 'This can happen with very large datasets. Try splitting your data into smaller batches (e.g., 1,000 students at a time). Ensure you\'re using a modern browser with sufficient RAM available.'
        },
        {
          id: 22,
          question: 'How do I clear my data and start over?',
          answer: 'Click the "Reset All Data" button in the upload section to clear everything. Alternatively, close the browser tab completely, which will automatically clear all session data.'
        }
      ]
    },
    {
      title: 'Privacy & Security',
      icon: <Lock size={20} />,
      faqs: [
        {
          id: 23,
          question: 'Is my student data secure?',
          answer: 'Yes! All data processing happens in your browser. We never store or transmit student information to our servers. Your data remains completely under your control.'
        },
        {
          id: 24,
          question: 'Does EduSafe comply with FERPA?',
          answer: 'Yes, we design our platform with FERPA compliance in mind. Since data is processed locally and never stored on servers, we eliminate many traditional compliance risks. See our Privacy Policy for more details.'
        },
        {
          id: 25,
          question: 'Can third parties access my data?',
          answer: 'No. Your data never leaves your device, so no third parties can access it. This is one of EduSafe\'s core security features.'
        },
        {
          id: 26,
          question: 'What happens to my data if there\'s a security breach?',
          answer: 'Since we don\'t store student data, there\'s nothing to breach. Your information is only on your device. Check our Security page for more information about our infrastructure protection.'
        }
      ]
    }
  ];

  const filteredCategories = faqCategories.map(category => ({
    ...category,
    faqs: category.faqs.filter(faq =>
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })).filter(category => category.faqs.length > 0);

  return (
    <div className="help-center-page">
      {/* Header */}
      <header className="help-header">
        <Link to="/" className="back-link">
          <ArrowRight size={18} style={{ transform: 'rotate(180deg)' }} />
          Back to Dashboard
        </Link>
        <div className="help-header-content">
          <h1>Help Center</h1>
          <p className="help-subtitle">Find answers to your questions and get support</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="help-main">
        {/* Search Section */}
        <section className="help-search-section">
          <div className="search-container">
            <Search size={20} className="search-icon" />
            <input
              type="text"
              placeholder="Search for help..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="help-search-input"
            />
          </div>
          {searchQuery && (
            <p className="search-results-info">
              {filteredCategories.reduce((total, cat) => total + cat.faqs.length, 0)} results found
            </p>
          )}
        </section>

        {/* Quick Links */}
        {!searchQuery && (
          <section className="help-quick-links">
            <h2>Quick Links</h2>
            <div className="quick-links-grid">
              <Link to="/documentation" className="quick-link">
                <BookOpen size={24} />
                <h3>Documentation</h3>
                <p>Learn how to use EduSafe</p>
              </Link>
              <Link to="/privacy-policy" className="quick-link">
                <HelpCircle size={24} />
                <h3>Privacy Policy</h3>
                <p>Understand data protection</p>
              </Link>
              <Link to="/security" className="quick-link">
                <HelpCircle size={24} />
                <h3>Security</h3>
                <p>Learn about our security measures</p>
              </Link>
              <a href="mailto:support@edusafe.com" className="quick-link">
                <Mail size={24} />
                <h3>Contact Support</h3>
                <p>Get help from our team</p>
              </a>
            </div>
          </section>
        )}

        {/* FAQ Sections */}
        <section className="help-faq-section">
          <h2>Frequently Asked Questions</h2>
          
          {filteredCategories.length > 0 ? (
            filteredCategories.map((category) => (
              <div key={category.title} className="faq-category">
                <h3 className="faq-category-title">
                  {category.icon}
                  {category.title}
                </h3>
                <div className="faq-items">
                  {category.faqs.map((faq) => (
                    <div
                      key={faq.id}
                      className={`faq-item ${expandedFaq === faq.id ? 'expanded' : ''}`}
                      onClick={() => setExpandedFaq(expandedFaq === faq.id ? null : faq.id)}
                    >
                      <div className="faq-question">
                        <span>{faq.question}</span>
                        <ChevronDown
                          size={20}
                          className="faq-chevron"
                          style={{
                            transform: expandedFaq === faq.id ? 'rotate(180deg)' : 'rotate(0deg)',
                            transition: 'transform 0.3s ease'
                          }}
                        />
                      </div>
                      {expandedFaq === faq.id && (
                        <div className="faq-answer">
                          {faq.answer}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))
          ) : (
            <div className="no-results">
              <HelpCircle size={48} />
              <h3>No results found</h3>
              <p>Try searching with different keywords</p>
            </div>
          )}
        </section>

        {/* Contact Section */}
        <section className="help-contact-section">
          <h2>Still Need Help?</h2>
          <p>Can't find what you're looking for? Our support team is here to help.</p>
          
          <div className="contact-methods">
            <div className="contact-method">
              <Mail size={24} />
              <h3>Email Support</h3>
              <p>Get detailed responses to your questions</p>
              <a href="mailto:support@edusafe.com" className="contact-link">
                support@edusafe.com
              </a>
            </div>
            <div className="contact-method">
              <MessageSquare size={24} />
              <h3>Live Chat</h3>
              <p>Chat with our team in real-time</p>
              <a href="#" className="contact-link">Start a conversation</a>
            </div>
            <div className="contact-method">
              <Phone size={24} />
              <h3>Call Us</h3>
              <p>Speak directly with support</p>
              <a href="tel:+1234567890" className="contact-link">+1 (234) 567-890</a>
            </div>
          </div>

          <div className="response-time-info">
            <p><strong>Response Time:</strong> We typically respond within 24 hours for all inquiries.</p>
          </div>
        </section>

        {/* Tips Section */}
        <section className="help-tips-section">
          <h2>Pro Tips</h2>
          <div className="tips-grid">
            <div className="tip-card">
              <Lightbulb size={24} />
              <h3>Use Sample Data</h3>
              <p>Download sample CSV files from our documentation to test the platform before using real student data.</p>
            </div>
            <div className="tip-card">
              <Lightbulb size={24} />
              <h3>Check Student Details</h3>
              <p>Click on any student row to see their detailed risk breakdown and understand exactly why they were flagged.</p>
            </div>
            <div className="tip-card">
              <Lightbulb size={24} />
              <h3>Review Regularly</h3>
              <p>Analyze your data regularly throughout the term to identify emerging risks early and track student progress.</p>
            </div>
            <div className="tip-card">
              <Lightbulb size={24} />
              <h3>Share Insights</h3>
              <p>Use the risk distribution chart to understand your class composition and plan targeted interventions.</p>
            </div>
          </div>
        </section>

        {/* Feedback Section */}
        <section className="help-feedback-section">
          <h2>Help Us Improve</h2>
          <p>We'd love to hear your feedback and suggestions for improving EduSafe.</p>
          <a href="mailto:feedback@edusafe.com" className="feedback-button">
            Send Feedback
          </a>
        </section>
      </main>
    </div>
  );
}

export default HelpCenter;
