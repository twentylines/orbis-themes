# Components and actions

Themes refer to registered components and variants; they do not define implementations. Registered IDs include `shell.system-bar`, `shell.navigation`, `shell.session`, `shell.workspace`, `layer.dialogs`, `layer.notifications`, `settings.recovery`, the button, dropdown, slider, checkbox and colour controls, and the dialog, window and notification surfaces. The document schema lists the exact IDs; the Orbis registry defines each supported variant and placement.

Layout nodes can represent a registered core component, group, text, image, action or setting control. Theme-added node IDs begin with `theme.`. Actions are selected from the fixed registry, such as `navigation.open`, `session.open`, `theme.recover` and `window.close`. Window and notification actions have slot-specific contexts. Orbis supplies the behavior, user-gesture rules and any confirmation.

The host retains separate navigation, account and Default recovery escape controls. Declaring a component or action does not activate a renderer.
