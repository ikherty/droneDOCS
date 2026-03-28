# How to Choose Components for Building a Drone?

Beginners often find it difficult to determine which components and specifications to choose, and more importantly, how much it will all cost. Below is a list of compatible components for various build types.

> **Note**: Your receiver choice must match your radio transmitter.
> 
> **Note**: As of 2022, support for flight controllers based on F722 and F411 processors is gradually being phased out due to limited memory (512kB). Currently, firmware features are being scaled back for these chips; Betaflight 4.4 uses a new cloud build system to manage this. [Detailed explanation here](https://oscarliang.com/f1-f3-f4-flight-controller/).

[Check out RotorBuilds for community build examples](https://rotorbuilds.com/).

---

## 65mm Brushless Tiny Whoop (Analog Video)

- **Motors**: 19000-23000KV (size 0702 / 0802 / 0803)
- **AIO Flight Controller**: 4-in-1 (FC + ESC + Receiver + VTX), ideally with built-in ELRS 2.4GHz
- **Camera**: Nano-size (e.g., RunCam Nano 3, Foxeer Razer Pico, Caddx Ant Lite)
- **Propellers**: 31mm 3-blade (e.g., Gemfan)
- **Frame**: 65mm (e.g., HappyModel Mobula6, BetaFPV Meteor65)
- **Batteries**: 1S 300-380mAh with BT2.0 or GNB27 connectors (ensure drone and battery connectors match)

## 75mm Brushless Tiny Whoop (Analog Video)

- **Motors**: 18000-20000KV (size 1002 for freestyle, 0802 for lightweight builds)
- **AIO Flight Controller**: 4-in-1 (FC + ESC + Receiver + VTX), e.g., HappyModel CrazyF4 ELRS. Alternatively, an AIO without VTX + a separate VTX (e.g., OVX300).
- **Camera**: Caddx Ant Lite or similar
- **Propellers**: 40mm 3-4 blade (e.g., Gemfan, HQProp)
- **Frame**: 75mm (e.g., HappyModel Mobula7, BetaFPV Meteor75)
- **Batteries**: 1S 450-550mAh with BT2.0 or GNB27 connectors

## 75mm Brushless Tiny Whoop (Digital Video: HDZero/Avatar)

- **Motors**: 18000-20000KV (size 1002)
- **AIO Flight Controller**: 3-in-1 (FC + ESC + Receiver) with built-in ELRS, e.g., HappyModel CrossF4 ELRS
- **Video System**: HDZero Whoop Bundle or Walksnail Avatar Mini 1S Lite Kit
- **Propellers**: 40mm 3-4 blade
- **Frame**: 75mm (e.g., HappyModel Mobula7, BetaFPV Meteor75)
- **Batteries**: 1S 450-550mAh with BT2.0 or GNB27 connectors

## 80mm Brushless Tiny Whoop

- **Motors**: 18000-20000KV (size 1002 / 1003)
- **AIO Flight Controller**: 3-in-1 (FC + ESC + Receiver) with built-in ELRS
- **Video System**: Digital kits (same as 75mm) or Analog (e.g., OVX300 VTX + Caddx Ant Lite camera)
- **Propellers**: 45mm 3-4 blade (e.g., Gemfan)
- **Frame**: BetaFPV Meteor75 Pro
- **Batteries**: 1S 550mAh with BT2.0 or GNB27 connectors

## CineWhoop

- **Frame**: Designed for 2" to 3.5" propellers with 25.5x25.5mm mounting
- **AIO Flight Controller**: 15-35A (depending on motor draw + 20% margin) with F405 / F7 / H7 processor
- **Motors**: 1404 to 2004 size. For a full GoPro, use 2004 size on 6S (2600-3200KV). For a "Naked" GoPro, 1408 size on 4S (3800-4200KV) is sufficient.
- **Video System**: Digital (Caddx Vista, DJI O3, Walksnail Avatar Lite, HDZero) or compact Analog
- **Batteries**: 600-1000mAh depending on the motor/prop combo

## 2" to 2.5" Toothpick

- **Frame**: 88-100mm for 2", 110-120mm for 2.5"
- **Motors**: 1102-1106 size. ~7500KV for 2S, ~5500KV for 3S
- **AIO Flight Controller**: 15-25A with F405 / F7 / H7 processor
- **Camera**: Nano-size
- **Video System**: Lightweight Analog (HappyModel OVX300, TBS Unify Pro32, Rush Tiny Tank) or Digital (Caddx Vista, Avatar Lite, HDZero)
- **Propellers**: 2-3 blade (Gemfan, HQProp)
- **Batteries**: 300-500mAh 60-80C

## 3" Quadcopter

- **Frame**: 120-150mm for 3" props
- **Stack or AIO**: 20-25A with F405 / F7 / H7 processor
- **Motors**: 1306-1506 size. ~4000KV for 4S, ~2800KV for 6S
- **Video System**: Lightweight Analog or Digital (DJI O3, Vista, Avatar, HDZero)
- **Camera**: Nano-size (14mm wide; check frame compatibility)
- **Batteries**: 600-850mAh 60-100C

## 3.5" Toothpick

- **Frame**: 140-160mm (e.g., Crux35)
- **AIO Flight Controller**: 20-35A
- **Motors**: 1404-1506 size. ~3900KV for 4S, ~2600KV for 6S
- **Video System**: Lightweight Analog or Digital
- **Camera**: Nano-size (14mm wide)
- **Batteries**: 600-850mAh 60-100C

## 5" Racing Drone

> **Target**: Lower weight is better (approx. 250-300g without battery).

- **Frame**: 200-230mm Stretched-X or True-X
- **Motors**: 2207 / 2306 size, 1800-2000KV (check race regulations)
- **Stack (FC + ESC)**: F405 / F7 / H7 processor with 40-65A 4-in-1 ESC (20x20mm mounting)
- **Video System**: Analog (low-latency Micro/Nano camera like Foxeer Predator or RunCam Racer + 25mW VTX per regulations)
- **Antenna**: Circularly polarized (e.g., Lollipop) recessed in a canopy or mount
- **Propellers**: R38, 51466, or 5146.5
- **LEDs**: Addressable WS2812 (at least 10 per arm), ideally with an external 5V BEC
- **Batteries**: High discharge 6S 1100-1400mAh 100-200C (e.g., Tattu R-Line, Dogcom)

## 5" Freestyle Drone

> **Target**: Weight is secondary to durability and flight feel.

- **Frame**: "Bus" style (e.g., Apex 5, AOS 5)
- **Motors**: 2207 / 2306 size, ~1800KV
- **Stack (FC + ESC)**: F405 / F7 / H7 + 40-65A
- **Camera**: Micro-size
- **Video System**: Digital or Analog; antenna should be mounted on a "stalk" to clear the battery and action camera
- **Batteries**: 6S 1100-1400mAh 100-150C

## 5.5" Freestyle Drone

> **Target**: Excellent for carrying a full-size GoPro.

- **Frame**: AOS 5.5 or similar
- **Motors**: 2208 size, ~1800KV
- **Stack (FC + ESC)**: F405 / F7 / H7 + 40-65A
- **Video System**: Digital or Analog; stalk-mounted antenna
- **Batteries**: 6S 1300-1500mAh 100-150C

## 7" Long Range (Long-Range)

> **Best with**: INAV or ArduPilot

- **Frame**: Robust, with 5-6mm thick arms (4mm will cause "jello" in video)
- **Motors**: 2306 (lightweight) to 2808 size. 1250-1300KV for 6S, 1600-1750KV for 4S
- **Stack (FC + ESC)**: 35-60A ESC + FC with I2C and Barometer support
- **GPS**: High-quality GPS with Magnetometer (e.g., Holybro Nano M8, Matek M8Q, Flywoo Goku M10)
- **Propellers**: 7x4x3 (HQProp)
- **Video System**: Digital or Analog; stalk-mounted antenna
- **Batteries**: 
  - Li-Ion packs (18650 or 21700) 4S2P/6S2P for 25-45 min flight time
  - LiPo 4S1P/6S1P for 10-25 min flight time

## 7" Freestyle/Cinematic

> **Best with**: Betaflight

- **Frame**: 6mm+ arms, "DeadCat" style (front arms pushed out) to keep props out of the camera view at low tilts
- **Motors**: 2406-2808 size, 1300-1500KV
- **Stack (FC + ESC)**: 45-60A ESC + F405 / F7 / H7 FC
- **GPS**: Optional
- **Propellers**: 7x3-4.5x3 (HQProp)
- **Video System**: Digital or Analog; stalk-mounted antenna
- **Batteries**: 
  - High-discharge Li-Ion 21700 6S1P
  - LiPo 6S 3000-5000mAh 50C+

---

*For more information, visit [Joshua Bardwell's FPVKnowItAll](https://www.fpvknowitall.com/); while some components are US-specific, his breakdowns and examples are excellent.*
