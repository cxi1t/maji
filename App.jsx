import { BrowserRouter as Router, Routes, Route, Link, useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { BookOpen, UploadCloud, Search, Home, GraduationCap, Video, Users, FileText, Lock, LogIn } from 'lucide-react';
import './index.css';
import logo from './assets/logo.jpg';

// Components
const Navbar = () => {
  const location = useLocation();
  const isInstructor = location.pathname.includes('/instructor');

  return (
    <nav className="navbar">
      <div className="container navbar-container">
        <Link to="/" className="navbar-logo" style={{ padding: '0' }}>
          <img src={logo} alt="مرجع" style={{ height: '80px', transform: 'scale(1.2)' }} />
        </Link>
        <div className="navbar-links">
          <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>الرئيسية</Link>
          <Link to="/colleges" className={`nav-link ${location.pathname === '/colleges' ? 'active' : ''}`}>مكتبة الشروحات</Link>
          {isInstructor ? (
            <Link to="/instructor" className="btn btn-primary" style={{ padding: '8px 16px', fontSize: '0.9rem' }}>لوحة التحكم</Link>
          ) : (
            <Link to="/instructor" className="btn btn-outline" style={{ padding: '8px 16px', fontSize: '0.9rem' }}>بوابة الشُرّاح</Link>
          )}
        </div>
      </div>
    </nav>
  );
};

const Footer = () => (
  <footer style={{ background: 'var(--surface-color)', padding: '40px 0', marginTop: '60px', borderTop: '1px solid var(--border-color)', textAlign: 'center' }}>
    <div className="container">
      <img src={logo} alt="مرجع" style={{ height: '120px', margin: '0 auto 15px', display: 'block' }} />
      <h3 style={{ marginBottom: '10px' }}>منصة مرجع</h3>
      <p style={{ color: 'var(--text-light)' }}>المنصة الرسمية المعتمدة لطلاب جامعة الأمير سطام بن عبدالعزيز للوصول إلى أبرز الشروحات والمراجع التعليمية.</p>
      <div style={{ marginTop: '20px', fontSize: '0.9rem', color: 'var(--text-light)' }}>
        © {new Date().getFullYear()} جامعة الأمير سطام بن عبدالعزيز. جميع الحقوق محفوظة.
      </div>
    </div>
  </footer>
);

// Pages
const HomePage = () => (
  <div className="animate-fade">
    <section className="hero">
      <div className="hero-content">
        <h1>مرحباً بك في منصة مرجع</h1>
        <p>الوجهة الأولى المعتمدة لطلاب وطالبات جامعة الأمير سطام بن عبدالعزيز للوصول إلى شروحات المقررات والملفات الأكاديمية.</p>

        <div className="search-box">
          <input type="text" className="search-input" placeholder="ابحث عن مقرر، تخصص، أو دكتور..." />
          <button className="search-btn"><Search size={20} /></button>
        </div>
      </div>
    </section>

    <div className="container" style={{ paddingTop: '80px', paddingBottom: '40px' }}>
      <h2 className="section-title">الكليات والمشروحات البارزة</h2>

      <div className="grid">
        <Link to="/colleges/computer-science" className="card">
          <div className="card-icon"><BookOpen size={30} /></div>
          <h3>كلية هندسة وعلوم الحاسب</h3>
          <p>شروحات البرمجة، هياكل البيانات، وقواعد البيانات.</p>
          <span className="btn btn-outline" style={{ marginTop: 'auto', width: '100%', borderRadius: '50px' }}>تصفح المقررات</span>
        </Link>
        <Link to="/colleges/medicine" className="card">
          <div className="card-icon"><BookOpen size={30} /></div>
          <h3>كلية الطب البشري</h3>
          <p>علم التشريح، وظائف الأعضاء، والأمراض.</p>
          <span className="btn btn-outline" style={{ marginTop: 'auto', width: '100%', borderRadius: '50px' }}>تصفح المقررات</span>
        </Link>
        <Link to="/colleges/engineering" className="card">
          <div className="card-icon"><BookOpen size={30} /></div>
          <h3>كلية الهندسة</h3>
          <p>شروحات الفيزياء الحركية، الرياضيات الهندسية والميكانيكا.</p>
          <span className="btn btn-outline" style={{ marginTop: 'auto', width: '100%', borderRadius: '50px' }}>تصفح المقررات</span>
        </Link>
        <Link to="/colleges/business" className="card">
          <div className="card-icon"><BookOpen size={30} /></div>
          <h3>كلية إدارة الأعمال</h3>
          <p>المالية، المحاسبة، والاقتصاد الجزئي.</p>
          <span className="btn btn-outline" style={{ marginTop: 'auto', width: '100%', borderRadius: '50px' }}>تصفح المقررات</span>
        </Link>
      </div>
    </div>
  </div>
);

const CollegesDirectory = () => (
  <div className="container animate-fade" style={{ padding: '40px 20px' }}>
    <h2 className="section-title" style={{ marginTop: 0 }}>تصفح جميع الكليات</h2>
    <div className="grid">
      {['هندسة وعلوم الحاسب', 'الطب البشري', 'الصيدلة', 'العلوم المساعدة', 'إدارة الأعمال', 'التربية', 'صناعة وتكنولوجيا', 'العلوم التطبيقية', 'الهندسة'].map((college, idx) => (
        <Link key={idx} to={`/colleges/demo`} className="card" style={{ padding: '20px' }}>
          <div className="card-icon" style={{ marginBottom: '15px' }}><GraduationCap size={28} /></div>
          <h3 style={{ fontSize: '1.1rem' }}>كلية {college}</h3>
          <p style={{ margin: 0 }}>45 مقرر متاح</p>
        </Link>
      ))}
    </div>
  </div>
);

const SubjectPage = () => (
  <div className="container animate-fade" style={{ padding: '40px 20px' }}>
    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px', color: 'var(--text-light)' }}>
      <Link to="/colleges">الكليات</Link>
      <span>/</span>
      <Link to="/colleges/computer-science">هندسة وعلوم الحاسب</Link>
      <span>/</span>
      <span style={{ color: 'var(--psu-blue)', fontWeight: 'bold' }}>برمجة 1 (CS101)</span>
    </div>

    <h1 style={{ marginBottom: '30px' }}>شروحات مقرر: برمجة 1 (CS101)</h1>

    <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '20px' }}>
      {/* Video Card */}
      <div style={{ background: 'white', borderRadius: 'var(--radius-lg)', padding: '20px', display: 'flex', gap: '20px', border: '1px solid var(--border-color)', boxShadow: 'var(--shadow-sm)' }}>
        <div style={{ width: '250px', height: '140px', background: '#e2e8f0', borderRadius: 'var(--radius-md)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#94a3b8' }}>
          <Video size={48} />
        </div>
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
          <h3 style={{ fontSize: '1.3rem', marginBottom: '10px' }}>المحاضرة الأولى: مقدمة في لغة Java</h3>
          <p style={{ color: 'var(--text-light)', marginBottom: '15px' }}>شرح لأساسيات لغة الجافا وكيفية إعداد بيئة التطوير مع أمثلة عملية.</p>
          <div style={{ display: 'flex', gap: '15px', color: 'var(--text-light)', fontSize: '0.9rem', marginBottom: 'auto' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><Users size={16} /> أ. أحمد محمد</span>
          </div>
          <div style={{ marginTop: '15px' }}>
            <button className="btn btn-primary" style={{ padding: '6px 15px', fontSize: '0.9rem' }}>شاهد الآن</button>
          </div>
        </div>
      </div>

      {/* File Card */}
      <div style={{ background: 'white', borderRadius: 'var(--radius-lg)', padding: '20px', display: 'flex', gap: '20px', border: '1px solid var(--border-color)', boxShadow: 'var(--shadow-sm)' }}>
        <div style={{ width: '80px', height: '100px', background: 'rgba(8, 59, 102, 0.05)', borderRadius: 'var(--radius-md)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--psu-blue)' }}>
          <FileText size={40} />
        </div>
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <h3 style={{ fontSize: '1.2rem', marginBottom: '5px' }}>مذكرة المحاضرة الأولى وملخص الجافا.pdf</h3>
          <p style={{ color: 'var(--text-light)' }}>مرفوع بواسطة: أ. أحمد محمد</p>
          <div style={{ marginTop: '15px' }}>
            <button className="btn btn-outline" style={{ padding: '6px 15px', fontSize: '0.9rem' }}>تحميل الملف</button>
          </div>
        </div>
      </div>
    </div>
  </div>
);

// Instructor Login Page
const InstructorLogin = ({ onLogin }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Simulate API call for login
    if (email && password) {
      onLogin(true);
      navigate('/instructor');
    } else {
      alert("الرجاء إدخال البريد الإلكتروني الجامعي وكلمة المرور.");
    }
  };

  return (
    <div className="container animate-fade" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '60vh', padding: '40px 20px' }}>
      <div style={{ background: 'white', padding: '40px', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-lg)', width: '100%', maxWidth: '450px', border: '1px solid var(--border-color)', textAlign: 'center' }}>
        <div style={{ display: 'inline-flex', justifyContent: 'center', alignItems: 'center', width: '80px', height: '80px', background: 'rgba(8, 59, 102, 0.05)', borderRadius: '50%', marginBottom: '20px', color: 'var(--psu-blue)' }}>
          <Lock size={40} />
        </div>
        <h2 style={{ marginBottom: '10px', color: 'var(--psu-blue)' }}>تسجيل الدخول للشُرّاح</h2>
        <p style={{ color: 'var(--text-light)', marginBottom: '30px' }}>الرجاء تسجيل الدخول لتتمكن من رفع الشروحات والملفات.</p>

        <form onSubmit={handleLogin} style={{ textAlign: 'right' }}>
          <div className="form-group">
            <label className="form-label" style={{ display: 'block', marginBottom: '8px' }}>البريد الإلكتروني الجامعي</label>
            <input
              type="email"
              className="form-control"
              placeholder="example@psau.edu.sa"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group" style={{ marginBottom: '30px' }}>
            <label className="form-label" style={{ display: 'block', marginBottom: '8px' }}>كلمة المرور</label>
            <input
              type="password"
              className="form-control"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: '12px', fontSize: '1.1rem', justifyContent: 'center' }}>
            <LogIn size={20} /> تسجيل الدخول
          </button>
        </form>
      </div>
    </div>
  );
};

