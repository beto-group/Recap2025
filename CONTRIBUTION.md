# Contributing to RECAP 2025

We welcome contributions to improve the RECAP 2025 component.

## Guidelines

1. **Zero-Build Architecture**: Keep the component fully self-contained. Do not add `package.json` or `node_modules`.
2. **ES Modules Check**: Do not use `export` or `import` syntax. End files with a single `return { ... }` object statement.
3. **Theme Parity**: Ensure that color choices reference CSS variables (e.g. `var(--interactive-accent)`) for native Obsidian compatibility.
