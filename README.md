# Task Management App

A simple React application for managing tasks with features like adding, editing, deleting, and reordering tasks. Includes notifications for actions and a clean, responsive UI.

## Features

- Add, edit, and delete tasks.
- Set reminders for tasks.
- Reorder tasks using drag-and-drop.
- Notifications for user actions.
- Responsive design.

## Project Structure

```plaintext
src/
├── components/
│   ├── Header.js
│   ├── TaskForm.js
│   ├── TaskList.js
│   ├── Notifications.js
│   └── styles/
│       ├── Header.css
│       ├── TaskForm.css
│       ├── TaskList.css
│       ├── Notifications.css
├── App.js
├── index.js
└── index.css
```

## How to Run

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/task-management-app.git
   cd task-management-app
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

## Technologies Used

- **React**: Frontend framework
- **React Toastify**: For notifications
- **React DnD**: Drag-and-drop functionality
- **CSS**: Styling

## Contributing

1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature-name
   ```
3. Make your changes and commit:
   ```bash
   git commit -m "Add feature-name"
   ```
4. Push to the branch:
   ```bash
   git push origin feature-name
   ```
5. Open a pull request on GitHub.
