# Manuel Coppotelli's personal profile

![Github Pages Publishing](https://github.com/manuelcoppotelli/manuelcoppotelli.github.io/workflows/Github%20Pages%20Publishing/badge.svg?branch=main)

Visit [manuelcoppotelli.me](https://manuelcoppotelli.me)

## Get started

Install the dependencies...

```bash
npm ci
```

Generate the images

```bash
npm run optimize-images
```

...then build

```bash
npm run build
```

and finally

```bash
npm run preview
```

Navigate to [localhost:4173](http://localhost:4173). You should see the app running. Edit a component file in `src`, save it, and reload the page to see your changes.

If you're using [Visual Studio Code](https://code.visualstudio.com/) we recommend installing the official extension [Svelte for VS Code](https://marketplace.visualstudio.com/items?itemName=svelte.svelte-vscode). If you are using other editors you may need to install a plugin in order to get syntax highlighting and intellisense.

## Github repository setup

Create a new public repository `manuelcoppotelli.github.io`

Select `Settings` from the top menu, scroll down to `Features` section and unchck everything but
`Restrict editing to collaborators only`

```bash
echo "# Manuel Coppotelli's personal profile" >> README.md
git init
git add README.md
git commit -m "Let's start"
git branch -M main
git remote add origin git@github.com:manuelcoppotelli/manuelcoppotelli.github.io.git
git push -u origin main
```

## Github Pages setup

Create a `gh-pages` empty orphan branch

```bash
git switch --orphan gh-pages
git rm --cached -r .
git clean -id
# Press 1 (clean) then ENTER to confirm
git commit -m "Setup Github Pages" --allow-empty
git push -u origin gh-pages
```

Select `Settings` from the top menu, scroll down to `GitHub Pages` section, select `gh-pages` branch as source
and flag `Enforce HTTPS`

## Automatic Deploy

A Github Workflow [Github Pages Publishing](https://github.com/manuelcoppotelli/manuelcoppotelli.github.io/blob/main/.github/workflows/gh-pages.yml) will build the code and push to the `gh-pages` branch. Thus the content can be served throuh Github Pages

### Setup

Select `Settings` from the top menu, select `Actions` from the left menu, scroll down to `Actions permissions`
section, check `Allow all actions` and press `Save`

## Dependency check

A [dependabot.yml](https://github.com/manuelcoppotelli/manuelcoppotelli.github.io/blob/main/.github/dependabot.yml) configuration file is included in this repo, in order to check for both NPM packages and Github Actions.

### Config

Since it makes use of custom labels, create them through the following steps:

Select `Pull requests` from the top menu, click `Labels` and then `New label`

Create a label `dependencies` to identify "Dependencies updates, issues, deprecations" PRs

Create a label `ci-cd` to identify "CI/CD or Automation related" PRs
