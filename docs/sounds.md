# Sounds

Sound bindings reference declared audio assets and fixed events. Events include session login/logout, control activation, navigation change, notification levels, window operations and dialog open/close. Each event can occur once. A null asset requires gain zero; a non-null asset must reference a declared audio asset.

Supported declared audio types are MP3, Ogg and WAV, with a maximum declared duration of 30 seconds. Sound resolution respects the host's gesture unlock, mute and volume state. The existence of this contract does not mean sound playback is currently active.

This entry in the document's `sounds` array silences the login event:

```json
{ "event": "session.login", "asset": null, "gain": 0 }
```
