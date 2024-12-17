# mongoose-pro

## Overview

The **mongoose-pro** project is a TypeScript-based Node.js application built with modern tools and best practices to
deliver a robust backend application. It incorporates essential libraries and tools, including Mongoose, Express.js, and
Zod, to ensure streamlined development and strict data validation.

## Features

- **TypeScript Support**: Implements TypeScript for type safety and increased reliability throughout the development
  process.
- **Express Framework**: Utilized for creating RESTful APIs and middleware handling.
- **Mongoose ODM**: Simplifies MongoDB interaction with schema-based modeling and powerful query support.
- **Data Validation with Zod**: Ensures data integrity through runtime and compile-time validation.
- **Security**: Package bcrypt secures sensitive data like passwords for user authentication.
- **Eslint and Prettier**: Enforces code quality and consistent formatting styles.
- **Environment Configuration with dotenv**: Loads environment variables securely to support different runtime
  environments.
- **CORS Support**: Configured for managing cross-origin HTTP requests.

## Prerequisites

Make sure you have the following installed:

- **Node.js** (v16.x.x or later)
- **npm** (v8.x.x or later)
- MongoDB instance (local or remote)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/rafiferdos/mongoose-pro.git
   cd mongoose-pro
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up your environment variables by creating a `.env` file in the root directory:

   ```env
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   ```

4. Start the development server:

   ```bash
   npm run start:dev
   ```

## Folder Structure

- `src` - Contains the main application code.
    - `models/` - Mongoose schemas and models.
    - `routes/` - API routes.
    - `controllers/` - Business logic for endpoints.
    - `middlewares/` - Custom middleware functions.
- `config/` - Configuration files, like database connection setup.
- `.env` - Environment variables.
- `tests/` - Unit/integration tests for the application.

## Scripts

- **Start Development Server**: `npm run dev` (uses `ts-node-dev` for hot reloading)
- **Build Project**: `npm run build`
- **Run Tests**: `npm test`
- **Lint Code**: `npm run lint`

## Dependencies

Here are the key packages used in the project:

- **[express](https://www.npmjs.com/package/express)**: Web framework for Node.js.
- **[mongoose](https://www.npmjs.com/package/mongoose)**: MongoDB Object Data Modeling (ODM) library.
- **[zod](https://www.npmjs.com/package/zod)**: TypeScript-first schema validation.
- **[dotenv](https://www.npmjs.com/package/dotenv)**: Environment variable management.
- **[bcrypt](https://www.npmjs.com/package/bcrypt)**: For secure password hashing.

## Development Tools

- **[TypeScript](https://www.typescriptlang.org/)**: Strongly typed JavaScript.
- **[Eslint](https://eslint.org/)**: Detect and fix code quality issues.
- **[Prettier](https://prettier.io/)**: Code formatter.
- **[ts-node-dev](https://www.npmjs.com/package/ts-node-dev)**: Hot-reloading for TypeScript.

## API Documentation

Detailed API documentation can be generated via tools like Postman or Swagger, or refer to the `routes/` directory for
endpoint definitions.

## Contributing

We welcome contributions! To contribute:

1. Fork the repo.
2. Create a feature branch: `git checkout -b your-feature-branch`
3. Commit your changes: `git commit -m "Add your message"`
4. Push the branch to your fork: `git push origin your-feature-branch`
5. Submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).