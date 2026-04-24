import { useState, useMemo, useCallback } from 'react';
import { Shield, Zap, Lock, Activity, ChevronDown, Info, Download } from 'lucide-react';
import { Link } from 'react-router-dom';
import { jsPDF } from 'jspdf';
import { CSVUpload, StudentTable, RiskChart, AlertBanner } from '../components';
import { analyzeAllStudents, getRiskDistribution } from '../utils/riskCalculator';
import heroBg from '../assets/hero-bg.svg';

import type { 
  AttendanceRecord, 
  AssessmentRecord, 
  AttemptsRecord,
  UploadState 
} from '../types';

/**
 * EduSafe - Student Early-Risk Identification Dashboard
 * 
 * Main application component that orchestrates:
 * - CSV file uploads
 * - Data merging and risk calculation
 * - Dashboard visualization
 */
function Home() {
  // State for uploaded CSV data
  const [uploadState, setUploadState] = useState<UploadState>({
    attendance: null,
    assessment: null,
    attempts: null
  });

  // Handlers for each CSV upload
  const handleAttendanceUpload = useCallback((data: AttendanceRecord[]) => {
    setUploadState(prev => ({ ...prev, attendance: data }));
  }, []);

  const handleAssessmentUpload = useCallback((data: AssessmentRecord[]) => {
    setUploadState(prev => ({ ...prev, assessment: data }));
  }, []);

  const handleAttemptsUpload = useCallback((data: AttemptsRecord[]) => {
    setUploadState(prev => ({ ...prev, attempts: data }));
  }, []);

  // Check if all data is uploaded
  const isDataComplete = uploadState.attendance && uploadState.assessment && uploadState.attempts;

  // Analyze students only when all data is available
  const studentProfiles = useMemo(() => {
    if (!isDataComplete) return [];
    return analyzeAllStudents(
      uploadState.attendance!,
      uploadState.assessment!,
      uploadState.attempts!
    );
  }, [uploadState, isDataComplete]);

  // Calculate risk distribution for chart
  const riskDistribution = useMemo(() => {
    return getRiskDistribution(studentProfiles);
  }, [studentProfiles]);

  // Reset all data
  const handleReset = () => {
    setUploadState({ attendance: null, assessment: null, attempts: null });
  };

  // Download report as PDF
  const handleDownloadReport = () => {
    const doc = new jsPDF();
    const pageWidth = doc.internal.pageSize.getWidth();
    const pageHeight = doc.internal.pageSize.getHeight();
    const margins = { top: 15, left: 15, right: 15, bottom: 15 };
    let yPosition = margins.top;

    // Helper function to check page break
    const checkPageBreak = (space: number) => {
      if (yPosition + space > pageHeight - margins.bottom) {
        // Add footer
        addFooter();
        doc.addPage();
        yPosition = margins.top;
        // Add header on new page
        addPageHeader();
      }
    };

    // Add page header (for non-first pages)
    const addPageHeader = () => {
      doc.setFontSize(9);
      doc.setTextColor(150, 150, 150);
      doc.text('EduSafe Risk Analysis Report', margins.left, margins.top - 5);
    };

    // Add footer
    const addFooter = () => {
      doc.setFontSize(8);
      doc.setTextColor(150, 150, 150);
      const pageCount = doc.internal.pages.length - 1;
      doc.text(
        `Page ${pageCount}`,
        pageWidth / 2,
        pageHeight - 8,
        { align: 'center' }
      );
      doc.setDrawColor(200, 200, 200);
      doc.line(margins.left, pageHeight - 10, pageWidth - margins.right, pageHeight - 10);
    };

    // Title Page
    doc.setFontSize(28);
    doc.setTextColor(59, 130, 246);
    doc.text('EduSafe', pageWidth / 2, yPosition, { align: 'center' });
    yPosition += 10;

    doc.setFontSize(18);
    doc.setTextColor(100, 100, 100);
    doc.text('Risk Analysis Report', pageWidth / 2, yPosition, { align: 'center' });
    yPosition += 15;

    doc.setFontSize(11);
    doc.setTextColor(0, 0, 0);
    doc.text(`Generated: ${new Date().toLocaleString()}`, pageWidth / 2, yPosition, { align: 'center' });
    yPosition += 5;
    doc.text(`Report Period: ${new Date().toLocaleDateString()}`, pageWidth / 2, yPosition, { align: 'center' });
    yPosition += 20;

    // Divider
    doc.setDrawColor(59, 130, 246);
    doc.setLineWidth(1);
    doc.line(margins.left, yPosition, pageWidth - margins.right, yPosition);
    yPosition += 8;

    // Calculate metrics
    const totalStudents = studentProfiles.length;
    const avgRiskScore = (studentProfiles.reduce((sum, s) => sum + s.riskScore, 0) / totalStudents).toFixed(1);
    const criticalStudents = studentProfiles.filter(s => s.riskScore >= 70).length;

    // Executive Summary Section
    checkPageBreak(55);
    doc.setFontSize(16);
    doc.setTextColor(59, 130, 246);
    doc.setFont('', 'bold');
    doc.text('Executive Summary', margins.left, yPosition);
    doc.setFont('', 'normal');
    yPosition += 10;

    // Create individual metric cards
    const metrics = [
      { label: 'Total Students', value: totalStudents, color: [59, 130, 246] },
      { label: 'Avg Risk Score', value: avgRiskScore, color: [100, 100, 100] },
      { label: 'At Risk', value: riskDistribution.atRisk, color: [239, 68, 68] },
      { label: 'Watchlist', value: riskDistribution.watchlist, color: [245, 158, 11] },
      { label: 'Safe', value: riskDistribution.safe, color: [16, 185, 129] },
      { label: 'Critical Cases', value: criticalStudents, color: [220, 38, 38] },
    ];

    const cardWidth = (pageWidth - 2 * margins.left - 10) / 3; // 3 cards per row
    let cardX = margins.left;
    let cardY = yPosition;
    let cardIndex = 0;

    metrics.forEach((metric, idx) => {
      // New row every 3 items
      if (idx > 0 && idx % 3 === 0) {
        cardY += 22;
        cardX = margins.left;
      }

      // Card background (light shade of metric color)
      const lightColor = [
        Math.min(255, metric.color[0] + 180),
        Math.min(255, metric.color[1] + 180),
        Math.min(255, metric.color[2] + 180),
      ];
      doc.setFillColor(lightColor[0], lightColor[1], lightColor[2]);
      doc.rect(cardX, cardY - 2, cardWidth - 2, 18, 'F');

      // Card border
      doc.setDrawColor(metric.color[0], metric.color[1], metric.color[2]);
      doc.setLineWidth(0.5);
      doc.rect(cardX, cardY - 2, cardWidth - 2, 18);

      // Label
      doc.setFontSize(8);
      doc.setTextColor(100, 100, 100);
      doc.text(metric.label, cardX + 3, cardY + 1);

      // Value
      doc.setFontSize(12);
      doc.setFont('', 'bold');
      doc.setTextColor(metric.color[0], metric.color[1], metric.color[2]);
      doc.text(metric.value.toString(), cardX + cardWidth - 5, cardY + 7, { align: 'right' });
      doc.setFont('', 'normal');

      cardX += cardWidth + 3;
    });

    yPosition += 50;

    // Risk Distribution Section
    checkPageBreak(40);
    doc.setFontSize(14);
    doc.setTextColor(0, 0, 0);
    doc.text('Risk Distribution Analysis', margins.left, yPosition);
    yPosition += 8;

    doc.setFontSize(10);
    const totalForPercent = totalStudents;
    const safePercent = ((riskDistribution.safe / totalForPercent) * 100).toFixed(0);
    const watchlistPercent = ((riskDistribution.watchlist / totalForPercent) * 100).toFixed(0);
    const atRiskPercent = ((riskDistribution.atRisk / totalForPercent) * 100).toFixed(0);

    // Safe
    doc.setTextColor(16, 185, 129);
    doc.setFont('', 'bold');
    doc.text(`Safe: ${safePercent}% (${riskDistribution.safe} students)`, margins.left, yPosition);
    doc.setFont('', 'normal');
    doc.setDrawColor(16, 185, 129);
    doc.setFillColor(16, 185, 129);
    doc.rect(margins.left + 70, yPosition - 3, parseInt(safePercent) * 0.9, 4, 'F');
    yPosition += 7;

    // Watchlist
    doc.setTextColor(245, 158, 11);
    doc.setFont('', 'bold');
    doc.text(`Watchlist: ${watchlistPercent}% (${riskDistribution.watchlist} students)`, margins.left, yPosition);
    doc.setFont('', 'normal');
    doc.setDrawColor(245, 158, 11);
    doc.setFillColor(245, 158, 11);
    doc.rect(margins.left + 70, yPosition - 3, parseInt(watchlistPercent) * 0.9, 4, 'F');
    yPosition += 7;

    // At Risk
    doc.setTextColor(239, 68, 68);
    doc.setFont('', 'bold');
    doc.text(`At Risk: ${atRiskPercent}% (${riskDistribution.atRisk} students)`, margins.left, yPosition);
    doc.setFont('', 'normal');
    doc.setDrawColor(239, 68, 68);
    doc.setFillColor(239, 68, 68);
    doc.rect(margins.left + 70, yPosition - 3, parseInt(atRiskPercent) * 0.9, 4, 'F');
    yPosition += 12;

    // Top At-Risk Students Section
    checkPageBreak(50);
    doc.setFontSize(14);
    doc.setTextColor(239, 68, 68);
    doc.text('Critical At-Risk Students', margins.left, yPosition);
    yPosition += 8;

    const topAtRisk = studentProfiles
      .filter(s => s.riskLevel === 'at-risk')
      .sort((a, b) => b.riskScore - a.riskScore)
      .slice(0, 5);

    if (topAtRisk.length > 0) {
      doc.setFontSize(9);
      doc.setTextColor(0, 0, 0);
      topAtRisk.forEach((student, index) => {
        checkPageBreak(5);
        doc.setFont('', 'bold');
        doc.text(`${index + 1}. ${student.studentId}`, margins.left + 2, yPosition);
        doc.setFont('', 'normal');
        doc.setTextColor(239, 68, 68);
        doc.text(`Risk Score: ${student.riskScore}`, margins.left + 60, yPosition);
        doc.setTextColor(0, 0, 0);
        yPosition += 5;
      });
    } else {
      doc.setFontSize(10);
      doc.setTextColor(16, 185, 129);
      doc.text('No students at critical risk', margins.left + 3, yPosition);
      yPosition += 5;
    }
    yPosition += 5;

    // Key Recommendations Section
    checkPageBreak(50);
    doc.setFontSize(14);
    doc.setTextColor(59, 130, 246);
    doc.text('Key Recommendations', margins.left, yPosition);
    yPosition += 8;

    doc.setFontSize(9);
    doc.setTextColor(0, 0, 0);
    const insights = [
      `Monitor the ${riskDistribution.atRisk} at-risk students closely with intervention programs.`,
      `Average risk score of ${avgRiskScore} indicates ${parseFloat(avgRiskScore) > 40 ? 'moderate to significant institutional challenges' : 'a relatively healthy student population'}.`,
      `Schedule counseling sessions for the ${criticalStudents} students with critical scores (>=70).`,
      `Review attendance patterns weekly - a primary indicator of dropout risk.`,
      `Consider group tutoring programs for students with declining test scores.`,
      `Establish regular check-ins with watchlist students to prevent progression to at-risk status.`,
    ];

    insights.forEach(insight => {
      checkPageBreak(5);
      doc.text(`• ${insight}`, margins.left + 2, yPosition, { maxWidth: pageWidth - 2 * margins.right - 2 });
      yPosition += 5;
    });
    yPosition += 5;

    // Detailed Student Profiles Section
    checkPageBreak(15);
    doc.setFontSize(14);
    doc.setTextColor(0, 0, 0);
    doc.text('Detailed Student Risk Profiles', margins.left, yPosition);
    yPosition += 8;

    // Table headers
    doc.setFontSize(9);
    doc.setFillColor(59, 130, 246);
    doc.setTextColor(255, 255, 255);
    doc.setFont('', 'bold');

    const headers = ['Student ID', 'Risk Score', 'Risk Level', 'Status'];
    const colWidths = [40, 35, 40, 35];
    let tableX = margins.left;

    headers.forEach((header, index) => {
      doc.text(header, tableX + 2, yPosition);
      tableX += colWidths[index];
    });

    doc.setLineWidth(0.3);
    doc.line(margins.left, yPosition + 1, pageWidth - margins.right, yPosition + 1);
    yPosition += 6;

    // Sort students by ID
    const sortedStudents = [...studentProfiles].sort((a, b) => 
      a.studentId.localeCompare(b.studentId)
    );

    // Student rows
    doc.setFont('', 'normal');
    doc.setTextColor(0, 0, 0);

    sortedStudents.forEach((student, idx) => {
      checkPageBreak(5);

      // Alternate row background
      if (idx % 2 === 0) {
        doc.setFillColor(245, 250, 255);
        doc.rect(margins.left, yPosition - 3, pageWidth - 2 * margins.right, 4.5, 'F');
      }

      tableX = margins.left;

      // Student ID
      doc.setFontSize(8);
      doc.text(student.studentId, tableX + 2, yPosition);
      tableX += colWidths[0];

      // Risk Score
      doc.text(student.riskScore.toString(), tableX + 2, yPosition);
      tableX += colWidths[1];

      // Risk Level with color
      const getRiskColor = () => {
        switch (student.riskLevel) {
          case 'at-risk':
            return { color: [239, 68, 68] as [number, number, number], text: 'AT RISK' };
          case 'watchlist':
            return { color: [245, 158, 11] as [number, number, number], text: 'WATCHLIST' };
          default:
            return { color: [16, 185, 129] as [number, number, number], text: 'SAFE' };
        }
      };

      const riskInfo = getRiskColor();
      doc.setTextColor(riskInfo.color[0], riskInfo.color[1], riskInfo.color[2]);
      doc.setFont('', 'bold');
      doc.text(riskInfo.text, tableX + 2, yPosition);
      doc.setFont('', 'normal');
      doc.setTextColor(0, 0, 0);
      tableX += colWidths[2];

      // Status indicator
      doc.setFontSize(8);
      const statusText = student.riskScore >= 70 ? 'CRITICAL' : student.riskScore >= 60 ? 'HIGH' : 'MONITOR';
      doc.text(statusText, tableX + 2, yPosition);

      yPosition += 5;
    });

    // Final footer
    addFooter();

    // Download
    const fileName = `EduSafe-Risk-Report-${new Date().toISOString().split('T')[0]}.pdf`;
    doc.save(fileName);
  };

  return (
    <div className="home-page">
      {/* Hero Section */}
      <header className="app-hero">
        <Link to="/about" className="about-btn">
          <Info size={18} />
          About
        </Link>

        <div className="hero-background">
          <img src={heroBg} className="hero-bg-svg layer-1" alt="" />
          <img src={heroBg} className="hero-bg-svg layer-2" alt="" />
          <div className="hero-overlay"></div>
        </div>
        
        <div className="hero-content">
          <div className="logo-container">
            <div className="logo-icon-wrapper">
              <Shield size={56} strokeWidth={2} />
            </div>
            <h1 className="hero-title">
              Edu<span className="text-gradient">Safe</span>
            </h1>
          </div>
          <p className="hero-subtitle">
            Next-Generation Student Dropout Risk Identification System
            <br />
            <span className="subtitle-tagline">Empower educators with data-driven insights to identify at-risk students early</span>
          </p>
          
          <div className="hero-cards">
            <div className="hero-card">
              <div className="card-icon"><Activity size={24} /></div>
              <h3>Early Detection</h3>
              <p>Identify at-risk patterns months before they become critical issues.</p>
            </div>
            <div className="hero-card">
              <div className="card-icon"><Zap size={24} /></div>
              <h3>Instant Analysis</h3>
              <p>Process thousands of student records in seconds with real-time scoring.</p>
            </div>
            <div className="hero-card">
              <div className="card-icon"><Lock size={24} /></div>
              <h3>Secure & Private</h3>
              <p>Enterprise-grade data protection ensuring student privacy at all times.</p>
            </div>
          </div>

          <div className="scroll-indicator" onClick={() => document.getElementById('upload')?.scrollIntoView({ behavior: 'smooth' })}>
            <ChevronDown size={32} />
          </div>
        </div>
      </header>

      <main className="app-main">
        {/* Upload Section */}
        <section className="upload-section" id="upload">
          <h2><Activity size={24} style={{ verticalAlign: 'middle', marginRight: '10px', color: 'var(--color-primary)' }} /> Upload Student Data</h2>
          <p className="section-description">
            Upload three CSV files containing attendance, assessment, and attempts data.
          </p>
          
          <div className="upload-grid">
            <CSVUpload<AttendanceRecord>
              label="Attendance Data"
              description="StudentID, AttendancePercentage"
              onDataLoaded={handleAttendanceUpload}
              isLoaded={!!uploadState.attendance}
            />
            <CSVUpload<AssessmentRecord>
              label="Assessment Data"
              description="StudentID, TestScore1, TestScore2, TestScore3"
              onDataLoaded={handleAssessmentUpload}
              isLoaded={!!uploadState.assessment}
            />
            <CSVUpload<AttemptsRecord>
              label="Attempts Data"
              description="StudentID, AttemptsUsed"
              onDataLoaded={handleAttemptsUpload}
              isLoaded={!!uploadState.attempts}
            />
          </div>

          {isDataComplete && (
            <div className="action-buttons">
              <button className="reset-btn" onClick={handleReset}>
                Reset All Data
              </button>
              <button className="download-report-btn" onClick={handleDownloadReport}>
                <Download size={18} />
                Download Report
              </button>
            </div>
          )}
        </section>

        {/* Alert Banner */}
        {isDataComplete && (
          <AlertBanner atRiskCount={riskDistribution.atRisk} />
        )}
            

        {/* Dashboard Section */}
        {isDataComplete && (
          <section className="dashboard-section">
            {/* Risk Chart */}
            <RiskChart distribution={riskDistribution} />

            {/* Risk Rules Explanation */}
            <div className="rules-card">
              <h3>📋 Risk Scoring Rules</h3>
              <ul className="rules-list">
                <li><span className="rule-points">+30</span> Attendance below 75%</li>
                <li><span className="rule-points">+30</span> Average test score below 40%</li>
                <li><span className="rule-points">+20</span> Declining test score trend</li>
                <li><span className="rule-points">+20</span> 2 or more attempts used</li>
              </ul>
              <div className="risk-levels">
                <span className="level safe">0-30: Safe</span>
                <span className="level watchlist">31-60: Watchlist</span>
                <span className="level at-risk">61-100: At Risk</span>
              </div>
            </div>

            {/* Student Table */}
            <div className="table-section">
              <h2>👥 Student Risk Profiles</h2>
              <p className="section-description">
                Click on any row to see detailed risk explanations. Sorted by risk score (highest first).
              </p>
              <StudentTable students={studentProfiles} />
            </div>
          </section>
        )}

        {/* Instructions when no data */}
        {!isDataComplete && (
          <section className="instructions-section">
            <h2> Getting Started</h2>
            <div className="instructions-content">
              <p>Upload all three CSV files above to analyze student dropout risk levels.</p>
              
              <h3>Expected CSV Format:</h3>
              <div className="csv-examples">
                <div className="csv-example">
                  <h4>attendance.csv</h4>
                  <code>
                    StudentID,AttendancePercentage<br/>
                    STU001,85<br/>
                    STU002,62<br/>
                    STU003,91
                  </code>
                </div>
                <div className="csv-example">
                  <h4>assessment.csv</h4>
                  <code>
                    StudentID,TestScore1,TestScore2,TestScore3<br/>
                    STU001,75,80,72<br/>
                    STU002,45,38,32<br/>
                    STU003,88,92,95
                  </code>
                </div>
                <div className="csv-example">
                  <h4>attempts.csv</h4>
                  <code>
                    StudentID,AttemptsUsed<br/>
                    STU001,1<br/>
                    STU002,3<br/>
                    STU003,1
                  </code>
                </div>
              </div>
            </div>
          </section>
        )}
      </main>

      {/* Footer */}
      <footer className="app-footer">
        <div className="footer-container">
          <div className="footer-grid">
            <div className="footer-brand-section">
              <div className="footer-logo">
                <Shield size={32} className="logo-icon" />
                <span>Edu<strong>Safe</strong></span>
              </div>
              <p className="footer-tagline">
                Empowering educators with data-driven insights to ensure every student succeeds.
              </p>
              <div className="footer-socials">
                <a href="#" aria-label="Twitter"><Activity size={20} /></a>
                <a href="#" aria-label="LinkedIn"><Zap size={20} /></a>
                <a href="#" aria-label="GitHub"><Lock size={20} /></a>
              </div>
            </div>

            <div className="footer-nav-group">
              <h4>Platform</h4>
              <ul>
                <li><a href="#upload">Data Upload</a></li>
                <li><a href="#">Risk Analysis</a></li>
                <li><a href="#">Student Profiles</a></li>
                <li><a href="#">Reporting</a></li>
              </ul>
            </div>

            <div className="footer-nav-group">
              <h4>Resources</h4>
              <ul>
                <li><Link to="/documentation">Documentation</Link></li>
                <li><Link to="/help-center">Help Center</Link></li>
                <li><Link to="/privacy-policy">Privacy Policy</Link></li>
                <li><Link to="/security">Security</Link></li>
              </ul>
            </div>

            <div className="footer-nav-group">
              <h4>Contact</h4>
              <ul>
                <li><a href="mailto:support@edusafe.com">support@edusafe.com</a></li>
                <li><Link to="/feedback">Feedback</Link></li>
                <li><a href="#">System Status</a></li>
              </ul>
            </div>
          </div>

          <div className="footer-bottom">
            <div className="footer-copyright">
              © 2026 EduSafe. Built with 💙 by <strong>Angela Bera</strong>
            </div>
            <div className="footer-legal">
              <a href="#">Terms</a>
              <a href="#">Privacy</a>
              <a href="#">Cookies</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;
