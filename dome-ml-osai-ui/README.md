# DOME-ML (UI) - OSAI

## Install node
Requires Node 24 (see `.nvmrc`). Don't use `npm install` since it will change package versions.
```bash
nvm use
npm ci
```

## Development server
Run `npm run start` and navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Docker
Run the dev server without installing Node:
```bash
docker compose up --build
```
Navigate to `http://localhost:4200/`. Stop with `docker compose down`.

## Build
Run `npm run build-prod` for a production build. The build artifacts will be stored in the `dist/` directory.

## Deploy to production
Build the app for production and rsync `dist/` to `persefone`:
```bash
npm run deploy-prod-quick
```
## Update YAML
Run in python: scripts/update_yaml.py
This will pull the latest YAML for OSAI registry table from GitHub: https://github.com/BioComputingUP/OSAI_ecosystem/blob/main/data/ecosystem_components_list.yml
