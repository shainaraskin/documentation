# Polyverse Documentation

## Writing Documentation

### Document Format

All of the documents that are compiled to the final documentation site live under the **docs** branch of this repository. Documents are written in [GFM Markdown](https://github.github.com/gfm/) and can include a [Frontmatter](https://jekyllrb.com/docs/frontmatter/) block.

`Example Document`

```md
---
title: Getting Started
custom: Any valid YAML can go in the block and is attached as metadata
---

# Getting Started

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

```

### File Structure

When the documentation is compiled it automatically generates a table of contents based on the file structure of the markdown files. The first level is a list of the root folders followed by level two which is a list of files in each of those folders.

The names are either automatically created based on the filename **Slug (example-slug-format)** format. Files can also have custom titles by setting the **title** property in a markdown files frontmatter.

A third section is added for each of a documents **h2 (##)** section headers

`File Structure`

```
folder-one
	file-one.md
	file-two.md
```

`file-one.md`

```md

---
title: Custom Title
---

## Section One

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...

## Section Two

Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...
```

`Output TOC`

```
Folder One
	Custom Title
		Section One
		Section Two
	File two
```



## Development

Code used for building and deploying the documentation lives on the **src** branch. If you want to run a local copy of the documentation or edit templates, etc you will need to checkout the **src** branch and run the following commands.

```sh
# Ensure the current git staging area is clean (make sureall changes are saved first)
git reset --hard
git fetch src
git checkout src

# Checkout a copy of the docs branch
npm run link-docs

# Create an initial build (This just ensures the ./build directory exists)
npm run build

# Start a simple http server, watch for changes and recompile.
npm run watch
```

**Note:** Any file changes in the docs folder won't be committed to the **src** branch so if you want to save documentation changes you will need to `cd` in the docs folder and commit changes separately to the **docs** branch (Don't forget to push).

## Compiled Site

The documentation is served by Github pages and lives on the **master** branch. This code should always be compiled and committed via Jenkins or an automated build tool.
