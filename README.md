
---

# HMS SDK Implementation (`hms-sdk-impl`)

**HMS SDK Implementation** is a TypeScript-based library that provides concrete implementations of SDK interfaces to interact with all microservices in the **Hospital Management System (HMS)** ecosystem. It acts as the glue layer to simplify and standardize communication with HMS services.

---

## 📦 Features

* Fully typed TypeScript SDK implementation
* Wrapper functions for calling HMS core, auth, logger, worker services, and more
* Handles API requests, response parsing, and error handling
* Supports authentication token management
* Easy to extend for adding new HMS services
* Built with modular and reusable code design

---

## 🚀 Getting Started

### ✅ Prerequisites

* Node.js v14+
* npm or yarn
* Typescript v4+
* Access to HMS backend services (URLs, auth tokens)

---

### ⚙️ Setup Instructions

1. **Clone the Repository**

   ```bash
   git clone https://github.com/your-org/hms-sdk-impl.git
   cd hms-sdk-impl
   ```

2. **Install Dependencies**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Build the SDK**

   ```bash
   npm run build
   # or
   yarn build
   ```

4. **Use in your Project**

   Import the SDK modules from the compiled output (usually `/dist`):

   ```typescript
   import { AuthServiceClient, LoggerServiceClient } from 'hms-sdk-impl/dist';

   const authClient = new AuthServiceClient({ baseUrl: 'http://localhost:8081' });
   const loggerClient = new LoggerServiceClient({ baseUrl: 'http://localhost:3000' });

   // Example: Authenticate user
   const token = await authClient.login('user', 'password');

   // Example: Send log
   await loggerClient.log({ level: 'info', message: 'User logged in' });
   ```

---

## 📁 Project Structure

```text
hms-sdk-impl/
├── src/
│   ├── serviceFactories/           
│   ├── services/            
├── ├── tsconfig.json       # TypeScript configuration
├── package.json           # Project metadata and scripts
```

---

## 🛠️ Useful Commands

| Command         | Description                      |
| --------------- | -------------------------------- |
| `npm run build` | Compile TypeScript to JavaScript |
| `npm test`      | Run test suite                   |
| `npm run lint`  | Run code linting                 |
| `npm run clean` | Clean build artifacts            |

---

## 📚 Documentation

* API Reference for all HMS services is available in [`docs/api.md`](docs/api.md)
* SDK usage examples in [`docs/examples.md`](docs/examples.md)

---

## 🙋 Support

* Report issues on GitHub: [hms-sdk-impl/issues](https://github.com/your-org/hms-sdk-impl/issues)
* Contact maintainers via project channels

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---
