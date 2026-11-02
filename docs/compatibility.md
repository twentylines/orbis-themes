# Compatibility

Every theme has a strict numeric `major.minor.patch` version and an ID using lowercase letters, digits, dots and hyphens. `default`, IDs beginning `orbis-`, and reserved identifier segments are unavailable to theme authors.

The `requires` object declares framework API `1` and one to 32 exact Orbis releases. A release may use the leading `v` or omit it; equivalent forms cannot be repeated. Hard compatibility checks compare the host API and release to those declarations. `supportsUiRevisions` lists positive revision numbers and is used for support notices; it does not override a failed hard requirement.

The compatibility result also reports whether the runtime is available. The current framework reports it unavailable, even when the declared host requirements match.
