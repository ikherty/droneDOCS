# Rates in Betaflight

Found in the **PID Tuning** section, under the **Rateprofile Settings** tab.

## Rate Systems in Betaflight

The classic Betaflight rate system (the default up to version 4.2) used three parameters:

- **RC Rate**: Establishes a linear relationship between stick position and rotation speed. The maximum speed in deg/s at full stick deflection is 200 times the RC Rate value in the configurator.
- **Super Rate**: Exponentially increases the linear speed as the sticks move away from the center. It has almost no effect on the center position. The curve's transition point remains fixed. A Super Rate of 0.5 doubles the speed at maximum stick deflection.
- **RC Expo**: Adds a secondary curve on top of the previous values around the center stick position without affecting the maximum speed. An RC Expo of 0.5 in the configurator smooths the speed curve near the center by a factor of 2.

Confusing and not entirely intuitive, right?

When we tune our rates, we primarily care about three things:
1. **Center Sensitivity**: How "twitchy" the reaction is near the center value.
2. **Maximum Rotation Speed**: How fast the aircraft rotates during a full flip or roll.
3. **Exponential Transition**: How quickly the sensitivity changes as we move the stick from the center to the edge.

Although the classic Betaflight rate scheme has been around for a long time, it has many drawbacks. This led to the introduction of the **Actual** system in version 4.2 (along with others used by different firmwares), which became the primary system starting with 4.3. The parameters of the "Actual" system are much more understandable for the average user, allowing specific parts of the curve to be changed without shifting the rest of the range.

### Actual Rate Parameters:

- **Center Sensitivity**: Directly sets the "base" linear response to stick movement. The value entered represents the actual stick sensitivity in the center in degrees/sec. This is the "feel" of the center responsiveness.
- **Max Rate**: Sets the desired maximum rotation speed in degrees/sec. It creates a "wedge-shaped" linear graph from the center value to the max speed at full deflection.
- **Expo**: An exponential coefficient that curves the interval between the center and the maximum value.

[Link to the original Pull Request](https://github.com/betaflight/betaflight/pull/9495)

**Ultimately, it is recommended to use the "Actual" system. All further recommendations will focus on it.**

## Which Rates are Best to Use?

There are no universal rates; they are chosen based on your flight style. Generally, "low rates" are used for smooth flights or racing, while "high rates" are needed for "sharp" freestyle. "Low" typically means a Max Rate around 400-550 deg/sec, while "high" Max Rate is usually between 800-1200 deg/sec, depending on how fast you want the drone to flip or roll.

Many pilots set **Center Sensitivity** in the 70-150 range. **Expo** is highly individual. You can change values in the table and watch the "Rates Preview" graph beneath it. You can visualize the roll and pitch axes of your controller and see how the rotation speed changes at specific stick deflections. If your radio is connected, you can see the 3D model rotate in real-time.

Regarding axes (the rows in the columns): you can set identical values for all axes, or change any parameter for a specific axis to your liking. Don't be afraid to experiment. Keep in mind that high rates make the drone very maneuverable, while at very low rates, you might not have enough time to complete a flip or roll at a low altitude. Over time, you'll better understand which rates suit you. As they say: the best rates are the ones you've flown 1,000 hours on!

## What Else Can Be Adjusted on the Rates Tab?

There are 4 additional parameters: **Throttle Limit**, **Throttle Limit %**, **Throttle Mid**, and **Throttle Expo**. These control the throttle axis.

- **Throttle Limit**: If you are happy with your throttle response, leave these alone.
  - **Clip**: If you want the throttle stick to have a smaller range (common for racers), set "Throttle Limit = Clip" and "Throttle Limit %" to your desired end value. Your 0-100% stick travel will then operate within that range.
  - **Scale**: If you want to "cap" or limit the motor's power, set "Throttle Limit = Scale" and "Throttle Limit %" (e.g., 80%). Motor RPM will then scale from 0 to 80% across the full stick range.
- **Throttle Mid & Throttle Expo**: Usually used by freestyle and cinematic pilots. Racers prefer a linear throttle response.
  - **Throttle Mid**: The throttle level where you want to apply the exponent for smoother control.
  - **Throttle Expo**: The strength of that exponent. An exponent around the "hover" throttle level makes it easier to maintain altitude and perform smooth takeoffs and landings.

To set these, check your **Throttle position** on the OSD while hovering. If the drone hovers at 30% throttle, set Throttle Mid to 0.3. A Throttle Expo of 0.3-0.4 is usually sufficient. Don't be afraid to change these; you won't break the drone.

## Rate Profiles

You can create multiple rate profiles and switch between them before or during flight. This is useful for different flight styles, letting someone else try your drone, or training a beginner.

You can switch profiles via:
- **OSD Menu**: Entered via [stick commands](https://2.bp.blogspot.com/-6j_FSBSycEI/XLUUY90qklI/AAAAAAAAEug/xsLM5y7Sya8AeYKKshsgWrf7NLs01DSYgCLcBGAs/s1600/StickPositions%2Bcopy.jpg).
- **Betaflight LUA Script**: From your radio ([download here](https://github.com/betaflight/betaflight-tx-lua-scripts/releases)).
- **Adjustments Tab**: Using a physical switch (Expert Mode on -> "Rate Profile Selection" in the "then apply" field).

Most pilots stick to one profile. If you only use one, just ensure you don't accidentally switch to a default profile mid-flight.

## Recommended Rates for Beginners (by ikherty)

To avoid over-correcting and learn smoother control, I recommend starting with low rates:

(Apply to all axes):
- **Center Sensitivity**: 70
- **Max Rate**: 400
- **Expo**: 0.2
- **Throttle Mid**: Hover throttle (approx. 0.3 for a standard 5", 0.4-0.55 for heavy whoops)
- **Throttle Expo**: 0.35
