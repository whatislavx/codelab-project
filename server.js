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
            img: '/assets/images/instructors/alex-johnson.jpg'
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
            img: '/assets/images/instructors/maria-rodriguez.jpg'
        },
        img: '/assets/images/courses/javascript-beginners.jpg',
        description: 'This comprehensive course will take you from complete beginner to confident web developer. You\'ll build real projects to insert into your portfolio. We cover everything from the basics to advanced topics like API integration.',
        whatYouWillLearn: [
            'HTML5 Semantic Elements', 
            'CSS3 & Flexbox/Grid', 
            'JavaScript ES6+', 
            'DOM Manipulation', 
            'API Integration'
        ],
        courseIncludes: [
            '8 weeks of study',
            'Certificate of completion',
            '10 modules',
            'Access to community'
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
            img: '/assets/images/instructors/alex-johnson.jpg'
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
            img: '/assets/images/instructors/sarah-chen.jpg'
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
            img: '/assets/images/instructors/alex-johnson.jpg'
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
            title: 'Cybersecurity Analyst & Ethical Hacker',
            img: '/assets/images/instructors/david-kim.jpg'
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

app.use(express.static(path.join(__dirname, 'public')));



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


app.get('/instructors', (req, res) => {
    res.render('pages/instructors');
});


app.get('/login', (req, res) => {
    res.render('pages/login');
});


app.get('/signup', (req, res) => {
    res.render('pages/signup');
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
