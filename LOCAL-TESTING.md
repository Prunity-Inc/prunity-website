# Prunity Audio — Local website testing

This is a static website. No npm, build step, or internet connection is needed to preview it.

## Preview

1. Extract the ZIP archive.
2. Open `prunity-website/index.html` in Chrome, Firefox, Safari, or Edge.
3. Scroll to **Hear the difference** and press play on either recording.
4. Alternatively, in the `prunity-website` folder, run `python -m http.server 8000` then visit `http://localhost:8000`.

## Included assets

- `assets/audio/speech_chewing_gum_005.wav`: original six-second speech + chewing sample.
- `assets/audio/speech_chewing_gum_clean.wav`: matching six-second processed sample.
- `assets/screenshots/home.png`: filtering controls.
- `assets/screenshots/voice.png`: voice recording / enrollment screen.
- `assets/screenshots/soundscapes.png`: selection and mixing of soundscapes.

The audio players are linked directly to these recordings, with a **content warning for speech and chewing sounds** before them. Playback is user-initiated. Beginning playback on one player pauses the other.

## Before you publish

- Replace the `iosUrl` empty string in `site.js` with your verified public TestFlight or App Store link. Until then, the iOS button opens a request email.
- Verify that `farnaz@prunityaudio.com` is the business email you want to display. It appears in the final section and footer and is also used in early-access email links.
- Ensure you have permission to publish and distribute both recordings and any voice content included in the demo.
- Confirm all early-access feature wording still matches the production build.

## Performance citations and caveats

- **Own-voice model:** median **41.6 dB registered-speaker suppression** measured on your `speaker_only` set. This is NOT measured in everyday app use or a multi-speaker setting.
- **DeepFilterNet3:** CBAK **3.61 / 5**, STOI **0.944**, PESQ **3.17**, from the original model research (Schröter et al., INTERSPEECH 2023) on the VoiceBank+DEMAND test set: https://arxiv.org/abs/2305.08227 . CBAK is a background-noise *quality* rating, NOT a measured number of dB of noise reduction. These numbers are not end-to-end Prunity metrics or specific to chewing.
- Early **$1 payments** indicate willingness to pay; **letters of intent** are not guaranteed orders.
