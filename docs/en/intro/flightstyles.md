# Types of FPV flying: what are they, and how do they differ?

First, it's important to determine what you're most interested in, what resources and budget you have, and what you want to achieve (at the very least, give it a try!). FPV drone flights are not always about video shooting; they don't last for half an hour like with Mavics, and they don't just rely on stabilization modes with GPS-assisted return and hover functions.

> If any terms are unclear, check this [glossary](https://propwashservice.ru/en/community/glossarium).

## Indoor flying

This niche is mainly occupied by microdrones, typically from the tiny whoop class, with frame sizes of 65 to 75 mm between motors, equipped with propeller guards, and powered by 1-2S batteries. If the indoor space is larger than the average apartment, you can use drones with 2-4S batteries (this is the minimum voltage typically required for drones with digital video systems like DJI FPV). However, in an apartment of 20-60 sq.m., flying such a drone would be challenging without sufficient piloting skills.

The takeoff weight of a tiny whoop is around 20-36g, and the lighter the drone, the more agile the flight and the less inertia it has. The average flight time of such drones is about 4 minutes, but it can range from 2 to 9 minutes depending on flight style, battery condition, and drone setup. Tiny whoops are often used by beginners for training and are also raced during the season from fall to spring (as outdoor flying isn't as fun in winter). Due to current regulations, indoor flights may be the only option for many. Tiny whoops can be assembled relatively easily since most components are plug-and-play, and soldering is rarely required. For a more agile drone, you can minimize weight by removing connectors, using 3D-printed canopies, and selecting lighter components (examples can be found in the [DIY components section](https://propwashservice.ru/en/shop/DIY)). There are also good options for ready-to-fly drones in this category, such as those from Happymodel, available with both analog video systems and digital systems like HDZero and Avatar. Tiny whoops use "all-in-one" (AIO) boards, where the flight controller, ESCs, receiver, and (optionally) analog video transmitter are integrated on a single board. When choosing a drone or AIO for it, pay attention to the receiver protocol and how it's connected. For ELRS systems, there are SPI connections (with receiver firmware version depending on Betaflight version) and serial (UART), which is preferred as SPI receiver support is gradually being phased out.

Examples of drones in this category include:

- happymodel mobula 8 dji (smallest size tiny whoop with DJI video system);
- happymodel mobula / moblite / mobeetle 6 (65mm) and 7 (75mm);
- betafpv meteor pro 65/75.

## Cinematic Flying

Cinematic flying involves drones equipped with action cameras to shoot videos for films, advertisements, and content creation. These drones are tools for filming rather than for freestyle tricks or long-distance flying. Typical cameras include insta360 go, caddx peanut, naked GoPro, or a full-sized GoPro. A naked GoPro is stripped down to its essential components, significantly reducing its weight, allowing it to be mounted on small drones called cinewhoops.

Cinewhoops are usually 2-3.5 inches in propeller size. Larger cinewhoops can carry a full-sized camera but with reduced flight time and performance. These drones typically fly for 2-5 minutes per battery, allowing the capture of several short clips that can be edited together later. Unlike Mavics, cinewhoops are more maneuverable but can't fly for 30 minutes at a time.

Cinewhoops are often used indoors or in confined spaces. Despite their small size, they can still cause damage, so caution is necessary. For flying around drift cars or cyclists, 5-inch freestyle drones are preferred, typically equipped with a full-sized GoPro Hero. These can fly up to 5 minutes and cover distances of about 2 km in one go.

If you're only interested in cinematic flights during travels, need a compact setup, and want to minimize the need to dive deep into the FPV world, you might want to consider the DJI Avata 2. However, be sure to read reviews and watch videos about what it offers and the conditions for its use before making a purchase. If you're looking to get familiar with FPV and try different types of drones, the Avata 2 might not be as appealing.

For flying near mountains that are far away from you, you'll need 7-13" drones, which can extend flight time to 10-30 minutes, depending on the payload, making them more or less maneuverable. However, they will definitely allow you to fly further as long as the video link holds. It's important to note that 7" drones are much more expensive, with a takeoff weight of 1-2 kg, and due to their size, flying near people is **strictly prohibited**.

Examples of cinewhoops and cinematic drones include:

- cinewhoops geprc cinelog 25/30/35, cinebot30;
- 5" geprc mark 5/iflight nazgul evoque/diatone roma/iflight aos 5;
- 7" iflight Chimera7 Pro V2, geprc moz7.

## Freestyle

Freestyle flying involves performing acrobatic tricks, either with or without an action camera (like a GoPro). It's all about flying for fun, without the pressure of following a specific style. While many associate freestyle with performing tricks like [Mr. Steele](https://www.youtube.com/@MrSteeleFPV), the beauty of freestyle is that you can fly however you like—it's your choice.

Typically, a freestyle drone has a 5-inch frame, often referred to as a "bus" frame, which accommodates a 30x30 stack or an all-in-one board with separate ESCs on each arm (though this configuration is no longer common for sub-7-inch drones). The camera angle is usually between 15 and 30 degrees, as a rule (though it's individual and you can choose any other), a larger camera angle makes it harder to perform certain tricks.

Motors in the 2306 format with medium kv, within the acceptable range for the battery (for 4S 2300-2700, preferably 2400-2500; for 6S 1700-2000, with 1800 being perfect for freestyle). Again, nobody should limit you—if you want faster flights, go for a higher kv; if you don't like momentum drifts, lighten the drone or go for a smaller 3" model. Why care about others' opinions? :)

Typical representatives of this class in BNF format include:

- iFlight Nazgul Evoque/Titan/AOS 5
- Diatone Roma
- GEPRC Mark5


## Drone racing

Racing drones are used in the drone racing discipline. The main difference from freestyle drones is compliance with race regulations. 

[Here](https://docs.google.com/spreadsheets/d/1Gdlgnqrr5GdPEuTgQub0CQ1S-vTG_-CpGC9lJ3ElOME/edit#gid=872057514) is information of MultiGP pilots, including equipment, camera settings, and firmware they use.

Notable BNF racing kits include:

- Foxeer Caesar
- iFlight Mach R5
- HGLRC Wind5

## Long Range (LR)

This class includes drones meant for long-duration and long-distance flights. Generally, it's about flight times of more than 10 minutes and distances over 5 km. Definitions vary, but LR drones are often distinguished by longer flight times and navigation sensors such as GPS, compass, and barometer.

For navigation features, the flight controller firmware needs to be iNav or PX4/ArduPilot. iNav is a sibling of Betaflight (used in most previously mentioned drones), but it focuses on navigation, offering features like hovering, circling a point, auto-takeoff/landing (for wings), and Return to Home (RTH). In Betaflight, GPS Rescue is the main navigation feature, allowing the drone to return to signal range in an emergency. Starting from Betaflight 4.4, GPS Rescue has become a full-fledged RTH function with automatic landing, assuming all checks (e.g., home point fixed, enough satellites) are passed. Before version 4.4, the drone would only return to the signal range and then drop if control wasn't regained. If you decide to use Betaflight for an LR drone, be sure to check [the issues in the GitHub repository](https://github.com/betaflight/betaflight/issues) to confirm there are no problems with GPS Rescue in your version.

ArduPilot and PX4 are more advanced, with a steeper learning curve but precise functions. However, their acro mode is not as smooth as Betaflight's.

Regarding LR drone configurations, apart from the aforementioned sensors, beacons and self-powered buzzers are often installed, as losing a drone in a remote location is easy, so it's worth considering rescue measures.

Flight times for long-range drones can reach up to 60 minutes in optimal conditions without an action camera, but on average, it's around 20-30 minutes (even with an action camera). Speeds are moderate, up to 80 km/h, and high-speed stunts or flights at 140+ km/h are not typical. Batteries are usually Li-Ion, as they offer more capacity than LiPo at the same weight (though with lower discharge rates, making them suitable only for LR).

In terms of size, LR drones range from 4" to 7" or larger (based on propeller size). However, if you need to fly far with a full action camera on board, you'll need a 7" drone; a 4" won’t handle the weight, and flight time will be short.

Examples of ready-to-fly LR BNF drones (all on Betaflight):

- iFlight Chimera LR (4-7")
- Flywoo Explorer LR4, Diatone Roma L5
- HGLRC Rekon (4-7")
- STPHobby Aquila 7"
- GEPRC MOZ7