// Protected Route Wrapper
const ProtectedRoute = ({ isAuth, children }) => {
  if (!isAuth) {
    return (
      <div className="container animate-fade" style={{ textAlign: 'center', padding: '100px 20px' }}>
        <Lock size={64} style={{ color: '#ef4444', marginBottom: '20px', margin: '0 auto', display: 'block' }} />
        <h2>عذراً، هذه الصفحة مخصصة للشُرّاح فقط</h2>
        <p style={{ color: 'var(--text-light)', marginTop: '10px', marginBottom: '30px' }}>يجب عليك تسجيل الدخول بحساب معتمد للوصول إلى لوحة التحكم.</p>
        <Link to="/instructor/login" className="btn btn-primary">اذهب لصفحة تسجيل الدخول</Link>
      </div>
    );
  }
  return children;
};

// Instructor Dashboard
const InstructorDashboard = () => (
  <div className="dashboard-container animate-fade">
    <div className="dashboard-sidebar">
      <ul className="sidebar-menu">
        <li>
          <Link to="/instructor" className="sidebar-link active">
            <Home size={20} /> لوحة التحكم
          </Link>
        </li>
        <li>
          <Link to="/instructor/upload" className="sidebar-link">
            <UploadCloud size={20} /> رفع محتوى جديد
          </Link>
        </li>
        <li>
          <Link to="/instructor/files" className="sidebar-link">
            <Video size={20} /> شروحاتي وملفاتي
          </Link>
        </li>
      </ul>
    </div>
    <div className="dashboard-main">
      <h1>مرحباً، أ. محمد</h1>
      <p style={{ color: 'var(--text-light)', marginBottom: '30px' }}>لوحة التحكم الخاصة بإدارة شروحاتك وملفاتك للطلاب.</p>

      <div className="grid">
        <div className="card" style={{ padding: '20px' }}>
          <h1 style={{ fontSize: '3rem', color: 'var(--psu-blue)', margin: 0 }}>45</h1>
          <p>إجمالي الشروحات</p>
        </div>
        <div className="card" style={{ padding: '20px' }}>
          <h1 style={{ fontSize: '3rem', color: 'var(--psu-gold)', margin: 0 }}>120</h1>
          <p>إجمالي الملفات</p>
        </div>
        <div className="card" style={{ padding: '20px' }}>
          <h1 style={{ fontSize: '3rem', color: '#10b981', margin: 0 }}>1,230</h1>
          <p>إجمالي المشاهدات</p>
        </div>
      </div>

      <div style={{ marginTop: '40px', background: 'white', padding: '30px', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-sm)' }}>
        <h2 style={{ marginBottom: '20px' }}>رفع محتوى تعليمي سريع</h2>
        <Link to="/instructor/upload" className="upload-area" style={{ display: 'block', textDecoration: 'none', color: 'inherit' }}>
          <UploadCloud size={48} className="upload-icon" />
          <h3 style={{ marginBottom: '10px' }}>انقر هنا لرفع فيديو أو ملف جديد</h3>
          <p style={{ color: 'var(--text-light)' }}>يدعم صيغ الفيديوهات والـ PDF والملفات المضغوطة</p>
        </Link>
      </div>
    </div>
  </div>
);

const InstructorUpload = () => (
  <div className="dashboard-container animate-fade">
    <div className="dashboard-sidebar">
      <ul className="sidebar-menu">
        <li>
          <Link to="/instructor" className="sidebar-link">
            <Home size={20} /> لوحة التحكم
          </Link>
        </li>
        <li>
          <Link to="/instructor/upload" className="sidebar-link active">
            <UploadCloud size={20} /> رفع محتوى جديد
          </Link>
        </li>
      </ul>
    </div>
    <div className="dashboard-main">
      <h1 style={{ marginBottom: '30px' }}>رفع شرح أو ملف جديد</h1>

      <div style={{ background: 'white', padding: '40px', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-sm)', maxWidth: '800px' }}>
        <form>
          <div className="form-group">
            <label className="form-label">عنوان الشرح / الملف</label>
            <input type="text" className="form-control" placeholder="مثال: شرح المصفوفات، الفصل الأول..." />
          </div>

          <div style={{ display: 'flex', gap: '20px' }}>
            <div className="form-group" style={{ flex: 1 }}>
              <label className="form-label">الكلية</label>
              <select className="form-control" defaultValue="">
                <option value="" disabled>اختر الكلية...</option>
                <option value="cs">كلية هندسة وعلوم الحاسب</option>
                <option value="med">كلية الطب البشري</option>
                <option value="eng">كلية الهندسة</option>
              </select>
            </div>
            <div className="form-group" style={{ flex: 1 }}>
              <label className="form-label">التخصص</label>
              <select className="form-control" defaultValue="">
                <option value="" disabled>اختر التخصص أولاً...</option>
                <option value="is">نظم معلومات</option>
                <option value="cs">علوم حاسب</option>
              </select>
            </div>
            <div className="form-group" style={{ flex: 1 }}>
              <label className="form-label">المقرر</label>
              <select className="form-control" defaultValue="">
                <option value="" disabled>اختر المقرر...</option>
                <option value="cs101">برمجة 1</option>
                <option value="cs102">برمجة 2</option>
              </select>
            </div>
          </div>

          <div className="form-group">
            <label className="form-label">وصف الشرح</label>
            <textarea className="form-control" rows="4" placeholder="اكتب نبذة مختصرة عن الشرح والمحاور التي تم تغطيتها..."></textarea>
          </div>

          <div className="form-group">
            <label className="form-label">المرفقات (فيديو أو ملف)</label>
            <div className="upload-area">
              <UploadCloud size={40} className="upload-icon" />
              <p>قم بسحب وإفلات الملفات هنا أو <strong>استعرض</strong></p>
              <p style={{ color: 'var(--text-light)', fontSize: '0.85rem', marginTop: '5px' }}>أقصى حجم للملف: 500MB</p>
            </div>
          </div>

          <button type="button" className="btn btn-primary" style={{ width: '100%', padding: '15px', fontSize: '1.1rem', marginTop: '10px' }}>رفع ونشر المحتوى</button>
        </form>
      </div>
    </div>
  </div>
);

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Router>
      <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <Navbar />
        <main style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/colleges" element={<CollegesDirectory />} />
            <Route path="/colleges/:collegeId" element={<SubjectPage />} />
            {/* Instructor Routes */}
            <Route path="/instructor/login" element={<InstructorLogin onLogin={setIsAuthenticated} />} />
            <Route path="/instructor" element={
              <ProtectedRoute isAuth={isAuthenticated}>
                <InstructorDashboard />
              </ProtectedRoute>
            } />
            <Route path="/instructor/upload" element={
              <ProtectedRoute isAuth={isAuthenticated}>
                <InstructorUpload />
              </ProtectedRoute>
            } />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
