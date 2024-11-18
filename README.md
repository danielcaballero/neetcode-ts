# Neetcode Solutions in TypeScript

This repository contains solutions to Neetcode problems implemented in TypeScript. The solutions are organized with tests for each problem to ensure correctness and reliability.

## Features

- **Structured Codebase**: Solutions are placed in the `src` directory, while tests are in the `tests` directory.
- **Testing Framework**: Uses [Jest](https://jestjs.io/) for testing.
- **Code Quality**: Includes ESLint and Prettier configurations to enforce code quality and formatting.

## Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v16 or later)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

## Getting Started

### 1. Clone the Repository

```bash
git clone <repository-url>
cd neetcode-ts
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run Tests

To run all tests:

```bash
npm test
```

### 4. Add a Solution

1. Implement your solution in the `src` directory, using the problem name as the filename.
2. Add a corresponding test file in the `tests` directory.

### 5. Lint and Format

Lint the codebase:

```bash
npm run lint
```

Format the codebase:

```bash
npm run format
```

### 6. Run All Checks

To run both linting and formatting checks:

```bash
npm run check
```


## Project Structure

```
neetcode-ts/
├── src/
│   └── problems/          # Solution implementations
├── tests/                # Test cases for solutions
├── jest.config.js        # Jest configuration
├── package.json          # Project metadata and scripts
├── tsconfig.json         # TypeScript configuration
├── eslint.config.mjs     # ESLint configuration
├── .prettierrc          # Prettier configuration
└── .gitignore           # Git ignore rules
```

## Scripts

- `npm test` - Run all tests.
- `npm run lint` - Run ESLint for code quality checks.
- `npm run format` - Run Prettier to format code.
- `npm run check` - Run lint and format.

## Contributing

Feel free to fork the repository and create pull requests with improvements or additional problem solutions.

## License

This project is licensed under the [MIT License](LICENSE).
