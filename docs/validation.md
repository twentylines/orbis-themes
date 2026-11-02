# Validation

Use the [document schema](../schemas/theme-framework-v1.json) and [catalogue schema](../schemas/theme-framework-catalogue-v1.json) for structural checks. Both use JSON Schema draft 2020-12. A schema pass is only the first step: the Orbis source also supplies `validateThemeFrameworkDocument` and `validateThemeFrameworkCatalogue` for semantic checks.

Those checks include reserved IDs, unique declarations, references, component variants, release requirements, asset budgets, layouts and package URL binding. The catalogue validator rejects duplicate theme ID/version pairs and requires all versions of an ID to use the same repository. It also rejects accessors and non-JSON values. The schemas do not express every semantic rule and do not verify archive contents, publishers or safety of binary assets.

The command below uses the exact validators from Orbis rather than implementing a second set of rules. With Bun 1.3.0 installed, prepare the pinned source inside this repository:

```sh
git clone --filter=blob:none https://github.com/twentylines/orbis.git .orbis-validator
git -C .orbis-validator checkout 688abbb7aec8ae23edc4bbc3789f10cdaba9de43
bun install --cwd .orbis-validator --frozen-lockfile --ignore-scripts
bun run --cwd .orbis-validator/packages/common build
bun scripts/validate.mjs catalogue catalogue.json .orbis-validator
```

To validate a complete document, run `bun scripts/validate.mjs document path/to/theme.json .orbis-validator`. Input must be a regular UTF-8 JSON file of at most 1 MiB. Node.js 22 can also run this command after the common package is built.

The catalogue workflow runs the same semantic validator and checks the published schemas against the pinned Orbis source. Updating that pin and the schemas is a maintainer change. A valid document does not make the inactive runtime available, and the command does not inspect package archives or media contents.
