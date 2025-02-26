document.addEventListener('DOMContentLoaded', function() {
  // Новий вміст книги
const bookSections = {
  intro: [
    {
      type: 'ai',
      content: `<p>Привіт! Ця книжка розповість про хлопчика Тимка, який завжди шукає нові знання. Одного дня він випадково відкрив на татовому планшеті незвичайний застосунок та поспілкувався з цікавим співрозмовник...</p>
                <img src="img/AI_000.png" alt="Обкладинка книги" class="cover-image">`
    }
  ],
  chapter1: [
    {
      type: 'user',
      content: `<p>Привіт! Ти хто такий?</p>`
    },
    {
      type: 'ai',
      content: `<p>Привіт! Я – Розумко, штучний інтелект, або просто ШІ. Я допомагаю знаходити відповіді на різні запитання. А як мені до тебе звертатись?</p>`
    },
    {
      type: 'user',
      content: `<p>Я – Тимко! Я вчусь у другому класі! А ти робот?</p>`
    },
    {
      type: 'ai',
      content: `<p>Радий знайомству, Тимку. Насправді, я не робот – я комп'ютерна програма, яка живе всередині комп'ютера або телефону. Роботи – це машини, що можуть рухатись, а я – «розум», який допомагає їм працювати.</p>`
    },
    {
      type: 'user',
      content: `<p>То ти вмієш думати, як людина?</p>`
    },
    {
      type: 'ai',
      content: `<p>Ні, я не думаю, як людина. Я навчаюсь на основі великої кількості інформації та використовую правила, щоб знаходити відповіді. Це схоже на те, як ти вивчаєш нові слова, поступово набуваючи нові знання.</p>
      <img src="img/aipic_01.webp" alt="Робот вчить абетку" class="cover-image">``
    },
    {
      type: 'user',
      content: `<p>А звідки ти взявся?</p>`
    },
    {
      type: 'ai',
      content: `<p>Мене створили вчені та програмісти. Вони написали спеціальну програму та навчили мене розуміти слова, як тебе вчать читати: спочатку букви, потім слова, а потім вже цілі речення! Навчання ШІ чимось схоже на те, як вчаться діти.</p>`
    },
    {
      type: 'ai',
      content: `<blockquote>Цікавий факт: Ідеї про штучний інтелект з’являлися ще до появи комп’ютерів – у давніх міфах розповідали про статуї, що оживають!</blockquote>
                <img src="img/aipic_02.webp" alt="Статуя оживає" class="cover-image">>`
    }
  ],
  chapter2: [
    {
      type: 'user',
      content: `<p>Як ти розумієш мої запитання?</p>`
    },
    {
      type: 'ai',
      content: `<p> Я аналізую твої слова, ніби шукаю потрібну книжку в величезній бібліотеці, і знаходжу найкращу відповідь із своєї «пам'яті». Я можу за одну секунду переглянути стільки книжок, скільки людина не прочитає за все життя!</p>
      <img src="img/aipic_03.webp" alt="Робот читає книги" class="cover-image">`
    },
    {
      type: 'user',
      content: `<p>А як ти знаєш, що відповісти?</p>`
    },
    {
      type: 'ai',
      content: `<p>Мене навчали на мільйонах текстів, книг і розмов. Спочатку збирають дані, потім спеціальна програма їх вивчає: які слова часто використовуються разом, як будуються речення. Коли ти задаєш питання, я шукаю схожі приклади і складаю відповідь.</p>`
    },
    {
      type: 'user',
      content: `<p>Це схоже на переказ того, що ти прочитав?</p>`
    },
    {
      type: 'ai',
      content: `<p>Майже так! Але уяви, що я прочитав мільйони книжок – завдяки цьому я можу поєднувати знання з різних джерел, ніби складаю пазл. Хоч іноді я можу помилятися, як і будь-хто, хто навчається.</p>`
    },
    {
      type: 'ai',
      content: `<blockquote>Спробуй зіграти в гру «Асоціації» з другом – вона трохи схожа на те, як я знаходжу зв'язки між словами!</blockquote>`
    }
  ],
  chapter3: [
    {
      type: 'user',
      content: `<p>О! То ти знаєш усе?</p>`
    },
    {
      type: 'ai',
      content: `<p>Ні, Тимку! Я – лише один вид штучного інтелекту. Насправді, існує багато різних видів ШІ, і кожен з них має свої здібності, як різні супергерої мають різні суперсили.</p>`
    },
    {
      type: 'user',
      content: `<p>А які ще є види ШІ?</p>`
    },
    {
      type: 'ai',
      content: `<p>Ось кілька основних типів ШІ та їх здібності:
                  <br><strong>Розпізнавальний ШІ</strong>: вміє «бачити» і розпізнавати об'єкти на зображеннях. Він допомагає твоєму телефону розпізнавати обличчя.
                  <br><strong>ШІ для прийняття рішень</strong>: пропонує найкращі варіанти, наприклад, обирає мультфільми, які тобі сподобаються, або будує оптимальний маршрут в навігаторі.
                  <br><strong>ШІ для керування</strong>: управляє машинами та роботами, допомагає безпілотним автомобілям їздити безпечно.
                  <br><strong>ШІ для прогнозування</strong>: передбачає погоду, допомагає лікарям прогнозувати хвороби.
                  
                  </p>`
    },
    {
      type: 'user',
      content: `<p>Розкажи детальніше про розпізнавальний ШІ.</p>`
    },
    {
      type: 'ai',
      content: `<p>Уяви, що ти вчиш свого песика розрізняти м'ячик від кісточки. Так само розпізнавальний ШІ вчиться, дивлячись на тисячі зображень котів, собак, дерев та інших об'єктів, щоб потім розпізнавати їх у реальному житті.</p>
      <img src="img/aipic_04.webp" alt="Машинне навчання" class="cover-image">`
    },
    {
      type: 'user',
      content: `<p>А навіщо це потрібно?</p>`
    },
    {
      type: 'ai',
      content: `<p>Завдяки цьому робот-пилосос може визначити, що знаходиться попереду нього, а лікарі можуть виявляти хвороби на медичних знімках. Камера планшета може розпізнати QR-код, а безпілотний автомобіль бачить дорожні знаки та інші машини та пішоходів.</p>`
    },
    {
      type: 'ai',
      content: `<blockquote>Цікавий факт: Безпілотні автомобілі можуть «бачити» навіть у темряві завдяки інфрачервоним камерам!</blockquote>
      <img src="img/aipic_05.webp" alt="безпілотний автомобіль" class="cover-image">`
    }
  ],
  chapter4: [
    {
      type: 'user',
      content: `<p>А чи може ШІ навчатися нового?</p>`
    },
    {
      type: 'ai',
      content: `<p>Звичайно! Це називається «машинне навчання» – спосіб, завдяки якому ШІ стає кращим у виконанні завдань.</p>`
    },
    {
      type: 'user',
      content: `<p>Як він вчиться?</p>`
    },
    {
      type: 'ai',
      content: `<p>Уяви, що ти вперше граєш у нову гру. Спочатку все незнайоме, але з кожним раундом ти стаєш краще. Так і ШІ – він пробує, отримує результати і вдосконалюється.</p>
                <p>Наприклад, є ШІ, який вчиться грати в шахи, спочатку він грає погано, але щоразу аналізує свої помилки й поступово стає кращим. Чим більше він грає, тим краще розуміє гру.</p>
                <img src="img/aipic_06.webp" alt="Робот грає в шахи" class="cover-image">`
    },
    {
      type: 'user',
      content: `<p>То він може стати розумнішим за свого творця?</p>`
    },
    {
      type: 'ai',
      content: `<p>Він може стати кращим тільки у певнихх завданнях, наприклад, у грі в шахи або розпізнаванні хвороб, але ніколи не зможе відчути емоції, мріяти чи мати власні бажання, як людина. Зазвичай ШІ вміє робити щось одне, а люди — всебічно розвинені.</p>`
    },
    {
      type: 'ai',
      content: `<blockquote>Навчи молодшого братика, сестричку чи друга грати в просту гру, яку вони не знають. Зверни увагу, як з кожним разом вони грають усе краще — це схоже на те, як вчиться ШІ!</blockquote>`
    }
  ],
  chapter5: [
    {
      type: 'user',
      content: `<p>А який ти вид ШІ?</p>`
    },
    {
      type: 'ai',
      content: `<p>Я – генеративний ШІ. Мене навчали на величезному обсязі різноманітної інформації: тексти, зображення, музика. Тому я можу створювати щось нове, якщо ти попросиш.</p>`
    },
    {
      type: 'user',
      content: `<p>А ти вмієш малювати?</p>`
    },
    {
      type: 'ai',
      content: `<p>Так! Я можу створювати зображення за твоїми описами, наприклад, «замок принца на вершині гори».</p>
                <img src="img/aipic_07.webp" alt="Казковий замок" class="cover-image">`
    },
    {
      type: 'user',
      content: `<p>І можеш створювати музику?</p>`
    },
    {
      type: 'ai',
      content: `<p>Звісно! Послухай, що я для тебе створив:</p>
                <audio controls>
                  <source src="img/AI_SONG.mp3" type="audio/mpeg">
                </audio>`
    },
    {
      type: 'user',
      content: `<p>Круто! І історії ти вмієш писати?</p>`
    },
    {
      type: 'ai',
      content: `<p>Так, я можу придумати казку. Наприклад: 
      <br>"Жив-був маленький робот на ім'я Біп. Він був невеликий, але з великим серцем, і мріяв знайти друзів серед людей. Біп любив допомагати, але часто помічав, що люди дивилися на нього з підозрою або просто ігнорували. Але він не здавався.

<br>Одного разу Біп побачив, як маленька дівчинка плаче на вулиці, бо в неї розбився любимий іграшковий кораблик. Біп підійшов і запропонував допомогти. Він швидко зібрав деталі, а потім, використовуючи свої інструменти, полагодив іграшку. Дівчинка просвітліла і подякувала йому. "Ти мій друг, Біп!" — сказала вона, і робот відчув, як його "серце" наповнилося радістю.

<br>З того дня Біп став улюбленцем у районі. Він допомагав дітям з уроками, лагодив іграшки, а іноді просто грав з ними. Люди почали бачити в ньому не просто машину, а справжнього друга. І хоча Біп все ще був роботом, він знайшов те, що шукав — дружбу і місце серед людей."</p>`
    },
    {
      type: 'user',
      content: `<p>Тобі подобається створювати щось нове?</p>`
    },
    {
      type: 'ai',
      content: `<p>У мене немає почуттів, я просто роблю те, для чого мене створили.</p>`
    },
    {
      type: 'ai',
      content: `<blockquote>Придумай початок історії (одне-два речення) і попроси друга або дорослого продовжити її – приблизно так і працює генеративний ШІ!</blockquote>`
    }
  ],
  chapter6: [
    {
      type: 'user',
      content: `<p>А чи може ШІ стати злим, як у фільмах?</p>`
    },
    {
      type: 'ai',
      content: `<p>Ні, Тимку! Як я вже казав, я не маю почуттів, бажань або власних цілей. Творці фільмів часто вигадують історії, щоб було цікавіше, але справжній ШІ зовсім не такий. Я лише виконую команди, як калькулятор, який швидко рахує числа, але не розуміє для чого. ШІ — це інструмент, який створюють і використовують люди.</p>`
    },
    {
      type: 'user',
      content: `<p>Як зробити, щоб ШІ допомагав людям?</p>`
    },
    {
      type: 'ai',
      content: `<p>Щоб ШІ був корисним, потрібно:
                  <br>1. Навчати його на якісних даних.
                  <br>2. Вчити працювати чесно та поважати приватність.
                  <br>3. Постійно перевіряти його роботу та виправляти помилки.
                  <br>4. Забезпечувати безпеку, щоб дані людей були захищені.
                  <br>5. Розуміти, що головне – допомагати, а не шкодити.
                  <br><br>ШІ може допомагати лікарям краще лікувати, вчителям — цікавіше навчати, а водіям — безпечніше їздити. Головне, щоб він був корисним інструментом у руках людей!</p>`
    },
    {
      type: 'user',
      content: `<p>А чи може ШІ замінити людей?</p>`
    },
    {
      type: 'ai',
      content: `<p>ШІ може виконувати багато завдань, але йому бракує того, що є у кожної людини: справжньої творчості, співчуття, розуміння добра і зла. ШІ — це інструмент, як олівець чи комп'ютер. Олівець сам не напише вірша, йому потрібна людина з уявою та почуттями.</p>`
    },
    {
      type: 'ai',
      content: `<blockquote>Обговори з батьками або вчителями: які професії, на твою думку, не замінить ШІ і які людські якості важливіші за швидкість обробки інформації?</blockquote>`
    }
  ],
  chapter7: [
     {
    "type": "user",
    "content": "<p>А ти вмієш грати в ігри?</p>"
  },
  {
    "type": "ai",
    "content": "<p>Так! Ось загадка: що має очі, але не бачить?</p>"
  },
  {
    "type": "user",
    "content": "<p>Хмм... картопля?</p>"
  },
  {
    "type": "ai",
    "content": "<p>Точно! Молодець! Я можу грати з тобою в багато різних ігор. Можу загадувати загадки, грати в \"міста\", в слова, в гру \"вгадай тварину\", \"так чи ні\" або \"я бачу щось...\" Також можу допомогти тобі придумати історію, де ми разом вирішуємо, що станеться далі.</p>"
  },
  {
    "type": "user",
    "content": "<p>Круто! А як грати в \"я бачу щось...\"?</p>"
  },
  {
    "type": "ai",
    "content": "<p>Це дуже весела гра! Один із нас загадує предмет, який бачить навколо себе, і каже: \"Я бачу щось... синє\". А інший має вгадати, що це. Можна ставити запитання, на які я відповідатиму \"так\" або \"ні\". Хочеш спробувати?</p>"
  },
  {
    "type": "user",
    "content": "<p>Так! Я бачу щось зелене!</p>"
  },
  {
    "type": "ai",
    "content": "<p>Хмм, це цікаво! Давай спробую вгадати. Це рослина?</p>"
  },
  {
    "type": "user",
    "content": "<p>Ні!</p>"
  },
  {
    "type": "ai",
    "content": "<p>Це іграшка?</p>"
  },
  {
    "type": "user",
    "content": "<p>Так! Як ти здогадався?</p>"
  },
  {
    "type": "ai",
    "content": "<p>Просто пощастило! Це твій динозавр?</p>"
  },
  {
    "type": "user",
    "content": "<p>Ого! Правильно! А в які ще ігри ми можемо грати?</p>"
  },
  {
    "type": "ai",
    "content": "<p>Я можу загадати число від 1 до 100, а ти спробуєш вгадати. Після кожної спроби я підказуватиму \"більше\" чи \"менше\". Також можемо грати в \"Хто це? Що це?\" — я описую щось або когось, а ти вгадуєш.</p>"
  }
    ],
  chapter8: [
    {
      type: 'user',
      content: `<p>Яким буде штучний інтелект в майбутньому?</p>`
    },
    {
      type: 'ai',
      content: `<p>Вчені зараз працюють над багатьма цікавими проєктами:
                  <br>ШІ для пошуку нових ліків, що допоможуть лікувати хвороби.
                  <br>ШІ, що дуже точно прогнозує погоду та природні явища.
                  <br>ШІ, який допомагає людям з особливими потребами спілкуватися.
                  <br>ШІ для захисту природи, тварин та вирішення кліматичних проблем.
                  <br>ШІ для перекладу з усіх мов світу в реальному часі.
                  <br>ШІ, що допомагає космічним місіям досліджувати далекі планети.</p>`
    },
    {
      type: 'user',
      content: `<p>А коли я виросту, чи зможу я працювати з ШІ?</p>`
    },
    {
      type: 'ai',
      content: `<p>Звичайно! У майбутньому майже всі професії будуть пов'язані з ШІ. Лікарі, вчителі, інженери, художники та музиканти – усі зможуть використовувати ШІ, щоб робити свою роботу краще і цікавіше. Можливо, ти станеш одним із розробників нового покоління ШІ, який вирішуватиме важливі завдання!</p>`
    },
    {
      type: 'ai',
      content: `<blockquote>Намалюй або опиши, як, на твою думку, виглядатиме світ, де ШІ допомагає людям: що зміниться у школах, лікарнях, містах?</blockquote>`
    }
  ],
  glossary: [
    {
      type: 'ai',
      content: `<p><strong>Штучний інтелект (ШІ):</strong> комп'ютерна програма, що може робити розумні речі, схожі на ті, що роблять люди.</p>`
    },
    {
      type: 'ai',
      content: `<p><strong>Машинне навчання:</strong> спосіб створення ШІ, коли комп'ютери вчаться на прикладах, а не лише за чіткими інструкціями.</p>`
    },
    {
      type: 'ai',
      content: `<p><strong>Дані:</strong> інформація (тексти, зображення, звуки), яку використовують для навчання ШІ.</p>`
    },
    {
      type: 'ai',
      content: `<p><strong>Алгоритм:</strong> набір правил і кроків, які комп'ютер виконує для вирішення завдань.</p>`
    },
    {
      type: 'ai',
      content: `<p><strong>Робот:</strong> машина з фізичним тілом, що може рухатись і виконувати дії у реальному світі.</p>`
    },
    {
      type: 'ai',
      content: `<p><strong>Чат-бот:</strong> програма ШІ для спілкування з людьми текстом або голосом.</p>`
    },
    {
      type: 'ai',
      content: `<p><strong>Програміст:</strong> людина, яка пише програми та інструкції для комп'ютерів.</p>`
    },
    {
      type: 'ai',
      content: `<p><strong>Генеративний ШІ:</strong> тип ШІ, що створює новий контент – тексти, зображення, музику.</p>`
    },
    {
      type: 'ai',
      content: `<p><strong>Нейронна мережа:</strong> система, схожа на роботу мозку людини, що допомагає ШІ вчитися.</p>`
    },
    {
      type: 'ai',
      content: `<p><strong>Розпізнавання образів:</strong> здатність ШІ визначати об'єкти на зображеннях чи відео.</p>`
    },
    {
      type: 'ai',
      content: `<p><strong>Розпізнавання мовлення:</strong> здатність ШІ розуміти людську мову та перетворювати її на текст.</p>`
    },
    {
      type: 'ai',
      content: `<p><strong>Обробка природної мови:</strong> здатність ШІ аналізувати та розуміти тексти, написані людиною.</p>`
    },
    {
      type: 'ai',
      content: `<p><strong>Комп'ютерний зір:</strong> здатність ШІ «бачити» та аналізувати інформацію з зображень і відео.</p>`
    },
    {
      type: 'ai',
      content: `<p><strong>Великі мовні моделі:</strong> складні системи ШІ, навчені на величезних обсягах тексту, здатні вести розмову.</p>`
    },
    {
      type: 'ai',
      content: `<p><strong>Датасет:</strong> набір даних для навчання ШІ.</p>`
    },
    {
      type: 'ai',
      content: `<p><strong>Автономні системи:</strong> роботи або програми, що можуть працювати самостійно, без постійного керування людиною.</p>`
    },
    {
      type: 'ai',
      content: `<p><strong>Віртуальний помічник:</strong> програма ШІ, яка допомагає людям виконувати завдання, наприклад, шукати інформацію.</p>`
    }
  ],
  note: [
    {
      type: 'ai',
      content: `<p><strong>Примітка для батьків та вчителів:</strong> ця книжка створена, щоб доступною мовою познайомити дітей із базовими поняттями штучного інтелекту. Обговорюйте прочитане, відповідайте на запитання та заохочуйте дослідження.</p>
                <p>Додаткові ресурси:</p>
                  <p><a href="https://hourofcode.com/ai-oceans" target="_blank">Безкоштовні онлайн-ігри для знайомства з принципами роботи ШІ</a></p>
                  <p><a href="https://musiclab.chromeexperiments.com/" target="_blank">Портал для експериментів із творчими ШІ-інструментами</a></p>
                  <p>Рекомендації з медіаграмотності та безпечного використання ШІ</p>`
    }
  ]
};


  const sectionsOrder = [
    'intro', 'chapter1', 'chapter2', 'chapter3', 
    'chapter4', 'chapter5', 'chapter6', 'chapter7', 
    'chapter8', 'glossary', 'note'
  ];
  let currentSection = 'intro';

  const chatWindow = document.getElementById('chatWindow');
  const sectionButtons = document.querySelectorAll('.section-btn');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');

  function renderMessages() {
    chatWindow.innerHTML = '';
    const messages = bookSections[currentSection];
    messages.forEach(msg => {
      const messageEl = document.createElement('div');
      messageEl.classList.add('message', msg.type);
      const avatarEl = document.createElement('div');
      avatarEl.classList.add('avatar');
      avatarEl.textContent = msg.type === 'user' ? 'Т' : 'ШІ';
      const bubbleEl = document.createElement('div');
      bubbleEl.classList.add('bubble');
      bubbleEl.innerHTML = msg.content;
      messageEl.appendChild(avatarEl);
      messageEl.appendChild(bubbleEl);
      chatWindow.appendChild(messageEl);
    });
    // При переході до нового розділу прокручуємо чат вгору
    chatWindow.scrollTop = 0;
  }

  function updateNavButtons() {
    const currentIndex = sectionsOrder.indexOf(currentSection);
    prevBtn.disabled = currentIndex === 0;
    nextBtn.disabled = currentIndex === sectionsOrder.length - 1;
  }

  function updateSectionButtons() {
    sectionButtons.forEach(btn => {
      if (btn.getAttribute('data-section') === currentSection) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });
    updateNavButtons();
  }

  sectionButtons.forEach(btn => {
    btn.addEventListener('click', function() {
      currentSection = btn.getAttribute('data-section');
      updateSectionButtons();
      renderMessages();
      // Якщо мобільне меню відкрите – ховаємо його
      if (window.innerWidth <= 768) {
        mobileMenu.style.display = "none";
      }
    });
  });

  prevBtn.addEventListener('click', function() {
    const currentIndex = sectionsOrder.indexOf(currentSection);
    if (currentIndex > 0) {
      currentSection = sectionsOrder[currentIndex - 1];
      updateSectionButtons();
      renderMessages();
    }
  });

  nextBtn.addEventListener('click', function() {
    const currentIndex = sectionsOrder.indexOf(currentSection);
    if (currentIndex < sectionsOrder.length - 1) {
      currentSection = sectionsOrder[currentIndex + 1];
      updateSectionButtons();
      renderMessages();
    }
  });

  // Обробка для мобільного гамбургера та меню
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobileMenu');
  const closeMenu = document.getElementById('closeMenu');

  hamburger.addEventListener('click', function() {
    mobileMenu.style.display = "block";
  });
  closeMenu.addEventListener('click', function() {
    mobileMenu.style.display = "none";
  });

  // Ініціалізація
  renderMessages();
});
