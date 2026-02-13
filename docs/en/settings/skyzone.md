# SkyZone SteadyView Operating Modes

The Skyzone Steadyview video receiver (VRX) modules, like most modern VRX modules, contain two receivers that work simultaneously. This setup allows for various algorithms to improve signal reception and the final image quality. Starting from hardware version 3.2, Steadyview has four operating modes.

### Operating Modes:

- **Div (Diversity)**: The module works in traditional [Diversity](https://propwashservice.com/en/intro/videoRx#how-to-receive-video-from-a-drone) mode. This means the goggles output the audio and video signal from the receiver with the highest signal strength (RSSI).

The **Mix** modes aim to take images from both receivers simultaneously and merge them into one, filtering out interference.

- **Mix1**: Provides basic image merging.

- **Mix2**: Improves synchronization stability. This refers to the sync pulse at the beginning of each PAL/NTSC frame. If the sync pulse is misread or lost due to interference, the resulting image will be distorted.

- **Mix3**: Enhances the sync signal based on Mix2, maximizing video stability and ensuring maximum compatibility with other display devices. Note that video brightness will be reduced in this mode.

For these modes to work correctly, the latest firmware for both the module and the goggles is required.

---

*P.S. This is a loose translation of the [official article](https://skyzone.freshdesk.com/support/solutions/articles/151000020976-whats-the-mix1-mix2-mix3-div-mode) with author's additions.*

### Downloads and Guides:
* [Firmware and Instructions](https://www.skyzonefpv.com/pages/download)
* [Further Skyzone Guides](https://doggydog.blog/tag/skyzone/)
