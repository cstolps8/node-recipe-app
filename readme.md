# Recipe App

This is a small, purposefully-incomplete recipe app intended to be used in some Copilot workshops. 

- Built with Node.js, Express, Handlebars, and Sqlite.
- Scafholds a database with seed data on first launch.
- Handles the creation, listing, and editing of recipes.

Some ideas of what to add:

- A `/recipes/random` endpoint to select a random recipe.
- A way to delete recipes within the web application.
- A way to search recipes.
- Support for multiple units of measurement on recipes. 

## Requirements

### Using GitHub Codespaces (recommended)

This repository is configured for GitHub Codespaces. When you open a Codespace, it will automatically install dependencies and start the app on port 3000.

**Option 1 – Use the badge below (right-click to open in a new tab):**

[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://github.com/codespaces/new?hide_repo_select=true&ref=main&repo=1026168589)

**Option 2 – Create a Codespace from the GitHub UI:**

1. Navigate to the repository on GitHub.
2. Click the green **Code** button near the top-right of the page.
3. Select the **Codespaces** tab.
4. Click **Create codespace on main** (or choose a branch).
5. Wait for the Codespace to finish building — dependencies are installed automatically.
6. Once the Codespace is ready, the app starts on port 3000 and a preview opens automatically.

### Running locally

You can also run locally with the help of Dev Containers. If you want to run outside of a container, the setup should be the following commands in your terminal:

```bash
npm install
npm start
```
Visit `http://localhost:3000` to start managing your recipes.

## License

This project is licensed under the terms of the MIT open source license. Please refer to [MIT](https://github.com/github-samples/node-recipe-app/blob/main/LICENSE) for the full terms.

## Support & Contributions

There is no support for this repository. It will periodically be updated as the needs for workshops where it is used evolves. We do not currently accept contributions. 
