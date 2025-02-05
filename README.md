# SignUp Task

## Description
This project is a web-based form built with Angular that allows users to sign up while validating their inputs. The form stores user data in a JSON file and ensures that email addresses are unique.

## Features
- Reactive form validation
- Email uniqueness check before submission
- Error handling and user feedback

---

## Installation and Setup
### **1. Clone the Repository**
```sh
git clone https://https://github.com/Nader-Gamal/SignUp.git
```

### **2. Install Dependencies**
Make sure you have **Node.js** and **Angular CLI** installed. Then, run:
```sh
npm install
```

### **3. Run the JSON Server**
This project uses a local JSON server to store user data. To start it, install `json-server` globally if you haven’t already:
```sh
npm install -g json-server
```
Then, run:
```sh
json-server --watch db.json --port 3000
```
This will create a fake REST API that listens on `http://localhost:3000/user`.

### **4. Run the Angular Development Server**
To start the Angular app, use:
```sh
ng serve
```
Then open [http://localhost:4200](http://localhost:4200) in your browser.

---


## API Endpoints (JSON Server)
| Method | Endpoint      | Description             |
|--------|--------------|-------------------------|
| GET    | /user        | Get all users           |
| POST   | /user        | Add a new user          |

---

## Notes
- Ensure `users.json` contains the correct structure before running `json-server`.
- Modify `angular.json` if needed to match the correct `outputPath` when deploying.

