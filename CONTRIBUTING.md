# Contributing to CRM Inmobiliario n8n

Thank you for your interest in contributing to the CRM Inmobiliario n8n project! This document provides guidelines and instructions for contributing.

## 📋 Code of Conduct

Please be respectful and professional when contributing to this project. We value diverse perspectives and collaborative discussion.

## 🚀 Getting Started

### Prerequisites

- Node.js v14 or higher
- npm v6 or higher
- Git
- Familiarity with Express.js, MongoDB, and n8n

### Development Setup

1. **Fork the repository**
   ```bash
   git clone https://github.com/YOUR_USERNAME/CRM-Inmobiliario-n8n.git
   cd CRM-Inmobiliario-n8n
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Create environment configuration**
   ```bash
   cp .env.example .env
   # Edit .env with your configuration
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

## 📝 Commit Guidelines

We follow conventional commits format:

- `feat:` New feature
- `fix:` Bug fix
- `docs:` Documentation changes
- `style:` Code style changes (formatting, etc.)
- `refactor:` Code refactoring
- `test:` Adding or updating tests
- `chore:` Maintenance tasks

### Example

```bash
git commit -m "feat: Add lead scoring algorithm"
git commit -m "fix: Resolve webhook timeout issue"
```

## 🔄 Pull Request Process

1. **Create a feature branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make your changes**
   - Follow the project structure
   - Maintain code quality
   - Add tests for new functionality

3. **Test your changes**
   ```bash
   npm test
   npm run lint
   ```

4. **Push to your fork**
   ```bash
   git push origin feature/your-feature-name
   ```

5. **Create a Pull Request**
   - Provide clear description of changes
   - Reference any related issues
   - Request review from maintainers

## 🎯 Development Standards

### Code Style

- Use 2-space indentation
- Follow ES6+ standards
- Use meaningful variable names
- Add comments for complex logic

### File Structure

```
src/
├── config/        # Configuration files
├── controllers/   # Request handlers
├── models/        # Database models
├── routes/        # API routes
├── middleware/    # Custom middleware
├── services/      # Business logic
└── utils/         # Helper functions
```

### Testing

- Write tests for new features
- Maintain minimum 80% code coverage
- Test edge cases and error scenarios

```bash
npm test
npm run test:coverage
```

## 🐛 Reporting Issues

When reporting bugs, please include:

- Description of the issue
- Steps to reproduce
- Expected behavior
- Actual behavior
- Environment details (Node version, OS, etc.)
- Error messages or logs

## 💡 Feature Requests

For feature requests:

- Explain the use case
- Describe the expected behavior
- Provide examples if possible
- Consider scalability and performance

## 📚 Documentation

- Update README.md if behavior changes
- Add JSDoc comments to functions
- Update API documentation for new endpoints
- Include examples for new features

## 🔐 Security

- Never commit sensitive credentials
- Use environment variables for secrets
- Validate and sanitize all inputs
- Report security issues privately to maintainers

## 📞 Communication

- Ask questions via GitHub issues
- Discuss proposals before implementation
- Be open to feedback and suggestions
- Help other contributors

## 🎓 Resources

- [Express.js Documentation](https://expressjs.com/)
- [n8n Documentation](https://docs.n8n.io/)
- [MongoDB Documentation](https://docs.mongodb.com/)
- [GitHub Guides](https://guides.github.com/)

## ✅ Review Process

Pull requests will be reviewed for:

- Code quality and style
- Test coverage
- Documentation
- Performance impact
- Compatibility with existing code

## 🙏 Thank You

Thank you for contributing to CRM Inmobiliario n8n! Your efforts help make this project better for everyone.

---

**Happy Coding!** 🚀
