# NPM Workspaces with Vue + TypeScript + Referenced Modules with Client not at root

## Structure
```
Project Root
├── client (Vue client)
|   ├── package.json { "workspaces": ["../packages/*"], "dependencies": {"emoji": "^1.0.0"}}
|   └── node_modules
|       ├── emoji -> (symlink) ../packages/emoji
|       └── emoji-generator -> (symlink) ../packages/emoji-generator
└── packages
    ├── emoji
    |   └── package.json {"dependencies": {"emoji-generator": "^1.0.0"}}
    └── emoji-generator
```

