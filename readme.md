# Optica Hack-Fest:

Welcome to **Optica Hack Fest**! This repository is open for **Hacktoberfest**, and we are excited to see contributions from developers of all experience levels. To ensure high-quality contributions and maintainable commit history, please follow our contribution guidelines and use the **Conventional Commits** standard for your commit messages.

## What is Hacktoberfest?

[Hacktoberfest](https://hacktoberfest.com) is an annual event sponsored by DigitalOcean and other partners that promotes participation in open-source projects. It takes place every October, encouraging people to contribute to repositories that have opted into Hacktoberfest. Anyone can participate by creating pull requests to help improve open-source projects.

### How to Participate in Hacktoberfest

1. **Register for Hacktoberfest** on [the official website](https://hacktoberfest.com).
2. Look for repositories that have the `hacktoberfest` topic (like this one!).
3. Submit at least **4 pull requests** to any Hacktoberfest-approved repositories during October.
4. Make sure your PRs get **accepted and merged** by maintainers to qualify for the rewards.

Contributors can earn either a **Hacktoberfest t-shirt** or have a tree planted in their name.

---

## Contribution Guidelines

We welcome all kinds of contributions including bug fixes, feature enhancements, documentation improvements, and more. To get started:

1. **Fork this repository** to your own GitHub account.
2. **Clone the repository** to your local machine.
   ```bash
   git clone https://github.com/jiitopticachapter/Optica-Hack-Fest.git
   cd Optica-Hack-Fest
   ```
3. Create a **new branch** for your changes:
   ```bash
   git checkout -b feature-or-bugfix-name
   ```

4. Make your changes or improvements (check Issues for the tasks).

5. **Commit your changes** using the Conventional Commits format (explained below).

6. **Push to your fork** and submit a **pull request** to this repository.

---

## What are Conventional Commits?

**Conventional Commits** is a commit message convention that provides an easy-to-follow, consistent way of writing meaningful commit messages. It helps maintainers quickly understand what each commit does and improves the overall development workflow.

### Conventional Commits Format

A Conventional Commit has the following format:

```
<type>(optional scope): <description>

[optional body]

[optional footer]
```

### Common Commit Types
- `feat`: A new feature
- `fix`: A bug fix
- `docs`: Documentation-only changes
- `style`: Changes that do not affect the meaning of the code (white-space, formatting, etc.)
- `refactor`: A code change that neither fixes a bug nor adds a feature
- `test`: Adding missing or correcting existing tests
- `chore`: Maintenance changes that don’t modify src or test files

### Example of a Conventional Commit
```bash
git commit -m "feat(auth): add login functionality"
```
This commit adds a new feature (`feat`) in the `auth` module, specifically the login functionality.

### Breaking Changes
For breaking changes, add a `BREAKING CHANGE:` footer to the commit message:
```
feat(auth): change authentication method

BREAKING CHANGE: The authentication method has been updated to OAuth 2.0. Previous tokens will no longer work.
```

---

## How to Make a Conventional Commit

1. After making changes to your code, **stage the changes**:
   ```bash
   git add .
   ```

2. Commit your changes following the Conventional Commits format:
   ```bash
   git commit -m "fix(blog): correct date sorting issue"
   ```

3. **Push your changes** to your branch:
   ```bash
   git push origin feature-or-bugfix-name
   ```

4. Submit a **pull request** with a detailed description of what your contribution is about.

---

## Code of Conduct

We expect all contributors to follow our [Code of Conduct](CODE_OF_CONDUCT.md) to ensure a welcoming environment for everyone.

---

## Contact

For any questions or issues, feel free to [open an issue](https://github.com/jiitopticachapter/Optica-Hack-Fest/issues) or contact us directly.

---
# Happy coding and thank you for your contribution!
