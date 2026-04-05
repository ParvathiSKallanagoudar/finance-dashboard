# 💰 Finance Dashboard

## 📌 Overview

This project is a responsive **Finance Dashboard** built using React and Tailwind CSS.
It allows users to track income, expenses, and financial insights through interactive UI components and charts.

The goal of this project is to demonstrate strong frontend development skills including component-based architecture, state management, and data visualization.

---

## 🚀 Features

### 📊 Dashboard Overview

* Summary cards displaying:

  * Total Balance
  * Income
  * Expenses
* Line chart showing balance trends over time
* Pie chart showing category-wise spending

---

### 📋 Transactions Section

* Displays a list of transactions with:

  * Date
  * Category
  * Amount
  * Type (Income/Expense)

* Features:

  * Search by category
  * Filter by type (Income/Expense)
  * **Latest transactions view (top 4)**
  * **View All / Show Less toggle**
  * Add and delete transactions (Admin role)

---

### 🔐 Role-Based UI

* **Viewer**

  * Can only view data
* **Admin**

  * Can add and delete transactions (UI-level simulation)

---

### 💡 Insights Section

* Dynamic insights based on transaction data:

  * Highest spending category
  * Total income vs expenses
  * Financial observation

---

### 💰 Additional Features

* Budget Tracker with progress indicators
* Savings Goals with progress tracking
* Dark Mode 🌙
* Smooth UI transitions
* Fully responsive design

---

## 🛠️ Tech Stack

* React (Vite)
* Tailwind CSS
* Recharts
* JavaScript (ES6+)

---

## 📁 Project Structure

src/
│── components/
│   ├── SummaryCard.jsx
│   ├── BalanceChart.jsx
│   ├── CategoryChart.jsx
│   ├── TransactionTable.jsx
│   ├── Insights.jsx
│   ├── BudgetTracker.jsx
│   ├── SavingsGoals.jsx
│
│── layout/
│   ├── Sidebar.jsx
│   ├── Topbar.jsx
│
│── App.jsx
│── main.jsx

---

## ⚙️ Installation & Setup

1. Clone the repository:

```
git clone https://github.com/ParvathiSKallanagoudar/finance-dashboard.git
```

2. Navigate to project folder:

```
cd finance-dashboard
```

3. Install dependencies:

```
npm install
```

4. Run the development server:

```
npm run dev
```

---

## 🌐 Live Demo

👉 https://ParvathiSKallanagoudar.github.io/finance-dashboard/

---

## 🎯 Approach

* Built reusable and modular components
* Managed global state using React hooks
* Implemented dynamic charts for better data visualization
* Designed a clean and user-friendly UI
* Simulated real-world financial scenarios using mock data
* Focused on performance and responsiveness

---

## 📱 Responsiveness

* Fully responsive layout
* Works seamlessly on:

  * Desktop
  * Tablet
  * Mobile devices

---

## ✨ Future Improvements

* Backend integration (API-based data)
* Authentication system
* Data persistence (database or local storage)
* Advanced analytics and reports
* Export data (CSV/JSON)

---

## 📸 Screenshots

(Add screenshots of your dashboard here)

---

## 🙌 Conclusion

This project demonstrates the ability to build a clean, interactive, and responsive financial dashboard using modern frontend technologies. It reflects practical understanding of UI/UX, state management, and component-based design.

---

## 👩‍💻 Author

**Parvathi S Kallanagoudar**
Frontend Developer
