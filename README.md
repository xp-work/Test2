# README

## Folder structure

Folder structure.
- apps: holds all project levels
- configs: holds common configurations, which can be introduced directly into the project
- packages: Common project toolkit
- components: common UI libraries, etc.

### Start the project

Go to the project folder `project/**` and use `cmd` to run the `pnpm run dev` command to start the specified project.

### Upgrade dependencies

```shell
pnpm up --filter "./apps/**"
```

to upgrade all packages under `projects`
