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

## Info
This is a boilerplate demo Vue project using workspaces and referenced modules. The Vue client project is located in a subdirectory of the root folder. Additional client projects could be added at the root level using the same setup for referencing packages. This setup allows reuse of projects as modules without the need to package / publish / install referenced projects.