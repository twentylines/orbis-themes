# Authoring guide

The theme framework defines declarative data for a full interface. It does not permit a theme to supply JavaScript, executable callbacks, CSS or arbitrary selectors. Orbis retains ownership of application behavior and recovery controls.

The document and catalogue validators are implemented. Rendering, package installation, updates and rollback for this framework are not active yet. Use this guide to understand the current contract, not as instructions for installing a theme today. Archive contents and a supported package layout are not yet specified.

## Reference

- [Styling and tokens](styling.md)
- [Layouts and responsive behavior](layouts.md)
- [Components and actions](components.md)
- [Customisation](customisation.md)
- [Sounds](sounds.md)
- [Assets and packaging](packaging.md)
- [Validation](validation.md)
- [Compatibility](compatibility.md)
- [Publishing and catalogue metadata](publishing.md)

The [theme document schema](../schemas/theme-framework-v1.json) and [catalogue schema](../schemas/theme-framework-catalogue-v1.json) describe structure. Their semantic validators enforce further rules.
