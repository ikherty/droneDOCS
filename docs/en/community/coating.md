# Все про влагозащиту

Без влагозащиты летать в снег и дождь на дронах рисковая затея - при попадании влаги на работающую электронику возможны (и в большинстве случаев возникают) глюки в виде внезапного отказа двигателей, потери связи, а при падении в соленую воду (море) окислы и повреждение схемы.

## Что необходимо покрывать герметиком?

Для максимальной защиты необходимо покрыть все ножки элементов электронных плат, если ножки находятся [под корпусом](https://yandex.ru/images/search?from=tabbar&text=bga%20qnf%20корпус%20smd), необходимо промазать корпус по периметру. Наносить на сам корпус черных элементов не обязательно, а в случае с [конденсаторами](https://yandex.ru/images/search?from=tabbar&text=smd%20capacitor) и [резисторами](https://yandex.ru/images/search?from=tabbar&text=smd%20resistor) необходимо нанести поверх элементов герметик и желательно слоем потолще, так как часть герметика может стечь, останется слабо залитая поверхность. Стоит **обратить внимание на наличие [барометра](https://yandex.ru/images/search?from=tabbar&text=barometr%20sensor%20bmp280%20DPS310%20smd)**, если он есть, и вы планируете его использовать, ни в коем случае **не допускайте попадания чего-либо в его отверстие**, можно перед нанесением герметика закрыть корпус скотчем. Также нельзя допускать попадания герметика в отверстия слота по microSD карту или usb разъема, перед нанесением стоит вставить заглушки. Контакты разъемов под коннекторы изнутри можно закрыть заглушками, чтобы не допустить попадания герметика, или замазать, если уверены, что не будете использовать их. У основания силиконовой изоляции проводов коннекторов рекомендуется нанести герметик, чтобы влага не попадала внутрь разъемов.

Такие детали как юниты и передатчики с экранами можно покрыть по периметру радиатора/экрана, или разобрать и промазать по вышеуказанным советам. Если сомневаетесь, что справитесь с разборкой, лучше не рисковать, и промазать только по периметру, от случайной влаги в траве или дождя этот вариант должен справиться.

Контакты после пайки также рекомендуется промазать герметиком.

## Какие есть варианты влагозащиты для электроники?

На 2024 год актуальны следующие варианты:

- kotking
- силиконовый клей 705
- клей B-7000
- силиконовый герметик FX FPV AeroX V2
- силиконовый лак FX FPV Aero WARP
- силиконовый лак FX FPV Aero Light
- DCA Electrolube
- Spinner protection silicone conformal coating V2 (спинер жижа)
- китайская силиконовая защита для плат ip65

Немного о каждом из них:

## KOTKING, [если недоступно тут, ищите на teamblacksheep или в барахолке](https://www.fpvmatrix.ru/index.php?route=product/product&product_id=339&search=kotking)

Силикон. Коткинг долгое время был товаром премиум класса, продавался в основном за рубежом, а цена всегда была выше, чем у аналогов. Сейчас стал более доступным благодаря некоторым магазинам, и цена по итогу чуть выше некоторых аналогов. Представляет собой тюбик небольшого объема с жидким силиконом внутри. Объема хватает, чтобы покрыть не самым толстым слоем 3-4 коптера (подразумеваю электронику). Наносится из тюбика относительно густой каплей и размазывается палочкой по всей площади или выдавливается через доп насадку с узким отверстием, главное, не забывать его потом чистить или плотно заматывать, чтобы в следующий раз можно было воспользоваться. По инструкции он должен схватываться за 15-20 минут, но на личном опыте попадались разные, иногда попадался очень жидкий, такой схватывался через 12-16 часов, застывал больше суток; иногда попадался погуще, и застывал согласно инструкции; при этом жидкий спокойно хранился 2-3 месяца в полке, и за это время не менял своих свойств. До засыхания присутствует неприятный запах. Покрытие достаточно надежное, подтверждением тому ролики, как коптеры с покрытой им электроникой отлично работают под водой. Однако практика показала, что спустя сутки - двое нахождения включенного дрона в водоеме часть электроники все равно погибает, гарантий 100%, увы, нет. Если не было ручного вмешательства, он остается целостным слоем и защищает платы на отлично. Невозможно паять через нанесенный слой. Снимать не особо удобно, нельзя подцепить с краю и стянуть весь слой с платы, отрывается кусочками. Ацетоном не смывается. Предположительно можно снять с помощью растворителя 646 и щетки бОльшую часть покрытия, но как и любой другой силикон останется между ножками элементов на плате, что, как правило, мешает ремонтникам электроники. Немаловажный неприятный момент: при длительном хранении (несколько месяцев) может застыть внутри тюбика, но все же хранится в своей упаковке лучше, чем альтернативы в тюбиках для лака. Итого:

- относительно надежно защищает от влаги
- слой не повреждается без внешнего воздействия

- бывает труднодоступен в РФ
- дорогой (15мл за 12$, в РФ часто по ~1000р)
- есть жалобы, что может застыть даже в запакованном виде при долгом хранении
- тюбика хватает максимум на 3-4 коптера
- имеет неприятный запах до засыхания
- не каждое средство способно отмыть его с платы
- нельзя паять через нанесенный слой, нужно снять (отковырять) кусочек с места пайки

<p align="center">
  <img src="/assets/img/kotking.jpg" width="600" alt="KOTKING">
</p>

## Клей 705, [купить можно здесь](https://air-hobby.ru/katalog/product/3737-silikonoviy-kley-germetik-705-prozrachniy-50-ml.html)

Силикон, хоть и клей по описанию, но неплохо справляется в качестве герметика. Также встречается в варианте k-705. Наносится из тюбика относительно густой каплей и размазывается палочкой по всей площади или выдавливается через доп насадку с узким отверстием, главное, не забывать его потом чистить или плотно заматывать, чтобы в следующий раз можно было воспользоваться. Схватывается за 20-30 минут, если нанесено не сильно толстым слоем. По свойствам схож с kotking. Практически не пахнет. Итого:

- дешевый (до 300р за тюбик 45г)
- доступный
- относительно надежно защищает от влаги
- практически не пахнет
- быстро застывает при умеренном слое
- слой не повреждается без внешнего воздействия

- не смывается ацетоном, возможно поможет отмачивание в бензине 10-15 минут
- нельзя паять через нанесенный слой, нужно снять (отковырять) кусочек с места пайки

<p align="center">
  <img src="/assets/img/705.webp" width="600" alt="705">
</p>

## Клей B-7000, [купить можно здесь](https://www.wildberries.ru/catalog/14059777/detail.aspx)

Клей B-7000, несмотря на то, что клей, также отлично справляется с задачей влагозащиты, устойчив к температурам, которые достигаются электроникой в простоях. Стоит дешево, есть варианты тюбиков разного объема, много где продается. Однако встречается много производителей этого клея (кто-то насчитывал не менее 15), и консистенция может немного отличаться. У хороших версий содержимое достаточно жидкое, легко наносится, нанесенный слой прозрачен, застывает без пузырьков с воздухом (само собой перед нанесением плату желательно очистить от пыли и прочего). Если вам попался очень вязкий/желтоватый, либо он очень долго хранился, либо из партии похуже. Схватывается за 15-30 минут, для полного засыхания рекомендуется подождать несколько часов. Можно паять через него, но занятие не из самых приятных, выделяется ужасный запах. Если вам попался хороший вариант этого клея, можно снять путем подцепки с краю и наматывания на пинцет. Если вам не повезло с производителем, сходит только после отмачивания в ацетоне на протяжении 10 минут или наматыванием после прогрева, но есть риск снять вместе с SMD элементами с платы. После покрытия платы б7000 и просушки рекомендуется протереть покрытие спиртом. Тогда поверхность станет чуть матовой и перестанет быть липкой (не будет собирать мусор). Многие ремонтники отдают свое предпочтение данному герметику, поскольку хорошо защищает и при этом его можно снять со всего участка платы. Также имеются аналоги T7000, E6000, E8000.. у них примерно схожие характеристики, но другие цвета. Итого:

- дешевый (до 200р за тюбик до 50мл)
- доступный
- удобно наносить
- надежно защищает от влаги
- быстро засыхает

- иногда попадается "брак"
- при попытке паять через него выделяется едкий запах
- при снятии есть риск, что снимется с SMD компонентами платы

<p align="center">
  <img src="/assets/img/b7000.webp" width="600" alt="B-7000">
</p>

## Силиконовый герметик FX FPV AeroX V2, [купить можно здесь](https://www.fpvmatrix.ru/index.php?route=product/product&product_id=328)

Силикон. Напоминает свою первую версию (см. раздел Устаревшее), только изменены тюбик и немного состав, ушла проблема с застыванием внутри тюбика при хранении (но при долгом хранении или долгом открытом состоянии все же может застыть). Встречается с объемами 20 и 30мл в прозрачном цвете и в черном под названием FX FPV AeroX Black, по свойствам все одинаковы. Запах приятный. Застывает за 20 минут. Слой прозрачный без пузырей. Паять через нанесенный слой нельзя, нужно сковырять кусочек с нужных пинов. Один из способов снятия с платы - отмачивание в [Aero Remover](https://www.fpvmatrix.ru/index.php?route=product/product&product_id=327). Подробный обзор по [ссылке](https://youtu.be/inSmXQqUkCw). Итого:

- удобно наносится
- приятно пахнет
- быстро застывает (20 мин)
- слой не повреждается без внешнего воздействия
- относительно надежно защищает от влаги

- нельзя паять через нанесенный слой, нужно снять (отковырять) кусочек с места пайки
- дорогой (~850р за тюбик)
- доступен только в РФ

<p align="center">
  <img src="/assets/img/aeroV2.jpg" width="600" alt="Aero X V2">
</p>

## Силиконовый лак FX FPV Aero WARP, [купить можно здесь](https://mydrone.ru/?match=all&subcats=Y&pcode_from_q=Y&pshort=Y&pfull=Y&pname=Y&pkeywords=Y&search_performed=Y&q=Aero&dispatch=products.search&security_hash=f42b3402778c170a04c1f0df572242c6)

Силиконовый лак. Не имеет токсичного запаха. Поставляется в тюбике, что позволяет герметику долго храниться. Застывает за 20 минут. Застывший слой вязкий, не трескается. Через застывший слой можно паять. Напоминает [китайскую защиту для плат ip65](https://propwashservice.ru/community/coating.html#Китайская-защита-для-плат-ip65-купить-можно-здесь).
Один из способов снятия с платы - отмачивание в [Aero Remover](https://www.fpvmatrix.ru/index.php?route=product/product&product_id=327). Подробный обзор по [ссылке](https://youtu.be/inSmXQqUkCw). Итого:

- из средней ценовой категории (~600р за тюбик)
- через нанесенный слой можно паять
- не трескается
- нормально пахнет
- быстро застывает (20 мин)
- относительно надежно защищает от влаги

- доступен только в РФ

<p align="center">
  <img src="/assets/img/aerowarp.jpg" width="600" alt="Aero WARP">
</p>

## Силиконовый лак FX FPV Aero Light, [купить можно здесь](https://mydrone.ru/?match=all&subcats=Y&pcode_from_q=Y&pshort=Y&pfull=Y&pname=Y&pkeywords=Y&search_performed=Y&q=Aero&dispatch=products.search&security_hash=f42b3402778c170a04c1f0df572242c6)

Силиконовый лак. Присутствует немного хим. запах, но с добавлением ароматизатора. Запах ароматизатора остается после застывания слоя. Поставляется в тюбике, что позволяет герметику долго храниться. Ранее продавался в баночке с кисточкой и периодически пользователи жаловались на засыхание внутри емкости. Застывает за 15-20 минут. Застывший слой вязкий, не трескается. Через застывший слой можно паять. Напоминает [китайскую защиту для плат ip65](https://propwashservice.ru/community/coating.html#Китайская-защита-для-плат-ip65-купить-можно-здесь).
Один из способов снятия с платы - отмачивание в [Aero Remover](https://www.fpvmatrix.ru/index.php?route=product/product&product_id=327). Подробный обзор по [ссылке](https://youtu.be/inSmXQqUkCw). Итого:

- из средней ценовой категории (~650р за тюбик)
- через нанесенный слой можно паять
- не трескается
- приятно пахнет
- быстро застывает (15-20 мин)
- относительно надежно защищает от влаги

- доступен только в РФ

<p align="center">
  <img src="/assets/img/aerolite.jpg" width="600" alt="Aero Light">
</p>

## DCA Electrolube, [купить можно здесь](https://air-hobby.ru/katalog/product/2286-dca-electrolube-prozrachniy-lak-na-osnove-modifitsirovannogo-silikona-20ml.html)

Лак. В ВХ продается в удобном тюбике с кисточкой. Напоминает 422C (см. раздел устаревшее): жидкий, сохнет 30+ минут, немного вязкий в застывшем варианте. После охлаждения может отслаиваться. Положительных отзывов меньше, чем на вышеперечисленные аналоги.

- из средней ценовой категориии (550р за 25мл)
- удобно наносить

- долго сохнет
- не гарантирует 100% защиту

<p align="center">
  <img src="/assets/img/dca.jpg" width="600" alt="DCA Electrolube">
</p>

## Spinner protection silicone conformal coating V2 (спинер жижа v2), [купить можно здесь](https://www.spinnerproduction.ru/catalog-0-846)

Лак. Многие предположат, что это DCA или 422C, но у него другой состав (со слов продавца). Личного не проверяла (у кого есть опыт, просьба дополнить статью). Стоит 600р за 20мл. По отзывам поведение схоже с 422C - долго сохнет и не идеально защищает от влаги.

<p align="center">
  <img src="/assets/img/spinner.jpg" width="600" alt="спинер жижа">
</p>

## Китайская защита для плат ip65, [купить можно здесь](https://a.aliexpress.com/_mKX5LuM)

Лак. Напоминает 422B, но более вязкий. Также с едким запахом. Засыхает за 15 минут, для полного высыхания лучше подождать сутки, как и при использовании других лаков. 1 слоя достаточно. Можно паять через нанесенный слой, смывается щеткой с ацетоном. На личном опыте пока не подводила, не трескалась. Тюбик лучше не оставлять открытым, так как густеет. Объема хватит на очень долго, быстрее высохнет, чем закончится, если не разделить по тюбикам. Итого:

- дешевая (8$ за 100мл)
- среди аналогов 422C, dca, спинер жижи в2 больше всех внушает доверие
- легко смывается
- быстро засыхает
- хорошая адгезия
- можно паять через нанесенный слой

* не самый доступный вариант, купить можно только на алиэкспресс
* имеет едкий запах

<p align="center">
  <img src="/assets/img/dca.jpg" width="600" alt="ip65">
</p>

## Жидкая изолента

Предложен еще один вариант, не особо популярный - жидкая изолента. Обезжириваете спиртом электронику, сушите, наносите слой. Засыхает слой за 15-20 минут. Снимается одним слоем как изолента. Стоимость спрея 500мл до 900р. Если у вас есть опыт использования, просьба дополнить статью.

## Устаревшее:

### Пластик-71, [купить можно здесь](https://www.chipdip.ru/product/plastik-71-100)

Лак. Пластик-71 изначально зарекомендовал себя как самый доступный, поскольку продается в каждом радиомагазине, но неудачный вариант, так как при эксплуатации очень быстро трескается и пропускает всю влагу. Можно наносить в несколько слоев, тогда больше вероятность, что он дольше продержится, но гарантий особо нет. Также есть мнение, что в зависимости от производителя состав отличается, были отзывы, что отлично справляется со своей задачей, но таких отзывов совсем мало. Итого:

- дешевый (до 200р за флакон до 100мл)
- доступный (можно купить в любом радиомагазине)

- не гарантирует влагозащиту, так как трескается со временем.

**Хоббисты не рекомендуют к эксплуатации.**

### MG Chemicals 422B, [снят с произодства](https://www.farnell.com/datasheets/2614568.pdf)

Лак. Долгое время был относительно доступным, продавался в ЧипДип в небольших флаконах, канистрами в розничных магазинах, тюбиками по 20-25мл в spinner production и воздушном хобби (ВХ) под видом спинер жижи, а под конец как "ВХ 422B". Был неким компромиссом, стоил в районе 300-400р за 20мл, чего хватало на год активного использования, слой схватывался за минут 10, за 15 уже застывал, но рекомендовалось для полного высыхания ждать сутки в комнатной температуре. 1 слоя было достаточно, чтобы защитить от влаги, но когда температура понижалась(полеты зимой), она начинала трескаться и пропускала влагу. В 2021 году прекратилось производство, теперь нигде не купить. Альтернативой стала версия 422С.

### MG Chemicals 422C, [пропадает из вида](https://www.mgchemicals.com/products/conformal-coatings/silicone-conformal-coatings/conformal-coating-waterproof/)

Лак. Есть много разных отзывов, на деле лично не удалось попробовать (у кого есть опыт, просьба дополнить статью), предположительно по эксплуатации схоже с 422b, только более жидкий и сохнет дольше (по 30-40 минут застывает 1 слой). Некоторое время продавался как раньше 422b, только под другим названием, сейчас постепенно исчезает из тех же магазинов. Итого:

- из средней ценовой категории (700р за 20мл в ВХ был в 2022)
- можно паять через нанесенный слой
- легко снять щеткой со спиртом или ацетоном (и нет, ацетон не разъедает моментально пластик и надписи, разве что если вы на сутки в ацетоне замочите плату)

- в РФ уже не так просто найти
- долго сохнет
- не гарантирует 100% влагозащиту

### FX FPV AeroX, [снят с производства](https://quadro.team/goods/aerox)

Силикон. Не пахнет. Схватывается за 15 минут (еще липкий, но уже не растекается), застывает за 30 минут. Снимается хлопьями после простоя в емкости с галошей+изопропанолом на протяжении 15 мин или как любой силикон путем отковыривания кусочками. Невозможна пайка через нанесенный слой. Благодаря кисти легко наносить тонким слоем, расход меньше, чем у уналогов в тюбиках. Без внешнего воздействия сохраняет целостность. Однако после вскрытия и нескольких использований за месяц загустел так сильно, что стал непригоден для эксплуатации, хотя закрывался плотно и не стоял открытым долго. Спиртом развести не получится, не взаимодействуют. Итого:

- надежно защищает от влаги
- хорошая адгезия
- отсутствует запах
- для снятия нужно отмочить в смеси галоша + изопропанол 15 мин или снимать кусочно

- доступен только в РФ
- дорогой (950р за 20мл)
- после вскрытия долго не хранится
- нельзя паять через нанесенный слой

### Силиконовый лак Antas ZS-NJ-D955, [купить можно здесь](https://quadro.team/goods/Vysokoprochnoe-konformnoe-silikonovoe-pokrytie-Antas-ZS-NJ-D955-Keks-Edition?mod_id=300898141)

Лак. Продается в удобном тюбике с кисточкой. Схватывается за 10-15 минут. Можно ускорить отверждение нагреванием. Застывший слой не вязкий.