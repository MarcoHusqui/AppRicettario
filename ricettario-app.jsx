import React, { useState, useMemo } from 'react';
import { Search, ArrowLeft, Clock, Users, Flame } from 'lucide-react';

const RicettarioApp = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);

  // Database ricette - facile da espandere
  const recipes = [
    {
      id: 1,
      title: 'Pollo Yakitori',
      category: 'Secondi & Proteine',
      categoryId: 4,
      servings: 2,
      time: 30,
      difficulty: 'Facile',
      image: 'https://res.cloudinary.com/dybplsq0u/image/upload/f_auto,q_auto/v1772792009/3c8a203f-7a08-4696-9deb-c3bdb9969371_co6ip1.png',
      ingredients: [
        '400gr pollo sovracosce',
        '15gr amido/maizena',
        '2 cucchiaini olio di sesamo',
        '2 cucchiaini salsa di soia light',
        '1 cucchiaio miele',
        '1 cucchiaino salsa piccante',
        '1 tazza acqua',
        '3 cipollotti',
        'q.b. semi di sesamo',
        'q.b. paprika piccante',
        'q.b. sale'
      ],
      steps: [
        'In una padella antiaderente, passare il pollo (precedentemente infarinato) a fuoco medio-alto.',
        'Cuocere 4-5 minuti per lato fino a crosta dorata.',
        'Assemblare gli spiedini con pollo e cipollotti alternati su bastoncini di bambù bagnati.',
        'In un pentolino, mescolare olio di sesamo, salsa di soia, miele, salsa piccante e acqua.',
        'Portare a ebollizione e ridurre per 2-3 minuti.',
        'Versare la salsa sugli spiedini, girandoli bene per ricoprirli completamente.',
        'Cospargere di semi di sesamo e paprika piccante.',
        'Servire subito su un piatto bianco.'
      ],
      tips: 'È consigliabile marinare il pollo in salsa di soia e miele per almeno 30 minuti prima di cuocere. Se non hai spiedini di bambù, puoi usare quelli di metallo. La salsa yakitori può essere preparata in anticipo e conservata in frigo per 3-4 giorni. Perfetto come antipasto o piatto principale accompagnato da riso bianco.'
    },
    {
      id: 2,
      title: 'Fagiolata di Corona e Borlotti',
      category: 'Zuppe, Minestre, Vellutate & Creme',
      categoryId: 2,
      servings: 2,
      time: 25,
      difficulty: 'Facile',
      image: '🍲',
      ingredients: [
        '1 lattina di fagioli Corona giganti',
        '1 lattina di fagioli Borlotti',
        '1 lattina di passata di pomodoro pelato',
        '1 cipolla media',
        '2 spicchi di aglio',
        '1 hamburger di manzo',
        'q.b. pane da tostare',
        'q.b. olio extravergine',
        'q.b. basilico fresco',
        'q.b. pomodori ciliegini'
      ],
      steps: [
        'Rosolare la cipolla tritata in padella con gli spicchi di aglio.',
        'Aggiungere il sugo di pomodoro e far cuocere per 5 minuti a fuoco medio.',
        'Frullare i fagioli Borlotti con un frullatore a immersione.',
        'Aggiungere i Borlotti frullati e i fagioli Corona interi alla padella con il sugo.',
        'In una seconda padella, cucinare l\'hamburger di manzo fino ad abbrustolirsi.',
        'Una volta cotto, spezzettare l\'hamburger e unirlo al sugo di fagioli.',
        'Far cuocere il tutto per 10 minuti a fuoco basso.',
        'Tostare il pane in forno a 200°C fino a doratura.',
        'Servire la fagiolata nei piatti, decorare con basilico fresco, pomodori ciliegini e crostoni.'
      ],
      tips: 'Puoi usare fagioli secchi precedentemente cotti per un risultato più autentico. La fagiolata è ancora più gustosa il giorno dopo. Perfetto con un filo di olio extravergine a crudo. Se preferisci una versione più leggera, ometti l\'hamburger e aggiungi più verdure.'
    },
    {
      id: 3,
      title: 'Sukiyaki',
      category: 'Secondi & Proteine',
      categoryId: 4,
      servings: 4,
      time: 45,
      difficulty: 'Medio',
      image: '🥘',
      ingredients: [
        '500g di filetto di manzo super sottile',
        '4 uova',
        '70ml di salsa di soia',
        '1L di brodo di carne',
        '400g di funghi champignon misti',
        '8 funghi shiitake',
        '1 cavolo cinese',
        '5 carote',
        '2 porri',
        '4 cipollotti piccoli',
        '400g di noodle',
        '250g di tofu',
        '25gr di zucchero',
        '60ml di sake',
        'q.b. olio extravergine d\'oliva',
        'q.b. sale'
      ],
      steps: [
        'Preparare la salsa: mescolare in un pentolino la salsa di soia, il brodo di carne, lo zucchero e il sake. Portare a ebollizione e tenere da parte.',
        'Mondare tutte le verdure: tagliare il cavolo cinese a strisce, le carote a rondelle sottili, i porri e cipollotti a pezzi di 5cm, i funghi a metà.',
        'Tagliare il tofu a cubetti e cuocere brevemente i noodle fino a metà cottura.',
        'Disporre tutti gli ingredienti in piatti da portata ordinatamente.',
        'Scaldare una pentola sukiyaki a fuoco medio sul tavolo (usando un fornello portatile).',
        'Ungere il fondo con un poco di grasso di manzo e aggiungere alcune fettine di carne.',
        'Versare metà della salsa preparata e portare a leggero bollore.',
        'Aggiungere progressivamente le verdure nel corso della cena, sempre mantenendo il brodo a sobbollimento.',
        'Ogni commensale sbatte un uovo crudo in una ciotolina personale.',
        'Man mano che gli ingredienti sono pronti, ognuno li prende dalla pentola e li intinge nell\'uovo crudo prima di mangiarli.',
        'Quando gli ingredienti scarseggiano, aggiungere nuovi ingredienti crudi e della salsa rimanente.',
        'A fine serata, cuocere gli udon rimasti nella salsa rimasta per fare \'scarpetta\'.'
      ],
      tips: 'Il sukiyaki è un piatto conviviale da cuocere al tavolo. È importante avere tutti gli ingredienti preparati prima di iniziare. La carne deve essere tagliata molto sottile (chiedi al macellaio). Se non hai un fornello portatile, puoi prepararlo in cucina e portare la pentola già calda al tavolo. Questa ricetta è perfetta per cene con amici!'
    },
    {
      id: 4,
      title: 'Crema di Finocchi, Patate, Cannellini e Carote',
      category: 'Zuppe, Minestre, Vellutate & Creme',
      categoryId: 2,
      servings: 2,
      time: 55,
      difficulty: 'Facile',
      image: '🍲',
      ingredients: [
        '2 finocchi medi',
        '2 patate medie',
        '1 carota media',
        '240gr cannellini in scatola',
        'q.b. paprika affumicata',
        '3-4 rami di rosmarino fresco',
        '3-4 foglie di salvia fresca',
        'q.b. salsa di soia',
        'q.b. aceto di vino rosso',
        'q.b. peperoncino rosso',
        'q.b. aceto di agave o miele',
        'q.b. olio extravergine',
        'q.b. sale e pepe',
        'q.b. pane per crostoni'
      ],
      steps: [
        'Lessare le patate tagliate a pezzi in acqua bollente salata per 10 minuti.',
        'Scolare le patate e disporle in teglia insieme ai finocchi tagliati a spicchi.',
        'Condire con sale, pepe, olio e paprika. Infornare a 200°C (ventilato) per 40 minuti fino a doratura.',
        'Nel frattempo, tagliare la carota a dadini piccoli.',
        'In una padella, rosolare la carota con olio, rosmarino e salvia a fuoco medio-alto per 10 minuti.',
        'Una volta abbrustolita, rimuovere le erbe aromatiche.',
        'Sfumare con aceto di vino e salsa di soia, poi cuocere per altri 2 minuti.',
        'A fiamma spenta, aggiungere un filo di sciroppo di agave o miele e il peperoncino. Le carote devono risultare colorate e saporite.',
        'Scolare le verdure dal forno e metterle in pentola con i cannellini.',
        'Aggiungere 3-4 bicchieri di acqua calda e cuocere a fuoco medio-basso per 5-10 minuti.',
        'Frullare il tutto con un frullatore a immersione fino a ottenere una crema omogenea.',
        'Regolare di sale, pepe e aggiungere un filo di olio a crudo.',
        'Tostare il pane in forno o in padella e servire la crema con crostoni.'
      ],
      tips: 'Per una crema più liscia, puoi aggiungere un po\' di acqua calda durante la frullatura. Se preferisci una versione meno densa, aggiungi più brodo vegetale. Questa ricetta è perfetta per cene invernali. Puoi prepararla in anticipo e riscaldarla al momento. Ottima anche fredda in estate!'
    },
    {
      id: 5,
      title: 'Zuppa di Fagioli e Cipolle Caramellate',
      category: 'Zuppe, Minestre, Vellutate & Creme',
      categoryId: 2,
      servings: 2,
      time: 40,
      difficulty: 'Facile',
      image: '🍲',
      ingredients: [
        '2 cipolle bianche medie',
        '1 cucchiaio di zucchero',
        '2 cucchiai di glassa di aceto balsamico',
        '1 spicchio di aglio',
        '1 cucchiaio di concentrato di pomodoro',
        '1/2 bicchiere di vino bianco secco',
        '600gr di fagioli cannellini o Corona',
        '2 bicchieri di acqua',
        '200ml di panna da cucina',
        'un goccio di succo di limone fresco',
        'q.b. sale',
        'q.b. pepe nero',
        'q.b. prezzemolo fresco',
        'q.b. paprika affumicata',
        'q.b. olio extravergine d\'oliva'
      ],
      steps: [
        'In una padella larga, versare un filo di olio extravergine e aggiungere la cipolla tagliata a fettine sottili.',
        'Cuocere a fuoco medio-basso per 15 minuti, mescolando occasionalmente.',
        'Aggiungere lo zucchero e la glassa di aceto balsamico, continuando la cottura finché la cipolla non diventa bella morbida e caramellata.',
        'Aggiungere il concentrato di pomodoro, l\'aglio tritato finemente e la paprika affumicata.',
        'Versare il vino bianco e alzare la fiamma, facendo evaporare completamente l\'alcool (circa 2-3 minuti).',
        'Aggiungere i fagioli (scolarli dalla scatola e lavarli) e l\'acqua.',
        'Portare a ebollizione e poi ridurre a fuoco basso, lasciando cuocere per 10-15 minuti.',
        'Aggiungere la panna e il succo di limone, mescolando bene.',
        'Regolare di sale e pepe secondo il gusto personale.',
        'Servire la zuppa in ciotole, decorando con foglie di prezzemolo fresco tritato e un filo di olio extravergine.'
      ],
      tips: 'Il segreto di questa zuppa è caramellare bene le cipolle - prenditi il tempo necessario! La panna può essere sostituita con latte di avena per una versione più leggera. Perfetta con pane tostato. Se la preferisci più densa, frulla metà dei fagioli. Ottima anche riscaldata il giorno successivo!'
    },
    {
      id: 6,
      title: 'Brodo per Tortellini (Ricetta Nonna Giulia)',
      category: 'Salse, Fondi, Riduzioni & Basi',
      categoryId: 6,
      servings: 4,
      time: 240,
      difficulty: 'Medio',
      image: '🍯',
      ingredients: [
        '3 gambi di sedano',
        '3 carote medie',
        '1 cipolla grande',
        '1 pomodoro maturo',
        '600-800gr di spolpati di manzo con ossa',
        '1kg di faraona intera',
        '4 dadi di brodo di carne',
        'q.b. sale',
        'q.b. pepe',
        '4L di acqua fredda'
      ],
      steps: [
        'Riempire una pentola grande da 6L con l\'acqua fredda.',
        'Aggiungere i pezzi di manzo con ossa, la faraona intera, il sedano a pezzi, le carote a pezzi, la cipolla tagliata a metà e il pomodoro.',
        'Portare a fuoco medio-alto con coperchio fino all\'ebollizione.',
        'Quando l\'acqua bolle, togliere il coperchio e rimuovere la schiuma che sale in superficie con un mestolo per 2-3 volte.',
        'Ridurre il fuoco a basso, aggiungere i 4 dadi di brodo e un poco di sale.',
        'Rimettere il coperchio e lasciar sobbollire dolcemente per 1,5 ore.',
        'Dopo 1,5 ore, rimuovere la faraona (che userai per altri piatti) e rimettere il coperchio.',
        'Continuare la cottura a fuoco lento per altre 1,5 ore.',
        'Spegnere il fuoco, rimuovere tutte le verdure e le ossa con un colino.',
        'Filtrare il brodo attraverso una garza fine o un colino a maglie strette in una grande ciotola.',
        'Mettere il brodo sul balcone (o in frigorifero se fa caldo) per tutta la notte per raffreddarlo.',
        'Il giorno successivo, rimuovere lo strato di grasso solidificato in superficie (sgrassare).',
        'Il brodo è pronto per essere usato con i tortellini (30 per persona).'
      ],
      tips: 'Questo brodo è la base di molti piatti festivi. Il tempo di cotazione è fondamentale - non accelerare il processo. Puoi congelarlo in porzioni per usarlo successivamente. La faraona cotta può essere utilizzata per fare un brodo di verdure a parte. Se non hai la faraona, puoi usare un pollo intero o una gallina vecchia. Il brodo fatto in casa è infinitamente migliore di quello confezionato!'
    },
    {
      id: 7,
      title: 'Nikumaki Onigiri',
      category: 'Antipasti & Piccoli Piatti',
      categoryId: 1,
      servings: 4,
      time: 40,
      difficulty: 'Medio',
      image: '🥟',
      ingredients: ['200gr di riso per sushi', '500gr fettine di manzo sottilissime', '100ml salsa di soya light', '50ml mirin', '50ml sake', '1 cucchiaio zucchero di canna', 'q.b. alga Nori', 'q.b. sale'],
      steps: ['Lavare il riso sciacquando bene 4 volte', 'Riempire di acqua fredda coprendo il riso di 1 dito', 'Portare a ebollizione con coperchio', 'Quando bolle, abbassare fuoco al minimo e salare', 'Coprire e cuocere 15 minuti senza aprire', 'Spegnere e lasciare altri 15 minuti con coperchio', 'Mescolare salsa di soya, mirin, sake e zucchero', 'Rosolare il manzo a fuoco alto', 'Aggiungere il composto di salsa e far caramellare', 'Far raffreddare il riso', 'Formare palline di riso con ripieno al centro', 'Compattare, dare forma triangolare e rivestire con Nori'],
      tips: 'Il segreto è NON aprire il coperchio durante la cottura! Le fettine devono essere tagliate molto sottilmente. Perfetti come snack o antipasto.'
    },
    {
      id: 8,
      title: 'Non-hummus di Cannellini e Porri',
      category: 'Antipasti & Piccoli Piatti',
      categoryId: 1,
      servings: 4,
      time: 15,
      difficulty: 'Facile',
      image: '🥟',
      ingredients: ['250gr fagioli cannellini cotti', '20gr olive taggiasche', '1 porro medio', '3 pomodori secchi', 'peperoncino secco q.b.', 'cubetti di ghiaccio q.b.', 'olio extravergine q.b.', 'sale e pepe q.b.', 'succo di mezzo limone'],
      steps: ['Tagliare il porro a rondelle sottili', 'Rosolare il porro in olio per 3-4 minuti', 'Aggiungere i cannellini e far rosolare 3-4 minuti', 'Aggiungere olive, pomodori secchi e peperoncino', 'Trasferire nel frullatore', 'Aggiungere ghiaccio e frullare 2-3 minuti', 'Aggiungere olio, sale, pepe e limone', 'Frullare fino a densità desiderata', 'Decorare con olio, olive e pomodoro secco'],
      tips: 'Varia la quantità di ghiaccio e olio per la densità perfetta! Si conserva in frigo 3-4 giorni. Perfetto con verdure crude o pane tostato.'
    },
    {
      id: 9,
      title: 'Onigiri di Tonno',
      category: 'Antipasti & Piccoli Piatti',
      categoryId: 1,
      servings: 4,
      time: 35,
      difficulty: 'Facile',
      image: '🥟',
      ingredients: ['600gr riso originario', '2-3 scatole tonno all\'olio (150gr cad)', '2-3 cipollotti freschi', 'q.b. maionese', 'q.b. salsa di soya light', 'q.b. zenzero', 'q.b. aglio', 'q.b. alga Nori', 'acqua', 'sale'],
      steps: ['Lavare il riso 4 volte con acqua fredda', 'Coprire di acqua 1 dito e portare a ebollizione', 'Abbassare fuoco al minimo e salare', 'Cuocere 15 minuti con coperchio senza aprire', 'Spegnere e lasciare 15 minuti con coperchio', 'Tritare finemente il cipollotto', 'Unire tonno sgocciolato, cipollotto, mayo, soya, zenzero e aglio', 'Far raffreddare il riso', 'Formare palline con ripieno al centro', 'Compattare e dare forma triangolare', 'Rivestire con alga Nori'],
      tips: 'Il segreto del riso perfetto è NON aprire il coperchio! Perfetti per bento box. Si conservano 1-2 giorni in frigo. Puoi variare il ripieno!'
    },
    {
      id: 10,
      title: 'Sandwich al Tonno',
      category: 'Antipasti & Piccoli Piatti',
      categoryId: 1,
      servings: 6,
      time: 15,
      difficulty: 'Facile',
      image: '🥟',
      ingredients: ['1 pane in cassetta grande da 1000gr', '2 cipollotti freschi', '400gr tonno in scatola sott\'olio', '300gr maionese', '20ml latte', '20ml salsa di soya light', 'q.b. pepe nero', 'q.b. sale', 'q.b. olio extravergine'],
      steps: ['Tritare finemente i cipollotti', 'Aggiungere il tonno sgocciolato e mescolare', 'Aggiungere mayo, latte, soya, pepe e sale', 'Mescolare bene fino a composto cremoso', 'Spalmare su ogni fetta di pane', 'Impilare le fette', 'Tagliare in fette verticali di 2-3 cm', 'Servire in verticale come sandwich giapponese'],
      tips: 'Questo è lo stile \'katsu sando\' giapponese! Si mantiene fresco in frigo 1-2 giorni. Perfetto per pranzi al sacco.'
    },
    {
      id: 11,
      title: 'Hummus ai Pomodori Secchi',
      category: 'Antipasti & Piccoli Piatti',
      categoryId: 1,
      servings: 4,
      time: 20,
      difficulty: 'Facile',
      image: '🥟',
      ingredients: ['500gr ceci lessati', '3 cucchiai semi di sesamo', '1 limone', 'cubetti di ghiaccio q.b.', 'paprika affumicata q.b.', 'olive taggiasche q.b.', 'pomodori secchi q.b.', '2 cucchiai concentrato pomodoro', '1 dado brodo vegetale', 'aglio granulare q.b.'],
      steps: ['Bollire i ceci con dado per 10 minuti', 'Tostare sesamo e paprika 2-3 minuti', 'Trasferire ceci nel frullatore', 'Aggiungere sesamo, paprika, aglio, limone, pomodori e olive', 'Aggiungere concentrato e ghiaccio', 'Frullare 5 minuti fino a crema liscia', 'Assaggiare e regolare sapori', 'Decorare con olio, olive e pomodoro'],
      tips: 'Il ghiaccio è il segreto per cremosità! Si conserva 4-5 giorni in frigo. Perfetto con verdure crude e pane tostato.'
    },
    {
      id: 12,
      title: 'Hummus di Lenticchie',
      category: 'Antipasti & Piccoli Piatti',
      categoryId: 1,
      servings: 3,
      time: 10,
      difficulty: 'Facile',
      image: '🥟',
      ingredients: ['200gr lenticchie cotte', '10 foglie basilico fresco', '3 pomodori secchi sott\'olio', '1 cucchiaio tahina', '2 cucchiai olio extravergine', 'succo mezzo limone', 'sale q.b.', 'ghiaccio q.b.', 'aglio granulare q.b.'],
      steps: ['Mettere lenticchie nel frullatore', 'Aggiungere basilico, pomodori secchi, tahina, aglio', 'Aggiungere limone e olio', 'Aggiungere ghiaccio o acqua fredda', 'Frullare fino a crema liscia', 'Regolare sale e sapori'],
      tips: 'Le lenticchie danno cremosità naturale! Il basilico lo rende estivo. Si conserva 3-4 giorni. Perfetto anche come ripieno!'
    },
    {
      id: 13,
      title: 'Hummus di Cannellini',
      category: 'Antipasti & Piccoli Piatti',
      categoryId: 1,
      servings: 3,
      time: 10,
      difficulty: 'Facile',
      image: '🥟',
      ingredients: ['220gr cannellini cotti', 'prezzemolo fresco q.b.', 'mezzo cetriolo', '1 cucchiaio tahina', '4 cucchiai olio extravergine', 'succo mezzo limone', 'sale q.b.', 'ghiaccio q.b.', 'aglio granulare q.b.'],
      steps: ['Tagliare il cetriolo a pezzetti', 'Mettere cannellini nel frullatore', 'Aggiungere prezzemolo, cetriolo, tahina, aglio', 'Aggiungere limone e olio', 'Aggiungere ghiaccio o acqua', 'Frullare fino a crema liscia', 'Regolare sale'],
      tips: 'Il cetriolo lo rende leggero e rinfrescante! Perfetto per l\'estate. Si conserva 3-4 giorni.'
    },
    {
      id: 14,
      title: 'Hummus di Borlotti',
      category: 'Antipasti & Piccoli Piatti',
      categoryId: 1,
      servings: 3,
      time: 10,
      difficulty: 'Facile',
      image: '🥟',
      ingredients: ['220gr borlotti cotti', '1 rametto rosmarino fresco', '1 cucchiaio tahina', '3 cucchiai olio extravergine', 'succo mezzo limone', 'sale q.b.', 'ghiaccio q.b.', 'aglio granulare q.b.'],
      steps: ['Mettere borlotti nel frullatore', 'Aggiungere rosmarino, tahina, aglio', 'Aggiungere limone e olio', 'Aggiungere ghiaccio o acqua', 'Frullare fino a crema liscia', 'Regolare sale'],
      tips: 'I borlotti hanno un colore bellissimo! Il rosmarino conferisce aromaticità. Si conserva 3-4 giorni. Perfetto con pane tostato!'
    },
    {
      id: 15,
      title: 'Hummus di Piselli',
      category: 'Antipasti & Piccoli Piatti',
      categoryId: 1,
      servings: 3,
      time: 10,
      difficulty: 'Facile',
      image: '🥟',
      ingredients: ['200gr piselli surgelati', '6 foglie menta fresca', '1 cucchiaio tahina', '4 cucchiai olio extravergine', 'succo mezzo limone', 'sale q.b.', 'ghiaccio q.b.', 'aglio granulare q.b.'],
      steps: ['Scottare piselli in acqua bollente 2-3 minuti', 'Scolarli bene', 'Mettere nel frullatore', 'Aggiungere menta, tahina, aglio', 'Aggiungere limone e olio', 'Aggiungere ghiaccio o acqua', 'Frullare fino a crema liscia', 'Decorare con olio e foglia di menta'],
      tips: 'Ha un colore verde brillante magnifico! La menta lo rende fresco ed estivo. Perfetto per cene primaverili!'
    }
  ];

  const categories = [
    { id: 1, name: 'Antipasti & Piccoli Piatti', emoji: '🥟', color: 'from-orange-400 to-orange-600' },
    { id: 2, name: 'Zuppe, Minestre, Vellutate & Creme', emoji: '🍲', color: 'from-amber-400 to-amber-600' },
    { id: 3, name: 'Primi & Piatti di Cereali', emoji: '🍝', color: 'from-yellow-400 to-yellow-600' },
    { id: 4, name: 'Secondi & Proteine', emoji: '🍗', color: 'from-red-400 to-red-600' },
    { id: 5, name: 'Contorni & Accompagnamenti', emoji: '🥗', color: 'from-green-400 to-green-600' },
    { id: 6, name: 'Salse, Fondi, Riduzioni & Basi', emoji: '🍯', color: 'from-cyan-400 to-cyan-600' },
    { id: 7, name: 'Dolci, Colazioni & Lievitati', emoji: '🍞', color: 'from-pink-400 to-pink-600' },
    { id: 8, name: 'Varie', emoji: '✨', color: 'from-purple-400 to-purple-600' }
  ];

  // Filtro ricette per categoria selezionata
  const filteredByCategory = selectedCategory
    ? recipes.filter(r => r.categoryId === selectedCategory)
    : recipes;

  // Filtro per ricerca
  const filteredRecipes = useMemo(() => {
    if (!searchTerm) return filteredByCategory;
    
    return filteredByCategory.filter(recipe =>
      recipe.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      recipe.ingredients.some(ing => ing.toLowerCase().includes(searchTerm.toLowerCase())) ||
      recipe.category.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm, filteredByCategory]);

  // Vista HOME
  if (!selectedRecipe && !selectedCategory) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
        {/* Header */}
        <div className="bg-gradient-to-r from-orange-500 to-red-600 text-white pt-6 pb-8 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-4">
              <div className="text-6xl mb-2">📖</div>
              <h1 className="text-4xl font-bold mb-1">Il Ricettario di Husqui</h1>
              <p className="text-orange-100">Le tue ricette preferite, sempre a portata di mano</p>
            </div>

            {/* Barra Ricerca */}
            <div className="relative mt-6">
              <Search className="absolute left-3 top-3.5 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Cerca ricetta, ingrediente..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-lg text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-300"
              />
            </div>
          </div>
        </div>

        {/* Risultati Ricerca */}
        {searchTerm && (
          <div className="max-w-4xl mx-auto px-4 py-6">
            <div className="bg-white rounded-lg shadow-md p-4 mb-6">
              <p className="text-gray-600">
                Trovate <span className="font-bold text-orange-600">{filteredRecipes.length}</span> ricette
              </p>
              <div className="grid grid-cols-1 gap-3 mt-3">
                {filteredRecipes.map(recipe => (
                  <div
                    key={recipe.id}
                    onClick={() => setSelectedRecipe(recipe)}
                    className="p-3 border border-gray-200 rounded-lg hover:bg-orange-50 cursor-pointer transition"
                  >
                    <div className="font-semibold text-gray-800">{recipe.title}</div>
                    <div className="text-sm text-gray-500">{recipe.category}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Categorie */}
        {!searchTerm && (
          <div className="max-w-4xl mx-auto px-4 py-8">
            <div className="grid grid-cols-2 gap-4">
              {categories.map(cat => (
                <div
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`bg-gradient-to-br ${cat.color} text-white rounded-lg p-6 cursor-pointer hover:shadow-lg transition transform hover:scale-105`}
                >
                  <div className="text-4xl mb-2">{cat.emoji}</div>
                  <div className="font-semibold text-sm">{cat.name}</div>
                  <div className="text-xs mt-2 opacity-80">
                    {recipes.filter(r => r.categoryId === cat.id).length} ricette
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  }

  // Vista DETTAGLIO RICETTA
  if (selectedRecipe) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
        {/* Header con back button */}
        <div className="bg-gradient-to-r from-orange-500 to-red-600 text-white p-4">
          <div className="max-w-4xl mx-auto">
            <button
              onClick={() => setSelectedRecipe(null)}
              className="flex items-center gap-2 text-white hover:opacity-80 transition mb-4"
            >
              <ArrowLeft size={20} />
              Indietro
            </button>
            <h1 className="text-3xl font-bold mb-2">{selectedRecipe.title}</h1>
            <p className="text-orange-100">{selectedRecipe.category}</p>
          </div>
        </div>

        {/* Contenuto Ricetta */}
        <div className="max-w-4xl mx-auto px-4 py-6">
          {/* Immagine Placeholder */}
          <div className="bg-gradient-to-br from-orange-100 to-orange-200 rounded-lg h-64 flex items-center justify-center mb-6 shadow-md overflow-hidden">
            {selectedRecipe.image.startsWith('http') ? (
              <img src={selectedRecipe.image} alt={selectedRecipe.title} className="w-full h-full object-cover" />
            ) : (
              <div className="text-8xl">{selectedRecipe.image}</div>
            )}
          </div>

          {/* Info Rapide */}
          <div className="grid grid-cols-3 gap-3 mb-6">
            <div className="bg-white rounded-lg p-4 shadow-sm text-center">
              <Users size={24} className="text-orange-500 mx-auto mb-2" />
              <div className="text-sm text-gray-500">Persone</div>
              <div className="font-bold text-lg">{selectedRecipe.servings}</div>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm text-center">
              <Clock size={24} className="text-orange-500 mx-auto mb-2" />
              <div className="text-sm text-gray-500">Tempo</div>
              <div className="font-bold text-lg">{selectedRecipe.time}'</div>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm text-center">
              <Flame size={24} className="text-orange-500 mx-auto mb-2" />
              <div className="text-sm text-gray-500">Difficoltà</div>
              <div className="font-bold text-lg text-sm">{selectedRecipe.difficulty}</div>
            </div>
          </div>

          {/* Ingredienti */}
          <div className="bg-white rounded-lg p-6 shadow-md mb-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">🧾 Ingredienti</h2>
            <ul className="space-y-2">
              {selectedRecipe.ingredients.map((ing, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <input type="checkbox" className="mt-1 accent-orange-500 cursor-pointer" />
                  <span className="text-gray-700">{ing}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Procedimento */}
          <div className="bg-white rounded-lg p-6 shadow-md mb-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">🍳 Procedimento</h2>
            <ol className="space-y-4">
              {selectedRecipe.steps.map((step, idx) => (
                <li key={idx} className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold">
                    {idx + 1}
                  </div>
                  <p className="text-gray-700 pt-1">{step}</p>
                </li>
              ))}
            </ol>
          </div>

          {/* Consigli */}
          <div className="bg-blue-50 border-l-4 border-blue-500 rounded-lg p-6 mb-6">
            <h2 className="text-xl font-bold text-blue-900 mb-2">💡 Consigli & Info</h2>
            <p className="text-blue-800">{selectedRecipe.tips}</p>
          </div>
        </div>
      </div>
    );
  }

  // Vista CATEGORIA
  if (selectedCategory) {
    const category = categories.find(c => c.id === selectedCategory);
    
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
        {/* Header */}
        <div className={`bg-gradient-to-r ${category.color} text-white p-4`}>
          <div className="max-w-4xl mx-auto">
            <button
              onClick={() => setSelectedCategory(null)}
              className="flex items-center gap-2 text-white hover:opacity-80 transition mb-4"
            >
              <ArrowLeft size={20} />
              Indietro
            </button>
            <div className="flex items-center gap-3">
              <div className="text-4xl">{category.emoji}</div>
              <div>
                <h1 className="text-3xl font-bold">{category.name}</h1>
              </div>
            </div>
          </div>
        </div>

        {/* Ricette della categoria */}
        <div className="max-w-4xl mx-auto px-4 py-6">
          {filteredRecipes.length === 0 ? (
            <div className="bg-white rounded-lg p-8 text-center shadow-md">
              <div className="text-4xl mb-2">📭</div>
              <p className="text-gray-500">Nessuna ricetta trovata in questa categoria</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-3">
              {filteredRecipes.map(recipe => (
                <div
                  key={recipe.id}
                  onClick={() => setSelectedRecipe(recipe)}
                  className="bg-white rounded-lg p-4 shadow-md hover:shadow-lg cursor-pointer transition flex items-center gap-4"
                >
                  {recipe.image.startsWith('http') ? (
                    <img src={recipe.image} alt={recipe.title} className="w-16 h-16 rounded-lg object-cover flex-shrink-0" />
                  ) : (
                    <div className="text-5xl">{recipe.image}</div>
                  )}
                  <div className="flex-1">
                    <h3 className="font-bold text-lg text-gray-800">{recipe.title}</h3>
                    <div className="flex gap-4 text-sm text-gray-500 mt-2">
                      <span>👥 {recipe.servings} persone</span>
                      <span>⏱️ {recipe.time} min</span>
                      <span>📊 {recipe.difficulty}</span>
                    </div>
                  </div>
                  <div className="text-gray-400">›</div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    );
  }
};

export default RicettarioApp;
