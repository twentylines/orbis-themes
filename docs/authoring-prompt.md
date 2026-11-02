# Copyable theme authoring prompt

Use the prompt below with an authoring assistant when preparing a future theme document. Read and supply the linked repository material to the assistant if it cannot access the repository.

```text
Help me design an Orbis interface theme against the version 1 theme document contract. The authoring repository is https://github.com/twentylines/orbis-themes. First read its authoring guide, relevant reference pages, machine-readable schemas and validation instructions.

Desired design: [describe the visual style, intended users and accessibility needs]. Ask me for any essential missing requirements before producing theme data.

Use only registered component, slot, action, setting, token, asset and sound-event identifiers and the defined declarative forms. Preserve host-owned navigation, account and recovery controls and host accessibility preferences. Do not use JavaScript, callbacks, CSS or arbitrary selectors. Do not invent identifiers, archive formats, APIs or runtime capabilities.

Check the complete document with both the published schema and the documented Orbis semantic validator. Explain any unresolved validation errors and assumptions. Treat asset references and catalogue metadata as unverified until their bytes, ownership, licences and compatibility have been checked. Do not add a package or catalogue entry to the repository.

State clearly that the framework renderer, theme installation, updates and rollback are not available yet. A valid document or catalogue record does not prove a theme can be installed, rendered, or used safely.
```

The [authoring guide](README.md) indexes the contract references. The [validation guide](validation.md) explains how to run the existing semantic validators. This prompt does not replace those contracts or test a theme's real presentation.
