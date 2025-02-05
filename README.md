# 📌 AI-Powered To-Do List Assistant 📝

## 🚀 Smart AI to manage your tasks effortlessly!

#### This AI-powered To-Do List Assistant helps you efficiently manage your daily tasks using OpenAI's GPT-4o-mini. It stores your to-do list and interacts with you in a conversational way, planning and executing actions based on your input. Whether you need to add, search, or delete tasks, this assistant ensures a seamless experience using Drizzle ORM and Node.js.

# **✨ Features**

#### ✅ Create & Manage Todos: Easily add, search, and delete tasks with simple commands. This ensures you always stay on top of your to-do list without hassle.

#### ✅ AI-Powered Planning: The assistant doesn't just execute commands blindly; it first plans actions based on user input and then carries them out intelligently, ensuring better task management.

#### ✅ Interactive Chat Interface: No need to manually type structured commands! Simply converse with the assistant in natural language, and it will understand your intent to manage tasks dynamically.

#### ✅ Database Integration: All tasks are securely stored using drizzle-orm, providing structured storage and easy retrieval of data whenever needed.

#### ✅ Drizzle-Kit Support: Comes with built-in commands (generate, migrate, and studio) to manage database schema changes effortlessly.

#### ✅ Docker Support: Want to run this application in a containerized environment? Docker support ensures smooth deployment and execution without worrying about dependencies.

#### ✅ PNPM for Package Management: Unlike traditional npm, pnpm speeds up dependency installation and optimizes storage, making the development process more efficient.

## **🛠️ Tech Stack**

🔹 Node.js - JavaScript runtime.  
🔹 Drizzle ORM - Database handling.  
🔹 OpenAI GPT-4o-mini - AI-powered responses.  
🔹 Readline-Sync - CLI interaction.  
🔹 PostgreSQL - Database.   
🔹 Docker - Containerized application setup  
🔹 PNPM - Efficient package management.  

## **🔧 Prerequisites**

- #### Ensure you have the following installed before proceeding:

- Node.js (v18+ recommended) → [Download Here](https://nodejs.org/en)

- PNPM (for package management) → [Install using](https://pnpm.io/installation)

 ````sh
  npm install -g pnpm
  ````

- PostgreSQL (Database) → [Download Here](https://www.postgresql.org/)

- Docker (Optional for containerized setup) → [Download Here](https://www.docker.com)

## **🚀 Getting Started**

1️⃣ Clone the Repository
```
git clone https://github.com/shreyashbandekar/AI-Todo-App.git  
cd AI-Todo-App
```
2️⃣ Install Dependencies (Using PNPM)
```
pnpm install
```
3️⃣ Set Up Environment Variables

Create a .env file and configure necessary variables:

cp .env.example .env   
nano .env

4️⃣ Set Up Database (Drizzle-Kit)

Ensure PostgreSQL is installed and set up, then run:
```
pnpm run generate    # Generate migrations
pnpm run migrate     # Apply migrations
pnpm run studio      # Open Drizzle Studio
```
5️⃣ Run the Application
```
pnpm start
```
🐳 Run with Docker

**Ensure Docker is installed.**

Build and start the container:
```
docker-compose up --build -d
```
Stop the container when done:
```
docker-compose down
```

## **⚙️ How It Works**

- #### The AI assistant waits for user input.

- #### It plans actions before execution.

- #### Based on the plan, it calls appropriate functions.

- #### It observes the result and updates the conversation.

## **🛠️ Available Functions**

#### 📌  getAllTodos() → Fetches all tasks.  
#### 📌 createTodo(todo: string) → Adds a new task.  
#### 📌 deleteTodoById(id: string) → Removes a task by ID.  
#### 📌 searchTodo(query: string) → Searches tasks based on a query.  

## **🎯 Example Usage**
#### 👤 User: Add a task for shopping groceries.
#### 🤖 AI: Can you tell me what all items you want to shop for?
#### 👤 User: I want to shop for milk, chips, and chocolate.
#### 🤖 AI: Your task has been added successfully! ✅

## 📜 License

#### This project is licensed under [MIT License](LICENSE).
