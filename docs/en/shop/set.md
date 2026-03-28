# Beginner's Kit

Which starting set to choose, how to start the FPV hobby, what are KIT/BNF, why "Cetus" might not be the best choice, options for various budgets, and much more can be found below.

## Introduction

This article provides "build it yourself" set options with ready-made drones for specific budgets. **Before exploring these options, please study the articles in the "Introduction" section (see the menu on the left)**.

Since prices are originally in USD, the cost in other currencies will depend on the current exchange rate. Keep in mind that different platforms may have their own rates, and local stores may apply additional markups.
Currency Converter: [Google Finance](https://g.co/kgs/zsYNPm).

You can also build a drone yourself, but including consumables and tools, it will likely cost more.
[Example components for builds](/shop/DIY) and [Equipment and consumables list](/shop/nessesary).

**Please note that any set must primarily include a simulator.**
- [Simulator examples](/intro/sim)

## What are KIT, RTF, PNP, BNF...

In product names, you'll often see RTF, BNF, PNP, and ARF (KIT). These abbreviations specify the product's completeness.

### RTF — "Ready to Fly"
Also sometimes called a "Starter Kit".

**An RTF drone kit includes:**
- A drone with a receiver compatible with the included radio;
- A radio controller;
- A battery (or several);
- A charger for the included battery.

Typically, these kits consist of the cheapest possible parts. They are often given as gifts or bought by beginners. Most hobbyists **strongly recommend against** starting with these, as you'll likely have to buy everything from scratch if you want to expand your fleet, leaving the old kit useless.
Over time, better RTF kits are appearing on the market. It is recommended to consult with experienced hobbyists about the current relevance of a chosen set before buying.

### BNF — "Bind and Fly"
> What "bind" means can be found [here](/community/glossarium).

**A BNF drone kit includes:**
- A drone with a pre-soldered receiver;
- (Optional) A battery and corresponding charger, common for tiny whoops.

Since different radio control systems are **not compatible** with each other (read about [current systems here](/intro/tx#data-transmission-protocols)), buyers are often offered a choice of receiver. If no choice is given, the receiver name is usually in the BNF set title or description. You may also be offered a choice of camera (common for DJI FPV drones with Caddx Vista/Air Unit) and motor/propeller groups (specified by battery cell count, e.g., 4S or 6S).

<p align="center">
  <img src="/assets/img/chooseRx.webp" width="600" alt="example of drone variations with receivers">
</p>

After purchasing such a kit, you'll need to update the receiver firmware and bind it with your radio. For digital video systems, you'll also need to update its firmware and bind it with your goggles. In the flight controller firmware settings (usually Betaflight; check product description), you must set the correct channel mapping ([more details](https://oscarliang.com/channel-map/)) and configure modes for your switches ([more details](https://oscarliang.com/betaflight-modes/)).

### PNP — "Plug and Play"
**A PNP drone kit includes:**
- A drone without a receiver.

As you might have guessed, you'll first need to buy a receiver, solder it in, and then follow the same steps as for a BNF kit.

### ARF (KIT sets) — "Almost Ready to Fly"
ARF kits imply a set of all parts necessary for assembly. Modern ARF kits are rare and often sold by large bloggers or major brands. On AliExpress, you often find outdated versions that are not recommended without consulting hobbyists.
For airplanes, a "KIT" set often means just the airframe without any electronics. Always check the description carefully.

## Why shouldn't you buy a "Cetus"?

BetaFPV was one of the first to release an RTF starter kit, and initially, the idea seemed great—buy and fly without worrying about missing parts. GEP-RC, EMAX, and Eachine followed with their own interpretations. However, these are often built so cheaply that the equipment quality is only good for "feeling out" the hobby, not for long-term use. Many hobbyists who receive or buy these eventually sell or discard them because the quality and functionality aren't enough for full immersion.

BetaFPV's line grew into the [Cetus series](https://betafpv.com/collections/best-fpv-kits). They come in various versions, but they all share a common problem: BetaFPV's inconsistent quality. Despite their experience, they often struggle with reliable electronics, frequent small manufacturing defects, and poor soldering. A major issue is components "popping off" boards during crashes, requiring professional repair or replacement. Their goggles often have basic internals with poor receiver sensitivity. Their radios use a fork of EdgeTX rather than being integrated into the main project, and they are slow to update features. In their ELRS products, they sometimes ignore developer recommendations, resulting in worse performance than more affordable alternatives like Happymodel.

Of course, if you already have one, feel free to fly it and see if you enjoy the hobby. "A bad experience is still an experience." You might get lucky and get a defect-free unit that teaches you the basics. But statistics generally suggest otherwise.

## I want to start, but have no money ($50-200)

Unfortunately, it's very difficult to fully enter the hobby with this budget. Your best bet is an EdgeTX radio with USB charging capability, batteries for the radio, and a simulator. You won't be able to fly a real drone initially, but you'll get a feel for the controls and decide how interested you are. You can also participate in online races; with good results, you might join a racing team, find sponsors, and move up the "career ladder."

- **Radio examples**: Radiomaster [Pocket](https://rcsearch.ru/?s=radiomaster+pocket), [TX12](https://rcsearch.ru/?s=radiomaster+tx12), [Zorro](https://rcsearch.ru/?s=radiomaster+zorro), [Boxer](https://rcsearch.ru/?s=radiomaster+boxer).

## Most Budget-Friendly Set for Indoor/Calm Weather Flying ($250-350)

This is a better option than a Cetus because you can continue to use this equipment as you grow. This price range strictly covers analog video with a basic headset. A "Tiny Whoop" is the best drone choice here. Avoid "no-name" manufacturers with questionable quality; the risk is entirely yours.

- **Radios under $100**: Radiomaster [Pocket](https://rcsearch.ru/?s=radiomaster+pocket), [TX12](https://rcsearch.ru/?s=radiomaster+tx12), [Zorro](https://rcsearch.ru/?s=radiomaster+zorro); Jumper [T-pro](https://rcsearch.ru/?s=jumper+t-pro), [T20](https://rcsearch.ru/?s=jumper+t20). [ELRS 2.4GHz](/intro/tx) version is recommended. Don't forget batteries!
- **Analog Goggles under $100**: Eachine [EV800D](https://rcsearch.ru/-c1814), [EV800DM](https://rcsearch.ru/-c7798).
- **Tiny Whoops under $100**: [Mobula6](https://rcsearch.ru/-c29293), [Mobula7](https://rcsearch.ru/-c33913), [Mobeetle6](https://rcsearch.ru/-c35745). Ensure the radio protocol matches your radio (e.g., ELRS).
- **Charger + (if needed) Power Supply**: [VIFLY WhoopStor](https://rcsearch.ru/-c46257).
- **Batteries**: GNB/Tattu according to whoop specs. For 65mm, 1S 300-380mAh; for 75mm, 1S or 2S 450-550mAh. Note: Whoops often use internal PH2.0 connectors. If possible, switch to BT2.0/A30 connectors for better performance. The suggested charger supports both.
- **Consumables**: Spare propellers matching your motor shaft diameter.

## Budget Outdoor Starter Set ($400-500)

Still an analog video system.

- **Radios under $150**: Radiomaster [Pocket](https://rcsearch.ru/?s=radiomaster+pocket), [TX12](https://rcsearch.ru/?s=radiomaster+tx12), [Zorro](https://rcsearch.ru/?s=radiomaster+zorro), [Boxer](https://rcsearch.ru/?s=radiomaster+boxer); Jumper [T-pro](https://rcsearch.ru/?s=jumper+t-pro), [T20](https://rcsearch.ru/?s=jumper+t20). ELRS 2.4GHz recommended.
- **Analog Goggles under $100**: Eachine [EV800D](https://rcsearch.ru/-c1814), [EV800DM](https://rcsearch.ru/-c7798).
- **Drones under $200**: [HGLRC Drashark](https://rcsearch.ru/-c46627), [Happymodel Mobula8](https://rcsearch.ru/-c46027), [Crux3](https://rcsearch.ru/-c30667), [Crux35](https://rcsearch.ru/-c45326), [iFlight Baby Nazgul Nano](https://rcsearch.ru/-c35553), [GEPRC Smart Phantom 2.5"](https://rcsearch.ru/-c27390). Ensure analog video and matching radio protocol.
- **Charger + (if needed) Power Supply**: For 1S: [WhoopStor](https://rcsearch.ru/-c46257). For 2S+: [SkyRC B6 Neo](https://rcsearch.ru/-c47308), ToolkitRC [M6](https://rcsearch.ru/-c6063), [M7](https://rcsearch.ru/-c25346), [M6D (Dual Port)](https://rcsearch.ru/?s=toolkit+m6d), [M7AC (Built-in PSU)](https://rcsearch.ru/-c39020), [iSDT 608AC](https://rcsearch.ru/-c8911). Check connector types (e.g., XT60/XT30).
- **Batteries**: CNHL/GNB/Tattu. Start with at least 3-5 packs.
- **Consumables**: Spare propellers, battery straps.

## Comfortable Budget Entry ($550-800)

Still an analog video system.

- **Radios under $150**: Radiomaster [Pocket](https://rcsearch.ru/?s=radiomaster+pocket), [TX12](https://rcsearch.ru/?s=radiomaster+tx12), [Zorro](https://rcsearch.ru/?s=radiomaster+zorro), [Boxer](https://rcsearch.ru/?s=radiomaster+boxer). ELRS 2.4GHz recommended.
- **Analog Goggles under $300**: Eachine [EV200D](https://rcsearch.ru/-c2397), [EV300D](https://rcsearch.ru/-c10462); [Skyzone SKY02](https://rcsearch.ru/?s=Skyzone+SKY02) (S, V, C, X versions are similar; OLED screens on X), [Cobra X](https://rcsearch.ru/-c20692). Check second-hand markets for deals.
- **Drones under $250**: Sets up to 3.5" (e.g., [GEPRC Smart 35](https://rcsearch.ru/-c27048)) or 5" racers like [iFlight Nazgul5](https://rcsearch.ru/-c45174) or [Titan XL5](https://rcsearch.ru/-c36404). Note: 6S batteries are more powerful but more expensive.
- **Charger + (if needed) PSU**: [SkyRC B6 Neo](https://rcsearch.ru/-c47308), ToolkitRC [M6D](https://rcsearch.ru/?s=toolkit+m6d), [M7AC](https://rcsearch.ru/-c39020).
- **Batteries**: CNHL/GNB/Tattu. Start with at least 3-5 packs.
- **Consumables**: Spare propellers, battery straps.
- [Tools like Hex drivers and nut wrenches](/shop/nessesary).

## Comfortable Entry ($800-1500)

Congratulations, you can now choose a video system to your liking!

- [Radio examples. Don't forget batteries!](/intro/tx)
- [Goggles and video systems for your needs](/intro/vrx)
- [Drone styles and radio link compatibility](/intro/flightstyles)
- [Chargers and power supplies](/intro/power#how-to-choose-a-charger)
- **Batteries**: CNHL/GNB/Tattu/Dogcom. Start with at least 3-5 packs.
- **Consumables**: Spare propellers, battery straps, and spare parts like arms, motors, or a backup camera if you plan to fly hard.
- [Tools like Hex drivers and nut wrenches](/shop/nessesary).