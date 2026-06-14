export const albumConfig = {

  // ── Identidad y almacenamiento ───────────────────────────────────────────────
  id: 'paniniBrazil2014',
  owner: 'Facundo',
  title: 'ÁLBUM VIRTUAL BRASIL 2014',
  subtitle: 'FIFA WORLD CUP · BRAZIL',
  repetidasSubtitle: 'FIFA World Cup 2014 · Brasil',
  exportFileName: 'panini2014_backup.json',

  // ── Conteo de figuritas ──────────────────────────────────────────────────────
  teamStickerCount: 19,
  totalStickers: 640,
  promoCodePrefix: 'ZZZNONE',

  // ── Navegación ───────────────────────────────────────────────────────────────
  lastSectionCode: 'KOR',

  // ── Secciones especiales ─────────────────────────────────────────────────────
  specialSections: {
    INTRO: {
      count: 8,
      stickers: [
        { code: 'PANINI', label: 'PANINI',        type: 'brillante', pair: false },
        { code: 'INTRO1', label: 'Logo FIFA',      type: 'brillante', pair: false },
        { code: 'INTRO2', label: 'Logo Mundial',   type: 'brillante', pair: false },
        { code: 'INTRO3', label: 'Logo Mundial',   type: 'brillante', pair: false },
        { code: 'INTRO4', label: 'Póster Mascota', type: 'brillante', pair: false },
        { code: 'INTRO5', label: 'Póster Mascota', type: 'brillante', pair: false },
        { code: 'INTRO6', label: 'Trofeo',         type: 'brillante', pair: false },
        { code: 'INTRO7', label: 'Pelota Oficial', type: 'brillante', pair: false },
      ],
    },
    ESTADIOS: {
      count: 24,
      stickers: [
        { code: 'EST1',  label: 'Belo Horizonte - Mineirão',        type: 'estadio', pair: true },
        { code: 'EST2',  label: 'Belo Horizonte - Mineirão',        type: 'estadio', pair: true },
        { code: 'EST3',  label: 'Brasilia - Estadio Nacional',       type: 'estadio', pair: true },
        { code: 'EST4',  label: 'Brasilia - Estadio Nacional',       type: 'estadio', pair: true },
        { code: 'EST5',  label: 'Cuiabá - Arena Pantanal',          type: 'estadio', pair: true },
        { code: 'EST6',  label: 'Cuiabá - Arena Pantanal',          type: 'estadio', pair: true },
        { code: 'EST7',  label: 'Curitiba - Arena da Baixada',      type: 'estadio', pair: true },
        { code: 'EST8',  label: 'Curitiba - Arena da Baixada',      type: 'estadio', pair: true },
        { code: 'EST9',  label: 'Fortaleza - Estadio Castelão',     type: 'estadio', pair: true },
        { code: 'EST10', label: 'Fortaleza - Estadio Castelão',     type: 'estadio', pair: true },
        { code: 'EST11', label: 'Manaos - Arena Amazonia',          type: 'estadio', pair: true },
        { code: 'EST12', label: 'Manaos - Arena Amazonia',          type: 'estadio', pair: true },
        { code: 'EST13', label: 'Natal - Estadio das Dunas',        type: 'estadio', pair: true },
        { code: 'EST14', label: 'Natal - Estadio das Dunas',        type: 'estadio', pair: true },
        { code: 'EST15', label: 'Porto Alegre - Estadio Beira-Rio', type: 'estadio', pair: true },
        { code: 'EST16', label: 'Porto Alegre - Estadio Beira-Rio', type: 'estadio', pair: true },
        { code: 'EST17', label: 'Recife - Arena Pernambuco',        type: 'estadio', pair: true },
        { code: 'EST18', label: 'Recife - Arena Pernambuco',        type: 'estadio', pair: true },
        { code: 'EST19', label: 'Rio de Janeiro - Estadio do Maracaná', type: 'estadio', pair: true },
        { code: 'EST20', label: 'Rio de Janeiro - Estadio do Maracaná', type: 'estadio', pair: true },
        { code: 'EST21', label: 'Salvador - Arena Fonte Nova',      type: 'estadio', pair: true },
        { code: 'EST22', label: 'Salvador - Arena Fonte Nova',      type: 'estadio', pair: true },
        { code: 'EST23', label: 'São Paulo - Arena Corinthians',    type: 'estadio', pair: true },
        { code: 'EST24', label: 'São Paulo - Arena Corinthians',    type: 'estadio', pair: true },
      ],
    },
  },

  // ── Temas visuales de secciones especiales ────────────────────────────────────
  sectionThemes: {
    INTRO:    { themeKey: 'INTRO2014',    solidBg: null,            innerPanel: 'bg-[#0a2a3a]' },
    ESTADIOS: { themeKey: 'ESTADIOS2014', solidBg: 'bg-[#0d3b1a]', innerPanel: 'bg-[#0a2a0a]' },
  },

  // ── Etiquetas en el buscador para secciones especiales ───────────────────────
  searchConfig: {
    INTRO:    { teamName: 'Intro Brasil 2014', teamFlag: '🏆' },
    ESTADIOS: { teamName: 'Estadios',          teamFlag: '🏟️' },
  },

  // ── Configuración de estadísticas ────────────────────────────────────────────
  statsConfig: [
    { key: 'INTRO',    emoji: '🏆', name: 'INTRO',    fixedCodes: ['PANINI','INTRO1','INTRO2','INTRO3','INTRO4','INTRO5','INTRO6','INTRO7'] },
    { key: '__TEAMS__' },
    { key: 'ESTADIOS', emoji: '🏟️', name: 'ESTADIOS', fixedCodes: ['EST1','EST2','EST3','EST4','EST5','EST6','EST7','EST8','EST9','EST10','EST11','EST12','EST13','EST14','EST15','EST16','EST17','EST18','EST19','EST20','EST21','EST22','EST23','EST24'] },
  ],

  // ── Equipos competidores (orden del álbum) ────────────────────────────────────
  competingTeams: [
    'BRA', 'CRO', 'MEX', 'CMR',
    'ESP', 'NED', 'CHI', 'AUS',
    'COL', 'GRE', 'CIV', 'JPN',
    'URU', 'CRC', 'ENG', 'ITA',
    'SUI', 'ECU', 'FRA', 'HON',
    'ARG', 'BIH', 'IRN', 'NGA',
    'GER', 'POR', 'GHA', 'USA',
    'BEL', 'ALG', 'RUS', 'KOR',
  ],

  // ── Datos de todos los equipos ───────────────────────────────────────────────
  teamData: {
    INTRO:    { name: 'Intro',    federation: 'Opening Section',      flag: '🏆' },
    ESTADIOS: { name: 'Estadios', federation: 'Estadios Brasil 2014', flag: '🏟️' },

    BRA: { name: 'Brasil',              federation: 'Confederação Brasileira de Futebol',                    flag: '🇧🇷' },
    CRO: { name: 'Croacia',             federation: 'Hrvatski nogometni savez',                              flag: '🇭🇷' },
    MEX: { name: 'México',              federation: 'Federación Mexicana de Fútbol',                        flag: '🇲🇽' },
    CMR: { name: 'Camerún',             federation: 'Fédération Camerounaise de Football',                  flag: '🇨🇲' },
    ESP: { name: 'España',              federation: 'Real Federación Española de Fútbol',                   flag: '🇪🇸' },
    NED: { name: 'Países Bajos',        federation: 'Koninklijke Nederlandse Voetbalbond',                  flag: '🇳🇱' },
    CHI: { name: 'Chile',               federation: 'Federación de Fútbol de Chile',                       flag: '🇨🇱' },
    AUS: { name: 'Australia',           federation: 'Football Australia',                                    flag: '🇦🇺' },
    COL: { name: 'Colombia',            federation: 'Federación Colombiana de Fútbol',                      flag: '🇨🇴' },
    GRE: { name: 'Grecia',              federation: 'Hellenic Football Federation',                         flag: '🇬🇷' },
    CIV: { name: 'Costa de Marfil',     federation: "Fédération Ivoirienne de Football",                   flag: '🇨🇮' },
    JPN: { name: 'Japón',               federation: 'Japan Football Association',                            flag: '🇯🇵' },
    URU: { name: 'Uruguay',             federation: 'Asociación Uruguaya de Fútbol',                        flag: '🇺🇾' },
    CRC: { name: 'Costa Rica',          federation: 'Federación Costarricense de Fútbol',                   flag: '🇨🇷' },
    ENG: { name: 'Inglaterra',          federation: 'The Football Association',                              flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿' },
    ITA: { name: 'Italia',              federation: 'Federazione Italiana Giuoco Calcio',                   flag: '🇮🇹' },
    SUI: { name: 'Suiza',               federation: 'Schweizerischer Fussballverband',                      flag: '🇨🇭' },
    ECU: { name: 'Ecuador',             federation: 'Federación Ecuatoriana de Fútbol',                     flag: '🇪🇨' },
    FRA: { name: 'Francia',             federation: 'Fédération Française de Football',                     flag: '🇫🇷' },
    HON: { name: 'Honduras',            federation: 'Federación Nacional Autónoma de Fútbol de Honduras',   flag: '🇭🇳' },
    ARG: { name: 'Argentina',           federation: 'Asociación del Fútbol Argentino',                     flag: '🇦🇷' },
    BIH: { name: 'Bosnia-Herzegovina',  federation: 'Fudbalski / Nogometni savez Bosne i Hercegovine',      flag: '🇧🇦' },
    IRN: { name: 'Irán',                federation: 'Football Federation Islamic Republic of Iran',          flag: '🇮🇷' },
    NGA: { name: 'Nigeria',             federation: 'Nigeria Football Federation',                          flag: '🇳🇬' },
    GER: { name: 'Alemania',            federation: 'Deutscher Fußball-Bund',                               flag: '🇩🇪' },
    POR: { name: 'Portugal',            federation: 'Federação Portuguesa de Futebol',                      flag: '🇵🇹' },
    GHA: { name: 'Ghana',               federation: 'Ghana Football Association',                           flag: '🇬🇭' },
    USA: { name: 'Estados Unidos',      federation: 'U.S. Soccer Federation',                               flag: '🇺🇸' },
    BEL: { name: 'Bélgica',             federation: 'Koninklijke Belgische Voetbalbond',                    flag: '🇧🇪' },
    ALG: { name: 'Argelia',             federation: 'Fédération Algérienne de Football',                    flag: '🇩🇿' },
    RUS: { name: 'Rusia',               federation: 'Russian Football National Union',                      flag: '🇷🇺' },
    KOR: { name: 'República de Corea',  federation: 'Korea Football Association',                           flag: '🇰🇷' },
  },

  // ── Asignación de grupos por equipo ──────────────────────────────────────────
  teamGroups: {
    BRA: { group: 'A', members: ['Brasil',            'Croacia',           'México',          'Camerún'          ] },
    CRO: { group: 'A', members: ['Brasil',            'Croacia',           'México',          'Camerún'          ] },
    MEX: { group: 'A', members: ['Brasil',            'Croacia',           'México',          'Camerún'          ] },
    CMR: { group: 'A', members: ['Brasil',            'Croacia',           'México',          'Camerún'          ] },
    ESP: { group: 'B', members: ['España',            'Países Bajos',      'Chile',           'Australia'        ] },
    NED: { group: 'B', members: ['España',            'Países Bajos',      'Chile',           'Australia'        ] },
    CHI: { group: 'B', members: ['España',            'Países Bajos',      'Chile',           'Australia'        ] },
    AUS: { group: 'B', members: ['España',            'Países Bajos',      'Chile',           'Australia'        ] },
    COL: { group: 'C', members: ['Colombia',          'Grecia',            'Costa de Marfil', 'Japón'            ] },
    GRE: { group: 'C', members: ['Colombia',          'Grecia',            'Costa de Marfil', 'Japón'            ] },
    CIV: { group: 'C', members: ['Colombia',          'Grecia',            'Costa de Marfil', 'Japón'            ] },
    JPN: { group: 'C', members: ['Colombia',          'Grecia',            'Costa de Marfil', 'Japón'            ] },
    URU: { group: 'D', members: ['Uruguay',           'Costa Rica',        'Inglaterra',      'Italia'           ] },
    CRC: { group: 'D', members: ['Uruguay',           'Costa Rica',        'Inglaterra',      'Italia'           ] },
    ENG: { group: 'D', members: ['Uruguay',           'Costa Rica',        'Inglaterra',      'Italia'           ] },
    ITA: { group: 'D', members: ['Uruguay',           'Costa Rica',        'Inglaterra',      'Italia'           ] },
    SUI: { group: 'E', members: ['Suiza',             'Ecuador',           'Francia',         'Honduras'         ] },
    ECU: { group: 'E', members: ['Suiza',             'Ecuador',           'Francia',         'Honduras'         ] },
    FRA: { group: 'E', members: ['Suiza',             'Ecuador',           'Francia',         'Honduras'         ] },
    HON: { group: 'E', members: ['Suiza',             'Ecuador',           'Francia',         'Honduras'         ] },
    ARG: { group: 'F', members: ['Argentina',         'Bosnia-Herzegovina','Irán',            'Nigeria'          ] },
    BIH: { group: 'F', members: ['Argentina',         'Bosnia-Herzegovina','Irán',            'Nigeria'          ] },
    IRN: { group: 'F', members: ['Argentina',         'Bosnia-Herzegovina','Irán',            'Nigeria'          ] },
    NGA: { group: 'F', members: ['Argentina',         'Bosnia-Herzegovina','Irán',            'Nigeria'          ] },
    GER: { group: 'G', members: ['Alemania',          'Portugal',          'Ghana',           'Estados Unidos'   ] },
    POR: { group: 'G', members: ['Alemania',          'Portugal',          'Ghana',           'Estados Unidos'   ] },
    GHA: { group: 'G', members: ['Alemania',          'Portugal',          'Ghana',           'Estados Unidos'   ] },
    USA: { group: 'G', members: ['Alemania',          'Portugal',          'Ghana',           'Estados Unidos'   ] },
    BEL: { group: 'H', members: ['Bélgica',           'Argelia',           'Rusia',           'Rep. de Corea'    ] },
    ALG: { group: 'H', members: ['Bélgica',           'Argelia',           'Rusia',           'Rep. de Corea'    ] },
    RUS: { group: 'H', members: ['Bélgica',           'Argelia',           'Rusia',           'Rep. de Corea'    ] },
    KOR: { group: 'H', members: ['Bélgica',           'Argelia',           'Rusia',           'Rep. de Corea'    ] },
  },

  // ── Grupos del torneo ────────────────────────────────────────────────────────
  groups: {
    A: { color: '#009C3B', teams: ['BRA', 'CRO', 'MEX', 'CMR'] },
    B: { color: '#C60B1E', teams: ['ESP', 'NED', 'CHI', 'AUS'] },
    C: { color: '#0038A8', teams: ['COL', 'GRE', 'CIV', 'JPN'] },
    D: { color: '#5B2D8E', teams: ['URU', 'CRC', 'ENG', 'ITA'] },
    E: { color: '#D52B1E', teams: ['SUI', 'ECU', 'FRA', 'HON'] },
    F: { color: '#1a6bb5', teams: ['ARG', 'BIH', 'IRN', 'NGA'] },
    G: { color: '#2a2a2a', teams: ['GER', 'POR', 'GHA', 'USA'] },
    H: { color: '#EF2B2D', teams: ['BEL', 'ALG', 'RUS', 'KOR'] },
  },

};

// Orden completo de navegación del álbum
albumConfig.teams = [
  'INTRO', 'ESTADIOS',
  ...albumConfig.competingTeams,
];

// ── Paleta general del álbum ─────────────────────────────────────────────────
export const albumPalette = {
  name: 'Brasil 2014',
  primary: '#5FBFD8',
  secondary: '#2D7B2F',
  accent: '#9BC43A',
  headerBg: '#ffffff',
  headerBgDark: '#1a3a1a',
  darkBase: '#0f2a0f',
  darkCard: '#1a3d1a',
  text: '#1e293b',
  textDark: '#ffffff',
};

// ── Numeración bidireccional ─────────────────────────────────────────────────
export const codeToNumber = {};
export const numberToCode = {};

// Caso especial PANINI — número visible '00', fuera del contador correlativo
codeToNumber['PANINI'] = '00';
numberToCode['00'] = 'PANINI';

// Contador correlativo del 1 al 639
let _counter = 1;

// INTRO1–INTRO7
for (let i = 1; i <= 7; i++) {
  codeToNumber[`INTRO${i}`] = _counter;
  numberToCode[_counter]    = `INTRO${i}`;
  _counter++;
}

// EST1–EST24
for (let i = 1; i <= 24; i++) {
  codeToNumber[`EST${i}`] = _counter;
  numberToCode[_counter]  = `EST${i}`;
  _counter++;
}

// 32 equipos × 19 figuritas
const _teamsInOrder = [
  'BRA','CRO','MEX','CMR',
  'ESP','NED','CHI','AUS',
  'COL','GRE','CIV','JPN',
  'URU','CRC','ENG','ITA',
  'SUI','ECU','FRA','HON',
  'ARG','BIH','IRN','NGA',
  'GER','POR','GHA','USA',
  'BEL','ALG','RUS','KOR',
];

for (const team of _teamsInOrder) {
  for (let i = 1; i <= 19; i++) {
    codeToNumber[`${team}${i}`] = _counter;
    numberToCode[_counter]      = `${team}${i}`;
    _counter++;
  }
}
// Al terminar: _counter === 640, numberToCode[639] === 'KOR19'
