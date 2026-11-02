# Styling and tokens

A theme document supplies `tokens` for colours, typography, spacing, shape and motion. Colours use six-digit hexadecimal values. Typography can use the `system` or `source-sans` family, or the ID of a declared font asset. The structural schema lists the numeric bounds.

`modes` can supply token overrides for `light`, `dark` and `oled`; each mode can occur once. `tokenRules` conditionally override tokens, and `tokenBindings` connect compatible settings to tokens. Values and transforms are checked against the target token, including bounds. These are declarative assignments, not CSS or a way to execute code.

Orbis owns navigation, session and recovery controls. Keep text readable and preserve access to those controls across modes and screen sizes. Rendering and visual behavior remain unavailable until the runtime is implemented.
