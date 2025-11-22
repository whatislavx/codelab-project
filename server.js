const express = require('express');
const path = require('path');


const app = express();
const PORT = 3000;


const coursesData = [
    {
        id: 'web-dev-fundamentals',
        title: 'Web Development fundamentals',
        subtitle: 'Complete HTML, CSS, and JavaScript course for beginners.',
        level: 'Beginner',
        rating: 4.8, 
        reviewsCount: 245, 
        price: '$89',
        priceValue: 89, 
        duration: '10 weeks',
        category: 'frontend',
        dateAdded: '2024-10-01',
        instructor: { 
            name: 'Alex Johnson', 
            id: 'alex',
            title: 'Full Stack Developer & Lead Instructor',
            img: '/assets/images/instructors/alex-johnson.jpg',
            rating: 4.9,
            students: '12,500+',
            courses: 8,
            skills: ['React.js', 'Node.js', 'JavaScript']
        },
        img: '/assets/images/courses/web-dev-fundamentals.jpg',
        description: 'This course covers all the basics of web development: HTML, CSS and JavaScript. Perfect for beginners who want to build a strong foundation in web technologies. You will learn to create static and dynamic websites from scratch.',
        whatYouWillLearn: [
            'How to build websites with HTML & CSS',
            'Core JavaScript concepts and ES6+',
            'How to use Flexbox and CSS Grid for modern layouts',
            'DOM manipulation and event handling'
        ],
        courseIncludes: [
            '10 weeks of study',
            'Certificate of completion',
            '12 modules',
            'Downloadable resources'
        ]
    },
    {
        id: 'javascript-beginners',
        title: 'JavaScript for Beginners',
        subtitle: 'Learn JavaScript from zero to professional level.',
        level: 'Beginner',
        rating: 4.9, 
        reviewsCount: 189, 
        price: 'Free',
        priceValue: 0, 
        duration: '8 weeks',
        category: 'frontend',
        dateAdded: '2024-11-01',
        instructor: { 
            name: 'Maria Rodriguez', 
            id: 'maria',
            title: 'Senior Frontend Developer & UI/UX Specialist',
            img: '/assets/images/instructors/maria-rodriguez.jpg',
            rating: 4.8,
            students: '9,800+',
            courses: 6,
            skills: ['React.js', 'UI/UX Design', 'CSS', 'JavaScript']
        },
        img: '/assets/images/courses/javascript-beginners.jpg',
        description: 'This comprehensive course will take you from complete beginner to confident web developer. You\'ll try to build real projects? and then you can insert them into your portfolio. Perfect for aspiring developers, career changers, and anyone looking to strengthen their web development foundation. By the end of this course, you\'ll have built 5 real-world projects and be ready to pursue junior developer.',
        whatYouWillLearn: [
            { title: 'HTML5 Semantic Elements', description: 'Structure modern web pages' },
            { title: 'JavaScript ES6+', description: 'Add interactivity and logic' },
            { title: 'CSS3 & Flexbox/Grid', description: 'Create responsive layouts' },
            { title: 'Responsive Design', description: 'Mobile-first development' },
            { title: 'DOM Manipulation', description: 'Control web page elements' },
            { title: 'API Integration', description: 'Connect to external services' }
        ],
        curriculum: [
            { number: 1, title: 'Introduction to Web Development', duration: '2 hours', completed: true },
            { number: 2, title: 'HTML Fundamentals', duration: '3 hours', completed: true },
            { number: 3, title: 'CSS Styling', duration: '4 hours', completed: true },
            { number: 4, title: 'JavaScript Basics', duration: '5 hours', completed: false },
            { number: 5, title: 'Building Projects', duration: '5 hours', completed: false },
            { number: 6, title: 'Preparing for employment', duration: '6 hours', completed: false }
        ],
        reviews: [
            { 
                author: 'Sarah Johnson', 
                rating: 5, 
                date: '2 days ago', 
                text: 'Excellent course! The explanations were very clear and easy to follow, even for someone with no prior experience. The projects were engaging and practical, helping me apply what I learned step by step. By the end, I felt much more confident in my skills and motivated to keep building.' 
            },
            { 
                author: 'Mike Shen', 
                rating: 5, 
                date: '1 week ago', 
                text: 'Good content with a well-balanced pace that keeps the learning process smooth and enjoyable. The instructor is very knowledgeable and explains complex ideas in a clear and practical way, making it easy to understand and apply the material in real projects.' 
            },
            { 
                author: 'Emily Rodriguez', 
                rating: 5, 
                date: '2 weeks ago', 
                text: 'Perfect for beginners and very easy to follow. I learned so much throughout the course, from the basics to building real projects. The clear explanations and hands-on approach gave me the confidence to keep practicing and continue my journey in web development.' 
            }
        ],
        courseIncludes: [
            'Level: Beginner',
            'Duration: 8 weeks',
            'Certificate: Yes',
            'Language: English'
        ]
    },
    {
        id: 'react-js-development',
        title: 'React.js Development',
        subtitle: 'Build modern web applications with React.',
        level: 'Intermediate',
        rating: 4.8,
        reviewsCount: 186, 
        price: '$129',
        priceValue: 129, 
        duration: '8 weeks',
        category: 'frontend',
        dateAdded: '2024-09-15',
        instructor: { 
            name: 'Alex Johnson', 
            id: 'alex',
            title: 'Full Stack Developer & Lead Instructor',
            img: '/assets/images/instructors/alex-johnson.jpg',
            rating: 4.9,
            students: '12,500+',
            courses: 8,
            skills: ['React.js', 'Node.js', 'JavaScript']
        },
        img: '/assets/images/courses/react-js-development.jpg',
        description: 'Learn to build fast, scalable single-page applications with React, the most popular JavaScript library. We will cover components, state management, hooks, and routing to build complex user interfaces.',
        whatYouWillLearn: [
            'Components & Props', 
            'State & Lifecycle', 
            'React Hooks (useState, useEffect)', 
            'React Router'
        ],
        courseIncludes: [
            '8 weeks of study',
            'Certificate of completion',
            '15 modules',
            'Downloadable resources'
        ]
    },
    {
        id: 'python-data-science',
        title: 'Python for Data Science',
        subtitle: 'Data analysis and machine learning with Python.',
        level: 'Intermediate',
        rating: 4.6, 
        reviewsCount: 203, 
        price: '$149',
        priceValue: 149, 
        duration: '12 weeks',
        category: 'datascience',
        dateAdded: '2024-08-20',
        instructor: { 
            name: 'Sarah Chen', 
            id: 'sarah',
            title: 'Data Science & Python Expert',
            img: '/assets/images/instructors/sarah-chen.jpg',
            rating: 4.7,
            students: '8,600+',
            courses: 7,
            skills: ['Python', 'Data Science', 'ML', 'Analytics']
        },
        img: '/assets/images/courses/python-data-science.jpg',
        description: 'Master data analysis, visualization, and machine learning using Python, Pandas, and Scikit-learn. This course is perfect for those who want to transition into a data science career.',
        whatYouWillLearn: [
            'Python Basics for Data Science', 
            'Pandas & NumPy for data manipulation', 
            'Data Visualization (Matplotlib & Seaborn)', 
            'Machine Learning Concepts'
        ],
        courseIncludes: [
            '12 weeks of study',
            'Certificate of completion',
            '20 modules',
            'Jupyter Notebooks'
        ]
    },
    {
        id: 'nodejs-backend',
        title: 'Node.js Backend Development',
        subtitle: 'Server-side development with Node.js and Express.',
        level: 'Intermediate',
        rating: 4.5, 
        reviewsCount: 128, 
        price: '$149',
        priceValue: 149, 
        duration: '10 weeks',
        category: 'backend',
        dateAdded: '2024-10-10',
        instructor: { 
            name: 'Alex Johnson', 
            id: 'alex',
            title: 'Full Stack Developer & Lead Instructor',
            img: '/assets/images/instructors/alex-johnson.jpg',
            rating: 4.9,
            students: '12,500+',
            courses: 8,
            skills: ['React.js', 'Node.js', 'JavaScript']
        },
        img: '/assets/images/courses/nodejs-backend.jpg',
        description: 'Build scalable, high-performance backend applications using Node.js and Express. Learn to build REST APIs and connect to databases like MongoDB and PostgreSQL.',
        whatYouWillLearn: [
            'Node.js Fundamentals', 
            'Express.js Framework', 
            'Building REST APIs', 
            'Database Integration (MongoDB)'
        ],
        courseIncludes: [
            '10 weeks of study',
            'Certificate of completion',
            '14 modules',
            'Downloadable resources'
        ]
    },
    {
        id: 'cybersecurity-basics',
        title: 'CyberSecurity Basics',
        subtitle: 'Introduction to cybersecurity and application protection.',
        level: 'Beginner',
        rating: 4.8, 
        reviewsCount: 232, 
        price: 'Free',
        priceValue: 0, 
        duration: '8 weeks',
        category: 'cybersecurity',
        dateAdded: '2024-09-01',
        instructor: { 
            name: 'David Kim', 
            id: 'david',
            title: 'Mobile & React Native Expert',
            img: '/assets/images/instructors/david-kim.jpg',
            rating: 4.9,
            students: '11,200+',
            courses: 5,
            skills: ['Mobile Development', 'iOS', 'Android']
        },
        img: '/assets/images/courses/cybersecurity-basics.jpg',
        description: 'Understand the fundamentals of cybersecurity, common threats, and how to protect systems and applications. This course provides a comprehensive overview for beginners.',
        whatYouWillLearn: [
            'Common Cyber Threats', 
            'Network Security', 
            'Application Security', 
            'Cryptography Basics'
        ],
        courseIncludes: [
            '8 weeks of study',
            'Certificate of completion',
            '10 modules',
            'Access to virtual labs'
        ]
    }
];


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// 1. Статичні файли (CSS, JS, зображення, які лежать у public/)
app.use(express.static(path.join(__dirname, 'public')));

