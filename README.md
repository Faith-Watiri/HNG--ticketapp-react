# TicketFlow - React Version

A modern, minimalistic ticket management application built with React 18, Vite, and Tailwind CSS.

## 🚀 Features

- Landing Page with wavy SVG background and decorative circles
- Secure authentication (Login/Signup) with validation
- Dashboard with visual statistics
- Full CRUD operations for ticket management
- Toast notifications for user feedback
- Responsive design (mobile, tablet, desktop)
- Modern UI with Inter font

## 🛠️ Technologies

- React 18
- Vite
- React Router DOM v6
- Tailwind CSS v3
- Google Fonts (Inter)

## 📋 Prerequisites

- Node.js v16+
- npm or yarn

## 🔧 Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## 🌐 Access

Development: `http://localhost:5173`

## 🔐 Test Credentials

Use any email and password (6+ characters):
- Email: `demo@ticketflow.com`
- Password: `password123`

## 📁 Project Structure

```
src/
├── components/
│   ├── Footer.jsx
│   ├── ProtectedRoute.jsx
│   └── Toast.jsx
├── contexts/
│   └── AuthContext.jsx
├── pages/
│   ├── LandingPage.jsx
│   ├── LoginPage.jsx
│   ├── SignupPage.jsx
│   ├── DashboardPage.jsx
│   └── TicketsPage.jsx
├── App.jsx
├── main.jsx
└── index.css
```

## 🎨 Design System

### Colors
- Primary: Indigo (#4F46E5)
- Success/Open: Green (#10B981)
- Warning/In Progress: Amber (#F59E0B)
- Neutral/Closed: Gray (#6B7280)

### Typography
- Font Family: Inter
- Weights: 300, 400, 500, 600, 700

### Layout
- Max Width: 1440px (centered)
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)

## 🎯 Key Features

### Authentication
- Context API for global auth state
- localStorage for session persistence
- Protected routes with automatic redirection
- Form validation with inline errors

### Ticket Management
- Create tickets with modal form
- View tickets in grid layout
- Edit tickets with pre-filled forms
- Delete with confirmation modal
- Real-time validation
- Status badges (open/in_progress/closed)
- Priority indicators (low/medium/high)

### Validation Rules
- Title: Required, max 100 characters
- Description: Optional, max 500 characters
- Status: Required, must be open/in_progress/closed
- Priority: Optional, low/medium/high

## 📦 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## ♿ Accessibility

- Semantic HTML
- ARIA labels
- Keyboard navigation
- Focus indicators
- Screen reader support

## 🐛 Known Issues

None currently

## 📄 License

MIT
