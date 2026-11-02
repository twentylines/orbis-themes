# Orbis themes

This repository holds the public catalogue and authoring reference for full Orbis interface themes. The catalogue starts empty; there are no theme packages in this repository.

The version 1 document and catalogue contracts and their validators exist in Orbis. The full theme renderer, package installation and update lifecycle are not available yet. A catalogue entry does not make a theme installable or active.

Start with the [authoring guide](docs/README.md) and the [copyable authoring prompt](docs/authoring-prompt.md). The machine-readable [theme document schema](schemas/theme-framework-v1.json) and [catalogue schema](schemas/theme-framework-catalogue-v1.json) describe structural constraints; additional semantic validation is required.

## Quick start

1. Read the [component](docs/components.md) and [layout](docs/layouts.md) contracts.
2. Define JSON settings, tokens and asset references using the [customisation](docs/customisation.md) and [sound](docs/sounds.md) references.
3. Run the [actual Orbis validators](docs/validation.md) before submitting metadata. Validation does not activate the unfinished runtime.

The repository is distributed under the [GNU General Public License](LICENSE).
