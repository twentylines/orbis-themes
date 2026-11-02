# Publishing and catalogue metadata

The root `catalogue.json` is a versioned list of release metadata, not a theme package. It currently contains an empty `themes` array. A catalogue record declares the theme ID, version, name, description, author, GitHub repository, hard requirements, supported UI revisions, and a package URL, SHA-256 and byte length.

The repository URL must identify a GitHub owner and repository. A package URL must point to that exact repository's GitHub release download, using the declared theme version as either `v` plus the version or the version alone. The asset name must end in `.zip` or `.tar.gz`; query strings, credentials and path traversal are rejected. Records for different versions of one theme ID must keep the same repository. The catalogue has a maximum of 256 records and each package has a maximum declared size of 32 MiB.

A catalogue entry is metadata only. Submit changes through a pull request. The catalogue workflow validates the JSON with the pinned Orbis semantic validator. A maintainer must also check the release asset, its exact bytes, licensing and declared compatibility before approving it. Validation alone does not establish that an archive is safe or installable.

After an approved change is merged into `main`, the raw `catalogue.json` is the published catalogue. Orbis can refresh that address independently of its own releases. There is no separate privileged publishing workflow. Do not add entries while the full package installer and archive admission remain unavailable.
