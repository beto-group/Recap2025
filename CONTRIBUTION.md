# Contribution Guidelines — Recap 2025

Welcome! This component is part of the BetoOS Datacore library. Please adhere to the following architectural standards.

## Codebase Architecture

The module utilizes a split-file structure to guarantee legibility, testability, and isolated execution scopes:

```text
Recap2025/
├── RECAP 2025.md          # Obsidian entry point
├── METADATA.md            # Component manifest
├── README.md              # Documentation
├── CONTRIBUTION.md        # This file
├── LICENSE.md             # MIT license
├── data/
│   └── recap.md           # Milestone database
├── assets/
│   ├── image/
│   │   └── preview_1.webp # Static preview image
│   ├── videos/
│   │   └── preview.gif    # Interactive walkthrough GIF
│   └── ...                # Video and image assets referenced by node graph
└── src/
    ├── index.jsx          # Event-driven code watch & reload daemon
    ├── App.jsx            # Main layout and coordinator
    ├── components/
    │   ├── NodeGraph.jsx  # Orbital 3D canvas graph
    │   └── ...            # Graphical and layout subcomponents
    └── utils/
        └── paths.js       # Path resolver utilities
```

## Developer Standards

1. **Strict Zero Emojis**: All UI elements, buttons, headers, and control indicators must use Lucide vector icons or plain text. Emojis are reserved strictly for documentation.
2. **Path Safety**: Do not hardcode absolute path strings (e.g. `/Volumes/` or `file:///`). Always resolve vault directories dynamically relative to `dc.currentFolderPath`.
3. **Theme Parity**: Ensure that color choices reference CSS variables (e.g. `var(--interactive-accent)`) for native Obsidian compatibility.
