# Brief overview of batteries and chargers

## What types of batteries are used, and what do the numbers on them mean?

Batteries are selected based on the specific tasks and motor-propeller group of the aircraft. Manufacturers often list approximate specifications for batteries suited to typical drone classes in product descriptions. But what do these numbers mean?

For example, let's consider a LiPo (lithium-polymer) battery with the following specs: 6S (number of cells and their configuration) 1300mAh (capacity, measured in milliamp-hours) 100C (C-rating). Sometimes the battery's storage voltage is also indicated, such as 22.2V (3.7-3.8V per cell).

The configuration is as follows: the number before the 'S' indicates the number of cells connected in series, while 'P' (if mentioned) shows how many are connected in parallel.

If a battery is labeled 2S or 2S1P (1P is often omitted), this means there are two cells connected in series. According to basic physics, the total capacity of the battery remains the same as one cell's capacity, but the total voltage is the sum of all the cells' voltages. Each LiPo cell can be charged to 4.2V. So, a 2S1P battery will have a fully charged voltage of 4.2 * 2 = 8.4V.

For example, in a 2S3P configuration, two cells are paralleled three times. In a parallel connection, the total capacity is the sum of the capacities of all the cells, while the voltage remains the same. Thus, the total voltage of this pack would be 4.2 * 2 = 8.4V, and the capacity would be three times that of a single cell.

Returning to our initial example: 6S means 6 cells connected in series, with a maximum battery voltage of 4.2 * 6 = 25.2V.

To calculate the discharge current of the battery, multiply the capacity (Ah, amp-hours) by the C-rating. In the example, 1.3Ah * 100C = 130A, which is the battery's discharge rate over a long interval or peak, depending on how the manufacturer specifies it. Sometimes you’ll see a dual C-rating, such as 100/120C, where 100C is continuous, and 120C is peak (short-term). There's debate in the community about the accuracy of C-ratings, but the general consensus is that you can still use them to compare batteries from the same manufacturer.

## How to choose a charger?

Key criteria include:

- Budget
- Size
- Number of ports
- Power and balancing current
- Built-in power supply (PS)
- Supported battery cell count
- Brand

A basic charger and PS can cost around 20$. At this price, you’ll likely get an old, weak charger and a generic power supply. It's a gamble whether it will charge and balance your batteries properly, and you might be in for an unpleasant surprise if it overcharges the batteries, possibly leading to a fire.

A good charger can last for many years, so it's often a one-time investment until you need better features. Therefore, I don’t recommend skimping on this. Prices vary, but be ready to spend $60 or more for a decent charger.

There are compact, “pocket” chargers, which are convenient to carry around, but they usually don’t have a built-in power supply, so you’ll need to find a compatible one. “Stationary” chargers are bulkier and often come with a built-in PS. Many hobbyists have both types: a “travel” charger for use with a car battery or spare large battery and a multi-port one for home use.

Some chargers come with 1-4 ports, meaning you can charge 1-4 batteries simultaneously, with each port acting as an independent charger. Not many chargers have 4 ports, but popular 4-port models include the SkyRC Q200Neo and Hota F6.

[Skyrc q200](https://rcsearch.info/-c49307)is a well-known, reliable charger, though it's somewhat outdated. The new Q200Neo model is smaller, features a USB Type-C PD output, but otherwise retains the same functionality.

The Hota F6 is a compact option without a built-in power supply, priced [around $100](https://rcsearch.info/-c24672).

If you’re not set on popular models and want to choose based on your needs, you’ll need to calculate the charger's power requirements. Charging high-drain batteries (which may wear out within a few months) at up to 5C is often practiced when quick recharges are necessary for more training. However, the standard recommendation is to charge at 1C. Some hobbyists report charging their batteries at 2C without faster degradation.

Let’s go back to the example of a 6S 1300mAh 100C battery. Power (N) = V * I = 6 * 4.2 * 1.3 = 32.76W at 1C, 65.52W at 2C. Adding a 20% buffer gives 78.624W. So, a single-port 80W charger would suffice, but what about future needs? If you get a 7" drone, you’ll need larger batteries, and a lower-power charger might not handle even 1C charging, making the process take over an hour. My recommendation: the price difference isn’t too high, so consider a 200-600W charger with 2-4 ports.

Regarding balancing current—the higher the balancing current, the quicker the voltage will equalize at the end of the charge cycle. Typically, the charger reaches 97+% quickly, and then balancing begins. A charger with a balancing current of 0.4A will take twice as long to balance as one with balancing current=0.8A.

A built-in power supply isn’t necessary. You can always repurpose a laptop or computer PS by soldering the right connector for your charger, or you can buy a quality PS for $30+ that fits your charger’s power needs.

Most new chargers support up to 6S batteries, but there are exceptions, like the Toolkit M4DAC, which can be a disappointment. If you buy it without checking, you might regret it, especially since most new drones are designed for 6S.

Lastly, don’t forget that reputable brands are more reliable. Avoid imax B6 clones unless you want a fire hazard. Stick to trusted brands like Hota, SkyRC, and ISDT. ToolkitRC is also recommended, though some users report balancing issues or occasional defects. Be cautious during the first few charge cycles before making it your go-to charger.

## Recommended chargers

### For whoop (1S) batteries

[VIFLY WhoopStor v2/v3](https://rcsearch.info/-c46257)

### Single-port chargers without PS

[SkyRC b6 neo](https://rcsearch.info/-c47308),
[ToolkitRC M6](https://rcsearch.info/-c6063), [ToolkitRC M7](https://rcsearch.info/-c25346), [ToolkitRC m4 pocket](https://rcsearch.info/-c32468),
[ISDT PD60](https://rcsearch.info/-c16236), [ISDT Q6 nano](https://rcsearch.info/-c14405)

### Single-port chargers with built-in PS

[iSDT 608AC](https://rcsearch.info/-c8911),
[ToolkitRC M7AC](https://rcsearch.info/-c39020)

### Dual-port chargers without PS

[ToolkitRC M6D](https://rcsearch.info/?s=toolkit+m6d)

### Dual-port chargers with built-in PS

[Hota D6 Pro](https://rcsearch.info/-c5511),
[ISDT D2](https://rcsearch.info/-c2175)

### Four-port chargers without PS

[Hota F6](https://rcsearch.info/-c24672)

### Four-port chargers with built-in PS

[SkyRC Q200neo](https://rcsearch.info/-c49307)
