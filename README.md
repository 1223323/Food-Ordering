# Food-Ordering

Food-Ordering is a robust, full-stack platform enabling users to browse, order, and track food from various restaurants. It also includes features for restaurant management and an admin panel for streamlined operations. This repository implements the backend using Java and the frontend using React (JavaScript).

---

## Table of Contents
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Usage](#usage)
- [Detailed Functionality](#detailed-functionality)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)
- [Acknowledgements](#acknowledgements)

---

## Features

- **User Authentication**: Secure login and registration for users.
- **Restaurant Listings**: Comprehensive search and browse functionality.
- **Order Management**: Smooth order placement and history tracking.
- **Real-time Updates**: Live updates for order status and notifications.
- **Admin Panel**: Manage users, restaurant listings, and orders efficiently.
- **Responsive Design**: Optimized for desktop and mobile users.

---

## Technologies Used

### Backend
- **Language**: Java
- **Framework**: Spring Boot
- **Database**: MySQL or PostgreSQL (configurable)
- **Build Tool**: Maven

### Frontend
- **Language**: JavaScript
- **Framework**: React
- **Styling**: CSS, HTML
- **State Management**: Redux (optional)
- **Build Tools**: npm, Create React App

---

## Project Structure

```plaintext
Food-Ordering/
├── BACKEND/
│   ├── src/
│   │   ├── main/
│   │   │   ├── java/
│   │   │   │   ├── controller/
│   │   │   │   ├── model/
│   │   │   │   ├── repositorie/
│   │   │   │   ├── service/
│   │   │   │   ├── config/
│   │   │   │   ├── dto/
│   │   │   │   ├── response/
│   │   │   │   ├── request/
│   │   ├── test/
│   │       ├── java/
│   │       │   ├── controllers/
│   │       │   ├── models/
├── FRONTEND/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── App.js
│   │   ├── index.js
│   ├── README.md
```

---

## Installation

### Backend Setup

1. Clone the repository:
   ```sh
   git clone https://github.com/1223323/Food-Ordering.git
   cd Food-Ordering/BACKEND
   ```

2. Build the project using Maven:
   ```sh
   mvn clean install
   ```

3. Configure the database connection in `application.properties`:
   ```properties
   spring.datasource.url=jdbc:mysql://localhost:3306/food_ordering
   spring.datasource.username=your_username
   spring.datasource.password=your_password
   spring.jpa.hibernate.ddl-auto=update
   ```

4. Run the application:
   ```sh
   mvn spring-boot:run
   ```

### Frontend Setup

1. Navigate to the frontend directory:
   ```sh
   cd ../FRONTEND
   ```

2. Install dependencies (node_modules is not included in the repository):
   ```sh
   npm install
   ```

3. Start the development server:
   ```sh
   npm start
   ```

---

## Usage

1. **Development Mode**:
   - Open [http://localhost:3000](http://localhost:3000) to view the application in your browser.
   - Backend runs on port 8080 by default.

2. **Running Tests**:
   - Backend tests:
     ```sh
     mvn test
     ```
   - Frontend tests:
     ```sh
     npm test
     ```

3. **Production Build**:
   - Backend:
     ```sh
     mvn package
     ```
   - Frontend:
     ```sh
     npm run build
     ```

---

## Detailed Functionality

### Customer Interface
- **Browse Restaurants**: View menus, ratings, and reviews.
- **Order Food**: Add items to cart and place orders.
- **Track Orders**: Real-time updates for order preparation and delivery status.

### Restaurant Interface
- **Menu Management**: Add, edit, and delete menu items.
- **Order Management**: View and update the status of incoming orders.

### Admin Interface
- **User Management**: Approve or block users.
- **Restaurant Management**: Approve new restaurants and manage existing ones.
- **Order Monitoring**: View and manage all orders in the system.

---



## Contact

For any inquiries or feedback, please contact the project maintainers at jashchauhan015@gmail.com.

---

## Acknowledgements


- This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

