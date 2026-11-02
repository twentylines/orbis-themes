# Layouts

A document declares exactly one layout for each viewport: `phone`, `tablet` and `desktop`. Their maximum column counts are 1, 8 and 12 respectively. Layout nodes use registered slots, a unique ID and order, a parent, an anchor and a placement. Root nodes use `viewport.safe`; children use `parent.content` and must have a group parent in the same slot.

Placements include flow, dock, float and host. Float placement has bounded geometry, requires content scrolling, and is limited to eight nodes per layout. Dock and float placements declare a flow fallback. Core navigation, session and recovery components must remain present and cannot be conditionally hidden. The validator also checks parent cycles, spacing, control dimensions, ordering and registered placement rules.

These are contract checks, not a guarantee that a design renders well. The renderer is not active; test actual responsive layout and focus behavior when it becomes available.
