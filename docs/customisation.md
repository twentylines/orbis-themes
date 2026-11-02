# Customisation

Settings are declarative and typed: boolean, integer, enum, colour or asset. Each setting has an ID, label, group and default; integers have bounds and a step, enums have a bounded list of options, and asset settings name an asset kind. Conditions compare declared settings to allowed values.

Customisation sections must cover every setting exactly once and match its group. Presets can set only declared settings to valid values. Visibility conditions and their dependencies must be valid and acyclic. Host controls are always present and cannot be disabled by a theme.

These rules validate data; the full theme customisation UI and runtime are not available yet.

This is one setting declaration, intended for the document's `settings` array:

```json
{
  "key": "motion.reduce",
  "label": "Reduce movement",
  "group": "appearance",
  "kind": "boolean",
  "default": false
}
```

The complete document must also include this key in its matching Customisation section. A fragment alone is not a theme package.
