# Assets and packaging

The v1 document can declare image, icon, font and audio assets under bounded `assets/` paths. Each asset has an ID, SHA-256 digest, byte length and media type; images and icons also declare dimensions, and audio declares duration. The schema allows PNG, JPEG, WebP, WOFF2, MP3, Ogg and WAV as appropriate. Semantic checks enforce matching extensions, resource limits, unique IDs and paths, and valid references.

An individual asset is limited to 8 MiB and the total declared asset budget is 64 MiB. Fonts are limited to 4 MiB; icons are limited to 1 MiB and 1024 by 1024 pixels. Consult the schema and semantic validator for the complete limits.

Catalogue metadata can point to a ZIP or `.tar.gz` release asset up to 32 MiB, pinned by exact size and SHA-256. An archive layout, package installer and byte-level asset admission are not yet specified here. Do not assume that a structurally valid catalogue entry is installable or that its archive has been verified.
