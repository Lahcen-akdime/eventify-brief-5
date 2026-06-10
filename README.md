# Eventify - Brief 5

An event management and discovery platform built as a practical development exercise.

## 📋 Description

Eventify is a web application designed to help users discover, create, and manage events. This project is part of the Brief 5 curriculum, demonstrating full-stack web development capabilities.

## 🏗️ Technology Stack

- **Frontend**: HTML, CSS, JavaScript
- **Backend**: PHP/Laravel (or applicable framework)
- **Database**: MySQL/PostgreSQL

## 🚀 Features

- Event discovery and browsing
- Event creation and management
- User registration and authentication
- Event filtering and search
- Responsive design

## 📦 Installation

### Prerequisites
- PHP 7.4+
- Composer
- Node.js & npm
- Database (MySQL/PostgreSQL)

### Setup Instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/Lahcen-akdime/eventify-brief-5.git
   cd eventify-brief-5
   ```

2. **Install backend dependencies**
   ```bash
   composer install
   ```

3. **Install frontend dependencies**
   ```bash
   npm install
   ```

4. **Configure environment**
   ```bash
   cp .env.example .env
   ```

5. **Generate application key**
   ```bash
   php artisan key:generate
   ```

6. **Run migrations**
   ```bash
   php artisan migrate
   ```

7. **Start the development server**
   ```bash
   php artisan serve
   ```

## 📚 Project Structure

```
everify-brief-5/
├── app/              # Application logic
├── resources/        # Frontend assets
├── database/         # Migrations and seeds
├── routes/           # Application routes
└── public/           # Public assets
```

## 🤝 Contribution

Contributions are welcome! Please:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/YourFeature`)
3. Commit your changes (`git commit -m 'Add YourFeature'`)
4. Push to the branch (`git push origin feature/YourFeature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under [LICENSE].

## 📧 Contact

For questions or suggestions, please create an issue in this repository.

---

**Status**: In development 🔨
