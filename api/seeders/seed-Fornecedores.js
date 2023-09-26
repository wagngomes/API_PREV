'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('Fornecedores', [
      {
        descricao: "CELLERA",
        planejador_id: "1002"
      },
      {
        descricao: "BLAU",
        planejador_id: "1003"
      },
      {
        descricao: "MEDICONE",
        planejador_id: "1004"
      },
      {
        descricao: "BD MS",
        planejador_id: "1004"
      },
      {
        descricao: "RAVA EMBALAGENS",
        planejador_id: "1005"
      },
      {
        descricao: "BAXTER",
        planejador_id: "1006"
      },
      {
        descricao: "BIONAL",
        planejador_id: "1007"
      },
      {
        descricao: "RIOQUIMICA",
        planejador_id: "1005"
      },
      {
        descricao: "BCI MEDICAL",
        planejador_id: "1007"
      },
      {
        descricao: "HIPOLABOR",
        planejador_id: "1003"
      },
      {
        descricao: "CREMER",
        planejador_id: "1005"
      },
      {
        descricao: "HALEXISTAR",
        planejador_id: "1003"
      },
      {
        descricao: "ARGON",
        planejador_id: "1005"
      },
      {
        descricao: "BD DC",
        planejador_id: "1004"
      },
      {
        descricao: "CCM",
        planejador_id: "1007"
      },
      {
        descricao: "SAMTEC",
        planejador_id: "1008"
      },
      {
        descricao: "EQUIPLEX",
        planejador_id: "1007"
      },
      {
        descricao: "GRUNENTHAL",
        planejador_id: "1002"
      },
      {
        descricao: "PFIZER",
        planejador_id: "1009"
      },
      {
        descricao: "EUROFARMA ONCO",
        planejador_id: "1003"
      },
      {
        descricao: "3M",
        planejador_id: "1008"
      },
      {
        descricao: "CRISTALIA",
        planejador_id: "1003"
      },
      {
        descricao: "ACHE",
        planejador_id: "1006"
      },
      {
        descricao: "NOVARTIS",
        planejador_id: "1006"
      },
      {
        descricao: "BOEHRINGER",
        planejador_id: "1009"
      },
      {
        descricao: "BERGAMO",
        planejador_id: "1009"
      },
      {
        descricao: "EMS",
        planejador_id: "1006"
      },
      {
        descricao: "ASPEN",
        planejador_id: "1010"
      },
      {
        descricao: "JANSSEN",
        planejador_id: "1002"
      },
      {
        descricao: "LIBBS",
        planejador_id: "1010"
      },
      {
        descricao: "ASTRAZENECA",
        planejador_id: "1011"
      },
      {
        descricao: "TEUTO",
        planejador_id: "1003"
      },
      {
        descricao: "HYPOFARMA",
        planejador_id: "1003"
      },
      {
        descricao: "MERCK S/A",
        planejador_id: "1002"
      },
      {
        descricao: "FARMOQUIMICA",
        planejador_id: "1010"
      },
      {
        descricao: "UNITED",
        planejador_id: "1010"
      },
      {
        descricao: "ROCHE",
        planejador_id: "1011"
      },
      {
        descricao: "ZYDUS",
        planejador_id: "1009"
      },
      {
        descricao: "DAIICHI",
        planejador_id: "1011"
      },
      {
        descricao: "ACCORD",
        planejador_id: "1003"
      },
      {
        descricao: "MSD",
        planejador_id: "1009"
      },
      {
        descricao: "HYPERA",
        planejador_id: "1003"
      },
      {
        descricao: "SANOFI",
        planejador_id: "1009"
      },
      {
        descricao: "ELI LILLY",
        planejador_id: "1011"
      },
      {
        descricao: "FERRING",
        planejador_id: "1002"
      },
      {
        descricao: "SANDOZ",
        planejador_id: "1002"
      },
      {
        descricao: "DESCARPACK",
        planejador_id: "1012"
      },
      {
        descricao: "MADEITEX",
        planejador_id: "1004"
      },
      {
        descricao: "MUCAMBO",
        planejador_id: "1012"
      },
      {
        descricao: "PRATI DONADUZZI",
        planejador_id: "1006"
      },
      {
        descricao: "F/ARTI",
        planejador_id: "1005"
      },
      {
        descricao: "IPSEN",
        planejador_id: "1006"
      },
      {
        descricao: "ATRASORB",
        planejador_id: "1005"
      },
      {
        descricao: "TEVA",
        planejador_id: "1009"
      },
      {
        descricao: "KIN",
        planejador_id: "1006"
      },
      {
        descricao: "POLARFIX",
        planejador_id: "1004"
      },
      {
        descricao: "EUROFARMA",
        planejador_id: "1003"
      },
      {
        descricao: "AMGEN",
        planejador_id: "1002"
      },
      {
        descricao: "ABBVIE",
        planejador_id: "1006"
      },
      {
        descricao: "AMP",
        planejador_id: "1004"
      },
      {
        descricao: "ABL",
        planejador_id: "1003"
      },
      {
        descricao: "FRESENIUS",
        planejador_id: "1005"
      },
      {
        descricao: "NESTLE",
        planejador_id: "1008"
      },
      {
        descricao: "FLEX",
        planejador_id: "1004"
      },
      {
        descricao: "BAYER",
        planejador_id: "1010"
      },
      {
        descricao: "CSL",
        planejador_id: "1011"
      },
      {
        descricao: "INDUSTRIA DE ARTEFATOS DE BORRACHA INOVATEX LTDA",
        planejador_id: "1004"
      },
      {
        descricao: "PIERRE FABRE",
        planejador_id: "1003"
      },
      {
        descricao: "GSK",
        planejador_id: "1011"
      },
      {
        descricao: "VIATRIS",
        planejador_id: "1006"
      },
      {
        descricao: "ABBOTT",
        planejador_id: "1006"
      },
      {
        descricao: "VENKURI",
        planejador_id: "1004"
      },
      {
        descricao: "BD PAS",
        planejador_id: "1004"
      },
      {
        descricao: "LUVA",
        planejador_id: "1012"
      },
      {
        descricao: "ABBOTT DIABETES",
        planejador_id: "1008"
      },
      {
        descricao: "MSO HOSPITALAR",
        planejador_id: "1004"
      },
      {
        descricao: "SKY",
        planejador_id: "1012"
      },
      {
        descricao: "ZODIAC",
        planejador_id: "1003"
      },
      {
        descricao: "NEOQUIMICA",
        planejador_id: "1003"
      },
      {
        descricao: "BIOTEC",
        planejador_id: "1007"
      },
      {
        descricao: "ESTILO",
        planejador_id: "1004"
      },
      {
        descricao: "BIOLAB",
        planejador_id: "1003"
      },
      {
        descricao: "APSEN",
        planejador_id: "1009"
      },
      {
        descricao: "TRB",
        planejador_id: "1002"
      },
      {
        descricao: "PROTEC",
        planejador_id: "1005"
      },
      {
        descricao: "ORGANON",
        planejador_id: "1002"
      },
      {
        descricao: "FARMASA",
        planejador_id: "1003"
      },
      {
        descricao: "BRISTOL",
        planejador_id: "1010"
      },
      {
        descricao: "JP",
        planejador_id: "1007"
      },
      {
        descricao: "ALLERGAN",
        planejador_id: "1006"
      },
      {
        descricao: "ZAMBOM",
        planejador_id: "1011"
      },
      {
        descricao: "RECKITT",
        planejador_id: "1002"
      },
      {
        descricao: "CONVATEC",
        planejador_id: "1004"
      },
      {
        descricao: "MANTECORP",
        planejador_id: "1003"
      },
      {
        descricao: "TAKEDA",
        planejador_id: "1006"
      },
      {
        descricao: "CIPAMED",
        planejador_id: "1004"
      },
      {
        descricao: "MAWDSLEYS",
        planejador_id: "1009"
      },
      {
        descricao: "SERVIER",
        planejador_id: "1006"
      },
      {
        descricao: "ASTELLAS",
        planejador_id: "1006"
      },
      {
        descricao: "PROVIDER",
        planejador_id: "1008"
      },
      {
        descricao: "HEBRON",
        planejador_id: "1009"
      },
      {
        descricao: "CARBOGEL",
        planejador_id: "1007"
      },
      {
        descricao: "GLENMARK",
        planejador_id: "1002"
      },
      {
        descricao: "CRAL",
        planejador_id: "1012"
      },
      {
        descricao: "CICLO FARMA",
        planejador_id: "1007"
      },
      {
        descricao: "J&J",
        planejador_id: "1002"
      },
      {
        descricao: "BSN MEDICAL",
        planejador_id: "1004"
      },
      {
        descricao: "COLOPLAST",
        planejador_id: "1005"
      },
      {
        descricao: "HARBO",
        planejador_id: "1007"
      },
      {
        descricao: "GE HEALTHCARE",
        planejador_id: "1007"
      },
      {
        descricao: "BLUESAIL",
        planejador_id: "1012"
      },
      {
        descricao: "MAXICOR",
        planejador_id: "1007"
      },
      {
        descricao: "PHILIPS AVENT",
        planejador_id: "1005"
      },
      {
        descricao: "MEDITRACE",
        planejador_id: "1005"
      },
      {
        descricao: "PLUMAX LENCOIS HOSPITALARES",
        planejador_id: "1008"
      },
      {
        descricao: "J PROLAB",
        planejador_id: "1012"
      },
      {
        descricao: "DESCARBOX",
        planejador_id: "1012"
      },
      {
        descricao: "ECO",
        planejador_id: "1012"
      },
      {
        descricao: "FEELCLEAN",
        planejador_id: "1012"
      },
      {
        descricao: "HN DESC",
        planejador_id: "1012"
      },
      {
        descricao: "TERRAGENE",
        planejador_id: "1005"
      },
      {
        descricao: "BACE",
        planejador_id: "1005"
      },
      {
        descricao: "PFIZER VACINA",
        planejador_id: "1011"
      },
      {
        descricao: "ALCON",
        planejador_id: "1009"
      },
      {
        descricao: "MEDIX BRASIL",
        planejador_id: "1012"
      },
      {
        descricao: "FARMAX",
        planejador_id: "1008"
      },
      {
        descricao: "ANSELL",
        planejador_id: "1005"
      },
      {
        descricao: "ABBOTT RAPID DIAGNOSTICS",
        planejador_id: "1012"
      },
      {
        descricao: "MOKSHA8",
        planejador_id: "1011"
      },
      {
        descricao: "BRASIFLEX",
        planejador_id: "1012"
      },
      {
        descricao: "ABBOTT VACINA",
        planejador_id: "1011"
      },
      {
        descricao: "DR REDDY´S",
        planejador_id: "1010"
      },
      {
        descricao: "BACE COMERCIO INTERNACIONAL LTDA (HP)",
        planejador_id: "1005"
      },
      {
        descricao: "BACE COMERCIO INTERNACIONAL LTDA (HC)",
        planejador_id: "1005"
      },
      {
        descricao: "THERMO",
        planejador_id: "1012"
      },
      {
        descricao: "SANOFI VACINA",
        planejador_id: "1011"
      },
      {
        descricao: "KIMBERLY-CLARK",
        planejador_id: "1004"
      },
      {
        descricao: "EXELTIS",
        planejador_id: "1005"
      },
      {
        descricao: "SUN PHARMA",
        planejador_id: "1009"
      },
      {
        descricao: "KUZEY",
        planejador_id: "1005"
      },
      {
        descricao: "TELEFLEX",
        planejador_id: "1005"
      },
      {
        descricao: "B.BRAUN",
        planejador_id: "1004"
      },
      {
        descricao: "EMIFRAN",
        planejador_id: "1012"
      },
      {
        descricao: "CELLTRION",
        planejador_id: "1002"
      },
      {
        descricao: "PROTDESC",
        planejador_id: "1012"
      },
      {
        descricao: "PERFECTA",
        planejador_id: "1012"
      },
      {
        descricao: "BIOVIS",
        planejador_id: "1012"
      },
      {
        descricao: "PROLINK",
        planejador_id: "1007"
      },
      {
        descricao: "PHOENIX",
        planejador_id: "1005"
      },
      {
        descricao: "DBI",
        planejador_id: "1005"
      },
      {
        descricao: "MENNEN",
        planejador_id: "1005"
      },
      {
        descricao: "GOJO",
        planejador_id: "1005"
      },
      {
        descricao: "HARTMANN",
        planejador_id: "1005"
      },
      {
        descricao: "DKT DO BRASIL",
        planejador_id: "1006"
      },
      {
        descricao: "CIRURGICA COPACANA 2000",
        planejador_id: "1005"
      },
      {
        descricao: "VYTTRA",
        planejador_id: "1012"
      },
      {
        descricao: "ZERMATT",
        planejador_id: "1005"
      },
      {
        descricao: "WAMA",
        planejador_id: "1012"
      },
      {
        descricao: "MSD VACINA",
        planejador_id: "1011"
      },
      {
        descricao: "ROCHE DIAGNOSTICA",
        planejador_id: "1010"
      },
      {
        descricao: "ASPEN SURGICAL",
        planejador_id: "1005"
      },
      {
        descricao: "NEWPROV",
        planejador_id: "1012"
      },
      {
        descricao: "TOTAL MEDICAL BRASIL",
        planejador_id: "1005"
      },
      {
        descricao: "AMSINO",
        planejador_id: "1005"
      },
      {
        descricao: "ABBOTT POINT OF CARE",
        planejador_id: "1005"
      },
      {
        descricao: "COSMODERMA",
        planejador_id: "1005"
      },
      {
        descricao: "HEALTH QUALITY",
        planejador_id: "1005"
      },
      {
        descricao: "RENYLAB",
        planejador_id: "1012"
      },
      {
        descricao: "RECORDATI",
        planejador_id: "1009"
      },
      {
        descricao: "EBRAM",
        planejador_id: "1012"
      },
      {
        descricao: "PLASTSIL",
        planejador_id: "1005"
      },
      {
        descricao: "NALGON",
        planejador_id: "1005"
      },
      {
        descricao: "BIOXTRA",
        planejador_id: "1005"
      },
      {
        descricao: "GSK VACINA",
        planejador_id: "1011"
      },
      {
        descricao: "BD POC",
        planejador_id: "1004"
      },
      {
        descricao: "ALPHAD",
        planejador_id: "1005"
      },
      {
        descricao: "BATRIK",
        planejador_id: "1005"
      },
      {
        descricao: "LUMIRADX",
        planejador_id: "1005"
      },
      {
        descricao: "OLEAK",
        planejador_id: "1005"
      },
      {
        descricao: "AMCOR",
        planejador_id: "1005"
      },
      {
        descricao: "AMERICA MEDICAL",
        planejador_id: "1012"
      },
      {
        descricao: "BLANVER",
        planejador_id: "1006"
      },
      {
        descricao: "SANRO",
        planejador_id: "1012"
      },
      {
        descricao: "COLLECT",
        planejador_id: "1010"
      },
      {
        descricao: "CHEMICALTECH",
        planejador_id: "1005"
      },
      {
        descricao: "PROMEDON",
        planejador_id: "1005"
      },
      {
        descricao: "LABOR IMPORT",
        planejador_id: "1012"
      },
      {
        descricao: "LIVE",
        planejador_id: "1012"
      },
      {
        descricao: "MUNDIPHARMA",
        planejador_id: "1002"
      },
      {
        descricao: "DANONE",
        planejador_id: "1007"
      },
      {
        descricao: "BAGO",
        planejador_id: "1002"
      },
      {
        descricao: "ON PHARMA",
        planejador_id: "1002"
      },
      {
        descricao: "NEOLAB",
        planejador_id: "1012"
      },
      {
        descricao: "CLARAMAX",
        planejador_id: "1005"
      },
      {
        descricao: "GVS DO BRASIL",
        planejador_id: "1012"
      },
      {
        descricao: "UNIQMED",
        planejador_id: "1008"
      },
      {
        descricao: "INTERMEDICAL",
        planejador_id: "1005"
      },
      {
        descricao: "QUIMICA HALLER",
        planejador_id: "1003"
      },
      {
        descricao: "GILEAD",
        planejador_id: "1009"
      },
      {
        descricao: "FUNDACAO ATAULPHO DE PAIVA",
        planejador_id: "1011"
      },
      {
        descricao: "UCB",
        planejador_id: "1010"
      },
      {
        descricao: "VYAIRE",
        planejador_id: "1005"
      },
      {
        descricao: "J. FERES",
        planejador_id: "1007"
      },
      {
        descricao: "BIC",
        planejador_id: "1004"
      },
      {
        descricao: "PANASONIC",
        planejador_id: "1005"
      },
      {
        descricao: "BIOMM",
        planejador_id: "1011"
      },
      {
        descricao: "MCAIRLAIDS",
        planejador_id: "1005"
      },
      {
        descricao: "BEKER",
        planejador_id: "1005"
      },
      {
        descricao: "VOLK",
        planejador_id: "1012"
      },
      {
        descricao: "BLOWTEX",
        planejador_id: "1005"
      },
      {
        descricao: "MAXITEX",
        planejador_id: "1005"
      },
      {
        descricao: "NOVO NORDISK",
        planejador_id: "1011"
      },
      {
        descricao: "BIOLAND",
        planejador_id: "1007"
      },
      {
        descricao: "BACE COMERCIO INTERNACIONAL LTDA (B)",
        planejador_id: "1005"
      },
      {
        descricao: "PHD",
        planejador_id: "1005"
      },
      {
        descricao: "UNIAO QUIMICA",
        planejador_id: "1009"
      },
      {
        descricao: "GALDERMA",
        planejador_id: "1011"
      },
      {
        descricao: "UPJOHN",
        planejador_id: "1006"
      },
      {
        descricao: "BRL DIST. DE VACINAS",
        planejador_id: "1011"
      },
      {
        descricao: "MYLAN",
        planejador_id: "1006"
      },
      {
        descricao: "INSITUTO BIOCHIMICO",
        planejador_id: "1003"
      },
      {
        descricao: "CAPITAL MEDH IMPORTACAO DISTRIBUICAO E R",
        planejador_id: "1012"
      },
      {
        descricao: "DESCARPACK DESCARTAVEIS DO BRASIL",
        planejador_id: "1012"
      },
      {
        descricao: "REVISA",
        planejador_id: "1005"
      },
      {
        descricao: "JOHNSON",
        planejador_id: "1002"
      },
      {
        descricao: "BIOPAS",
        planejador_id: "1011"
      },
      {
        descricao: "NIPRO MEDICAL",
        planejador_id: "1005"
      },
      {
        descricao: "ACCUMED",
        planejador_id: "1012"
      },
      {
        descricao: "MERZ BIOLAB",
        planejador_id: "1011"
      },
      {
        descricao: "LABOFARMA",
        planejador_id: "1006"
      },
      {
        descricao: "MEIZLER",
        planejador_id: "1010"
      },
      {
        descricao: "CISCRE",
        planejador_id: "1011"
      },
      {
        descricao: "INJEFLEX",
        planejador_id: "1011"
      },
      {
        descricao: "GREENCARE",
        planejador_id: "1011"
      },
      {
        descricao: "MOMENTA",
        planejador_id: "1011"
      },
      {
        descricao: "CRISTÁLIA",
        planejador_id: "1003"
      },
      {
        descricao: "TALGE",
        planejador_id: "1012"
      },
      {
        descricao: "ISOFARMA",
        planejador_id: "1003"
      },
      {
        descricao: "PRODIETH",
        planejador_id: "1008"
      },
      {
        descricao: "VITAFOR",
        planejador_id: "1008"
      },
      {
        descricao: "HELIANTO",
        planejador_id: "1007"
      },
      {
        descricao: "NUTRIPORT",
        planejador_id: "1007"
      },
      {
        descricao: "ASTRAZENECA VACINA",
        planejador_id: "1011"
      },
      {
        descricao: "INNOVATIVE",
        planejador_id: "1011"
      }
    ], {});

  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
