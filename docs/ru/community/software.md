# Используемое программное обеспечение

```
Для Windows файлы с расширением .EXE
Для Linux .rpm, .deb
Для Mac .dmg
Для Android .apk
```

> Фразы "Release Candidate (RC)", "Pre-release" означают следующее: это релиз-кандидат, предназначенный для тестирования, и некоторые вещи еще нуждаются в исправлении и тонкой настройке. Пожалуйста, используйте его с осторожностью и сообщайте о любых проблемах [по адресу.](https://github.com/betaflight/betaflight-configurator/issues)
Чем новее релиз-кандидат, тем больше исправлений, но ошибки все еще могут оставаться ввиду человеческого фактора в тестировании и возможных ошибок при слиянии веток разработки(см. как работает git). Если вы не готовы к рискам, связанным с этим, рекомендуется использовать только релизы (Release). Настоятельно рекомендуется использовать соответствующие версии прошивок и конфигураторов: в INav нумерация идентична, в Betaflight для 4.5.\* версии нужен конфигуратор 10.10.\* или новее, для 4.4.х нужен 10.9.х, для прошивок регуляторов и приемников необходима просто последняя версия конфигуратора, обратная совместимость есть.

## Для полетных контроллеров

Конфигуратор Betaflight Configurator (для прошивки полетного контроллера):

Десктоп версия, также доступна под андроид - https://github.com/betaflight/betaflight-configurator/releases

Онлайн версия - https://app.betaflight.com/

Конфигуратор INav Configurator (для прошивки полетного контроллера):
https://github.com/iNavFlight/inav-configurator/releases

Конфигуратор QuickSilver (для прошивки полетного контроллера **tiny whoop-а**, потомок silverware):
https://config.bosshobby.com/#/home

Конфигуратор KISS ULTRA (для прошивки полетного контроллера KISS ULTRA):
https://github.com/KissUltra/gui/releases

Конфигуратор KISS (для прошивки полетного контроллера KISS или Fettec):
https://github.com/flyduino/kiss-gui/releases

Конфигуратор Mission Planner (для прошивки Ardupilot (см. [список поддерживаемых полетных контроллеров](https://ardupilot.org/copter/docs/common-autopilots.html))):
https://ardupilot.org/planner/docs/mission-planner-installation.html

Конфигуратор QGroundControl (для прошивки PX4 и Ardupilot (см. [список поддерживаемых полетных контроллеров](https://discuss.px4.io/t/list-of-px4-supported-fc-hardware/24901))):
http://qgroundcontrol.com/downloads

Конфигуратор FlightOne FalcoX Alpha (для прошивки полетных контроллеров от FlightOne или полетников с купленной прошивкой FalcoX):
https://flightone.com/download.php?version=alpha

Конфигуратор EmuFlight (для прошивки полетного контроллера):
https://github.com/emuflight/EmuConfigurator/releases

## Для регуляторов

Конфигуратор Bluejay Configurator (для прошивки регуляторов прошивкой BLheli_S; BlueJay, с возможностью использования rpm-фильтров) (8bit):
https://esc-configurator.com (также поддерживает прошивку AM32 для 32bit регуляторов)

Конфигуратор AM32 (для регуляторов с прошивкой AM32):
https://am32.ca/

Конфигуратор BlHeli Suite (для настройки регуляторов blheli32) (32bit):
https://github.com/bitdump/BLHeli/releases

## Для RC приемников и передатчиков

Конфигуратор ExpressLRS (для прошивки приемников и передатчиков ELRS):
https://github.com/ExpressLRS/ExpressLRS-Configurator/releases

Online конфигуратор ExpressLRS: https://expresslrs.github.io/web-flasher/

## Для TBS

Конфигуратор Agent M (для прошивки Team BlackSheep продукции):
https://www.team-blacksheep.com/agentm

## Для аппаратуры

Конфигуратор EdgeTX (для прошивки аппаратур на базе OpenTX):
https://buddy.edgetx.org/#/flash

## Для прошивки видеосистем

DJI Assistant 2 **(DJI FPV series)** (для прошивки DJI goggles v2, caddx vista, dji air unit):
https://www.dji.com/global/downloads/softwares/dji-assistant-2-dji-fpv-series

DJI Assistant 2 **(Consumer Drones Series)** (для прошивки DJI goggles 2, integra, O3 air unit):
https://www.dji.com/global/downloads/softwares/dji-assistant-2-consumer-drones-series

Прошивки для Walksnail Avatar:
https://avatar-firmware.d3vl.com (если недоступно, откройте через VPN или возьмите файлы [тут](https://github.com/D3VL/Avatar-Firmware-Updates))

Прошивки для HDZero:
https://www.hd-zero.com/document

## Симуляторы

Симуляторы находятся на отдельной странице:
https://propwashservice.com/ru/intro/sim.html

## Для изучения логов

Просмотрщик логов Betaflight Blackbox Explorer:

Десктоп версия - https://github.com/betaflight/blackbox-log-viewer/releases

Онлайн версия - https://blackbox.betaflight.com/

Анализатор логов PIDtoolbox (начиная с версии 0.7 стал платным, доступен по подписке на патреоне - https://www.patreon.com/ThePIDtoolboxGuy):
старые версии - https://github.com/bw1129/PIDtoolbox/releases

Онлайн просмотрщик логов аппаратуры на базе OpenTx:
https://maxbl4.github.io/otx/index.html

Онлайн-помогатор для настройки по методике Россера:
https://fpv-drone.info/tools/tuning-tools/

## Фиксеры драйверов для Windows

Ссылки на скачивание находятся на главной странице бетафлайт конфигуратора в желтой зоне, но на всякий случай продублированы здесь:

CP210x USB to UART Bridge Virtual COM Port (VCP) driver (на случай, если система не корректно распознает порт, по которому подключен полетный контроллер или аппаратура):
https://www.silabs.com/developers/usb-to-uart-bridge-vcp-drivers

Zadig (для обновления USB драйверов, чаще всего нужен при проблемах в режиме бутлоадера(загрузчика)):  
https://zadig.akeo.ie

ImpulseRC driver fixer (фиксит драйвера для работы с полетным контроллером):
https://impulserc.com/pages/downloads

Драйвера для DFU и COM AT32: [по ссылке](https://drive.google.com/drive/folders/1N9b9aRWggz9G2T83CFeXRQgvVgxlf5Y3?usp=drive_link)

Также полезные драйвера можно скачать здесь: [архивы в облаке](https://clck.ru/35Xp2W).

## Для настройки GPS

Ublox center: https://www.u-blox.com/en/product/u-center

УСТАРЕВШЕЕ:

Конфигуратор BLHeli_S Configurator (для прошивки регуляторов, без возможности использования rpm-фильтров) (8bit):
https://github.com/blheli-configurator/blheli-configurator/releases

Конфигуратор (jazzmaverick) BLHeli_M Configurator (для прошивки регуляторов, с возможностью использования rpm-фильтров) (8bit):
https://github.com/Asizon/blheli-configurator/releases/
