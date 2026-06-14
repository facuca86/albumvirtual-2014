// Gradientes visuales por equipo — usar clases Tailwind from-/via-/to-
// dark: true indica que el texto sobre ese fondo debe ser claro (blanco)
// Paleta dominante: celeste (#5FBFD8) y verde (#2D7B2F)

export const teamThemes = {
  // ── Grupo A ──────────────────────────────────────────────────────────────────
  BRA: { gradient: "from-yellow-400 via-green-600 to-yellow-500",          dark: true  },
  CRO: { gradient: "from-red-600 via-white to-blue-700"                               },
  MEX: { gradient: "from-green-600 via-white to-red-600"                              },
  CMR: { gradient: "from-green-600 via-red-500 to-yellow-400",             dark: true  },

  // ── Grupo B ──────────────────────────────────────────────────────────────────
  ESP: { gradient: "from-red-600 via-yellow-400 to-red-700",               dark: true  },
  NED: { gradient: "from-orange-500 via-white to-orange-400"                          },
  CHI: { gradient: "from-red-600 via-white to-red-600"                                },
  AUS: { gradient: "from-blue-600 via-yellow-400 to-blue-500",             dark: true  },

  // ── Grupo C ──────────────────────────────────────────────────────────────────
  COL: { gradient: "from-yellow-400 via-blue-700 to-red-500",              dark: true  },
  GRE: { gradient: "from-blue-700 via-white to-blue-600"                              },
  CIV: { gradient: "from-orange-500 via-white to-green-600"                           },
  JPN: { gradient: "from-white via-red-500 to-blue-700"                               },

  // ── Grupo D ──────────────────────────────────────────────────────────────────
  URU: { gradient: "from-sky-500 via-white to-sky-400"                                },
  CRC: { gradient: "from-blue-700 via-white to-red-600"                               },
  ENG: { gradient: "from-white via-red-500 to-white"                                  },
  ITA: { gradient: "from-blue-700 via-white to-blue-600"                              },

  // ── Grupo E ──────────────────────────────────────────────────────────────────
  SUI: { gradient: "from-red-600 via-white to-red-600"                                },
  ECU: { gradient: "from-yellow-400 via-blue-600 to-red-500",              dark: true  },
  FRA: { gradient: "from-blue-800 via-white to-red-600"                               },
  HON: { gradient: "from-blue-600 via-white to-blue-600"                              },

  // ── Grupo F ──────────────────────────────────────────────────────────────────
  ARG: { gradient: "from-sky-400 via-white to-sky-300"                                },
  BIH: { gradient: "from-blue-700 via-yellow-400 to-blue-600",             dark: true  },
  IRN: { gradient: "from-green-600 via-white to-red-600"                              },
  NGA: { gradient: "from-green-600 via-white to-green-500"                            },

  // ── Grupo G ──────────────────────────────────────────────────────────────────
  GER: { gradient: "from-white via-slate-300 to-slate-800"                            },
  POR: { gradient: "from-green-700 via-red-600 to-green-600",              dark: true  },
  GHA: { gradient: "from-red-600 via-yellow-400 to-green-600",             dark: true  },
  USA: { gradient: "from-blue-700 via-red-500 to-blue-600",                dark: true  },

  // ── Grupo H ──────────────────────────────────────────────────────────────────
  BEL: { gradient: "from-slate-900 via-yellow-400 to-red-600",             dark: true  },
  ALG: { gradient: "from-white via-green-600 to-red-500"                              },
  RUS: { gradient: "from-white via-blue-600 to-red-600"                               },
  KOR: { gradient: "from-white via-red-600 to-blue-700"                               },

  // ── Secciones especiales ─────────────────────────────────────────────────────
  INTRO2014:    { gradient: "from-cyan-500 via-green-500 to-cyan-400",      dark: true  },
  ESTADIOS2014: { gradient: "from-green-800 via-cyan-400 to-green-700",     dark: true  },
};
