const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// --- НАША "БАЗА ДАНИХ" КУРСІВ ---
// Усі дані зберігаються тут, а не в HTML
const coursesData = [
    {
        id: 'web-dev-fundamentals',
        title: 'Web Development fundamentals',
        subtitle: 'Complete HTML, CSS, and JavaScript course for beginners.',
        level: 'Beginner',
        rating: 4.8, reviewsCount: 245, price: '$89',
        duration: '10 weeks',
        instructor: { name: 'Alex Johnson', id: 'alex' },
        img: '/assets/images/courses/web-dev-fundamentals.jpg',
        description: 'This course covers all the basics of web development: HTML, CSS and JavaScript. Perfect for beginners.',
        whatYouWillLearn: ['HTML5 Semantic Elements', 'CSS3 & Flexbox/Grid', 'JavaScript ES6+ Basics']
    },
    {
        id: 'javascript-beginners',
        title: 'JavaScript for Beginners',
        subtitle: 'Learn JavaScript from zero to professional level.',
        level: 'Beginner',
        rating: 4.9, reviewsCount: 189, price: 'Free',
        duration: '8 weeks',
        instructor: { name: 'Maria Rodriguez', id: 'maria' },
        img: '/assets/images/courses/javascript-beginners.jpg',
        description: 'This comprehensive course will take you from complete beginner to confident web developer. You\'ll build real projects to insert into your portfolio.',
        whatYouWillLearn: ['HTML5 Semantic Elements', 'CSS3 & Flexbox/Grid', 'JavaScript ES6+', 'DOM Manipulation', 'API Integration']
    },
    {
        id: 'react-js-development',
        title: 'React.js Development',
        subtitle: 'Build modern web applications with React.',
        level: 'Intermediate',
        rating: 4.8, reviewsCount: 186, price: '$129',
        duration: '8 weeks',
        instructor: { name: 'Alex Johnson', id: 'alex' },
        img: '/assets/images/courses/react-js-development.jpg',
        description: 'Learn to build fast, scalable single-page applications with React, the most popular JavaScript library.',
        whatYouWillLearn: ['Components & Props', 'State & Lifecycle', 'React Hooks', 'React Router']
    },
    {
        id: 'python-data-science',
        title: 'Python for Data Science',
        subtitle: 'Data analysis and machine learning with Python.',
        level: 'Intermediate',
        rating: 4.6, reviewsCount: 203, price: '$149',
        duration: '12 weeks',
        instructor: { name: 'Sarah Chen', id: 'sarah' },
        img: '/assets/images/courses/python-data-science.jpg',
        description: 'Master data analysis, visualization, and machine learning using Python, Pandas, and Scikit-learn.',
        whatYouWillLearn: ['Python Basics', 'Pandas & NumPy', 'Data Visualization (Matplotlib)', 'Machine Learning Concepts']
    },
    {
        id: 'nodejs-backend',
        title: 'Node.js Backend Development',
        subtitle: 'Server-side development with Node.js and Express.',
        level: 'Intermediate',
        rating: 4.5, reviewsCount: 128, price: '$149',
        duration: '10 weeks',
        instructor: { name: 'Alex Johnson', id: 'alex' },
        img: '/assets/images/courses/nodejs-backend.jpg',
        description: 'Build scalable, high-performance backend applications using Node.js and Express. Learn to build REST APIs and connect to databases.',
        whatYouWillLearn: ['Node.js Fundamentals', 'Express.js Framework', 'Building REST APIs', 'Database Integration']
    },
    {
        id: 'cybersecurity-basics',
        title: 'CyberSecurity Basics',
        subtitle: 'Introduction to cybersecurity and application protection.',
        level: 'Beginner',
        rating: 4.8, reviewsCount: 232, price: 'Free',
        duration: '8 weeks',
        instructor: { name: 'David Kim', id: 'david' },
        img: '/assets/images/courses/cybersecurity-basics.jpg',
        description: 'Understand the fundamentals of cybersecurity, common threats, and how to protect systems and applications.',
        whatYouWillLearn: ['Common Cyber Threats', 'Network Security', 'Application Security', 'Cryptography Basics']
    }
];
// ------------------------------------

// Налаштування "рушія" EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Налаштування папки 'public' для роздачі CSS, JS та зображень
// Усі посилання на /assets/... тепер будуть працювати
app.use(express.static(path.join(__dirname, 'public')));

// --- МАРШРУТИ (Посилання на сторінки) ---

// Головна сторінка
app.get('/', (req, res) => {
    // "Рендерить" (показує) файл views/pages/index.ejs
    res.render('pages/index');
});

// Сторінка "Our Courses"
app.get('/courses', (req, res) => {
    // "Рендерить" сторінку і "передає" в неї всі дані про курси
    res.render('pages/courses', {
        courses: coursesData // "courses" - це ім'я змінної, яку ми використаємо в EJS
    });
});

// Сторінка "Instructors"
app.get('/instructors', (req, res) => {
    res.render('pages/instructors');
});

// Сторінка "Login"
app.get('/login', (req, res) => {
    res.render('pages/login');
});

// Сторінка "Sign Up"
app.get('/signup', (req, res) => {
    res.render('pages/signup');
});

// --- !!! ДИНАМІЧНА СТОРІНКА КУРСУ !!! ---
// :id - це "змінна" в URL. Наприклад, /course/javascript-beginners
app.get('/course/:id', (req, res) => {
    const courseId = req.params.id;
    // Шукаємо в нашій "базі даних" курс з таким ID
    const course = coursesData.find(c => c.id === courseId);

    if (course) {
        // Якщо курс знайдено, "рендеримо" шаблон 'course-details'
        // і "передаємо" в нього дані ТІЛЬКИ ЦЬОГО ОДНОГО курсу
        res.render('pages/course-details', {
            course: course // "course" - ім'я змінної в EJS
        });
    } else {
        // Якщо курс не знайдено, можна показати 404
        res.status(404).send('Course not found');
    }
});
// ------------------------------------

// Запуск сервера
app.listen(PORT, () => {
    console.log(`Сервер запущено! Відкрийте http://localhost:${PORT} у вашому браузері.`);
});