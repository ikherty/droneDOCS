# Software

```
For Windows files with the extension .EXE
For Linux - .rpm, .deb
For Mac - .dmg
For Android - .apk
```

> The terms "Release Candidate (RC)" and "Pre-release" mean the following: this is a release candidate intended for testing, and some things may still need fixing and fine-tuning. Please use it with caution and report any [issues here](https://github.com/betaflight/betaflight-configurator/issues).
The newer the release candidate, the more fixes it contains, but bugs may still remain due to the human factor in testing and possible errors during development branch merges (see how git works). If you're not prepared for the risks associated with this, it's recommended to use only releases (Release). It's strongly advised to use matching versions of firmware and configurators: in INav, the numbering is identical, in Betaflight, for version 4.5.x, you need configurator 10.10.x. or newer, for 4.4.x you need 10.9.x, and for ESC and receiver firmware, simply use the latest version of the configurator, as backward compatibility is present.

## For flight controllers

Betaflight Configurator (for flashing the flight controller):

Desktop version, also available for Android - https://github.com/betaflight/betaflight-configurator/releases

Online version - https://app.betaflight.com/

INav Configurator (for flashing the flight controller to INav firmware):
https://github.com/iNavFlight/inav-configurator/releases

QuickSilver Configurator (for flashing the **tiny whoop's** flight controller to QuickSilver firmware, a descendant of Silverware):
https://config.bosshobby.com/#/home

KISS ULTRA Configurator (for flashing the KISS ULTRA flight controller):
https://github.com/KissUltra/gui/releases

KISS Configurator (for flashing KISS or Fettec flight controllers):
https://github.com/flyduino/kiss-gui/releases

Mission Planner (for flashing Ardupilot (see [list of supported flight controllers](https://ardupilot.org/copter/docs/common-autopilots.html))):
https://ardupilot.org/planner/docs/mission-planner-installation.html

QGroundControl (for flashing PX4 and Ardupilot (see [list of supported flight controllers](https://discuss.px4.io/t/list-of-px4-supported-fc-hardware/24901))):
http://qgroundcontrol.com/downloads

FlightOne FalcoX Alpha Configurator (for flashing FlightOne flight controllers or those with purchased FalcoX firmware):
https://flightone.com/download.php?version=alpha

EmuFlight Configurator (for flashing the flight controller to EmuFlight firmware):
https://github.com/emuflight/EmuConfigurator/releases

## For ESCs

Bluejay Configurator (for flashing ESCs with BLheli_S firmware; BlueJay, with the option to use RPM filters) (8bit):
https://esc-configurator.com (also supports AM32 firmware for 32bit ESCs))

AM32 Configurator (for ESCs with AM32 firmware):
https://am32.ca/

BlHeli Suite (for set up ESCs with blheli32 firmware) (32bit):
https://github.com/bitdump/BLHeli/releases

## For RC receivers and transmitters

ExpressLRS Configurator (for flashing ELRS receivers and transmitters):
https://github.com/ExpressLRS/ExpressLRS-Configurator/releases

Online ExpressLRS Configurator: https://expresslrs.github.io/web-flasher/

## For TBS

Agent M (for flashing Team BlackSheep products):
https://www.team-blacksheep.com/agentm

## For radio transmitters

EdgeTX Configurator (for flashing OpenTX-based transmitters):
https://buddy.edgetx.org/#/flash

## For Video Systems

DJI Assistant 2 **(DJI FPV series)** (for flashing DJI goggles v2, Caddx Vista, DJI Air Unit):
https://www.dji.com/global/downloads/softwares/dji-assistant-2-dji-fpv-series

DJI Assistant 2 **(Consumer Drones Series)** (for flashing DJI goggles 2, Integra, O3 Air Unit):
https://www.dji.com/global/downloads/softwares/dji-assistant-2-consumer-drones-series

Walksnail Avatar Firmware:
https://avatar-firmware.d3vl.com

HDZero Firmware:
https://www.hd-zero.com/document

## Simulators

Simulators can be found on a separate page:
https://propwashservice.com/en/intro/sim.html

## For log analysis

Betaflight Blackbox Explorer (log viewer):

Desktop version - https://github.com/betaflight/blackbox-log-viewer/releases

Online version - https://blackbox.betaflight.com/

PIDtoolbox (log analyzer, starting from version 0.7 it's paid, available via Patreon subscription - https://www.patreon.com/ThePIDtoolboxGuy):
Older versions - https://github.com/bw1129/PIDtoolbox/releases

Online OpenTx-based transmitter log viewer:
https://maxbl4.github.io/otx/index.html

Online tuning helper using Rosser's method:
https://fpv-drone.info/tools/tuning-tools/

## Driver fixers for Windows

Download links are available on the main page of the Betaflight Configurator in the yellow section, but they are also duplicated here:

CP210x USB to UART Bridge Virtual COM Port (VCP) driver (in case the system doesn't recognize the port connected to the flight controller or transmitter correctly):
https://www.silabs.com/developers/usb-to-uart-bridge-vcp-drivers

Zadig (for updating USB drivers, usually needed for bootloader mode issues):
https://zadig.akeo.ie

ImpulseRC Driver Fixer (fixes drivers for flight controller operation):
https://impulserc.com/pages/downloads

Drivers for DFU and COM AT32: [link here](https://drive.google.com/drive/folders/1N9b9aRWggz9G2T83CFeXRQgvVgxlf5Y3?usp=drive_link)

Other useful drivers can be downloaded here: [archives in the cloud](https://clck.ru/35Xp2W).

## For GPS Setup

Ublox center: https://www.u-blox.com/en/product/u-center

OBSOLETE:

BLHeli_S Configurator (for flashing ESCs, without RPM filter support) (8bit):
https://github.com/blheli-configurator/blheli-configurator/releases

JazzMaverick BLHeli_M Configurator (for flashing ESCs, with RPM filter support) (8bit):
https://github.com/Asizon/blheli-configurator/releases/