// 2. Middleware для обробки даних з HTML форм (ВАЖЛИВО для POST запитів)
app.use(express.urlencoded({ extended: true })); 


// ===================================
// МАРШРУТИ (ROUTES)
// ===================================

app.get('/', (req, res) => {
    res.render('pages/index');
});


app.get('/courses', (req, res) => {

    const category = req.query.category || 'all'; 
    const sortBy = req.query.sort || 'popular';
    
    let filteredCourses = [...coursesData]; 
    
    if (category && category !== 'all') {
        filteredCourses = filteredCourses.filter(course => course.category === category);
    }
    
    if (sortBy === 'popular') {
        filteredCourses.sort((a, b) => b.reviewsCount - a.reviewsCount);
    } 
    else if (sortBy === 'rated') {
        filteredCourses.sort((a, b) => b.rating - a.rating);
    } 
    else if (sortBy === 'price-hl') {
        filteredCourses.sort((a, b) => b.priceValue - a.priceValue);
    } 
    else if (sortBy === 'price-lh') {
        filteredCourses.sort((a, b) => a.priceValue - b.priceValue);
    }

    res.render('pages/courses', {
        courses: filteredCourses,
        selectedCategory: category, 
        selectedSort: sortBy      
    });
});


const instructorsData = [
    {
        id: 'alex',
        name: 'Alex Johnson',
        title: 'Full Stack Developer & Lead Instructor',
        img: '/assets/images/instructors/alex-johnson.jpg',
        rating: 4.9,
        students: '12,500+',
        courses: 8,
        skills: ['React.js', 'Node.js', 'JavaScript'],
        bio: 'Alex is a seasoned full-stack developer with over 8 years of experience in building scalable web applications. He has worked with Fortune 500 companies and startups alike, bringing real-world experience to his teaching.'
    },
    {
        id: 'maria',
        name: 'Maria Rodriguez',
        title: 'Senior Frontend Developer & UI/UX Specialist',
        img: '/assets/images/instructors/maria-rodriguez.jpg',
        rating: 4.8,
        students: '9,800+',
        courses: 6,
        skills: ['React.js', 'UI/UX Design', 'CSS', 'JavaScript'],
        bio: 'Maria specializes in creating beautiful, user-friendly interfaces that provide exceptional user experiences. Her background in both development and design gives her a unique perspective on modern web development.'
    },
    {
        id: 'david',
        name: 'David Kim',
        title: 'Mobile & React Native Expert',
        img: '/assets/images/instructors/david-kim.jpg',
        rating: 4.9,
        students: '11,200+',
        courses: 5,
        skills: ['Mobile Development', 'iOS', 'Android'],
        bio: 'David has been at the forefront of mobile development, specializing in cross-platform solutions. His expertise in React Native has helped countless students transition from web to mobile development.'
    },
    {
        id: 'sarah',
        name: 'Sarah Chen',
        title: 'Data Science & Python Expert',
        img: '/assets/images/instructors/sarah-chen.jpg',
        rating: 4.7,
        students: '8,600+',
        courses: 7,
        skills: ['Python', 'Data Science', 'ML', 'Analytics'],
        bio: 'Sarah brings a wealth of experience in data science and machine learning. She has worked on cutting-edge AI projects and loves sharing her knowledge with aspiring data scientists.'
    }
];

app.get('/instructors', (req, res) => {
    res.render('pages/instructors', { instructors: instructorsData });
});


app.get('/login', (req, res) => {
    res.render('pages/login');
});

// Обробка форми входу (POST)
app.post('/login', (req, res) => {
    console.log('Спроба входу. Отримані дані:', req.body); 
    // Тимчасова логіка: перенаправляємо на головну
    res.redirect('/');
});


app.get('/signup', (req, res) => {
    res.render('pages/signup');
});

// Обробка форми реєстрації (POST)
app.post('/register', (req, res) => {
    console.log('Спроба реєстрації. Отримані дані:', req.body); 
    // Тимчасова логіка: перенаправляємо на сторінку входу
    res.redirect('/login');
});


app.get('/course/:id', (req, res) => {
    const courseId = req.params.id;
    const course = coursesData.find(c => c.id === courseId);

    if (course) {
        res.render('pages/course-details', {
            course: course 
        });
    } 
    else {
        res.status(404).send('Course not found');
    }
});

app.listen(PORT, () => {
    console.log(`Сервер запущено! Відкрийте http://localhost:${PORT} у вашому браузері.`);
});