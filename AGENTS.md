# Theme authoring instructions

This repository is the Orbis theme catalogue and authoring reference. Read [the authoring guide](docs/README.md), the relevant reference pages, and the version 1 schemas before proposing theme data. The catalogue is intentionally empty while the framework renderer and package lifecycle are unavailable.

Use only the declarative components, actions, slots, settings, assets and events defined by the published contracts. Do not introduce executable code, callbacks, CSS or arbitrary selectors into a theme. Preserve host-owned navigation, account and recovery controls and the host's accessibility settings.

Validate complete documents and catalogue metadata with the semantic validators described in [validation](docs/validation.md); JSON Schema validation alone is insufficient. Report validation failures and unverified claims clearly. The validators do not establish package safety, rendering quality or installability. Do not invent an archive format, installation workflow, supported capability or active runtime.

Do not add catalogue entries or theme packages while package admission is unavailable. Follow the repository's licence and publishing requirements, and avoid including private or sensitive information.
