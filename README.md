# e-Learn : An E-Learning platform using MERN stack  
  
<!-- **Deployed Link** - [Visit](https://etutor.vercel.app) -->

# **Main Features in this app**
- Student Signup and Login usin email and google.
- Student can see course after login.
- Student can view specific course and can watch lectures.
- Course Search feature.
- Teacher and signup and login.
- Login Teacher can create courses.
- Teacher can see their created courses.
- Teacher can update only their own course.
- Teacher can delete only their own course.
- Teacher can preview thier course at uplaod and edit time.

**Other Features which I will try to add**
- Multiple sections in single course.
- Comments and Doubts question.
- Rating and Reviews
- Course Purchase
- Student Progress

<!-- # Technologies Used   -->

<!-- **Client Side**  
- React 
- React-dom
- React-scripts 
   
**Server Side**   
- MongoDB
- Mongoose
- Express
- Nodemon
- CORS
- Dotenv -->

API COURSES

|   Route   | HTTP Verb |   Description   |
| :--- | :---: | :--- |
| `/api/course` |    `GET`    | Show all Courses |
| `/api/course/add` |    `POST`    | Add Course |
| `/api/course/update/:id` |    `PUT`    | Update Course |
| `/api/course/:id` |    `GET`    | Get Course by ID |
| `/api/course/:id` |    `DELETE`    | Delete Course by ID |
| `/api/course/user/:id` |    `GET`    | Get Course by User ID |

API USER

|   Route   | HTTP Verb |   Description   |
| :--- | :---: | :--- |
| `/api/user/` |    `GET`    | Show all Teacher |
| `/api/user/signup` |    `POST`    | Signup as Teacher |
| `/api/user/login` |    `POST`    | Login as Teacher |

Student Side URL

|   Route   |   Description   |
| :--- | :--- |
| `/` | Home Page |
| `/courses` | All Courses |
| `/learning` | Student Learning |
| `/cart` | Cart |
| `/settings` | Student Settings |
| `/contact` | Contact Us Page |
| `/about` | About Us Page |
| `/login` | Student Login |
| `/signup` | Student Signup |

Teacher Side URL

|   Route   |   Description   |
| :--- | :--- |
| `/teacher` | Teacher Home Page |
| `/teacher/login` | Teacher Login Page |
| `/teacher/signup` | Teacher Signup Page |
| `/teacher/courses` | Courses Created by Logged Teacher |
| `/teacher/courses/add` | Create Course |
| `/teacher/courses/update/:id` | Update Course |

Homepage
![e-learn](./images/Web%20capture_18-6-2022_144420_localhost.jpeg)

All Course Page
![e-learn](./images/Web%20capture_18-6-2022_144450_localhost.jpeg)

Single Course Viewing Page
![e-learn](./images/Web%20capture_18-6-2022_14454_localhost.jpeg)

Course Created by Logged Teacher
![e-learn](./images/Web%20capture_18-6-2022_144552_localhost.jpeg)

Create New Course
![e-learn](./images/Web%20capture_18-6-2022_144614_localhost.jpeg)

Course Update Page
![e-learn](./images/Web%20capture_18-6-2022_144645_localhost.jpeg)

Teacher Home Page When Logged Out
![e-learn](./images/Web%20capture_18-6-2022_144711_localhost.jpeg)

When Teacher is Logged In
![e-learn](./images/Web%20capture_18-6-2022_144523_localhost.jpeg)

Teacher Login
![e-learn](./images/Web%20capture_18-6-2022_144828_localhost.jpeg)

Teacher Signup
![e-learn](./images/Web%20capture_18-6-2022_144840_localhost.jpeg)