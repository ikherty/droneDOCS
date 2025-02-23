import{_ as t,a as r,b as a,c as o,d as s,e as i,f as n,g as l,h as c,i as h,j as m,k as d,l as p,m as u,n as f,o as g,p as b}from"./chunks/neck.2OqxeOsn.js";import{_ as w,c as y,a2 as v,o as k}from"./chunks/framework.M7IgKNHy.js";const L=JSON.parse('{"title":"How to Choose a Remote Control System?","description":"","frontmatter":{},"headers":[],"relativePath":"intro/tx.md","filePath":"en/intro/tx.md","lastUpdated":1740336170000}'),T={name:"intro/tx.md"};function R(S,e,_,x,q,E){return k(),y("div",null,e[0]||(e[0]=[v('<h1 id="how-to-choose-a-remote-control-system" tabindex="-1">How to Choose a Remote Control System? <a class="header-anchor" href="#how-to-choose-a-remote-control-system" aria-label="Permalink to &quot;How to Choose a Remote Control System?&quot;">​</a></h1><h2 id="summary" tabindex="-1">Summary <a class="header-anchor" href="#summary" aria-label="Permalink to &quot;Summary&quot;">​</a></h2><p>A Remote Control System (also known as R/C Equipment, transmitter, controller, or joystick) is a device that converts the positions of sticks (gimbals) and switches into commands for the drone.<br> The stick positions are sent to the radio transmitter (TX), which converts the signals into commands based on a specific data transmission protocol. These commands are transmitted to the drone &quot;over the air&quot; at a designated frequency (usually 900 MHz or 2.4 GHz). Onboard the drone, the commands are received by the radio receiver (RX) and sent to the flight controller (FC) for execution.</p><p class="image-container"><img src="'+t+'" width="600" alt="Communication between TX and drone" title="Communication between TX and drone"></p><h2 id="data-transmission-protocols" tabindex="-1">Data transmission protocols <a class="header-anchor" href="#data-transmission-protocols" aria-label="Permalink to &quot;Data transmission protocols&quot;">​</a></h2><p>An important aspect of choosing an RC link is the protocol used to transmit commands to the drone.</p><p>In 2024 the most popular radio systems are:</p><p><strong>TBS Crossfire</strong> - a long-range system operating at a frequency of 900 MHz. It allows achieving records of hundreds of kilometers under certain conditions (location, type of aircraft, transmitter settings, antenna placement, and much more). It can be found as external transmitters in various form factors and as an integrated module in the <a href="https://www.team-blacksheep.com/products/prod:tbs_tango_2" target="_blank" rel="noreferrer">TBS Tango 2</a>.</p><p>Advantages and disadvantages of TBS Crossfire:</p><ul><li>At first glance, it has user-friendly software for configuring and updating firmware. The documentation is very detailed, and support is responsive. However, when new versions are released, there are occasional connectivity issues that can only be discovered through chat forums or personal experience.</li><li>In theory, under ideal conditions, control via this system will remain for some time after a video link interruption. This is because the frequency is lower and the wavelength is larger than standard radio protocols operating at 2.4 GHz and the most common video transmission at 5.8 GHz. However, this does not guarantee that you will never lose connection with the equipment before encountering video issues.</li><li>The system is closed-source, making it quite difficult to convince the manufacturer to fix anything or to modify it yourself.</li><li>It is not suitable for professional-level racing due to noticeable (to top pilots) command transmission delays, as it operates at a frequency of 900 MHz. Overall, the receiver antennas are quite bulky, which does not add convenience.</li><li>It is expensive compared to some alternatives, as there is not much competition in the same segment.</li><li>At a packet rate of 150 Hz, it operates at shorter distances with the same transmitter power as ELRS 2.4 at a packet rate of 150-250 Hz.</li><li>Suitable for enthusiasts looking to set distance records and fly in challenging conditions.</li></ul><p><a href="https://www.expresslrs.org/" target="_blank" rel="noreferrer"><strong>ELRS (also known as ExpressLRS - Express Long Range System)</strong></a> - a system created by the community itself. There are versions available at 900 MHz and 2.4 GHz, with the 2.4 GHz version recommended. It is available as external transmitters in various form factors and as an integrated module in equipment from Radiomaster, Jumper, and other (less popular) brands.</p><p>Pros and Cons of ELRS:</p><ul><li>The codes and schematics are publicly available, motivating hardware manufacturers to produce receivers, transmitters, and flight controllers with built-in receivers, resulting in high competition. As a result, it offers the best price-to-quality ratio, with the most relevant hardware at minimal cost.</li><li>The command transmission range easily exceeds the operational range of the video stream (some users fly tens of kilometers, with the current record at 100 km. You can view the test table here: <a href="https://www.expresslrs.org/2.0/info/long-range" target="_blank" rel="noreferrer">ExpressLRS Long Range</a>).</li><li>Minimal data transmission delays, as you can choose a packet transmission frequency of up to 1000 Hz, making it excellent for racing (but keep in mind that range decreases with higher frequencies).</li><li>Among the available receivers on the market, there is a range of the lightest and most compact options (see <a href="https://www.happymodel.cn/index.php/2021/04/10/happymodel-2-4g-expresslrs-elrs-nano-series-receiver-module-pp-rx-ep1-rx-ep2-rx/" target="_blank" rel="noreferrer">Happymodel EP2</a>).</li><li>The software is gradually improving and becoming more user-friendly. The documentation is also extensive and detailed. To avoid firmware issues, it is recommended to use the most popular hardware with the least number of &quot;bugs&quot; over the project&#39;s growth (for example, Happymodel). You can inquire about issues in chats and from the community.</li><li>New hardware from manufacturers appears every month, and developers may not always keep up with software releases or bug fixes. Therefore, be prepared to wait for firmware or fixes for some boards. If you find a problem, you can report it or search for related issues in the <a href="https://github.com/ExpressLRS/ExpressLRS" target="_blank" rel="noreferrer">ExpressLRS repository</a> and you will definitely get a solution soon.</li></ul><p>Competitors to ELRS, but with closed-source firmware: <a href="https://www.team-blacksheep.com/tracer/" target="_blank" rel="noreferrer"><strong>TBS Tracer</strong></a> - in short: &quot;Crossfire stretched for racers.&quot; It operates at 2.4 GHz (Crossfire is slower at 900 MHz) and is similar in convenience. It is not as fast as ELRS, nor as long-range as Crossfire; initially, there were distance issues. Over time, new firmware updates have been released to address these, but some issues still persist. It is available as a standalone module and as an integrated transmitter in the <a href="https://www.team-blacksheep.com/products/prod:tbs_mambo" target="_blank" rel="noreferrer">TBS Mambo</a> equipment.</p><p><a href="https://www.immersionrc.com/fpv-products/ghost/" target="_blank" rel="noreferrer"><strong>IMMERSION RC GHOST</strong></a> - a competitor to ELRS focused on minimizing command transmission delays. It is most common in the United States, likely due to its availability. It is primarily used by top racers and is available only as an external transmitter.</p><blockquote><p>Outdated and <strong>not recommended</strong> for drones since 2020: FrSky, FlySky, DSMX (Spektrum)...</p></blockquote><p>Typically, beginners are advised to start with ELRS due to its low cost and accessibility. However, if latency is not crucial and the focus is mainly on long-range flying in various challenging locations, consider looking into TBS Crossfire.</p><p><a href="https://oscarliang.com/rc-protocols/" target="_blank" rel="noreferrer">Detailed information on protocols</a>.</p><h2 id="transmitter-and-receiver" tabindex="-1">Transmitter and Receiver <a class="header-anchor" href="#transmitter-and-receiver" aria-label="Permalink to &quot;Transmitter and Receiver&quot;">​</a></h2><p>The transmitter and receiver enable communication between the equipment and the drone.<br> The transmitter can be either integrated (soldered onto the board) or external (plugged into a slot on the back of the equipment). An integrated module is generally more convenient due to its compactness and may consume less power than an external one. The maximum power of an external transmitter can be limited to 250 mW. However, this is sufficient even for distances of up to 50 km. Looking at the <a href="https://www.expresslrs.org/software/switch-config/" target="_blank" rel="noreferrer">test table on the ELRS website</a>, in some cases, it might not be enough.</p><blockquote><p>Below are the equipment without the casing and the external ELRS module. On the board, you can find the transmitter module. The external transmitter module is installed in a special socket on the outside of the equipment.</p></blockquote><p class="img-inline"><img class="left" style="height:340px;" src="'+r+'" alt="TX inside" title="TX inside"><img class="right" style="height:340px;" src="'+a+'" alt="External ELRS TX" title="External ELRS TX"></p><p>The receiver is a small board with antenna(s), installed on the drone and connected to its flight controller via a <a href="https://en.wikipedia.org/wiki/Universal_asynchronous_receiver-transmitter" target="_blank" rel="noreferrer">UART (Universal Asynchronous Receiver-Transmitter)</a>.</p><blockquote><p>Below are the Happymodel EP2 ELRS receiver with a ceramic antenna and the Ghost receiver with a dipole antenna.</p></blockquote><p class="image-container"><img style="height:300px;" src="'+o+'" alt="Happymodel ELRS 2.4GHz receiver" title="Happymodel ELRS 2.4GHz receiver"><img style="height:300px;" src="'+s+'" alt="Ghost receiver" title="Ghost receiver"></p><p><strong>Differences in transmitter and receiver manufacturers do not matter as long as both work on the same protocol. However, if you&#39;re dealing with ELRS, it&#39;s a good idea to review recommendations and hardware tests from different manufacturers.</strong></p><h2 id="choosing-a-radio-transmitter" tabindex="-1">Choosing a Radio Transmitter <a class="header-anchor" href="#choosing-a-radio-transmitter" aria-label="Permalink to &quot;Choosing a Radio Transmitter&quot;">​</a></h2><p>An updated <a href="https://oscarliang.com/radio-transmitter/" target="_blank" rel="noreferrer">article</a> in English about radio transmitters worth checking out.</p><p>A concise <a href="https://www.fpvknowitall.com/fpv-shopping-list-controller-and-receiver/" target="_blank" rel="noreferrer">list</a> without unnecessary details. If the transmitter you&#39;re interested in is not listed in the articles above, it&#39;s either too new or not widely preferred by the community.</p><h2 id="recommended-transmitters" tabindex="-1">Recommended Transmitters <a class="header-anchor" href="#recommended-transmitters" aria-label="Permalink to &quot;Recommended Transmitters&quot;">​</a></h2><p>It is highly recommended to consider transmitters running on OpenTX firmware (the predecessor of EdgeTX). It functions like the operating system of a computer. With it, you can be sure of easy simulator connections and regular updates with new features.</p><p><a href="https://www.radiomasterrc.com/products/tx16s-mark-ii-radio-controller" target="_blank" rel="noreferrer"><strong>RADIOMASTER TX16S</strong></a> - Ideal if you have large hands, need many switches (toggles, pots, knobs), and for some reason, want a big screen.</p><p>Prices typically start at $200, and there are versions with built-in ELRS (be sure to read the description carefully to avoid confusing it with the multimodule (4in1, CC2500), which does not include ELRS or Crossfire). You can install an external transmitter of your choice ($30-$250). It comes in various modifications – colored cases, aluminum gimbals, and touchscreens. Additionally, colorful mods are available for most Radiomaster transmitters.</p><p class="image-container"><img src="'+i+'" height="400" alt="RADIOMASTER TX16S" title="RADIOMASTER TX16S"></p><p><a href="https://www.radiomasterrc.com/products/boxer-radio-controller-m2?_pos=1&amp;_sid=194aad403&amp;_ss=r" target="_blank" rel="noreferrer"><strong>RADIOMASTER BOXER</strong></a> – A mid-sized option with full-size gimbals and enough switches for even airplane enthusiasts.</p><p>Priced at $130-$190 depending on the version, there is a model with a built-in 1W ELRS module and multimodules, available in transparent or black casing. It requires two 18650 Li-ion batteries for power, though a 2S pack of 21700 cells will also fit. This transmitter is considered a compromise between the TX16 and more compact options listed below. It&#39;s suitable for most beginners and beyond.</p><p class="image-container"><img src="'+n+'" height="400" alt="RADIOMASTER Boxer" title="RADIOMASTER Boxer"></p><p><a href="https://www.radiomasterrc.com/products/tx12-mark-ii-radio-controller?_pos=1&amp;_sid=02bbb6530&amp;_ss=r" target="_blank" rel="noreferrer"><strong>RADIOMASTER TX12 mk2</strong></a> – A compact &quot;brick&quot; version with smaller gimbals.</p><p>Prices usually start at $80, and there are versions with a built-in ELRS module (make sure to read the description carefully). You can also buy colorful casings and aluminum gimbals separately. It requires two 18650 Li-ion batteries for power. This is a great beginner option if you&#39;re not sure what you want and need something compact. It&#39;s easy to sell in the second-hand market if, for any reason, it doesn&#39;t meet your expectations.</p><p class="image-container"><img src="'+l+'" height="400" alt="RADIOMASTER TX12" title="RADIOMASTER TX12"></p><p><a href="https://www.radiomasterrc.com/collections/transmitter/products/pocket-radio-controller-m2" target="_blank" rel="noreferrer"><strong>RADIOMASTER Pocket</strong></a> - Simplified full version of a controller in a &quot;pocket&quot; form factor, inspired by Tango.</p><p>Prices start at $54, and there are versions with built-in ELRS (read descriptions carefully). The gimbals are minimal size, and there’s currently no way to replace them with higher quality ones. You can separately purchase colorful shells. Unfortunately, the manufacturer only provided buttons with no switches in favor of compactness. For some, this may not be a problem, but <a href="https://t.me/propwash/304" target="_blank" rel="noreferrer">most people prefer</a> using a switch for arming, as it&#39;s a faster and more reliable method compared to a button. You can install an external transmitter module if needed. Powered by two 18650 lion batteries. A good option for a budget setup when you&#39;re unsure what you want and need compactness. Being a fresh product, it&#39;s unclear what issues might arise.</p><p class="image-container"><img src="'+c+'" height="400" alt="RADIOMASTER TX12" title="RADIOMASTER Pocket"></p><p><a href="https://www.team-blacksheep.com/products/prod:tbs_tango_2" target="_blank" rel="noreferrer"><strong>TBS TANGO 2</strong></a> - Compact controller with a built-in Crossfire transmitter, ideal for traveling light. Don’t confuse it with the first version 😃</p><p>There’s a regular version for $160 and a pro version for $200. In Russia, prices start from 20,000 rubles due to supply chain challenges, according to sellers. The main difference in the pro version is the foldable gimbals, although this feature doesn’t offer a major advantage. The built-in TBS CROSSFIRE transmitter’s power depends on the board version. If needed, you can install an external transmitter. There&#39;s also an option to add a low-power ELRS module for nearby flights, as shown in <a href="https://www.youtube.com/watch?v=2cn96u_nlnw" target="_blank" rel="noreferrer">this video</a>. The screen is quite small, but it&#39;s not essential for FPV flights.</p><p>It uses buttons instead of switches, which may not suit everyone, and it’s not always possible to instantly &quot;disarm&quot; (stop motors). The gimbals sometimes face issues: they use &quot;super technology&quot; with a single sensor for two axes, so calibration must be done strictly according to the manufacturer’s instructions. The gimbals are integrated into the motherboard, so they can&#39;t be easily replaced, unlike in Radiomaster controllers. There are occasional problems with screen glitches, &quot;bricking&quot; during firmware updates, and calibration requirements at startup. Despite this, it remains a popular choice.</p><p class="image-container"><img src="'+h+'" height="400" alt="TBS Tango 2"></p><p><a href="https://www.team-blacksheep.com/products/prod:tbs_mambo" target="_blank" rel="noreferrer">TBS Mambo</a> - Standard &quot;brick&quot; controller for TBS Tracer fans.</p><p>Price: $140. It comes with a built-in TBS Tracer transmitter. The controller has enough switches, a proper black-and-white screen, and a slot for an external transmitter. Some say that the RadioMaster Boxer is modeled after the Mambo—both share a nearly identical form factor and similar switch layout.</p><p>Cons: It feels cheaper than the previously mentioned controllers, with gimbals similar to those of the Tango 2. The &quot;brick&quot; form factor might not be to everyone’s taste.</p><p class="image-container"><img src="'+m+'" height="400" alt="TBS Mambo" title="TBS Mambo"></p><p><strong><a href="https://www.jumper-rc.com/products/transmitters/t-pro/" target="_blank" rel="noreferrer">Jumper T-Pro</a>, <a href="https://www.jumper-rc.com/products/transmitters/t-lite/" target="_blank" rel="noreferrer">Jumper T-Lite</a>, <a href="https://www.radiomasterrc.com/products/zorro-radio-controller?_pos=1&amp;_sid=49612d66c&amp;_ss=r" target="_blank" rel="noreferrer">Radiomaster Zorro</a></strong> - transmitters similar in form factor to Tango 2 with built-in ELRS. Yes, <strong>but...</strong></p><p>Prices range from $50 to $100, offering a compromise when you want compactness. There are versions with a built-in ELRS module and a multimodule, but don’t confuse them! All contenders have noticeable drawbacks, so it is advisable to check reviews before making a purchase if you have chosen one of them.</p><p>The main drawback of the Zorro is the 18350 batteries (a non-standard, hard-to-find option for Li-Ion batteries). Based on observations and personal experience with the original batteries from Radiomaster, during the first cycles after a full charge, the operating time of the equipment is 2-3 hours. After six months of active use, this time drops to 1 hour. If they had a capacity of not 900mAh, but 3000mAh, like typical 18650 batteries, you would have to think about recharging them even less often, and the lifespan would be longer. In terms of size, Zorro is similar to the Radiomaster TX12, so despite its joystick-style, there is no significant space-saving in your backpack. There’s nothing preventing you from having a spare set of batteries or connecting an external one, but believe me, this still adds extra discomfort.</p><p>The Jumper T-Pro and Jumper T-Lite transmitters have one main problem—they are from Jumper. This company repeatedly causes a lot of problems for no reason. They were the first to release the T16 transmitter, but it was assembled with ribbon cables that quickly broke. They were the first to create what seemed like a fully functional and very compact transmitter (T-Lite), but after a month or two, it starts having issues—either it won’t turn on or something won’t work. Interestingly, the solutions to these problems from the manufacturer can be found on forums, and they look like &quot;remove this capacitor from the board.&quot; Yes, I wouldn&#39;t believe it either if I hadn&#39;t encountered it personally. As for the T-Pro, which seems to be the perfect replacement for the Tango 2, it starts losing stick values when the transmitter power increases. The most ridiculous part is that the manufacturer, aware of this problem, released T-Pro V2, but did nothing to address it.</p><p>However, these transmitters are not entirely bad, and there are a considerable number of pilots who fly them, turning a blind eye to the issues. These devices are easily modifiable: you can replace the antenna and sticks (as seen in the T-Lite example <a href="https://youtu.be/wslSmuW3DDI" target="_blank" rel="noreferrer">here</a>). This allows you to customize the transmitter and improve some of its parts. I wouldn’t recommend them as a first transmitter, but the choice is still yours.</p><p class="image-container"><img src="'+d+'" height="300" alt="Jumper T-Pro" title="Jumper T-Pro"><img src="'+p+'" height="300" alt="Jumper T-Lite" title="Jumper T-Lite"><img src="'+u+'" height="300" alt="RadioMaster ZORRO" title="RadioMaster ZORRO"></p><p><strong><a href="https://www.jumper-rc.com/t20-p0117.html" target="_blank" rel="noreferrer">Jumper T-Pro</a></strong> - flattened boxer and still a rare beast</p><p>Prices start at $110. There are versions with a multimodule, ELRS on 2.4GHz, and ELRS 900MHz—do not confuse them! It&#39;s worth noting that the sticks are also available in two types—Hall effect and resistive—and in this case, the version with resistive sticks is more expensive. It seems that Jumper has &quot;fixed&quot; the issue of drifting stick values by replacing the sticks, but this is not certain. It has the necessary number of switches, full-size sticks, and is a relatively compact option. How it will perform in practice remains to be seen; people are gradually purchasing it and sharing their impressions.</p><p class="image-container"><img src="'+f+'" height="400" alt="Jumper T20" title="Jumper T20"></p><h2 id="necessary-accessories" tabindex="-1">Necessary Accessories <a class="header-anchor" href="#necessary-accessories" aria-label="Permalink to &quot;Necessary Accessories&quot;">​</a></h2><ul><li>Battery - if the transmitter does not have a built-in battery, you need to acquire a suitable one for the device. Typically, 2S setups or two Li-Ion 18650 cells in a 2S adapter are used. <blockquote><p>A link to the <a href="https://propwashservice.com/intro/power.html" target="_blank" rel="noreferrer">article about drone batteries</a> is attached separately.</p></blockquote></li></ul><p class="image-container"><img src="'+g+'" height="200" alt="Battery compatible with RadioMaster TX16S" title="Battery compatible with RadioMaster TX16S"></p><ul><li>Neck strap - holding the transmitter in your hands for a couple of hours can be quite a challenge. It is recommended that the strap has a Fastex (a plastic clip in the middle) for situations when you need to put down the transmitter without removing the strap over your head, where you likely have FPV goggles.</li></ul><p class="image-container"><img src="'+b+'" height="200" alt="Neck Strap" title="Neck Strap"></p> ## Transmitter Setup <p><a href="https://edgetx.gitbook.io/edgetx-user-manual/b-and-w-radios" target="_blank" rel="noreferrer">Detailed documentation on EdgeTX</a></p>',67)]))}const H=w(T,[["render",R]]);export{L as __pageData,H as default};
