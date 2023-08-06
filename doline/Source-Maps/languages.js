"use strict";

const twpLang = (function () {
  const allLanguagesNames = {
    af: {
      af: "Afrikaans",
      ak: "Twi",
      am: "Amharies",
      ar: "Arabies",
      as: "Assamees",
      ay: "Aymara",
      az: "Azerbeidjaans",
      ba: "Baskir",
      be: "Belarussies",
      bg: "Bulgaars",
      bho: "Bhojpoeri",
      bm: "Bambara",
      bn: "Bengaals",
      bo: "Tibettaans",
      bs: "Bosnies",
      ca: "Katalaans",
      ceb: "Cebuano",
      ckb: "Koerdies (Sorani)",
      co: "Korsikaans",
      cs: "Tsjeggies",
      cv: "Chuvash",
      cy: "Wallies",
      da: "Deens",
      de: "Duits",
      doi: "Dogri",
      dsb: "Lower Sorbian",
      dv: "Dhivehi",
      ee: "Ewe",
      el: "Grieks",
      emj: "Emoji",
      en: "Engels",
      eo: "Esperanto",
      es: "Spaans",
      et: "Estlands",
      eu: "Baskies",
      fa: "Persies",
      fi: "Fins",
      fj: "Fidjiaans",
      fo: "Faroëes",
      fr: "Frans",
      "fr-CA": "Frans (Kanada)",
      fy: "Fries",
      ga: "Iers",
      gd: "Skotse Gallies",
      gl: "Galisies",
      gn: "Guarani",
      gom: "Konkani",
      gu: "Gudjarati",
      ha: "Hausa",
      haw: "Hawais",
      he: "Hebreeus",
      hi: "Hindi",
      hmn: "Hmong",
      hr: "Kroaties",
      hsb: "Oppersorbies",
      ht: "Haïtiese Kreools",
      hu: "Hongaars",
      hy: "Armeens",
      id: "Indonesies",
      ig: "Igbo",
      ikt: "Inuinnaqtun",
      ilo: "Ilocano",
      is: "Yslands",
      it: "Italiaans",
      iu: "Inoektitoet",
      "iu-Latn": "Inuktitut (Latin)",
      ja: "Japannees",
      jv: "Javaans",
      ka: "Georgies",
      kazlat: "Kazakh (Latin)",
      kk: "Kazak",
      km: "Khmer",
      kn: "Kannada",
      ko: "Koreaans",
      kri: "Krio",
      ku: "Koerdies (Koermanji)",
      ky: "Kirgisies",
      la: "Latyn",
      lb: "Luxemburgs",
      lg: "Luganda",
      ln: "Lingala",
      lo: "Lao",
      lt: "Litaus",
      lus: "Mizo",
      lv: "Letties",
      lzh: "Chinese (Literary)",
      mai: "Maithili",
      mg: "Malgassies",
      mhr: "Mari",
      mi: "Maori",
      mk: "Masedonies",
      ml: "Malabaars",
      mn: "Mongools",
      "mn-Mong": "Mongolian (Traditional)",
      "mni-Mtei": "Meiteilon (Manipoeri)",
      mr: "Mahratti",
      mrj: "Hill Mari",
      ms: "Maleisies",
      mt: "Maltees",
      my: "Birmaans",
      ne: "Nepalees",
      nl: "Nederlands",
      no: "Noors",
      nso: "Sepedi",
      ny: "Chichewa",
      nya: "Nyanja",
      om: "Oromo",
      or: "Odia (Oriya)",
      otq: "Querétaro-Otomi",
      pa: "Pandjab",
      pap: "Papiamento",
      pl: "Pools",
      prs: "Dari",
      ps: "Pasjto",
      pt: "Portugees (Brasilië)",
      "pt-PT": "Portugees (Portugal)",
      qu: "Quechua",
      ro: "Roemeens",
      ru: "Russies",
      run: "Rundi",
      rw: "Kinyarwanda",
      sa: "Sanskrit",
      sah: "Yakut",
      sd: "Sindhi",
      si: "Singalees",
      sjn: "Elvish (Sindarin)",
      sk: "Slowaaks",
      sl: "Sloweens",
      sm: "Samoaans",
      sn: "Shona",
      so: "Somalies",
      sq: "Albanees",
      sr: "Serwies",
      "sr-Latn": "Serwies (Latyn)",
      st: "Sesotho",
      su: "Sundanees",
      sv: "Sweeds",
      sw: "Swahili",
      ta: "Tamil",
      te: "Teloegoe",
      tg: "Tadjik",
      th: "Thai",
      ti: "Tigrinja",
      tk: "Turkmeens",
      tl: "Filippyns",
      "tlh-Latn": "Klingon (Latyn)",
      "tlh-Piqd": "Klingon (pIqaD)",
      tn: "Setswana",
      to: "Tongaans",
      tr: "Turks",
      ts: "Tsonga",
      tt: "Tataars",
      ty: "Tahities",
      udm: "Udmurt",
      ug: "Oeigoers",
      uk: "Oekraïns",
      ur: "Oerdoe",
      uz: "Oezbeeks",
      uzbcyr: "Uzbek (Cyrillic)",
      vi: "Viëtnamees",
      xh: "Xhosa",
      yi: "Jiddisj",
      yo: "Joruba",
      yua: "Yucatekaanse Maja",
      yue: "Kantonees (Tradisioneel)",
      "zh-CN": "Chinees (Vereenvoudig)",
      "zh-TW": "Chinees (Tradisioneel)",
      zu: "Zulu",
    },
    ar: {
      af: "الأفريقانية",
      ak: "توي",
      am: "الأمهرية",
      ar: "العربية",
      as: "الأسامية",
      ay: "الأيمارا",
      az: "الأذرية",
      ba: "الباشكيرية",
      be: "البيلاروسية",
      bg: "البلغارية",
      bho: "البوجبورية",
      bm: "البامبارا",
      bn: "البنغالية",
      bo: "التبتية",
      bs: "البوسنية",
      ca: "القطلونية",
      ceb: "السيبيوانية",
      ckb: "الكردية (السورانية)",
      co: "الكورسيكية",
      cs: "التشيكية",
      cv: "Chuvash",
      cy: "الويلزية",
      da: "الدانمركية",
      de: "الألمانية",
      doi: "الدوغرية",
      dsb: "Lower Sorbian",
      dv: "الديفهية",
      ee: "الإيوي",
      el: "اليونانية",
      emj: "Emoji",
      en: "الإنجليزية",
      eo: "الإسبرانتو",
      es: "الإسبانية",
      et: "الإستونية",
      eu: "الباسكية",
      fa: "الفارسية",
      fi: "الفنلندية",
      fj: "الفيجية",
      fo: "الفاروية",
      fr: "الفرنسية",
      "fr-CA": "الفرنسية(كندا)",
      fy: "الفريزية",
      ga: "الأيرلندية",
      gd: "الغيلية الأسكتلندية",
      gl: "الجاليكية",
      gn: "الجورانية",
      gom: "الكونكانية",
      gu: "الغوجاراتية",
      ha: "الهوسا",
      haw: "لغة هاواي",
      he: "العبرية",
      hi: "الهندية",
      hmn: "الهمونجية",
      hr: "الكرواتية",
      hsb: "الصوربية العليا",
      ht: "اللغة الكريولية الهايتية",
      hu: "الهنغارية",
      hy: "الأرمنية",
      id: "الإندونيسية",
      ig: "الإيغبو",
      ikt: "Inuinnaqtun",
      ilo: "الإيلوكانو",
      is: "الآيسلندية",
      it: "الإيطالية",
      iu: "الإينكتيتت",
      "iu-Latn": "Inuktitut (Latin)",
      ja: "اليابانية",
      jv: "الجاوية",
      ka: "الجورجية",
      kazlat: "Kazakh (Latin)",
      kk: "الكازاخية",
      km: "الخميرية",
      kn: "الكنادية",
      ko: "الكورية",
      kri: "كريو",
      ku: "الكردية (الكرمانجية)",
      ky: "القيرغيزية",
      la: "اللاتينية",
      lb: "اللوكسمبورغية",
      lg: "اللوغندية",
      ln: "اللينغالا",
      lo: "اللاوو",
      lt: "الليتوانية",
      lus: "الميزو",
      lv: "اللاتفية",
      lzh: "Chinese (Literary)",
      mai: "المايثيلية",
      mg: "المدغشقرية",
      mhr: "Mari",
      mi: "الماورية",
      mk: "المقدونية",
      ml: "المالايالامية",
      mn: "المنغولية",
      "mn-Mong": "Mongolian (Traditional)",
      "mni-Mtei": "الميتية (المانيبورية)",
      mr: "الماراثية",
      mrj: "Hill Mari",
      ms: "الملايو",
      mt: "المالطيّة",
      my: "البورمية",
      ne: "النيبالية",
      nl: "الهولندية",
      no: "النرويجية",
      nso: "السبيدية",
      ny: "تشيتشوا",
      nya: "Nyanja",
      om: "الأورومية",
      or: "الأوديا (الأوريا)",
      otq: "الأوتومي الكيريتارية",
      pa: "البنجابية",
      pap: "Papiamento",
      pl: "البولندية",
      prs: "الدارية",
      ps: "الباشتوية",
      pt: "البرتغالية (البرازيل)",
      "pt-PT": "البرتغالية (البرازيل)",
      qu: "الكيتشوا",
      ro: "الرومانية",
      ru: "الروسية",
      run: "Rundi",
      rw: "الكينيارواندية",
      sa: "السنسكريتية",
      sah: "Yakut",
      sd: "السندية",
      si: "السنهالية",
      sjn: "Elvish (Sindarin)",
      sk: "السلوفاكية",
      sl: "السلوفينية",
      sm: "الساموانية",
      sn: "الشونا",
      so: "الصومالية",
      sq: "الألبانية",
      sr: "الصربية",
      "sr-Latn": "الصربية (اللاتينية)",
      st: "السيسوتو",
      su: "الساندينيزية",
      sv: "السويدية",
      sw: "السواحيلية",
      ta: "التاميلية",
      te: "التيلوغوية",
      tg: "الطاجيكية",
      th: "التايلاندية",
      ti: "التيغرينية",
      tk: "التركمانية",
      tl: "الفلبينية",
      "tlh-Latn": "الكلينجون (اللاتينية)",
      "tlh-Piqd": "الكلينجون (pIqaD)",
      tn: "Setswana",
      to: "التونغية",
      tr: "التركية",
      ts: "التسونغا",
      tt: "التتارية",
      ty: "التاهيتية",
      udm: "Udmurt",
      ug: "الأويغورية",
      uk: "الأوكرانية",
      ur: "الأردية",
      uz: "الأوزبكية",
      uzbcyr: "Uzbek (Cyrillic)",
      vi: "الفيتنامية",
      xh: "الخوسا",
      yi: "الييدية",
      yo: "اليورباية",
      yua: "المايا اليوكاتينية",
      yue: "الكَنْتُونية (التقليدية)",
      "zh-CN": "الصينية (المبسطة)",
      "zh-TW": "الصينية (التقليدية)",
      zu: "الزولو",
    },
    bn: {
      af: "আফ্রিকান",
      ak: "টুই",
      am: "আমহারিয়",
      ar: "আরবী",
      as: "অসমিয়া",
      ay: "আইমারা",
      az: "আজের বাইজানীয়",
      ba: "বাশকির",
      be: "বেলারুশীয়",
      bg: "বুলগেরীয়",
      bho: "ভোজপুরি",
      bm: "বাম্বারা",
      bn: "বাংলা",
      bo: "তিব্বতি",
      bs: "বসনীয়",
      ca: "কাতালান",
      ceb: "চেবুয়ানো",
      ckb: "কুর্দিশ (সোরানি)",
      co: "করসিকেন",
      cs: "চেক্‌",
      cv: "Chuvash",
      cy: "ওয়েল্চ",
      da: "ড্যানিশ",
      de: "জার্মান",
      doi: "ডোগরি",
      dsb: "Lower Sorbian",
      dv: "দিবেহী",
      ee: "এওয়ে",
      el: "গ্রীক্‌",
      emj: "Emoji",
      en: "ইংরেজী",
      eo: "স্পেরান্তো",
      es: "স্পেনীয়",
      et: "এস্তনীয়",
      eu: "বাস্ক",
      fa: "ফার্সি",
      fi: "ফিনিশ",
      fj: "ফিজিআন",
      fo: "ফারোস",
      fr: "ফরাসি",
      "fr-CA": "ফরাসি (কানাডা)",
      fy: "ফ্রিজিয়ান",
      ga: "আইরিশ",
      gd: "স্কচ্ গাইলি",
      gl: "গ্যালিশিয়",
      gn: "গুয়ারানি",
      gom: "কোঙ্কণী",
      gu: "গুজরাটি",
      ha: "হাউসা",
      haw: "হাওয়াইয়ান",
      he: "হিব্রু",
      hi: "হিন্দি",
      hmn: "মংগ",
      hr: "ক্রোয়েশা",
      hsb: "উচ্চ সোর্বিয়ান",
      ht: "হাইতিয়ান ক্রেওল",
      hu: "হাঙ্গেরীয়",
      hy: "আর্মেনিয়ান",
      id: "ইন্দোনেশিয়",
      ig: "ইগবো",
      ikt: "Inuinnaqtun",
      ilo: "ইলোকানো",
      is: "আইসল্যান্ডীয়",
      it: "ইতালীয়",
      iu: "ইনুক্টিটুট",
      "iu-Latn": "Inuktitut (Latin)",
      ja: "জাপানি",
      jv: "জাভানি",
      ka: "জর্জিয়ান",
      kazlat: "Kazakh (Latin)",
      kk: "কজাখ",
      km: "খেমের",
      kn: "কান্নাড়া",
      ko: "কোরিয়ান",
      kri: "ক্রিও",
      ku: "কুর্দিশ (কুর্মানজি)",
      ky: "কির্গিজ",
      la: "লাতিন",
      lb: "লুক্সেমবার্গীয়",
      lg: "লুগান্ডা",
      ln: "লিঙ্গালা",
      lo: "লাও",
      lt: "লিথুয়ানীয়",
      lus: "মিজো",
      lv: "লাতভিয়ান",
      lzh: "Chinese (Literary)",
      mai: "মৈথিলি",
      mg: "মালাগাসি",
      mhr: "Mari",
      mi: "মায়োরি",
      mk: "ম্যাসিডোনিয়ান",
      ml: "মালেয়ালাম",
      mn: "মঙ্গোলিয়",
      "mn-Mong": "Mongolian (Traditional)",
      "mni-Mtei": "মৈতৈলোন (মণিপুরী)",
      mr: "মারাঠি",
      mrj: "Hill Mari",
      ms: "মালে",
      mt: "মাল্টিজ",
      my: "বার্মিজ",
      ne: "নেপালী",
      nl: "ডাচ",
      no: "নরওয়েজীয়",
      nso: "সেপেডি",
      ny: "চিচেওয়া",
      nya: "Nyanja",
      om: "ওরোমো",
      or: "ওডিয়া (ওড়িয়া)",
      otq: "কুয়েরেটারো ওটোমি",
      pa: "পাঞ্জাবি",
      pap: "Papiamento",
      pl: "পোলীশ",
      prs: "দারি",
      ps: "পশতু",
      pt: "পর্তুগীজ (ব্রাজিল)",
      "pt-PT": "পর্তুগীজ (পর্তুগাল)",
      qu: "কেচুয়া",
      ro: "রোমানীয়",
      ru: "রুশ",
      run: "Rundi",
      rw: "কিনয়ারওয়ান্ডা",
      sa: "সংস্কৃত",
      sah: "Yakut",
      sd: "সিন্ধি",
      si: "সিংহলি",
      sjn: "Elvish (Sindarin)",
      sk: "স্লোভাক",
      sl: "স্লোভেনিয়",
      sm: "সামোয়া",
      sn: "সোনা",
      so: "সোমালি",
      sq: "আলবেনীয়",
      sr: "সার্বিয়ান",
      "sr-Latn": "সার্বীয় (ল্যাটিন)",
      st: "সেসোথো",
      su: "সুদানীজ",
      sv: "সুইডিশ",
      sw: "শোয়াইলি",
      ta: "তামিল",
      te: "তেলুগু",
      tg: "তাজিক",
      th: "থাই",
      ti: "তিগরিনিয়া",
      tk: "তুর্কমেন",
      tl: "ফিলিপিনো",
      "tlh-Latn": "ক্লিঙ্গন (ল্যাটিন)",
      "tlh-Piqd": "ক্লিঙ্গন (pIqaD)",
      tn: "Setswana",
      to: "টোঙ্গান",
      tr: "তুর্কী",
      ts: "সোঙ্গা",
      tt: "তাতার",
      ty: "তাহিতিয়ান",
      udm: "Udmurt",
      ug: "ইউঘুর",
      uk: "ইউক্রেনীয়",
      ur: "উর্দু",
      uz: "উজবেক",
      uzbcyr: "Uzbek (Cyrillic)",
      vi: "ভিয়েতনামিয়",
      xh: "জোসা",
      yi: "ইদ্দিশ",
      yo: "ইউরোবা",
      yua: "ইউকাটেক মায়া",
      yue: "ক্যান্টোনিজ (ঐতিহ্যবাহী)",
      "zh-CN": "চীনা (সরলীকৃত)",
      "zh-TW": "চীনা (ঐতিহ্যবাহী)",
      zu: "জুলু",
    },
    ca: {
      af: "afrikaans",
      ak: "twi",
      am: "amhàric",
      ar: "àrab",
      as: "assamès",
      ay: "aimara",
      az: "àzeri",
      ba: "Baixkir",
      be: "bielorús",
      bg: "búlgar",
      bho: "bhojpuri",
      bm: "bambara",
      bn: "bengalí",
      bo: "Tibetà",
      bs: "bosnià",
      ca: "català",
      ceb: "cebuà",
      ckb: "kurd (sorani)",
      co: "cors",
      cs: "txec",
      cv: "Chuvash",
      cy: "gal·lès",
      da: "danès",
      de: "alemany",
      doi: "dogri",
      dsb: "Lower Sorbian",
      dv: "divehi",
      ee: "ewe",
      el: "grec",
      emj: "Emoji",
      en: "anglès",
      eo: "esperanto",
      es: "castellà",
      et: "estonià",
      eu: "basc",
      fa: "persa",
      fi: "finès",
      fj: "Fijià",
      fo: "Feroès",
      fr: "Francès",
      "fr-CA": "Francès (Canadà)",
      fy: "frisó",
      ga: "irlandès",
      gd: "gaèlic escocès",
      gl: "gallec",
      gn: "guaraní",
      gom: "concani",
      gu: "gujarati",
      ha: "haussa",
      haw: "hawaià",
      he: "hebreu",
      hi: "hindi",
      hmn: "hmong",
      hr: "croat",
      hsb: "Alt Sòrab",
      ht: "crioll d'Haití",
      hu: "hongarès",
      hy: "armeni",
      id: "indonesi",
      ig: "igbo",
      ikt: "Inuinnaqtun",
      ilo: "ilocano",
      is: "islandès",
      it: "italià",
      iu: "Inuktitut",
      "iu-Latn": "Inuktitut (Latin)",
      ja: "japonès",
      jv: "javanès",
      ka: "georgià",
      kazlat: "Kazakh (Latin)",
      kk: "kazakh",
      km: "khmer",
      kn: "kannada",
      ko: "coreà",
      kri: "krio",
      ku: "kurd (Kurmanji)",
      ky: "kirguís",
      la: "llatí",
      lb: "luxemburguès",
      lg: "ganda",
      ln: "lingala",
      lo: "laosià",
      lt: "lituà",
      lus: "mizo",
      lv: "letó",
      lzh: "Chinese (Literary)",
      mai: "maithili",
      mg: "malgaix",
      mhr: "Mari",
      mi: "maori",
      mk: "macedònic",
      ml: "malaiàlam",
      mn: "mongol",
      "mn-Mong": "Mongolian (Traditional)",
      "mni-Mtei": "meitei (manipurí)",
      mr: "marathi",
      mrj: "Hill Mari",
      ms: "malai",
      mt: "maltès",
      my: "birmà",
      ne: "nepalès",
      nl: "neerlandès",
      no: "noruec",
      nso: "sepedi",
      ny: "xixewa",
      nya: "Nyanja",
      om: "oromo",
      or: "oriya",
      otq: "Querétaro Otomi",
      pa: "punjabi",
      pap: "Papiamento",
      pl: "polonès",
      prs: "Dari",
      ps: "paixtu",
      pt: "Portuguès (Brasil)",
      "pt-PT": "Portuguès (Portugal)",
      qu: "quítxua",
      ro: "romanès",
      ru: "rus",
      run: "Rundi",
      rw: "ruandès",
      sa: "sànscrit",
      sah: "Yakut",
      sd: "sindi",
      si: "singalès",
      sjn: "Elvish (Sindarin)",
      sk: "eslovac",
      sl: "eslovè",
      sm: "samoà",
      sn: "shona",
      so: "somali",
      sq: "albanès",
      sr: "serbi",
      "sr-Latn": "Serbi (Llatí)",
      st: "sotho",
      su: "sundanès",
      sv: "suec",
      sw: "suahili",
      ta: "tàmil",
      te: "telugu",
      tg: "tadjik",
      th: "tai",
      ti: "tigrinya",
      tk: "turcman",
      tl: "tagal",
      "tlh-Latn": "Klingonià (Llatí)",
      "tlh-Piqd": "Klingonià (pIqaD)",
      tn: "Setswana",
      to: "Tongalès",
      tr: "turc",
      ts: "tsonga",
      tt: "tàtar",
      ty: "Tahitià",
      udm: "Udmurt",
      ug: "uigur",
      uk: "ucraïnès",
      ur: "urdú",
      uz: "uzbek",
      uzbcyr: "Uzbek (Cyrillic)",
      vi: "vietnamita",
      xh: "xhosa",
      yi: "ídix",
      yo: "ioruba",
      yua: "Yucatec Maya",
      yue: "Cantonès (Tradicional)",
      "zh-CN": "xinès (simplificat)",
      "zh-TW": "xinès (tradicional)",
      zu: "zulú",
    },
    cs: {
      af: "afrikánština",
      ak: "twiština",
      am: "amharština",
      ar: "arabština",
      as: "ásámština",
      ay: "aymarština",
      az: "ázerbájdžánština",
      ba: "Baškirština",
      be: "běloruština",
      bg: "bulharština",
      bho: "bhódžpurština",
      bm: "bambarština",
      bn: "bengálština",
      bo: "Tibetština",
      bs: "bosenština",
      ca: "katalánština",
      ceb: "cebuánština",
      ckb: "kurdština (sorání)",
      co: "korsičtina",
      cs: "čeština",
      cv: "Chuvash",
      cy: "velština",
      da: "dánština",
      de: "němčina",
      doi: "dógrí",
      dsb: "Lower Sorbian",
      dv: "maledivština",
      ee: "eweština",
      el: "řečtina",
      emj: "Emoji",
      en: "angličtina",
      eo: "esperanto",
      es: "španělština",
      et: "estonština",
      eu: "baskičtina",
      fa: "perština",
      fi: "finština",
      fj: "Fidžijština",
      fo: "Faerština",
      fr: "Francouzština",
      "fr-CA": "Francouzština (Kanada)",
      fy: "fríština",
      ga: "irština",
      gd: "skotská gaelština",
      gl: "galicijština",
      gn: "guaraní",
      gom: "konkánština",
      gu: "gudžarátština",
      ha: "hauština",
      haw: "havajština",
      he: "hebrejština",
      hi: "hindština",
      hmn: "hmongština",
      hr: "chorvatština",
      hsb: "Hornolužická Srbština",
      ht: "haitská kreolština",
      hu: "maďarština",
      hy: "arménština",
      id: "indonéština",
      ig: "igboština",
      ikt: "Inuinnaqtun",
      ilo: "ilokánština",
      is: "islandština",
      it: "italština",
      iu: "Inuktitutština",
      "iu-Latn": "Inuktitut (Latin)",
      ja: "japonština",
      jv: "javánština",
      ka: "gruzínština",
      kazlat: "Kazakh (Latin)",
      kk: "kazaština",
      km: "khmerština",
      kn: "kannadština",
      ko: "korejština",
      kri: "kríjština",
      ku: "kurdština",
      ky: "kyrgyzština",
      la: "latina",
      lb: "lucemburština",
      lg: "lugandština",
      ln: "lingalština",
      lo: "laoština",
      lt: "litevština",
      lus: "mizoština",
      lv: "lotyština",
      lzh: "Chinese (Literary)",
      mai: "maithilština",
      mg: "malgaština",
      mhr: "Mari",
      mi: "maorština",
      mk: "makedonština",
      ml: "malajálamština",
      mn: "mongolština",
      "mn-Mong": "Mongolian (Traditional)",
      "mni-Mtei": "manipurština",
      mr: "marátština",
      mrj: "Hill Mari",
      ms: "malajština",
      mt: "maltština",
      my: "barmština",
      ne: "nepálština",
      nl: "holandština",
      no: "norština",
      nso: "sepedi",
      ny: "čičevština",
      nya: "Nyanja",
      om: "oromština",
      or: "urijština",
      otq: "Otomí Querétaro",
      pa: "pandžábština",
      pap: "Papiamento",
      pl: "polština",
      prs: "Darí",
      ps: "paštština",
      pt: "Portugalština (Brazílie)",
      "pt-PT": "Portugalština (Portugalsko)",
      qu: "kečuánština",
      ro: "rumunština",
      ru: "ruština",
      run: "Rundi",
      rw: "rwandština",
      sa: "sanskrt",
      sah: "Yakut",
      sd: "sindhijština",
      si: "sinhálština",
      sjn: "Elvish (Sindarin)",
      sk: "slovenština",
      sl: "slovinština",
      sm: "samojská polynéština",
      sn: "šonština",
      so: "somálština",
      sq: "albánština",
      sr: "srbština",
      "sr-Latn": "Srbština (Latinka)",
      st: "sesothština",
      su: "sundánština",
      sv: "švédština",
      sw: "svahilština",
      ta: "tamilština",
      te: "telužština",
      tg: "tádžičtina",
      th: "thajština",
      ti: "tigrinština",
      tk: "turkmenština",
      tl: "filipínština",
      "tlh-Latn": "Klingonština (Latinka)",
      "tlh-Piqd": "Klingonština (pIqaD)",
      tn: "Setswana",
      to: "Tongánština",
      tr: "turečtina",
      ts: "tsongština",
      tt: "tatarština",
      ty: "Tahitština",
      udm: "Udmurt",
      ug: "ujgurština",
      uk: "ukrajinština",
      ur: "urdština",
      uz: "uzbečtina",
      uzbcyr: "Uzbek (Cyrillic)",
      vi: "vietnamština",
      xh: "xhoština",
      yi: "jidiš",
      yo: "jorubština",
      yua: "Yucatécká Mayština",
      yue: "Kantonština (Tradiční)",
      "zh-CN": "čínština (zjednodušená)",
      "zh-TW": "čínština (tradiční)",
      zu: "zulu",
    },
    da: {
      af: "Afrikaans",
      ak: "Twi",
      am: "Amharisk",
      ar: "Arabisk",
      as: "Assamesisk",
      ay: "Aymara",
      az: "Aserbajdsjansk",
      ba: "Bashkir",
      be: "Hviderussisk",
      bg: "Bulgarsk",
      bho: "Bhojpuri",
      bm: "Bambara",
      bn: "Bengali",
      bo: "Tibetansk",
      bs: "Bosnisk",
      ca: "Katalansk",
      ceb: "Cebuano",
      ckb: "Kurdisk (sorani)",
      co: "Korsikansk",
      cs: "Tjekkisk",
      cv: "Chuvash",
      cy: "Walisisk",
      da: "Dansk",
      de: "Tysk",
      doi: "Dogri",
      dsb: "Lower Sorbian",
      dv: "Dhivehi",
      ee: "Ewe",
      el: "Græsk",
      emj: "Emoji",
      en: "Engelsk",
      eo: "Esperanto",
      es: "Spansk",
      et: "Estisk",
      eu: "Baskisk",
      fa: "Persisk",
      fi: "Finsk",
      fj: "Fijiansk",
      fo: "Færøsk",
      fr: "Fransk",
      "fr-CA": "Fransk (Canadaisk)",
      fy: "Frisisk",
      ga: "Irsk",
      gd: "Skotsk gælisk",
      gl: "Galicisk",
      gn: "Guarani",
      gom: "Konkani",
      gu: "Gujarati",
      ha: "Hausa",
      haw: "Hawaiiansk",
      he: "Hebraisk",
      hi: "Hindi",
      hmn: "Hmong",
      hr: "Kroatisk",
      hsb: "Øvresorbisk",
      ht: "Haitisk kreolsk",
      hu: "Ungarsk",
      hy: "Armensk",
      id: "Indonesisk",
      ig: "Igbo",
      ikt: "Inuinnaqtun",
      ilo: "Ilokano",
      is: "Islandsk",
      it: "Italiensk",
      iu: "Inuktitut",
      "iu-Latn": "Inuktitut (Latin)",
      ja: "Japansk",
      jv: "Javanesisk",
      ka: "Georgisk",
      kazlat: "Kazakh (Latin)",
      kk: "Kasakhisk",
      km: "Khmer",
      kn: "Kannada",
      ko: "Koreansk",
      kri: "Krio",
      ku: "Kurdisk (kurmanji)",
      ky: "Kirgisk",
      la: "Latin",
      lb: "Luxembourgsk",
      lg: "Luganda",
      ln: "Lingala",
      lo: "Laotisk",
      lt: "Litauisk",
      lus: "Mizo",
      lv: "Lettisk",
      lzh: "Chinese (Literary)",
      mai: "Maithili",
      mg: "Malagassisk",
      mhr: "Mari",
      mi: "Maori",
      mk: "Makedonsk",
      ml: "Malayalam",
      mn: "Mongolsk",
      "mn-Mong": "Mongolian (Traditional)",
      "mni-Mtei": "Meiteilon (manipuri)",
      mr: "Marathi",
      mrj: "Hill Mari",
      ms: "Malajisk",
      mt: "Maltesisk",
      my: "Burmesisk",
      ne: "Nepalesisk",
      nl: "Nederlandsk",
      no: "Norsk",
      nso: "Sepedi",
      ny: "Chichewa",
      nya: "Nyanja",
      om: "Oromo",
      or: "Odia (oriya)",
      otq: "Querétaro Otomi",
      pa: "Punjabi",
      pap: "Papiamento",
      pl: "Polsk",
      prs: "Dari",
      ps: "Pashto",
      pt: "Portugisisk (Brasilien)",
      "pt-PT": "Portugisisk (Portugal)",
      qu: "Quechua",
      ro: "Rumænsk",
      ru: "Russisk",
      run: "Rundi",
      rw: "Kinyarwanda",
      sa: "Sanskrit",
      sah: "Yakut",
      sd: "Sindhi",
      si: "Sinhala",
      sjn: "Elvish (Sindarin)",
      sk: "Slovakisk",
      sl: "Slovensk",
      sm: "Samoansk",
      sn: "Shona",
      so: "Somalisk",
      sq: "Albansk",
      sr: "Serbisk",
      "sr-Latn": "Serbisk (Latinsk)",
      st: "Sesotho",
      su: "Sundanesisk",
      sv: "Svensk",
      sw: "Swahili",
      ta: "Tamil",
      te: "Telugu",
      tg: "Tadsjikisk",
      th: "Thailandsk",
      ti: "Tigrinyansk",
      tk: "Turkmensk",
      tl: "Tagalog",
      "tlh-Latn": "Klingon (Latinsk)",
      "tlh-Piqd": "Klingon (pIqaD)",
      tn: "Setswana",
      to: "Tongansk",
      tr: "Tyrkisk",
      ts: "Tsonga",
      tt: "Tatarisk",
      ty: "Tahitiansk",
      udm: "Udmurt",
      ug: "Uighursk",
      uk: "Ukrainsk",
      ur: "Urdu",
      uz: "Usbekisk",
      uzbcyr: "Uzbek (Cyrillic)",
      vi: "Vietnamesisk",
      xh: "Xhosa",
      yi: "Jiddisch",
      yo: "Yoruba",
      yua: "Yukatansk Maya",
      yue: "Kantonesisk (Traditionelt)",
      "zh-CN": "Kinesisk (forenklet)",
      "zh-TW": "Kinesisk (traditionelt)",
      zu: "Zulu",
    },
    de: {
      af: "Afrikaans",
      ak: "Twi",
      am: "Amharisch",
      ar: "Arabisch",
      as: "Assamesisch",
      ay: "Aymara",
      az: "Aserbaidschanisch",
      ba: "Baschkirisch",
      be: "Belarussisch",
      bg: "Bulgarisch",
      bho: "Bhojpuri",
      bm: "Bambara",
      bn: "Bengalisch",
      bo: "Tibetisch",
      bs: "Bosnisch",
      ca: "Katalanisch",
      ceb: "Cebuano",
      ckb: "Kurdisch (Sorani)",
      co: "Korsisch",
      cs: "Tschechisch",
      cv: "Tschuwaschisch",
      cy: "Walisisch",
      da: "Dänisch",
      de: "Deutsch",
      doi: "Dogri",
      dsb: "Lower Sorbian",
      dv: "Dhivehi",
      ee: "Ewe",
      el: "Griechisch",
      emj: "Emoji",
      en: "Englisch",
      eo: "Esperanto",
      es: "Spanisch",
      et: "Estnisch",
      eu: "Baskisch",
      fa: "Persisch",
      fi: "Finnisch",
      fj: "Fidschi",
      fo: "Färöisch",
      fr: "Französisch",
      "fr-CA": "Französisch (Kanada)",
      fy: "Friesisch",
      ga: "Irisch",
      gd: "Schottisch-Gälisch",
      gl: "Galizisch",
      gn: "Guarani",
      gom: "Konkani",
      gu: "Gujarati",
      ha: "Hausa",
      haw: "Hawaiisch",
      he: "Hebräisch",
      hi: "Hindi",
      hmn: "Hmong",
      hr: "Kroatisch",
      hsb: "Obersorbisch",
      ht: "Haitianisch",
      hu: "Ungarisch",
      hy: "Armenisch",
      id: "Indonesisch",
      ig: "Igbo",
      ikt: "Inuinnaqtun",
      ilo: "Ilokano",
      is: "Isländisch",
      it: "Italienisch",
      iu: "Inuktitut",
      "iu-Latn": "Inuktitut (Latin)",
      ja: "Japanisch",
      jv: "Javanisch",
      ka: "Georgisch",
      kazlat: "Kasachisch (Latein)",
      kk: "Kasachisch",
      km: "Khmer",
      kn: "Kannada",
      ko: "Koreanisch",
      kri: "Krio",
      ku: "Kurdisch (Kurmandschi)",
      ky: "Kirgisisch",
      la: "Latein",
      lb: "Luxemburgisch",
      lg: "Luganda",
      ln: "Lingala",
      lo: "Lao",
      lt: "Litauisch",
      lus: "Mizo",
      lv: "Lettisch",
      lzh: "Chinese (Literary)",
      mai: "Maithili",
      mg: "Malagasy",
      mhr: "Mari",
      mi: "Maori",
      mk: "Mazedonisch",
      ml: "Malayalam",
      mn: "Mongolisch",
      "mn-Mong": "Mongolian (Traditional)",
      "mni-Mtei": "Meitei (Manipuri)",
      mr: "Marathi",
      mrj: "Hill Mari",
      ms: "Malaysisch",
      mt: "Maltesisch",
      my: "Birmanisch",
      ne: "Nepalesisch",
      nl: "Niederländisch",
      no: "Norwegisch",
      nso: "Sepedi",
      ny: "Chichewa",
      nya: "Nyanja",
      om: "Oromo",
      or: "Odia (Oriya)",
      otq: "Querétaro-Otomí",
      pa: "Punjabi",
      pap: "Papiamento",
      pl: "Polnisch",
      prs: "Dari",
      ps: "Paschtu",
      pt: "Portugiesisch (Brasilien)",
      "pt-PT": "Portugiesisch (Portugal)",
      qu: "Quechua",
      ro: "Rumänisch",
      ru: "Russisch",
      run: "Rundi",
      rw: "Kinyarwanda",
      sa: "Sanskrit",
      sah: "Jakutisch",
      sd: "Sindhi",
      si: "Singhalesisch",
      sjn: "Elbisch (Sindarin)",
      sk: "Slowakisch",
      sl: "Slowenisch",
      sm: "Samoanisch",
      sn: "Shona",
      so: "Somali",
      sq: "Albanisch",
      sr: "Serbisch",
      "sr-Latn": "Serbisch (Lateinisch)",
      st: "Sesotho",
      su: "Sundanesisch",
      sv: "Schwedisch",
      sw: "Swahili",
      ta: "Tamil",
      te: "Telugu",
      tg: "Tadschikisch",
      th: "Thailändisch",
      ti: "Tigrinya",
      tk: "Turkmenisch",
      tl: "Filipino",
      "tlh-Latn": "Klingonisch (Lateinisch)",
      "tlh-Piqd": "Klingonisch (pIqaD)",
      tn: "Setswana",
      to: "Tongaisch",
      tr: "Türkisch",
      ts: "Tsonga",
      tt: "Tatarisch",
      ty: "Tahitisch",
      udm: "Udmurtisch",
      ug: "Uigurisch",
      uk: "Ukrainisch",
      ur: "Urdu",
      uz: "Usbekisch",
      uzbcyr: "Usbekisch (kyrillisch)",
      vi: "Vietnamesisch",
      xh: "Xhosa",
      yi: "Jiddisch",
      yo: "Yoruba",
      yua: "Mayathan",
      yue: "Kantonesisch (Traditionell)",
      "zh-CN": "Chinesisch (vereinfacht)",
      "zh-TW": "Chinesisch (traditionell)",
      zu: "Zulu",
    },
    el: {
      af: "Αφρικάανς",
      ak: "Τουί",
      am: "Αμχαρικά",
      ar: "Αραβικά",
      as: "Ασαμικά",
      ay: "Αϊμάρα",
      az: "Αζερμπαϊτζανικά",
      ba: "Μπασκίρ",
      be: "Λευκορωσικά",
      bg: "Βουλγαρικά",
      bho: "Μποτζπούρι",
      bm: "Μπαμπάρα",
      bn: "Βεγγαλική",
      bo: "Θιβετιανά",
      bs: "Βοσνιακά",
      ca: "Καταλανικά",
      ceb: "Σεμπουάνο",
      ckb: "Κουρδικά (Σορανί)",
      co: "Κορσικανικά",
      cs: "Τσεχικά",
      cv: "Chuvash",
      cy: "Ουαλικά",
      da: "Δανικά",
      de: "Γερμανικά",
      doi: "Ντογκρί",
      dsb: "Lower Sorbian",
      dv: "Ντιβέχι",
      ee: "Έουε",
      el: "Ελληνικά",
      emj: "Emoji",
      en: "Αγγλικά",
      eo: "Εσπεράντο",
      es: "Ισπανικά",
      et: "Εσθονικά",
      eu: "Βασκικά",
      fa: "Περσικά",
      fi: "Φινλανδικά",
      fj: "Φίτζι",
      fo: "Φεροϊκά",
      fr: "Γαλλικά",
      "fr-CA": "Γαλλικά (Καναδάς)",
      fy: "Φριζιανά",
      ga: "Ιρλανδικά",
      gd: "Γαελικά Σκοτίας",
      gl: "Γαλικιακά",
      gn: "Γκουαρανί",
      gom: "Κονκανικά",
      gu: "Γκουτζαρατικά",
      ha: "Χάουσα",
      haw: "Χαβαϊκά",
      he: "Εβραϊκά",
      hi: "Χίντι",
      hmn: "Χμονγκ",
      hr: "Κροατικά",
      hsb: "Άνω Σορβικά",
      ht: "Κρεόλ Αϊτής",
      hu: "Ουγγρικά",
      hy: "Αρμενικά",
      id: "Ινδονησιακά",
      ig: "Ίγκμπο",
      ikt: "Inuinnaqtun",
      ilo: "Ιλοκάνο",
      is: "Ισλανδικά",
      it: "Ιταλικά",
      iu: "Ινούκτιτουτ",
      "iu-Latn": "Inuktitut (Latin)",
      ja: "Ιαπωνικά",
      jv: "Τζαβανεζικά",
      ka: "Γεωργιανά",
      kazlat: "Kazakh (Latin)",
      kk: "Καζακστανικά",
      km: "Χμερ",
      kn: "Κανάντα",
      ko: "Κορεατικά",
      kri: "Κρίο",
      ku: "Κουρδικά (Κουρμαντζί)",
      ky: "Κιργιζιανά",
      la: "Λατινικά",
      lb: "Λουξεμβουργιανά",
      lg: "Λουγκάντα",
      ln: "Λινγκάλα",
      lo: "Λάο",
      lt: "Λιθουανικά",
      lus: "Μίζο",
      lv: "Λετονικά",
      lzh: "Chinese (Literary)",
      mai: "Μαϊτίλι",
      mg: "Μαλαγάσι",
      mhr: "Mari",
      mi: "Μαορί",
      mk: "Σλαβομακεδονικά",
      ml: "Μαλαγιάλαμ",
      mn: "Μογγολικά",
      "mn-Mong": "Mongolian (Traditional)",
      "mni-Mtei": "Μεϊτέιλον (Μανιπούρι)",
      mr: "Μαραθικά",
      mrj: "Hill Mari",
      ms: "Μαλέι",
      mt: "Μαλτεζικά",
      my: "Βιρμανικά",
      ne: "Νεπαλικά",
      nl: "Ολλανδικά",
      no: "Νορβηγικά",
      nso: "Σεπέντι",
      ny: "Τσιτσέουα",
      nya: "Nyanja",
      om: "Ορομό",
      or: "Όντια (Ορίγια)",
      otq: "Οτόμι Περιοχής Κερέταρο",
      pa: "Παντζάμπι",
      pap: "Papiamento",
      pl: "Πολωνικά",
      prs: "Νταρί",
      ps: "Πάστο",
      pt: "Πορτογαλικά (Βραζιλία)",
      "pt-PT": "Πορτογαλικά (Πορτογαλία)",
      qu: "Κέτσουα",
      ro: "Ρουμανικά",
      ru: "Ρωσικά",
      run: "Rundi",
      rw: "Κινιαρουάντα",
      sa: "Σανσκριτικά",
      sah: "Yakut",
      sd: "Σίντι",
      si: "Σινχάλα",
      sjn: "Elvish (Sindarin)",
      sk: "Σλοβακικά",
      sl: "Σλοβενικά",
      sm: "Σαμοανικά",
      sn: "Σόνα",
      so: "Σομαλικά",
      sq: "Αλβανικά",
      sr: "Σερβικά",
      "sr-Latn": "Σερβικά (Λατινικό)",
      st: "Σεσότο",
      su: "Σούντα",
      sv: "Σουηδικά",
      sw: "Σουαχίλι",
      ta: "Ταμίλ",
      te: "Τελούγκου",
      tg: "Ταζικιστανικά",
      th: "Ταϊλανδεζικά",
      ti: "Τιγρινιακά",
      tk: "Τουρκμενικά",
      tl: "Φιλιππινέζικα",
      "tlh-Latn": "Κλίνγκον (Λατινικό)",
      "tlh-Piqd": "Κλίνγκον (pIqaD)",
      tn: "Setswana",
      to: "Τονγκανικά",
      tr: "Τουρκικά",
      ts: "Τσόνγκα",
      tt: "Ταταρικά",
      ty: "Ταϊτιανά",
      udm: "Udmurt",
      ug: "Ουιγούρ",
      uk: "Ουκρανικά",
      ur: "Ουρντού",
      uz: "Ουζμπεκικά",
      uzbcyr: "Uzbek (Cyrillic)",
      vi: "Βιετναμεζικά",
      xh: "Ζόσα",
      yi: "Γίντις",
      yo: "Γιορούμπα",
      yua: "Μάγια Περιοχής Γιουκατάν",
      yue: "Καντονέζικα (Παραδοσιακό)",
      "zh-CN": "Κινεζικά (Απλοποιημένα)",
      "zh-TW": "Κινεζικά (Παραδοσιακά)",
      zu: "Ζουλού",
    },
    en: {
      af: "Afrikaans",
      ak: "Twi",
      am: "Amharic",
      ar: "Arabic",
      as: "Assamese",
      ay: "Aymara",
      az: "Azerbaijani",
      ba: "Bashkir",
      be: "Belarusian",
      bg: "Bulgarian",
      bho: "Bhojpuri",
      bm: "Bambara",
      bn: "Bengali",
      bo: "Tibetan",
      bs: "Bosnian",
      ca: "Catalan",
      ceb: "Cebuano",
      ckb: "Kurdish (Sorani)",
      co: "Corsican",
      cs: "Czech",
      cv: "Chuvash",
      cy: "Welsh",
      da: "Danish",
      de: "German",
      doi: "Dogri",
      dsb: "Lower Sorbian",
      dv: "Dhivehi",
      ee: "Ewe",
      el: "Greek",
      emj: "Emoji",
      en: "English",
      eo: "Esperanto",
      es: "Spanish",
      et: "Estonian",
      eu: "Basque",
      fa: "Persian",
      fi: "Finnish",
      fj: "Fijian",
      fo: "Faroese",
      fr: "French",
      "fr-CA": "French (Canada)",
      fy: "Frisian",
      ga: "Irish",
      gd: "Scots Gaelic",
      gl: "Galician",
      gn: "Guarani",
      gom: "Konkani",
      gu: "Gujarati",
      ha: "Hausa",
      haw: "Hawaiian",
      he: "Hebrew",
      hi: "Hindi",
      hmn: "Hmong",
      hr: "Croatian",
      hsb: "Upper Sorbian",
      ht: "Haitian Creole",
      hu: "Hungarian",
      hy: "Armenian",
      id: "Indonesian",
      ig: "Igbo",
      ikt: "Inuinnaqtun",
      ilo: "Ilocano",
      is: "Icelandic",
      it: "Italian",
      iu: "Inuktitut",
      "iu-Latn": "Inuktitut (Latin)",
      ja: "Japanese",
      jv: "Javanese",
      ka: "Georgian",
      kazlat: "Kazakh (Latin)",
      kk: "Kazakh",
      km: "Khmer",
      kn: "Kannada",
      ko: "Korean",
      kri: "Krio",
      ku: "Kurdish (Kurmanji)",
      ky: "Kyrgyz",
      la: "Latin",
      lb: "Luxembourgish",
      lg: "Luganda",
      ln: "Lingala",
      lo: "Lao",
      lt: "Lithuanian",
      lus: "Mizo",
      lv: "Latvian",
      lzh: "Chinese (Literary)",
      mai: "Maithili",
      mg: "Malagasy",
      mhr: "Mari",
      mi: "Maori",
      mk: "Macedonian",
      ml: "Malayalam",
      mn: "Mongolian",
      "mn-Mong": "Mongolian (Traditional)",
      "mni-Mtei": "Meiteilon (Manipuri)",
      mr: "Marathi",
      mrj: "Hill Mari",
      ms: "Malay",
      mt: "Maltese",
      my: "Myanmar (Burmese)",
      ne: "Nepali",
      nl: "Dutch",
      no: "Norwegian",
      nso: "Sepedi",
      ny: "Chichewa",
      nya: "Nyanja",
      om: "Oromo",
      or: "Odia (Oriya)",
      otq: "Querétaro Otomi",
      pa: "Punjabi",
      pap: "Papiamento",
      pl: "Polish",
      prs: "Dari",
      ps: "Pashto",
      pt: "Portuguese (Brazil)",
      "pt-PT": "Portuguese (Portugal)",
      qu: "Quechua",
      ro: "Romanian",
      ru: "Russian",
      run: "Rundi",
      rw: "Kinyarwanda",
      sa: "Sanskrit",
      sah: "Yakut",
      sd: "Sindhi",
      si: "Sinhala",
      sjn: "Elvish (Sindarin)",
      sk: "Slovak",
      sl: "Slovenian",
      sm: "Samoan",
      sn: "Shona",
      so: "Somali",
      sq: "Albanian",
      sr: "Serbian",
      "sr-Latn": "Serbian (Latin)",
      st: "Sesotho",
      su: "Sundanese",
      sv: "Swedish",
      sw: "Swahili",
      ta: "Tamil",
      te: "Telugu",
      tg: "Tajik",
      th: "Thai",
      ti: "Tigrinya",
      tk: "Turkmen",
      tl: "Filipino",
      "tlh-Latn": "Klingon (Latin)",
      "tlh-Piqd": "Klingon (pIqaD)",
      tn: "Setswana",
      to: "Tongan",
      tr: "Turkish",
      ts: "Tsonga",
      tt: "Tatar",
      ty: "Tahitian",
      udm: "Udmurt",
      ug: "Uyghur",
      uk: "Ukrainian",
      ur: "Urdu",
      uz: "Uzbek",
      uzbcyr: "Uzbek (Cyrillic)",
      vi: "Vietnamese",
      xh: "Xhosa",
      yi: "Yiddish",
      yo: "Yoruba",
      yua: "Yucatec Maya",
      yue: "Cantonese (Traditional)",
      "zh-CN": "Chinese (Simplified)",
      "zh-TW": "Chinese (Traditional)",
      zu: "Zulu",
    },
    es: {
      af: "afrikáans",
      ak: "twi",
      am: "amhárico",
      ar: "árabe",
      as: "asamés",
      ay: "aimara",
      az: "azerí",
      ba: "Baskir",
      be: "bielorruso",
      bg: "búlgaro",
      bho: "bhoyapurí",
      bm: "bambara",
      bn: "bengalí",
      bo: "Tibetano",
      bs: "bosnio",
      ca: "catalán",
      ceb: "cebuano",
      ckb: "kurdo (sorani)",
      co: "corso",
      cs: "checo",
      cv: "Chuvash",
      cy: "galés",
      da: "danés",
      de: "alemán",
      doi: "dogri",
      dsb: "Lower Sorbian",
      dv: "divehi",
      ee: "ewé",
      el: "griego",
      emj: "Emoji",
      en: "inglés",
      eo: "esperanto",
      es: "español",
      et: "estonio",
      eu: "euskera",
      fa: "persa",
      fi: "finlandés",
      fj: "Fiyiano",
      fo: "Feroés",
      fr: "Francés",
      "fr-CA": "Francés (Canadá)",
      fy: "frisio",
      ga: "irlandés",
      gd: "gaélico escocés",
      gl: "gallego",
      gn: "guaraní",
      gom: "konkaní",
      gu: "gujarati",
      ha: "hausa",
      haw: "hawaiano",
      he: "hebreo",
      hi: "hindi",
      hmn: "hmong",
      hr: "croata",
      hsb: "Alto Sorbio",
      ht: "criollo haitiano",
      hu: "húngaro",
      hy: "armenio",
      id: "indonesio",
      ig: "igbo",
      ikt: "Inuinnaqtun",
      ilo: "ilocano",
      is: "islandés",
      it: "italiano",
      iu: "Inuktitut",
      "iu-Latn": "Inuktitut (Latin)",
      ja: "japonés",
      jv: "javanés",
      ka: "georgiano",
      kazlat: "Kazakh (Latin)",
      kk: "kazajo",
      km: "camboyano",
      kn: "canarés",
      ko: "coreano",
      kri: "krio",
      ku: "kurdo (kurmanyi)",
      ky: "kirguís",
      la: "latín",
      lb: "luxemburgués",
      lg: "luganda",
      ln: "lingala",
      lo: "lao",
      lt: "lituano",
      lus: "mizo",
      lv: "letón",
      lzh: "Chinese (Literary)",
      mai: "maithili",
      mg: "malgache",
      mhr: "Mari",
      mi: "maorí",
      mk: "macedonio",
      ml: "malayalam",
      mn: "mongol",
      "mn-Mong": "Mongolian (Traditional)",
      "mni-Mtei": "meiteilon (manipuri)",
      mr: "maratí",
      mrj: "Hill Mari",
      ms: "malayo",
      mt: "maltés",
      my: "birmano",
      ne: "nepalí",
      nl: "neerlandés",
      no: "noruego",
      nso: "sepedi",
      ny: "chichewa",
      nya: "Nyanja",
      om: "oromo",
      or: "oriya",
      otq: "Otomí Querétaro",
      pa: "panyabí",
      pap: "Papiamento",
      pl: "polaco",
      prs: "Darí",
      ps: "pastún",
      pt: "Portugués (Brasil)",
      "pt-PT": "Portugués (Portugal)",
      qu: "quechua",
      ro: "rumano",
      ru: "ruso",
      run: "Rundi",
      rw: "kinyarwanda",
      sa: "sánscrito",
      sah: "Yakut",
      sd: "sindhi",
      si: "cingalés",
      sjn: "Elvish (Sindarin)",
      sk: "eslovaco",
      sl: "esloveno",
      sm: "samoano",
      sn: "shona",
      so: "somalí",
      sq: "albanés",
      sr: "serbio",
      "sr-Latn": "Serbio (Latino)",
      st: "sesoto",
      su: "sundanés",
      sv: "sueco",
      sw: "suajili",
      ta: "tamil",
      te: "telugu",
      tg: "tayiko",
      th: "tailandés",
      ti: "tigriña",
      tk: "turkmeno",
      tl: "tagalo",
      "tlh-Latn": "Klingon (Latino)",
      "tlh-Piqd": "Klingon (pIqaD)",
      tn: "Setswana",
      to: "Tongano",
      tr: "turco",
      ts: "tsonga",
      tt: "tártaro",
      ty: "Tahitiano",
      udm: "Udmurt",
      ug: "uigur",
      uk: "ucraniano",
      ur: "urdu",
      uz: "uzbeco",
      uzbcyr: "Uzbek (Cyrillic)",
      vi: "vietnamita",
      xh: "xhosa",
      yi: "yidis",
      yo: "yoruba",
      yua: "Maya Yucateco",
      yue: "Cantonés (Tradicional)",
      "zh-CN": "chino (simplificado)",
      "zh-TW": "chino (tradicional)",
      zu: "zulú",
    },
    fa: {
      af: "افریکانس",
      ak: "تویی",
      am: "امهری",
      ar: "عربی",
      as: "آسامی",
      ay: "آیمارا",
      az: "آذرباﻳﺠﺎﻧﻰ",
      ba: "باشقیری",
      be: "بلاروسی",
      bg: "بلغاری",
      bho: "بوجپوری",
      bm: "بامبارا",
      bn: "بنگالی",
      bo: "تبتی",
      bs: "بوسنیایی",
      ca: "کاتالان",
      ceb: "سبوانو",
      ckb: "کردی (سورانی)",
      co: "كرسی",
      cs: "چک",
      cv: "Chuvash",
      cy: "ولزی",
      da: "دانمارکی",
      de: "آلمانی",
      doi: "دوگری",
      dsb: "Lower Sorbian",
      dv: "دیوهی",
      ee: "اوه‌ای",
      el: "يونانی",
      emj: "Emoji",
      en: "انگلیسی",
      eo: "اسپرانتو",
      es: "اسپانیایی",
      et: "استونيايی",
      eu: "باسکی",
      fa: "فارسی",
      fi: "فنلاندی",
      fj: "فیجیایی",
      fo: "فارویی",
      fr: "فرانسوی",
      "fr-CA": "فرانسوی(کانادا)",
      fy: "فريسی",
      ga: "ایرلندی",
      gd: "گاليک اسکاتلندی",
      gl: "گالیسی",
      gn: "گوارانی",
      gom: "کونکانی",
      gu: "گجراتی",
      ha: "هوسه",
      haw: "هاوایی",
      he: "عبری",
      hi: "هندی",
      hmn: "همونگ",
      hr: "کرواتی",
      hsb: "صُربی علیا",
      ht: "کرئول هائیتی",
      hu: "مجاری",
      hy: "ارمنی",
      id: "اندونزيايی",
      ig: "ایگبو",
      ikt: "Inuinnaqtun",
      ilo: "ایلوکانو",
      is: "ايسلندی",
      it: "ایتالیایی",
      iu: "اینوکتیتوت",
      "iu-Latn": "Inuktitut (Latin)",
      ja: "ژاپنی",
      jv: "جاوه‌ای",
      ka: "گرجی",
      kazlat: "Kazakh (Latin)",
      kk: "قزاقی",
      km: "خمری",
      kn: "کانارا",
      ko: "کره‌ای",
      kri: "کریو",
      ku: "کردی (کرمانجی)",
      ky: "قرقیزی",
      la: "لاتين",
      lb: "لوگزامبورگی",
      lg: "لوگاندا",
      ln: "لینگالا",
      lo: "لائوسی",
      lt: "ليتوانيايی",
      lus: "میزو",
      lv: "لتونيايی",
      lzh: "Chinese (Literary)",
      mai: "مایتهیلی",
      mg: "مالاگاسی",
      mhr: "Mari",
      mi: "مائوری",
      mk: "مقدونيه‌ای",
      ml: "مالایالمی",
      mn: "مغولی",
      "mn-Mong": "Mongolian (Traditional)",
      "mni-Mtei": "می‌تِیلون (مانیپوری)",
      mr: "مراتی",
      mrj: "Hill Mari",
      ms: "مالايی",
      mt: "مالتی",
      my: "برمه‌ای",
      ne: "نپالی",
      nl: "هلندی",
      no: "نروژی",
      nso: "سوتوی",
      ny: "چوایی",
      nya: "Nyanja",
      om: "اورومو",
      or: "اودیه (اوریه)",
      otq: "اتومی کوارتارو",
      pa: "پنجابی",
      pap: "Papiamento",
      pl: "لهستانی",
      prs: "دری",
      ps: "پشتو",
      pt: "ی برزیل(برزیل)",
      "pt-PT": "ی برزیل(پرتغال)",
      qu: "کچوآ",
      ro: "رومانيايی",
      ru: "روسی",
      run: "Rundi",
      rw: "کینیارواندا",
      sa: "سانسکریت",
      sah: "Yakut",
      sd: "سندی",
      si: "سینهالی",
      sjn: "Elvish (Sindarin)",
      sk: "اسلواکی",
      sl: "اسلونیایی",
      sm: "ساموایی",
      sn: "شونا",
      so: "سومالیایی",
      sq: "آلبانیایی",
      sr: "صربی",
      "sr-Latn": "صربی (لاتین)",
      st: "سوتو",
      su: "سودانی",
      sv: "سوئدی",
      sw: "سواحیلی",
      ta: "تاميلی",
      te: "تلوگو",
      tg: "تاجیک",
      th: "تايلندی",
      ti: "تیگرینیا",
      tk: "ترکمنی",
      tl: "فیلیپینی",
      "tlh-Latn": "کلینگون (لاتین)",
      "tlh-Piqd": "کلینگون (pIqaD)",
      tn: "Setswana",
      to: "تونگایی",
      tr: "ترکی استانبولی",
      ts: "تسونگا",
      tt: "تاتار",
      ty: "تاهیتیایی",
      udm: "Udmurt",
      ug: "اویغوری",
      uk: "اکراينی",
      ur: "اردو",
      uz: "ازبکی",
      uzbcyr: "Uzbek (Cyrillic)",
      vi: "ويتنامی",
      xh: "خوسایی",
      yi: "یدیشی",
      yo: "یوروبایی",
      yua: "یوکاتیک مایا",
      yue: "کانتونی (سنتی)",
      "zh-CN": "چینی (ساده‌شده)",
      "zh-TW": "چینی (سنتی)",
      zu: "زولو",
    },
    fi: {
      af: "afrikaans",
      ak: "twi",
      am: "amhara",
      ar: "arabia",
      as: "assami",
      ay: "aimara",
      az: "azeri",
      ba: "Baškiiri",
      be: "valkovenäjä",
      bg: "bulgaria",
      bho: "bhodžpuri",
      bm: "bambara",
      bn: "bengali",
      bo: "Tiibet",
      bs: "bosnia",
      ca: "katalaani",
      ceb: "cebu",
      ckb: "kurdi (soranî)",
      co: "korsika",
      cs: "tsekki",
      cv: "Chuvash",
      cy: "kymri",
      da: "tanska",
      de: "saksa",
      doi: "dogri",
      dsb: "Lower Sorbian",
      dv: "divehi",
      ee: "ewe",
      el: "kreikka",
      emj: "Emoji",
      en: "englanti",
      eo: "esperanto",
      es: "espanja",
      et: "viro",
      eu: "baski",
      fa: "persia",
      fi: "suomi",
      fj: "Fidži",
      fo: "Fääri",
      fr: "Ranska",
      "fr-CA": "Ranska (Kanada)",
      fy: "friisi",
      ga: "iiri",
      gd: "skottigaeli",
      gl: "galicia",
      gn: "guarani",
      gom: "konkani",
      gu: "gujarati",
      ha: "hausa",
      haw: "havaiji",
      he: "heprea",
      hi: "hindi",
      hmn: "hmong",
      hr: "kroatia",
      hsb: "Yläsorbi",
      ht: "haitinkreoli",
      hu: "unkari",
      hy: "armenia",
      id: "indonesia",
      ig: "igbo",
      ikt: "Inuinnaqtun",
      ilo: "ilokano",
      is: "islanti",
      it: "italia",
      iu: "Inuktitut",
      "iu-Latn": "Inuktitut (Latin)",
      ja: "japani",
      jv: "jaava",
      ka: "gruusia",
      kazlat: "Kazakh (Latin)",
      kk: "kazakki",
      km: "khmer",
      kn: "kannada",
      ko: "korea",
      kri: "krio",
      ku: "kurdi (kurmandži)",
      ky: "kyrgyz",
      la: "latina",
      lb: "luxemburg",
      lg: "luganda",
      ln: "lingala",
      lo: "lao",
      lt: "liettua",
      lus: "mizo",
      lv: "latvia",
      lzh: "Chinese (Literary)",
      mai: "maithili",
      mg: "malagasy",
      mhr: "Mari",
      mi: "maori",
      mk: "makedonia",
      ml: "malayalam",
      mn: "mongolia",
      "mn-Mong": "Mongolian (Traditional)",
      "mni-Mtei": "meiteilon (manipuri)",
      mr: "marathi",
      mrj: "Hill Mari",
      ms: "malaiji",
      mt: "malta",
      my: "burma",
      ne: "nepali",
      nl: "hollanti",
      no: "norja",
      nso: "sepedi",
      ny: "njandža",
      nya: "Nyanja",
      om: "oromo",
      or: "odia (orija)",
      otq: "Otomi (Querétaro)",
      pa: "punjabi",
      pap: "Papiamento",
      pl: "puola",
      prs: "Dari",
      ps: "pashto",
      pt: "Portugali (Brasilia)",
      "pt-PT": "Portugali (Portugali)",
      qu: "ketšua",
      ro: "romania",
      ru: "venäjä",
      run: "Rundi",
      rw: "kinyarwanda",
      sa: "sanskriitti",
      sah: "Yakut",
      sd: "sindhi",
      si: "sinhali",
      sjn: "Elvish (Sindarin)",
      sk: "slovakia",
      sl: "slovenia",
      sm: "samoa",
      sn: "shona",
      so: "somali",
      sq: "albania",
      sr: "serbia",
      "sr-Latn": "Serbia (Latinalainen)",
      st: "sesotho",
      su: "sundaneesi",
      sv: "ruotsi",
      sw: "swahili",
      ta: "tamili",
      te: "telugu",
      tg: "tadžikki",
      th: "thai",
      ti: "tigrinja",
      tk: "turkmeeni",
      tl: "tagalog",
      "tlh-Latn": "Klingon (Latinalainen)",
      "tlh-Piqd": "Klingon (pIqaD)",
      tn: "Setswana",
      to: "Tonga",
      tr: "turkki",
      ts: "tsonga",
      tt: "tataari",
      ty: "Tahiti",
      udm: "Udmurt",
      ug: "uiguuri",
      uk: "ukraina",
      ur: "urdu",
      uz: "uzbekki",
      uzbcyr: "Uzbek (Cyrillic)",
      vi: "vietnam",
      xh: "xhosa",
      yi: "jiddiš",
      yo: "joruba",
      yua: "Maya (Jukatek)",
      yue: "Kantoninkiina (Perinteinen)",
      "zh-CN": "kiina (yksinkertaistettu)",
      "zh-TW": "kiina (perinteinen)",
      zu: "zulu",
    },
    fr: {
      af: "afrikaans",
      ak: "twi",
      am: "amharique",
      ar: "arabe",
      as: "assamais",
      ay: "aymara",
      az: "azéri",
      ba: "bachkir",
      be: "biélorusse",
      bg: "bulgare",
      bho: "bhodjpouri",
      bm: "bambara",
      bn: "bengali",
      bo: "tibétain",
      bs: "bosniaque",
      ca: "catalan",
      ceb: "cebuano",
      ckb: "kurde (sorani)",
      co: "corse",
      cs: "tchèque",
      cv: "tchouvache",
      cy: "gallois",
      da: "danois",
      de: "allemand",
      doi: "dogri",
      dsb: "lower sorbian",
      dv: "divéhi",
      ee: "ewe",
      el: "grec",
      emj: "emoji",
      en: "anglais",
      eo: "espéranto",
      es: "espagnol",
      et: "estonien",
      eu: "basque",
      fa: "persan",
      fi: "finnois",
      fj: "fidjien",
      fo: "féroïen",
      fr: "français",
      "fr-CA": "français (canada)",
      fy: "frison",
      ga: "irlandais",
      gd: "gaélique (écosse)",
      gl: "galicien",
      gn: "guarani",
      gom: "konkani",
      gu: "gujarati",
      ha: "haoussa",
      haw: "hawaïen",
      he: "hébreu",
      hi: "hindi",
      hmn: "hmong",
      hr: "croate",
      hsb: "haut-sorabe",
      ht: "créole haïtien",
      hu: "hongrois",
      hy: "arménien",
      id: "indonésien",
      ig: "igbo",
      ikt: "inuinnaqtun",
      ilo: "ilocano",
      is: "islandais",
      it: "italien",
      iu: "inuktitut",
      "iu-Latn": "inuktitut (latin)",
      ja: "japonais",
      jv: "javanais",
      ka: "géorgien",
      kazlat: "kazakh (latin)",
      kk: "kazakh",
      km: "khmer",
      kn: "kannada",
      ko: "coréen",
      kri: "krio",
      ku: "kurde (kurmandji)",
      ky: "kirghiz",
      la: "latin",
      lb: "luxembourgeois",
      lg: "luganda",
      ln: "lingala",
      lo: "laotien",
      lt: "lituanien",
      lus: "mizo",
      lv: "letton",
      lzh: "chinese (literary)",
      mai: "maïthili",
      mg: "malgache",
      mhr: "tchérémisse",
      mi: "maori",
      mk: "macédonien",
      ml: "malayalam",
      mn: "mongol",
      "mn-Mong": "mongolian (traditional)",
      "mni-Mtei": "meitei (manipuri)",
      mr: "marathi",
      mrj: "tchérémisse montagnarde",
      ms: "malaisien",
      mt: "maltais",
      my: "birman",
      ne: "népalais",
      nl: "néerlandais",
      no: "norvégien",
      nso: "sepedi",
      ny: "chichewa",
      nya: "nyanja",
      om: "oromo",
      or: "odia (oriya)",
      otq: "otomi de querétaro",
      pa: "panjabi",
      pap: "papiamento",
      pl: "polonais",
      prs: "dari",
      ps: "pachtô",
      pt: "portugais (brésil)",
      "pt-PT": "portugais (portugal)",
      qu: "quechua",
      ro: "roumain",
      ru: "russe",
      run: "rundi",
      rw: "kinyarwanda",
      sa: "sanscrit",
      sah: "yakoute",
      sd: "sindhî",
      si: "cingalais",
      sjn: "elfique (sindarin)",
      sk: "slovaque",
      sl: "slovène",
      sm: "samoan",
      sn: "shona",
      so: "somali",
      sq: "albanais",
      sr: "serbe",
      "sr-Latn": "serbe (latin)",
      st: "sesotho",
      su: "soundanais",
      sv: "suédois",
      sw: "swahili",
      ta: "tamoul",
      te: "telugu",
      tg: "tadjik",
      th: "thaï",
      ti: "tigrigna",
      tk: "turkmène",
      tl: "philippin",
      "tlh-Latn": "klingon (latin)",
      "tlh-Piqd": "klingon (piqad)",
      tn: "setswana",
      to: "tongien",
      tr: "turc",
      ts: "tsonga",
      tt: "tatar",
      ty: "tahitien",
      udm: "oudmourte",
      ug: "ouïgour",
      uk: "ukrainien",
      ur: "urdu",
      uz: "ouzbek",
      uzbcyr: "ouzbek (cyrillique)",
      vi: "vietnamien",
      xh: "xhosa",
      yi: "yiddish",
      yo: "yorouba",
      yua: "maya yucatèque",
      yue: "cantonais (traditionnel)",
      "zh-CN": "chinois (simplifié)",
      "zh-TW": "chinois (traditionnel)",
      zu: "zoulou",
    },
    he: {
      af: "אפריקאנס",
      ak: "טווי",
      am: "אמהרית",
      ar: "ערבית",
      as: "אסאמית",
      ay: "איימרה",
      az: "אזרית",
      ba: "בשקירית",
      be: "בלארוסית",
      bg: "בולגרית",
      bho: "בוג'פורית",
      bm: "באמבארה",
      bn: "בנגלית",
      bo: "טיבטית",
      bs: "בוסנית",
      ca: "קטלאנית",
      ceb: "סבואנו",
      ckb: "כורדית (סורנית)",
      co: "קורסיקאית",
      cs: "צ'כית",
      cv: "Chuvash",
      cy: "וולשית",
      da: "דנית",
      de: "גרמנית",
      doi: "דוגרי",
      dsb: "Lower Sorbian",
      dv: "דיווהי",
      ee: "אווה",
      el: "יוונית",
      emj: "Emoji",
      en: "אנגלית",
      eo: "אספרנטו",
      es: "ספרדית",
      et: "אסטונית",
      eu: "באסקית",
      fa: "פרסית",
      fi: "פינית",
      fj: "פיג׳ית",
      fo: "פארואזית",
      fr: "צרפתית",
      "fr-CA": "צרפתית (קנדה)",
      fy: "פריזית",
      ga: "אירית",
      gd: "סקוטית גאלית",
      gl: "גליציאנית",
      gn: "גוארני",
      gom: "קונקאני",
      gu: "גוג'ראטית",
      ha: "האוסה",
      haw: "הוואית",
      he: "עברית",
      hi: "הינדי",
      hmn: "המונג",
      hr: "קרואטית",
      hsb: "סורבית עילית",
      ht: "קריאולית האיטית",
      hu: "הונגרית",
      hy: "ארמנית",
      id: "אינדונזית",
      ig: "איגבו",
      ikt: "Inuinnaqtun",
      ilo: "אילוקאנו",
      is: "איסלנדית",
      it: "איטלקית",
      iu: "אינוקטיטוט",
      "iu-Latn": "Inuktitut (Latin)",
      ja: "יפנית",
      jv: "ג'אווה",
      ka: "גאורגית",
      kazlat: "Kazakh (Latin)",
      kk: "קזאחית",
      km: "חמר",
      kn: "קאנאדה",
      ko: "קוריאנית",
      kri: "קריו",
      ku: "כורדית (כורמנג'ית)",
      ky: "קירגיזית",
      la: "לטינית",
      lb: "לוקסמבורגית",
      lg: "לוגאנדה",
      ln: "לינגאלה",
      lo: "לאו",
      lt: "ליטאית",
      lus: "מיזו",
      lv: "לטבית",
      lzh: "Chinese (Literary)",
      mai: "מאיטילי",
      mg: "מלגשית",
      mhr: "Mari",
      mi: "מאורית",
      mk: "מקדונית",
      ml: "מלאיאלאם",
      mn: "מונגולית",
      "mn-Mong": "Mongolian (Traditional)",
      "mni-Mtei": "מייטילון (מניפורית)",
      mr: "מראטהית",
      mrj: "Hill Mari",
      ms: "מלאית",
      mt: "מלטית",
      my: "בורמזית",
      ne: "נפאלית",
      nl: "הולנדית",
      no: "נורווגית",
      nso: "ספדי",
      ny: "צ'יצ'ווה",
      nya: "Nyanja",
      om: "אורומו",
      or: "אודיה (אוריה)",
      otq: "קוארטרו אוטומי",
      pa: "פונג'אבית",
      pap: "Papiamento",
      pl: "פולנית",
      prs: "דארי",
      ps: "פשטו",
      pt: "פורטוגזית (ברזיל)",
      "pt-PT": "פורטוגזית (פורטוגל)",
      qu: "קצ'ואה",
      ro: "רומנית",
      ru: "רוסית",
      run: "Rundi",
      rw: "קינירואנדה",
      sa: "סנסקריט",
      sah: "Yakut",
      sd: "סינדהי",
      si: "סינהלית",
      sjn: "Elvish (Sindarin)",
      sk: "סלובקית",
      sl: "סלובנית",
      sm: "סמואית",
      sn: "שונה",
      so: "סומלית",
      sq: "אלבנית",
      sr: "סרבית",
      "sr-Latn": "סרבית (לטיני)",
      st: "ססוטו",
      su: "סונדית",
      sv: "שוודית",
      sw: "סוואהילית",
      ta: "טמילית",
      te: "טלוגו",
      tg: "טג'יקית",
      th: "תאית",
      ti: "תיגרינית",
      tk: "טורקמנית",
      tl: "פיליפינית",
      "tlh-Latn": "קלינגונית (לטיני)",
      "tlh-Piqd": "קלינגונית (pIqaD)",
      tn: "Setswana",
      to: "טונגאית",
      tr: "טורקית",
      ts: "טסונגה",
      tt: "טטארית",
      ty: "טהיטית",
      udm: "Udmurt",
      ug: "אויגור",
      uk: "אוקראינית",
      ur: "אורדו",
      uz: "אוזבקית",
      uzbcyr: "Uzbek (Cyrillic)",
      vi: "וייטנאמית",
      xh: "קוסה",
      yi: "יידיש",
      yo: "יורובה",
      yua: "יוקאטק מאיה",
      yue: "קנטונזית (מסורתי)",
      "zh-CN": "‏סינית (פשוטה)",
      "zh-TW": "סינית (מסורתית)",
      zu: "זולו",
    },
    hi: {
      af: "अफ़्रीकांस",
      ak: "त्वी",
      am: "ऐम्हेरिक",
      ar: "अरबी",
      as: "असमिया",
      ay: "आयमारा",
      az: "अज़रबैजानी",
      ba: "बशख़िर",
      be: "बेलारूसीयन",
      bg: "बुल्गारियन",
      bho: "भोजपुरी",
      bm: "बांबारा",
      bn: "बांग्ला",
      bo: "तिब्बती",
      bs: "बोस्नियन",
      ca: "कैटेलन",
      ceb: "सेबुआनो",
      ckb: "कुर्दिश (सोरानी)",
      co: "कोर्सिकन",
      cs: "चेक",
      cv: "Chuvash",
      cy: "वेल्श",
      da: "डैनिश",
      de: "जर्मन",
      doi: "डोगरी",
      dsb: "Lower Sorbian",
      dv: "दिवेही",
      ee: "एवे",
      el: "ग्रीक",
      emj: "Emoji",
      en: "अंग्रेज़ी",
      eo: "एस्पेरांटो",
      es: "स्पैनिश",
      et: "एस्तोनियन",
      eu: "बैस्क",
      fa: "फारसी",
      fi: "फ़िनिश",
      fj: "फिजियन",
      fo: "फ़ैरोइज़",
      fr: "फ़्रेंच",
      "fr-CA": "फ़्रेंच (कनाडा)",
      fy: "फ़्रिसियन",
      ga: "आयरिश",
      gd: "स्कॉट्स गेलिक",
      gl: "गैलिशियन",
      gn: "गुआरनी",
      gom: "कोंकणी",
      gu: "गुजराती",
      ha: "हौसा",
      haw: "हवायन",
      he: "हीब्रू",
      hi: "हिन्दी",
      hmn: "हमॉन्ग",
      hr: "क्रोएशियन",
      hsb: "ऊपरी सॉर्बियन",
      ht: "हैतियन क्रिओल",
      hu: "हंगरियन",
      hy: "आर्मेनियन",
      id: "इंडोनेशियन",
      ig: "इग्बो",
      ikt: "Inuinnaqtun",
      ilo: "इलोकानो",
      is: "आइसलैंडिक",
      it: "इटैलियन",
      iu: "इनूकीटूत्",
      "iu-Latn": "Inuktitut (Latin)",
      ja: "जापानी",
      jv: "जैवेनीज़",
      ka: "जॉर्जियन",
      kazlat: "Kazakh (Latin)",
      kk: "कज़ाख़",
      km: "खमेर",
      kn: "कन्नड़",
      ko: "कोरियन",
      kri: "क्रीओ",
      ku: "कुर्दिश (कुर्मांजी)",
      ky: "किरगिज़",
      la: "लैटिन",
      lb: "लक्ज़मबर्गिश",
      lg: "लुगांडा",
      ln: "लिंगाला",
      lo: "लाओ",
      lt: "लिथुआनियन",
      lus: "मिज़ो",
      lv: "लातवियन",
      lzh: "Chinese (Literary)",
      mai: "मैथिली",
      mg: "मेलागासी",
      mhr: "Mari",
      mi: "माऔरी",
      mk: "मेसीडोनियन",
      ml: "मलयालम",
      mn: "मंगोलियन",
      "mn-Mong": "Mongolian (Traditional)",
      "mni-Mtei": "मैतैलोन (मणिपुरी)",
      mr: "मराठी",
      mrj: "Hill Mari",
      ms: "मलय",
      mt: "माल्टी",
      my: "बर्मी",
      ne: "नेपाली",
      nl: "डच",
      no: "नॉर्वेजियन",
      nso: "सेपेडी",
      ny: "चिचेवा",
      nya: "Nyanja",
      om: "ओरोमो",
      or: "ओडिया (उड़िया)",
      otq: "केरेतारो ओतोमी",
      pa: "पंजाबी",
      pap: "Papiamento",
      pl: "पोलिश",
      prs: "दारी",
      ps: "पश्तो",
      pt: "पुर्तगाली (ब्राज़ील)",
      "pt-PT": "पुर्तगाली (पुर्तगाल)",
      qu: "केचुवा",
      ro: "रोमेनियन",
      ru: "रूसी",
      run: "Rundi",
      rw: "किनयारवांडा",
      sa: "संस्कृत",
      sah: "Yakut",
      sd: "सिन्धी",
      si: "सिंहला",
      sjn: "Elvish (Sindarin)",
      sk: "स्लोवाक",
      sl: "स्लोवेनियन",
      sm: "समोआई",
      sn: "शोना",
      so: "सोमाली",
      sq: "अल्बेनियन",
      sr: "सर्बियाई",
      "sr-Latn": "सर्बियाई (लैटिन)",
      st: "सेसोथो",
      su: "संडनीज़",
      sv: "स्वीडिश",
      sw: "स्वाहिली",
      ta: "तमिल",
      te: "तेलुगु",
      tg: "ताजिक",
      th: "थाई",
      ti: "तिग्रिन्या",
      tk: "तुर्कमेन",
      tl: "फ़िलिपीनो",
      "tlh-Latn": "क्लिंगन (लैटिन)",
      "tlh-Piqd": "क्लिंगन (pIqaD)",
      tn: "Setswana",
      to: "टोंगन",
      tr: "तुर्क",
      ts: "सौंगा",
      tt: "तातार",
      ty: "ताहितियन",
      udm: "Udmurt",
      ug: "वीगर",
      uk: "यूक्रेनियन",
      ur: "उर्दू",
      uz: "उज़्बेक",
      uzbcyr: "Uzbek (Cyrillic)",
      vi: "वियतनामी",
      xh: "कोसा",
      yi: "यिडिश",
      yo: "योरुबा",
      yua: "युकाटेक माया",
      yue: "कैंटोनीज़ (पारंपरिक)",
      "zh-CN": "चीनी (सरल)",
      "zh-TW": "चीनी (पारंपरिक)",
      zu: "ज़ुलु",
    },
    hr: {
      af: "afrikaans",
      ak: "tvi",
      am: "amharik",
      ar: "arapski",
      as: "asamski",
      ay: "ajmarski",
      az: "azerbajdžanski",
      ba: "Baškirski",
      be: "bjeloruski",
      bg: "bugarski",
      bho: "bhojpurski",
      bm: "bambarski",
      bn: "bengalski",
      bo: "Tibetski",
      bs: "bosanski",
      ca: "katalonski",
      ceb: "cebuano",
      ckb: "kurdski (soranski)",
      co: "korzički",
      cs: "češki",
      cv: "Chuvash",
      cy: "velški",
      da: "danski",
      de: "njemački",
      doi: "dogrijski",
      dsb: "Lower Sorbian",
      dv: "divehi",
      ee: "eve",
      el: "grčki",
      emj: "Emoji",
      en: "engleski",
      eo: "esperanto",
      es: "španjolski",
      et: "estonski",
      eu: "baskijski",
      fa: "perzijski",
      fi: "finski",
      fj: "Fidžijski",
      fo: "Ferojski",
      fr: "Francuski",
      "fr-CA": "Francuski (Kanada)",
      fy: "frizijski",
      ga: "irski",
      gd: "škotski keltski",
      gl: "galski",
      gn: "guarani",
      gom: "konkanski",
      gu: "gujarati",
      ha: "hausa",
      haw: "havajski",
      he: "hebrejski",
      hi: "hindu",
      hmn: "hmong",
      hr: "hrvatski",
      hsb: "Gornjolužički",
      ht: "haićansko-kreolski",
      hu: "mađarski",
      hy: "armenski",
      id: "indonezijski",
      ig: "igbo",
      ikt: "Inuinnaqtun",
      ilo: "ilokanski",
      is: "islandski",
      it: "talijanski",
      iu: "Inuktitut",
      "iu-Latn": "Inuktitut (Latin)",
      ja: "japanski",
      jv: "javanski",
      ka: "gruzijski",
      kazlat: "Kazakh (Latin)",
      kk: "kazaški",
      km: "kmerski",
      kn: "kannada",
      ko: "korejski",
      kri: "krio",
      ku: "kurdski (kurmanji)",
      ky: "kirgistanski",
      la: "latinski",
      lb: "luksemburški",
      lg: "luganda",
      ln: "lingala",
      lo: "laoski",
      lt: "litvanski",
      lus: "mizo",
      lv: "latvijski/letonski",
      lzh: "Chinese (Literary)",
      mai: "maithili",
      mg: "malgaški",
      mhr: "Mari",
      mi: "maori",
      mk: "makedonski",
      ml: "malajalam",
      mn: "mongolski",
      "mn-Mong": "Mongolian (Traditional)",
      "mni-Mtei": "meiteilon (manipurski)",
      mr: "marati",
      mrj: "Hill Mari",
      ms: "malezijski",
      mt: "malteški",
      my: "burmanski",
      ne: "nepalski",
      nl: "nizozemski",
      no: "norveški",
      nso: "sepedi",
      ny: "chichewa",
      nya: "Nyanja",
      om: "oromo",
      or: "odijski (orijski)",
      otq: "Querétaro Otomi",
      pa: "punjabi",
      pap: "Papiamento",
      pl: "poljski",
      prs: "Dari",
      ps: "paštu",
      pt: "Portugalski (Brazil)",
      "pt-PT": "Portugalski (Portugal)",
      qu: "kečuanski",
      ro: "rumunjski",
      ru: "ruski",
      run: "Rundi",
      rw: "kinyarwanda",
      sa: "sanskrt",
      sah: "Yakut",
      sd: "sindi",
      si: "singalski",
      sjn: "Elvish (Sindarin)",
      sk: "slovački",
      sl: "slovenski",
      sm: "samoanski",
      sn: "sahona",
      so: "somalijski",
      sq: "albanski",
      sr: "srpski",
      "sr-Latn": "Srpski (Latinica)",
      st: "sesotski",
      su: "sundanski",
      sv: "švedski",
      sw: "svahili",
      ta: "tamilski",
      te: "telugu",
      tg: "tadžik",
      th: "tajlandski",
      ti: "tigrinja",
      tk: "turkmenski",
      tl: "tagalog",
      "tlh-Latn": "Klingonski (Latinica)",
      "tlh-Piqd": "Klingonski (pIqaD)",
      tn: "Setswana",
      to: "Tonganski",
      tr: "turski",
      ts: "tsonga",
      tt: "tatarski",
      ty: "Tahićanski",
      udm: "Udmurt",
      ug: "ujgurski",
      uk: "ukrajinski",
      ur: "urdu",
      uz: "uzbekistanski",
      uzbcyr: "Uzbek (Cyrillic)",
      vi: "vijetnamski",
      xh: "xhosa",
      yi: "jidiš",
      yo: "joruba",
      yua: "Yucatec Maya",
      yue: "Kantonski (Tradicionalno Pismo)",
      "zh-CN": "kineski (pojednostavljeni)",
      "zh-TW": "kineski (tradicionalni)",
      zu: "zulu",
    },
    hu: {
      af: "afrikaans",
      ak: "twi",
      am: "amhara",
      ar: "arab",
      as: "asszámi",
      ay: "ajmara",
      az: "azeri",
      ba: "Baskír",
      be: "belorusz",
      bg: "bolgár",
      bho: "bhodzspuri",
      bm: "bambara",
      bn: "bengáli",
      bo: "Tibeti",
      bs: "bosnyák",
      ca: "katalán",
      ceb: "cebuano",
      ckb: "kurd (szoráni)",
      co: "korzikai",
      cs: "cseh",
      cv: "Chuvash",
      cy: "walesi",
      da: "dán",
      de: "német",
      doi: "dogri",
      dsb: "Lower Sorbian",
      dv: "divehi (maldív)",
      ee: "ewe",
      el: "görög",
      emj: "Emoji",
      en: "angol",
      eo: "eszperantó",
      es: "spanyol",
      et: "észt",
      eu: "baszk",
      fa: "perzsa",
      fi: "finn",
      fj: "Fidzsi",
      fo: "Feröeri",
      fr: "Francia",
      "fr-CA": "Francia (Kanada)",
      fy: "fríz",
      ga: "ír",
      gd: "skót-gael",
      gl: "galíciai",
      gn: "guarani",
      gom: "konkani",
      gu: "gudzsaráti",
      ha: "hausza",
      haw: "hawaii",
      he: "héber",
      hi: "hindi",
      hmn: "hmong",
      hr: "horvát",
      hsb: "Felső-Szorb",
      ht: "haiti kreol",
      hu: "magyar",
      hy: "örmény",
      id: "indonéz",
      ig: "igbo",
      ikt: "Inuinnaqtun",
      ilo: "ilokano",
      is: "izlandi",
      it: "olasz",
      iu: "Inuktitut",
      "iu-Latn": "Inuktitut (Latin)",
      ja: "japán",
      jv: "jávai",
      ka: "grúz",
      kazlat: "Kazakh (Latin)",
      kk: "kazah",
      km: "khmer",
      kn: "kannada",
      ko: "koreai",
      kri: "krio",
      ku: "kurd (kurmanji)",
      ky: "kirgiz",
      la: "latin",
      lb: "luxemburgi",
      lg: "luganda",
      ln: "lingala",
      lo: "lao",
      lt: "litván",
      lus: "mizo",
      lv: "lett",
      lzh: "Chinese (Literary)",
      mai: "maithili",
      mg: "malagaszi",
      mhr: "Mari",
      mi: "maori",
      mk: "macedón",
      ml: "malajálam",
      mn: "mongol",
      "mn-Mong": "Mongolian (Traditional)",
      "mni-Mtei": "meiteilon (manipuri)",
      mr: "maráthi",
      mrj: "Hill Mari",
      ms: "maláj",
      mt: "máltai",
      my: "burmai",
      ne: "nepáli",
      nl: "holland",
      no: "norvég",
      nso: "sepedi",
      ny: "chichewa",
      nya: "Nyanja",
      om: "oromo",
      or: "odia (orija)",
      otq: "Querétarói Otomi",
      pa: "pandzsábi",
      pap: "Papiamento",
      pl: "lengyel",
      prs: "Dari",
      ps: "pastu",
      pt: "Portugál (Brazília)",
      "pt-PT": "Portugál (Portugália)",
      qu: "kecsua",
      ro: "román",
      ru: "orosz",
      run: "Rundi",
      rw: "kinyarwanda",
      sa: "szanszkrit",
      sah: "Yakut",
      sd: "szindhi",
      si: "szinhala",
      sjn: "Elvish (Sindarin)",
      sk: "szlovák",
      sl: "szlovén",
      sm: "szamoai",
      sn: "shona",
      so: "szomáli",
      sq: "albán",
      sr: "szerb",
      "sr-Latn": "Szerb (Latin)",
      st: "szoto",
      su: "szundanéz",
      sv: "svéd",
      sw: "szuahéli",
      ta: "tamil",
      te: "telugu",
      tg: "tadzsik",
      th: "thai",
      ti: "tigrinya",
      tk: "türkmén",
      tl: "filippínó",
      "tlh-Latn": "Klingon (Latin)",
      "tlh-Piqd": "Klingon (pIqaD)",
      tn: "Setswana",
      to: "Tongai",
      tr: "török",
      ts: "tsonga",
      tt: "tatár",
      ty: "Tahiti",
      udm: "Udmurt",
      ug: "ujgur",
      uk: "ukrán",
      ur: "urdu",
      uz: "üzbég",
      uzbcyr: "Uzbek (Cyrillic)",
      vi: "vietnami",
      xh: "xhosa",
      yi: "jiddis",
      yo: "joruba",
      yua: "Jukaték-Maja",
      yue: "Kantoni (Hagyományos)",
      "zh-CN": "kínai (egyszerűsített)",
      "zh-TW": "kínai (hagyományos)",
      zu: "zulu",
    },
    is: {
      af: "afríkanska",
      ak: "twi",
      am: "amharíska",
      ar: "arabíska",
      as: "assamska",
      ay: "aímaríska",
      az: "aserska",
      ba: "Baskír",
      be: "hvítrússneska",
      bg: "búlgarska",
      bho: "bhojpuri",
      bm: "bambara",
      bn: "bengalska",
      bo: "Tíbeska",
      bs: "bosníska",
      ca: "katalónska",
      ceb: "sebúanó",
      ckb: "kúrdíska (soraní)",
      co: "korsíska",
      cs: "tékkneska",
      cv: "Chuvash",
      cy: "velska",
      da: "danska",
      de: "þýska",
      doi: "dogri",
      dsb: "Lower Sorbian",
      dv: "dhivehi",
      ee: "ewe",
      el: "gríska",
      emj: "Emoji",
      en: "enska",
      eo: "esperantó",
      es: "spænska",
      et: "eistneska",
      eu: "baskneska",
      fa: "persneska",
      fi: "finnska",
      fj: "Fídjeyska",
      fo: "Færeyska",
      fr: "Franska",
      "fr-CA": "Franska (Kanada)",
      fy: "frísneska",
      ga: "írska",
      gd: "skosk-gelíska",
      gl: "galisíska",
      gn: "gvaraní",
      gom: "konkani",
      gu: "gujarati",
      ha: "hása",
      haw: "havaíska",
      he: "hebreska",
      hi: "hindí",
      hmn: "hmong",
      hr: "króatíska",
      hsb: "Hásorbneska",
      ht: "haítískt kreólamál",
      hu: "ungverska",
      hy: "armenska",
      id: "indónesíska",
      ig: "igbó",
      ikt: "Inuinnaqtun",
      ilo: "ilokano",
      is: "íslenska",
      it: "ítalska",
      iu: "Inúktitút",
      "iu-Latn": "Inuktitut (Latin)",
      ja: "japanska",
      jv: "javíska",
      ka: "georgíska",
      kazlat: "Kazakh (Latin)",
      kk: "kasakstanska",
      km: "khmer",
      kn: "kannada",
      ko: "kóreska",
      kri: "krio",
      ku: "kúrdíska (kurmanji)",
      ky: "kirgisíska",
      la: "latína",
      lb: "lúxemborgska",
      lg: "lúganda",
      ln: "lingala",
      lo: "lao",
      lt: "litháíska",
      lus: "mizo",
      lv: "lettneska",
      lzh: "Chinese (Literary)",
      mai: "maithili",
      mg: "malagasíska",
      mhr: "Mari",
      mi: "maoríska",
      mk: "makedónska",
      ml: "malayalam",
      mn: "mongólska",
      "mn-Mong": "Mongolian (Traditional)",
      "mni-Mtei": "meiteilon (manipuri)",
      mr: "maratí",
      mrj: "Hill Mari",
      ms: "malajíska",
      mt: "maltneska",
      my: "búrmíska",
      ne: "nepalska",
      nl: "hollenska",
      no: "norska",
      nso: "sepedi",
      ny: "chichewa",
      nya: "Nyanja",
      om: "oromo",
      or: "odía (oriya)",
      otq: "Querétaro-Otomi",
      pa: "punjabi",
      pap: "Papiamento",
      pl: "pólska",
      prs: "Darí",
      ps: "pashto",
      pt: "Portúgalska (Brasilía)",
      "pt-PT": "Portúgalska (Portúgal)",
      qu: "quechua",
      ro: "rúmenska",
      ru: "rússneska",
      run: "Rundi",
      rw: "kinjarvanda",
      sa: "sanskrít",
      sah: "Yakut",
      sd: "sindhí",
      si: "sinhala",
      sjn: "Elvish (Sindarin)",
      sk: "slóvakíska",
      sl: "slóvenska",
      sm: "samóska",
      sn: "shona",
      so: "sómalska",
      sq: "albanska",
      sr: "serbneska",
      "sr-Latn": "Serbneska (Latneskt)",
      st: "sesótó",
      su: "súndíska",
      sv: "sænska",
      sw: "svahílí",
      ta: "tamílska",
      te: "telugu",
      tg: "tadsjikíska",
      th: "taílenska",
      ti: "tigriníska",
      tk: "túrkmenska",
      tl: "filippseyska",
      "tlh-Latn": "Klingonska (Latneskt)",
      "tlh-Piqd": "Klingonska (pIqaD)",
      tn: "Setswana",
      to: "Tongverska",
      tr: "tyrkneska",
      ts: "tsonga",
      tt: "tatarska",
      ty: "Tahítíska",
      udm: "Udmurt",
      ug: "uyghur",
      uk: "úkraínska",
      ur: "úrdú",
      uz: "úsbekíska",
      uzbcyr: "Uzbek (Cyrillic)",
      vi: "víetnamska",
      xh: "xhosa",
      yi: "jiddíska",
      yo: "jorúba",
      yua: "Yukatan-Maya",
      yue: "Kantónska (Hefðbundið)",
      "zh-CN": "kínverska (einfölduð)",
      "zh-TW": "kínverska (hefðbundin)",
      zu: "súlú",
    },
    it: {
      af: "Afrikaans",
      ak: "Ci",
      am: "Amarico",
      ar: "Arabo",
      as: "Assamese",
      ay: "Aymara",
      az: "Azero",
      ba: "Baschiro",
      be: "Bielorusso",
      bg: "Bulgaro",
      bho: "Bhojpuri",
      bm: "Bambara",
      bn: "Bengalese",
      bo: "Tibetano",
      bs: "Bosniaco",
      ca: "Catalano",
      ceb: "Cebuano",
      ckb: "Curdo (Sorani)",
      co: "Corso",
      cs: "Ceco",
      cv: "Ciuvascio",
      cy: "Gallese",
      da: "Danese",
      de: "Tedesco",
      doi: "Dogri",
      dsb: "Lower Sorbian",
      dv: "Dhivehi",
      ee: "Ewe",
      el: "Greco",
      emj: "Emoji",
      en: "Inglese",
      eo: "Esperanto",
      es: "Spagnolo",
      et: "Estone",
      eu: "Basco",
      fa: "Persiano",
      fi: "Finlandese",
      fj: "Figiano",
      fo: "Faroese",
      fr: "Francese",
      "fr-CA": "Francese (Canada)",
      fy: "Frisone",
      ga: "Irlandese",
      gd: "Gaelico scozzese",
      gl: "Galiziano",
      gn: "Guaraní",
      gom: "Konkani",
      gu: "Gujarati",
      ha: "Hausa",
      haw: "Hawaiano",
      he: "Ebraico",
      hi: "Hindi",
      hmn: "Hmong",
      hr: "Croato",
      hsb: "Alto Sorabo",
      ht: "Creolo haitiano",
      hu: "Ungherese",
      hy: "Armeno",
      id: "Indonesiano",
      ig: "Igbo",
      ikt: "Inuinnaqtun",
      ilo: "Ilocano",
      is: "Islandese",
      it: "Italiano",
      iu: "Inuktitut",
      "iu-Latn": "Inuktitut (Latin)",
      ja: "Giapponese",
      jv: "Giavanese",
      ka: "Georgiano",
      kazlat: "Kazako (Latino)",
      kk: "Kazako",
      km: "Khmer",
      kn: "Kannada",
      ko: "Coreano",
      kri: "Krio",
      ku: "Curdo (Kurmanji)",
      ky: "Chirghiso",
      la: "Latino",
      lb: "Lussemburghese",
      lg: "Luganda",
      ln: "Lingala",
      lo: "Lao",
      lt: "Lituano",
      lus: "Mizo",
      lv: "Lettone",
      lzh: "Chinese (Literary)",
      mai: "Maithili",
      mg: "Malgascio",
      mhr: "Mari delle praterie",
      mi: "Maori",
      mk: "Macedone",
      ml: "Malayalam",
      mn: "Mongolo",
      "mn-Mong": "Mongolian (Traditional)",
      "mni-Mtei": "Meiteilon (Manipuri)",
      mr: "Marathi",
      mrj: "Mari delle colline",
      ms: "Malese",
      mt: "Maltese",
      my: "Birmano",
      ne: "Nepalese",
      nl: "Olandese",
      no: "Norvegese",
      nso: "Sepedi",
      ny: "Chichewa",
      nya: "Nyanja",
      om: "Oromo",
      or: "Odia (Oriya)",
      otq: "Otomí Del Querétaro",
      pa: "Punjabi",
      pap: "Papiamento",
      pl: "Polacco",
      prs: "Dari",
      ps: "Pashto",
      pt: "Portoghese (Brasile)",
      "pt-PT": "Portoghese (Portogallo)",
      qu: "Quechua",
      ro: "Rumeno",
      ru: "Russo",
      run: "Rundi",
      rw: "Kinyarwanda",
      sa: "Sanscrito",
      sah: "Jacuto",
      sd: "Sindhi",
      si: "Singalese",
      sjn: "Elfico (Sindarin)",
      sk: "Slovacco",
      sl: "Sloveno",
      sm: "Samoano",
      sn: "Shona",
      so: "Somalo",
      sq: "Albanese",
      sr: "Serbo",
      "sr-Latn": "Serbo (Latino)",
      st: "Sesotho",
      su: "Sundanese",
      sv: "Svedese",
      sw: "Swahili",
      ta: "Tamil",
      te: "Telugu",
      tg: "Tagico",
      th: "Thai",
      ti: "Tigrino",
      tk: "Turcomanno",
      tl: "Filippino",
      "tlh-Latn": "Klingon (Latino)",
      "tlh-Piqd": "Klingon (pIqaD)",
      tn: "Setswana",
      to: "Tongano",
      tr: "Turco",
      ts: "Tsonga",
      tt: "Tataro",
      ty: "Taitiano",
      udm: "Udmurto",
      ug: "Uiguro",
      uk: "Ucraino",
      ur: "Urdu",
      uz: "Uzbeco",
      uzbcyr: "Uzbeco (Cirillico)",
      vi: "Vietnamita",
      xh: "Xhosa",
      yi: "Yiddish",
      yo: "Yoruba",
      yua: "Lingua Maya Yucateca",
      yue: "Cantonese (Tradizionale)",
      "zh-CN": "Cinese (semplificato)",
      "zh-TW": "Cinese (tradizionale)",
      zu: "Zulu",
    },
    ja: {
      af: "アフリカーンス語",
      ak: "トゥイ語",
      am: "アムハラ語",
      ar: "アラビア語",
      as: "アッサム語",
      ay: "アイマラ語",
      az: "アゼルバイジャン語",
      ba: "バシキール語",
      be: "ベラルーシ語",
      bg: "ブルガリア語",
      bho: "ボージュプリー語",
      bm: "バンバラ語",
      bn: "ベンガル語",
      bo: "チベット語",
      bs: "ボスニア語",
      ca: "カタルーニャ語",
      ceb: "セブアノ語",
      ckb: "クルド語（ソラニー）",
      co: "コルシカ語",
      cs: "チェコ語",
      cv: "Chuvash",
      cy: "ウェールズ語",
      da: "デンマーク語",
      de: "ドイツ語",
      doi: "ドグリ語",
      dsb: "Lower Sorbian",
      dv: "ディベヒ語",
      ee: "エウェ語",
      el: "ギリシャ語",
      emj: "Emoji",
      en: "英語",
      eo: "エスペラント語",
      es: "スペイン語",
      et: "エストニア語",
      eu: "バスク語",
      fa: "ペルシャ語",
      fi: "フィンランド語",
      fj: "フィジー語",
      fo: "フェロー語",
      fr: "フランス語",
      "fr-CA": "フランス語 (カナダ)",
      fy: "フリジア語",
      ga: "アイルランド語",
      gd: "スコットランド ゲール語",
      gl: "ガリシア語",
      gn: "グアラニ語",
      gom: "コンカニ語",
      gu: "グジャラート語",
      ha: "ハウサ語",
      haw: "ハワイ語",
      he: "ヘブライ語",
      hi: "ヒンディー語",
      hmn: "モン語",
      hr: "クロアチア語",
      hsb: "高地ソルブ語",
      ht: "ハイチ語",
      hu: "ハンガリー語",
      hy: "アルメニア語",
      id: "インドネシア語",
      ig: "イボ語",
      ikt: "Inuinnaqtun",
      ilo: "イロカノ語",
      is: "アイスランド語",
      it: "イタリア語",
      iu: "イヌクティトット語",
      "iu-Latn": "Inuktitut (Latin)",
      ja: "日本語",
      jv: "ジャワ語",
      ka: "ジョージア語（グルジア語）",
      kazlat: "Kazakh (Latin)",
      kk: "カザフ語",
      km: "クメール語",
      kn: "カンナダ語",
      ko: "韓国語",
      kri: "クリオ語",
      ku: "クルド語（クルマンジー）",
      ky: "キルギス語",
      la: "ラテン語",
      lb: "ルクセンブルク語",
      lg: "ルガンダ語",
      ln: "リンガラ語",
      lo: "ラオ語",
      lt: "リトアニア語",
      lus: "ミゾ語",
      lv: "ラトビア語",
      lzh: "Chinese (Literary)",
      mai: "マイティリー語",
      mg: "マラガシ語",
      mhr: "Mari",
      mi: "マオリ語",
      mk: "マケドニア語",
      ml: "マラヤーラム語",
      mn: "モンゴル語",
      "mn-Mong": "Mongolian (Traditional)",
      "mni-Mtei": "メイテイ語（マニプリ語）",
      mr: "マラーティー語",
      mrj: "Hill Mari",
      ms: "マレー語",
      mt: "マルタ語",
      my: "ミャンマー語（ビルマ語）",
      ne: "ネパール語",
      nl: "オランダ語",
      no: "ノルウェー語",
      nso: "セペディ語",
      ny: "チェワ語",
      nya: "Nyanja",
      om: "オロモ語",
      or: "オリヤ語",
      otq: "ケレタロ オトミ語",
      pa: "パンジャブ語",
      pap: "Papiamento",
      pl: "ポーランド語",
      prs: "ダリー語",
      ps: "パシュト語",
      pt: "ポルトガル語 (ブラジル)",
      "pt-PT": "ポルトガル語 (ポルトガル)",
      qu: "ケチュア語",
      ro: "ルーマニア語",
      ru: "ロシア語",
      run: "Rundi",
      rw: "キニヤルワンダ語",
      sa: "サンスクリット語",
      sah: "Yakut",
      sd: "シンド語",
      si: "シンハラ語",
      sjn: "Elvish (Sindarin)",
      sk: "スロバキア語",
      sl: "スロベニア語",
      sm: "サモア語",
      sn: "ショナ語",
      so: "ソマリ語",
      sq: "アルバニア語",
      sr: "セルビア語",
      "sr-Latn": "セルビア語 (ラテン文字)",
      st: "ソト語",
      su: "スンダ語",
      sv: "スウェーデン語",
      sw: "スワヒリ語",
      ta: "タミル語",
      te: "テルグ語",
      tg: "タジク語",
      th: "タイ語",
      ti: "ティグリニャ語",
      tk: "トルクメン語",
      tl: "タガログ語",
      "tlh-Latn": "クリンゴン語 (ラテン文字)",
      "tlh-Piqd": "クリンゴン語 (pIqaD)",
      tn: "Setswana",
      to: "トンガ語",
      tr: "トルコ語",
      ts: "ツォンガ語",
      tt: "タタール語",
      ty: "タヒチ語",
      udm: "Udmurt",
      ug: "ウイグル語",
      uk: "ウクライナ語",
      ur: "ウルドゥ語",
      uz: "ウズベク語",
      uzbcyr: "Uzbek (Cyrillic)",
      vi: "ベトナム語",
      xh: "コーサ語",
      yi: "イディッシュ語",
      yo: "ヨルバ語",
      yua: "ユカテコ語",
      yue: "広東語 (繁体字)",
      "zh-CN": "中国語（簡体）",
      "zh-TW": "中国語（繁体）",
      zu: "ズールー語",
    },
    kaa: {
      af: "Afrikaans",
      ak: "Twi",
      am: "Amharic",
      ar: "Arabic",
      as: "Assamese",
      ay: "Aymara",
      az: "Azerbaijani",
      ba: "Bashkir",
      be: "Belarusian",
      bg: "Bulgarian",
      bho: "Bhojpuri",
      bm: "Bambara",
      bn: "Bengali",
      bo: "Tibetan",
      bs: "Bosnian",
      ca: "Catalan",
      ceb: "Cebuano",
      ckb: "Kurdish (Sorani)",
      co: "Corsican",
      cs: "Czech",
      cv: "Chuvash",
      cy: "Welsh",
      da: "Danish",
      de: "German",
      doi: "Dogri",
      dsb: "Lower Sorbian",
      dv: "Dhivehi",
      ee: "Ewe",
      el: "Greek",
      emj: "Emoji",
      en: "English",
      eo: "Esperanto",
      es: "Spanish",
      et: "Estonian",
      eu: "Basque",
      fa: "Persian",
      fi: "Finnish",
      fj: "Fijian",
      fo: "Faroese",
      fr: "French",
      "fr-CA": "French (Canada)",
      fy: "Frisian",
      ga: "Irish",
      gd: "Scots Gaelic",
      gl: "Galician",
      gn: "Guarani",
      gom: "Konkani",
      gu: "Gujarati",
      ha: "Hausa",
      haw: "Hawaiian",
      he: "Hebrew",
      hi: "Hindi",
      hmn: "Hmong",
      hr: "Croatian",
      hsb: "Upper Sorbian",
      ht: "Haitian Creole",
      hu: "Hungarian",
      hy: "Armenian",
      id: "Indonesian",
      ig: "Igbo",
      ikt: "Inuinnaqtun",
      ilo: "Ilocano",
      is: "Icelandic",
      it: "Italian",
      iu: "Inuktitut",
      "iu-Latn": "Inuktitut (Latin)",
      ja: "Japanese",
      jv: "Javanese",
      ka: "Georgian",
      kazlat: "Kazakh (Latin)",
      kk: "Kazakh",
      km: "Khmer",
      kn: "Kannada",
      ko: "Korean",
      kri: "Krio",
      ku: "Kurdish (Kurmanji)",
      ky: "Kyrgyz",
      la: "Latin",
      lb: "Luxembourgish",
      lg: "Luganda",
      ln: "Lingala",
      lo: "Lao",
      lt: "Lithuanian",
      lus: "Mizo",
      lv: "Latvian",
      lzh: "Chinese (Literary)",
      mai: "Maithili",
      mg: "Malagasy",
      mhr: "Mari",
      mi: "Maori",
      mk: "Macedonian",
      ml: "Malayalam",
      mn: "Mongolian",
      "mn-Mong": "Mongolian (Traditional)",
      "mni-Mtei": "Meiteilon (Manipuri)",
      mr: "Marathi",
      mrj: "Hill Mari",
      ms: "Malay",
      mt: "Maltese",
      my: "Myanmar (Burmese)",
      ne: "Nepali",
      nl: "Dutch",
      no: "Norwegian",
      nso: "Sepedi",
      ny: "Chichewa",
      nya: "Nyanja",
      om: "Oromo",
      or: "Odia (Oriya)",
      otq: "Querétaro Otomi",
      pa: "Punjabi",
      pap: "Papiamento",
      pl: "Polish",
      prs: "Dari",
      ps: "Pashto",
      pt: "Portuguese (Brazil)",
      "pt-PT": "Portuguese (Portugal)",
      qu: "Quechua",
      ro: "Romanian",
      ru: "Russian",
      run: "Rundi",
      rw: "Kinyarwanda",
      sa: "Sanskrit",
      sah: "Yakut",
      sd: "Sindhi",
      si: "Sinhala",
      sjn: "Elvish (Sindarin)",
      sk: "Slovak",
      sl: "Slovenian",
      sm: "Samoan",
      sn: "Shona",
      so: "Somali",
      sq: "Albanian",
      sr: "Serbian",
      "sr-Latn": "Serbian (Latin)",
      st: "Sesotho",
      su: "Sundanese",
      sv: "Swedish",
      sw: "Swahili",
      ta: "Tamil",
      te: "Telugu",
      tg: "Tajik",
      th: "Thai",
      ti: "Tigrinya",
      tk: "Turkmen",
      tl: "Filipino",
      "tlh-Latn": "Klingon (Latin)",
      "tlh-Piqd": "Klingon (pIqaD)",
      tn: "Setswana",
      to: "Tongan",
      tr: "Turkish",
      ts: "Tsonga",
      tt: "Tatar",
      ty: "Tahitian",
      udm: "Udmurt",
      ug: "Uyghur",
      uk: "Ukrainian",
      ur: "Urdu",
      uz: "Uzbek",
      uzbcyr: "Uzbek (Cyrillic)",
      vi: "Vietnamese",
      xh: "Xhosa",
      yi: "Yiddish",
      yo: "Yoruba",
      yua: "Yucatec Maya",
      yue: "Cantonese (Traditional)",
      "zh-CN": "Chinese (Simplified)",
      "zh-TW": "Chinese (Traditional)",
      zu: "Zulu",
    },
    ko: {
      af: "아프리칸스어",
      ak: "트위어",
      am: "암하라어",
      ar: "아랍어",
      as: "아삼어",
      ay: "아이마라어",
      az: "아제르바이잔어",
      ba: "바슈키르어",
      be: "벨라루스어",
      bg: "불가리아어",
      bho: "보즈푸리어",
      bm: "밤바라어",
      bn: "벵골어",
      bo: "티베트어",
      bs: "보스니아어",
      ca: "카탈로니아어",
      ceb: "세부아노어",
      ckb: "쿠르드어(소라니)",
      co: "코르시카어",
      cs: "체코어",
      cv: "Chuvash",
      cy: "웨일즈어",
      da: "덴마크어",
      de: "독일어",
      doi: "도그리어",
      dsb: "Lower Sorbian",
      dv: "디베히어",
      ee: "에웨어",
      el: "그리스어",
      emj: "Emoji",
      en: "영어",
      eo: "에스페란토어",
      es: "스페인어",
      et: "에스토니아어",
      eu: "바스크어",
      fa: "페르시아어",
      fi: "핀란드어",
      fj: "피지어",
      fo: "페로어",
      fr: "프랑스어",
      "fr-CA": "프랑스어 (캐나다)",
      fy: "프리지아어",
      ga: "아일랜드어",
      gd: "스코틀랜드 게일어",
      gl: "갈리시아어",
      gn: "과라니어",
      gom: "콘칸어",
      gu: "구자라트어",
      ha: "하우사어",
      haw: "하와이어",
      he: "히브리어",
      hi: "힌디어",
      hmn: "몽어",
      hr: "크로아티아어",
      hsb: "고지 소르비아어",
      ht: "아이티 크리올어",
      hu: "헝가리어",
      hy: "아르메니아어",
      id: "인도네시아어",
      ig: "이그보어",
      ikt: "Inuinnaqtun",
      ilo: "일로카노어",
      is: "아이슬란드어",
      it: "이탈리아어",
      iu: "이눅티투트어",
      "iu-Latn": "Inuktitut (Latin)",
      ja: "일본어",
      jv: "자바어",
      ka: "조지아어",
      kazlat: "Kazakh (Latin)",
      kk: "카자흐어",
      km: "크메르어",
      kn: "칸나다어",
      ko: "한국어",
      kri: "크리오어",
      ku: "쿠르드어(쿠르만지)",
      ky: "키르기스어",
      la: "라틴어",
      lb: "룩셈부르크어",
      lg: "루간다어",
      ln: "링갈라어",
      lo: "라오어",
      lt: "리투아니아어",
      lus: "미조어",
      lv: "라트비아어",
      lzh: "Chinese (Literary)",
      mai: "마이틸어",
      mg: "말라가시어",
      mhr: "Mari",
      mi: "마오리어",
      mk: "마케도니아어",
      ml: "말라얄람어",
      mn: "몽골어",
      "mn-Mong": "Mongolian (Traditional)",
      "mni-Mtei": "메이테이어(마니푸르어)",
      mr: "마라티어",
      mrj: "Hill Mari",
      ms: "말레이어",
      mt: "몰타어",
      my: "미얀마어(버마어)",
      ne: "네팔어",
      nl: "네덜란드어",
      no: "노르웨이어",
      nso: "북소토어",
      ny: "체와어",
      nya: "Nyanja",
      om: "오로모어",
      or: "오리야어",
      otq: "케레타로 오토미어",
      pa: "펀자브어",
      pap: "Papiamento",
      pl: "폴란드어",
      prs: "다리어",
      ps: "파슈토어",
      pt: "포르투갈어 (브라질)",
      "pt-PT": "포르투갈어 (포르투갈)",
      qu: "케추아어",
      ro: "루마니아어",
      ru: "러시아어",
      run: "Rundi",
      rw: "키냐르완다어",
      sa: "산스크리트",
      sah: "Yakut",
      sd: "신디어",
      si: "싱할라어",
      sjn: "Elvish (Sindarin)",
      sk: "슬로바키아어",
      sl: "슬로베니아어",
      sm: "사모아어",
      sn: "쇼나어",
      so: "소말리아어",
      sq: "알바니아어",
      sr: "세르비아어",
      "sr-Latn": "세르비아어 (로마자)",
      st: "세소토어",
      su: "순다어",
      sv: "스웨덴어",
      sw: "스와힐리어",
      ta: "타밀어",
      te: "텔루구어",
      tg: "타지크어",
      th: "태국어",
      ti: "티그리냐어",
      tk: "투르크멘어",
      tl: "필리핀어",
      "tlh-Latn": "클링온어 (로마자)",
      "tlh-Piqd": "클링온어 (pIqaD)",
      tn: "Setswana",
      to: "통가어",
      tr: "터키어",
      ts: "총가어",
      tt: "타타르어",
      ty: "타히티어",
      udm: "Udmurt",
      ug: "위구르어",
      uk: "우크라이나어",
      ur: "우르두어",
      uz: "우즈베크어",
      uzbcyr: "Uzbek (Cyrillic)",
      vi: "베트남어",
      xh: "코사어",
      yi: "이디시어",
      yo: "요루바어",
      yua: "유카텍 마야어",
      yue: "광둥어 (번체)",
      "zh-CN": "중국어(간체)",
      "zh-TW": "중국어(번체)",
      zu: "줄루어",
    },
    lv: {
      af: "afrikāņu",
      ak: "tvī",
      am: "amharu",
      ar: "arābu",
      as: "asamiešu",
      ay: "aimaru",
      az: "azerbaidžāņu",
      ba: "Baškīru",
      be: "baltkrievu",
      bg: "bulgāru",
      bho: "bhodžpūru",
      bm: "bambaru",
      bn: "bengāļu",
      bo: "Tibetiešu",
      bs: "bosniešu",
      ca: "katalāņu",
      ceb: "sebuāņu",
      ckb: "kurdu (sorani)",
      co: "korsikāņu",
      cs: "čehu",
      cv: "Chuvash",
      cy: "velsiešu",
      da: "dāņu",
      de: "vācu",
      doi: "dogru",
      dsb: "Lower Sorbian",
      dv: "maldīviešu",
      ee: "evu",
      el: "grieķu",
      emj: "Emoji",
      en: "angļu",
      eo: "esperanto",
      es: "spāņu",
      et: "igauņu",
      eu: "basku",
      fa: "persiešu",
      fi: "somu",
      fj: "Fidžiešu",
      fo: "Fēru",
      fr: "Franču",
      "fr-CA": "Franču (Kanāda)",
      fy: "frīzu",
      ga: "īru",
      gd: "skotu gēlu",
      gl: "galisiešu",
      gn: "gvaranu",
      gom: "konkanu",
      gu: "gudžaratu",
      ha: "hausu",
      haw: "havajiešu",
      he: "ivrits",
      hi: "hindi",
      hmn: "hmongu",
      hr: "horvātu",
      hsb: "Augšsorbu",
      ht: "kreolu (Haiti)",
      hu: "ungāru",
      hy: "armēņu",
      id: "indonēziešu",
      ig: "igbo",
      ikt: "Inuinnaqtun",
      ilo: "iloku",
      is: "īslandiešu",
      it: "itāļu",
      iu: "Inuītu",
      "iu-Latn": "Inuktitut (Latin)",
      ja: "japāņu",
      jv: "javiešu",
      ka: "gruzīnu",
      kazlat: "Kazakh (Latin)",
      kk: "kazahu",
      km: "khmeru",
      kn: "kannada",
      ko: "korejiešu",
      kri: "krio",
      ku: "kurdu (kurmandži)",
      ky: "kirgīzu",
      la: "latīņu",
      lb: "luksemburgiešu",
      lg: "gandu",
      ln: "lingala",
      lo: "laosiešu",
      lt: "lietuviešu",
      lus: "mizo",
      lv: "latviešu",
      lzh: "Chinese (Literary)",
      mai: "maithili",
      mg: "malagasu",
      mhr: "Mari",
      mi: "maori",
      mk: "maķedoniešu",
      ml: "malajalamiešu",
      mn: "mongoļu",
      "mn-Mong": "Mongolian (Traditional)",
      "mni-Mtei": "meitei (manipūru)",
      mr: "maratu",
      mrj: "Hill Mari",
      ms: "malajiešu",
      mt: "maltiešu",
      my: "birmiešu",
      ne: "nepāliešu",
      nl: "holandiešu",
      no: "norvēģu",
      nso: "ziemeļsotu",
      ny: "čičeva",
      nya: "Nyanja",
      om: "oromu",
      or: "oriju",
      otq: "Keretaro Otomu",
      pa: "pandžabu",
      pap: "Papiamento",
      pl: "poļu",
      prs: "Darī",
      ps: "puštu",
      pt: "Portugāļu (Brazīlija)",
      "pt-PT": "Portugāļu (Portugāle)",
      qu: "kečua",
      ro: "rumāņu",
      ru: "krievu",
      run: "Rundi",
      rw: "kiņaruanda",
      sa: "sanskrits",
      sah: "Yakut",
      sd: "sindžu",
      si: "singāļu",
      sjn: "Elvish (Sindarin)",
      sk: "slovāku",
      sl: "slovēņu",
      sm: "samoāņu",
      sn: "šona",
      so: "somāļu",
      sq: "albāņu",
      sr: "serbu",
      "sr-Latn": "Serbu (Latīņu)",
      st: "sesoto",
      su: "sundaniešu",
      sv: "zviedru",
      sw: "svahilu",
      ta: "tamilu",
      te: "telugu",
      tg: "tadžiku",
      th: "taju",
      ti: "tigrinja",
      tk: "turkmēņu",
      tl: "filipīniešu",
      "tlh-Latn": "Klingoņu (Latīņu)",
      "tlh-Piqd": "Klingoņu (pIqaD)",
      tn: "Setswana",
      to: "Tongiešu",
      tr: "turku",
      ts: "conga",
      tt: "tatāru",
      ty: "Taitiešu",
      udm: "Udmurt",
      ug: "uiguru",
      uk: "ukraiņu",
      ur: "urdu",
      uz: "uzbeku",
      uzbcyr: "Uzbek (Cyrillic)",
      vi: "vjetnamiešu",
      xh: "khosu",
      yi: "jidišs",
      yo: "jorubiešu",
      yua: "Jukatanas Maiju",
      yue: "Kantoniešu (Tradicionālā)",
      "zh-CN": "ķīniešu (vienkāršotā)",
      "zh-TW": "ķīniešu (tradicionālā)",
      zu: "zulu",
    },
    nl: {
      af: "Afrikaans",
      ak: "Twi",
      am: "Amharisch",
      ar: "Arabisch",
      as: "Assamees",
      ay: "Aymara",
      az: "Azerbeidzjaans",
      ba: "Basjkiers",
      be: "Belarussisch",
      bg: "Bulgaars",
      bho: "Bhojpuri",
      bm: "Bambara",
      bn: "Bengaals",
      bo: "Tibetaans",
      bs: "Bosnisch",
      ca: "Catalaans",
      ceb: "Cebuano",
      ckb: "Koerdisch (Sorani)",
      co: "Corsicaans",
      cs: "Tsjechisch",
      cv: "Chuvash",
      cy: "Wels",
      da: "Deens",
      de: "Duits",
      doi: "Dogri",
      dsb: "Lower Sorbian",
      dv: "Dhivehi",
      ee: "Ewe",
      el: "Grieks",
      emj: "Emoji",
      en: "Engels",
      eo: "Esperanto",
      es: "Spaans",
      et: "Ests",
      eu: "Baskisch",
      fa: "Perzisch",
      fi: "Fins",
      fj: "Fijisch",
      fo: "Faeröers",
      fr: "Frans",
      "fr-CA": "Frans (Canada)",
      fy: "Fries",
      ga: "Iers",
      gd: "Schots Keltisch",
      gl: "Galicisch",
      gn: "Guarani",
      gom: "Konkani",
      gu: "Gujarati",
      ha: "Hausa",
      haw: "Hawaïaans",
      he: "Hebreeuws",
      hi: "Hindi",
      hmn: "Hmong",
      hr: "Kroatisch",
      hsb: "Oppersorbisch",
      ht: "Haïtiaans Creools",
      hu: "Hongaars",
      hy: "Armeens",
      id: "Indonesisch",
      ig: "Igbo",
      ikt: "Inuinnaqtun",
      ilo: "Ilocano",
      is: "IJslands",
      it: "Italiaans",
      iu: "Inuktitut",
      "iu-Latn": "Inuktitut (Latin)",
      ja: "Japans",
      jv: "Javaans",
      ka: "Georgisch",
      kazlat: "Kazakh (Latin)",
      kk: "Kazachs",
      km: "Khmer",
      kn: "Kannada",
      ko: "Koreaans",
      kri: "Krio",
      ku: "Koerdisch (Kurmanji)",
      ky: "Kirgizisch",
      la: "Latijn",
      lb: "Luxemburgs",
      lg: "Luganda",
      ln: "Lingala",
      lo: "Lao",
      lt: "Litouws",
      lus: "Mizo",
      lv: "Lets",
      lzh: "Chinese (Literary)",
      mai: "Maithili",
      mg: "Malagasi",
      mhr: "Mari",
      mi: "Maori",
      mk: "Macedonisch",
      ml: "Malayalam",
      mn: "Mongools",
      "mn-Mong": "Mongolian (Traditional)",
      "mni-Mtei": "Meiteilon (Manipuri)",
      mr: "Marathi",
      mrj: "Hill Mari",
      ms: "Maleis",
      mt: "Maltees",
      my: "Birmaans",
      ne: "Nepalees",
      nl: "Nederlands",
      no: "Noors",
      nso: "Sepedi",
      ny: "Chichewa",
      nya: "Nyanja",
      om: "Oromo",
      or: "Odia (Oriya)",
      otq: "Querétaro Otomi",
      pa: "Punjabi",
      pap: "Papiamento",
      pl: "Pools",
      prs: "Dari",
      ps: "Pashto",
      pt: "Portugees (Brazilië)",
      "pt-PT": "Portugees (Portugal)",
      qu: "Quechua",
      ro: "Roemeens",
      ru: "Russisch",
      run: "Rundi",
      rw: "Kinyarwanda",
      sa: "Sanskriet",
      sah: "Yakut",
      sd: "Sindhi",
      si: "Sinhalees",
      sjn: "Elvish (Sindarin)",
      sk: "Slovaaks",
      sl: "Sloveens",
      sm: "Samoaans",
      sn: "Shona",
      so: "Somalisch",
      sq: "Albanees",
      sr: "Servisch",
      "sr-Latn": "Servisch (Latijns)",
      st: "Sesotho",
      su: "Soendanees",
      sv: "Zweeds",
      sw: "Swahili",
      ta: "Tamil",
      te: "Telugu",
      tg: "Tadzjieks",
      th: "Thai",
      ti: "Tigrinya",
      tk: "Turkmeens",
      tl: "Tagalog",
      "tlh-Latn": "Klingon (Latijns)",
      "tlh-Piqd": "Klingon (pIqaD)",
      tn: "Setswana",
      to: "Tongaans",
      tr: "Turks",
      ts: "Tsonga",
      tt: "Tataars",
      ty: "Tahitiaans",
      udm: "Udmurt",
      ug: "Oeigoers",
      uk: "Oekraïens",
      ur: "Urdu",
      uz: "Oezbeeks",
      uzbcyr: "Uzbek (Cyrillic)",
      vi: "Vietnamees",
      xh: "Xhosa",
      yi: "Jiddisch",
      yo: "Yoruba",
      yua: "Yucateeks Maya",
      yue: "Kantonees (Traditioneel)",
      "zh-CN": "Chinees (vereenvoudigd)",
      "zh-TW": "Chinees (traditioneel)",
      zu: "Zoeloe",
    },
    no: {
      af: "afrikaans",
      ak: "twi",
      am: "amharisk",
      ar: "arabisk",
      as: "assamesisk",
      ay: "aymara",
      az: "aserbajdsjansk",
      ba: "Bashkir",
      be: "hviterussisk",
      bg: "bulgarsk",
      bho: "bhojpuri",
      bm: "bambara",
      bn: "bengali",
      bo: "Tibetansk",
      bs: "bosnisk",
      ca: "katalansk",
      ceb: "cebuano",
      ckb: "kurdisk (sorani)",
      co: "korsikansk",
      cs: "tsjekkisk",
      cv: "Chuvash",
      cy: "walisisk",
      da: "dansk",
      de: "tysk",
      doi: "dogri",
      dsb: "Lower Sorbian",
      dv: "dhivehi",
      ee: "ewe",
      el: "gresk",
      emj: "Emoji",
      en: "engelsk",
      eo: "esperanto",
      es: "spansk",
      et: "estisk",
      eu: "baskisk",
      fa: "farsi",
      fi: "finsk",
      fj: "Fijiansk",
      fo: "Faroese",
      fr: "Fransk",
      "fr-CA": "Fransk (Canada)",
      fy: "frisisk",
      ga: "irsk",
      gd: "skotsk gælisk",
      gl: "galisisk",
      gn: "guaraní",
      gom: "konkani",
      gu: "gujarati",
      ha: "hausa",
      haw: "hawaiisk",
      he: "hebraisk",
      hi: "hindi",
      hmn: "hmong",
      hr: "kroatisk",
      hsb: "Upper Sorbian",
      ht: "kreol (Haiti)",
      hu: "ungarsk",
      hy: "armensk",
      id: "indonesisk",
      ig: "igbo",
      ikt: "Inuinnaqtun",
      ilo: "ilokano",
      is: "islandsk",
      it: "italiensk",
      iu: "Inuktitut",
      "iu-Latn": "Inuktitut (Latin)",
      ja: "japansk",
      jv: "javanesisk",
      ka: "georgisk",
      kazlat: "Kazakh (Latin)",
      kk: "kasakhisk",
      km: "khmer",
      kn: "kannada",
      ko: "koreansk",
      kri: "krio",
      ku: "kurdisk (kurmanji)",
      ky: "kirgisisk",
      la: "latin",
      lb: "luxembourgsk",
      lg: "luganda",
      ln: "lingala",
      lo: "laotisk",
      lt: "litauisk",
      lus: "mizo",
      lv: "latvisk",
      lzh: "Chinese (Literary)",
      mai: "maithili",
      mg: "madagassisk",
      mhr: "Mari",
      mi: "maori",
      mk: "makedonsk",
      ml: "malayalam",
      mn: "mongolsk",
      "mn-Mong": "Mongolian (Traditional)",
      "mni-Mtei": "meiteilon (manipuri)",
      mr: "marathi",
      mrj: "Hill Mari",
      ms: "malayisk",
      mt: "maltesisk",
      my: "burmesisk",
      ne: "nepalsk",
      nl: "nederlandsk",
      no: "norsk",
      nso: "sepedi",
      ny: "chichewa",
      nya: "Nyanja",
      om: "oromo",
      or: "oriya",
      otq: "Querétaro Otomi",
      pa: "punjabi",
      pap: "Papiamento",
      pl: "polsk",
      prs: "Dari",
      ps: "pashto",
      pt: "Portugisisk (Brasil)",
      "pt-PT": "Portugisisk (Portugal)",
      qu: "quechua",
      ro: "rumensk",
      ru: "russisk",
      run: "Rundi",
      rw: "kinyarwanda",
      sa: "sanskrit",
      sah: "Yakut",
      sd: "sindhi",
      si: "singalesisk",
      sjn: "Elvish (Sindarin)",
      sk: "slovakisk",
      sl: "slovensk",
      sm: "samoansk",
      sn: "shona",
      so: "somali",
      sq: "albansk",
      sr: "serbisk",
      "sr-Latn": "Serbisk (Latinsk)",
      st: "sotho",
      su: "sundanesisk",
      sv: "svensk",
      sw: "swahili",
      ta: "tamil",
      te: "telugu",
      tg: "tadsjikisk",
      th: "thai",
      ti: "tigrinja",
      tk: "turkmensk",
      tl: "tagalog",
      "tlh-Latn": "Klingon (Latinsk)",
      "tlh-Piqd": "Klingon (pIqaD)",
      tn: "Setswana",
      to: "Tongansk",
      tr: "tyrkisk",
      ts: "tsonga",
      tt: "tatarisk",
      ty: "Tahitisk",
      udm: "Udmurt",
      ug: "uigurisk",
      uk: "ukrainsk",
      ur: "urdu",
      uz: "usbekisk",
      uzbcyr: "Uzbek (Cyrillic)",
      vi: "vietnamesisk",
      xh: "xhosa",
      yi: "jiddisk",
      yo: "joruba",
      yua: "Yukatansk Maya",
      yue: "Kantonesisk (Tradisjonell)",
      "zh-CN": "kinesisk (forenklet)",
      "zh-TW": "kinesisk (tradisjonell)",
      zu: "zulu",
    },
    pl: {
      af: "afrikaans",
      ak: "twi",
      am: "amharski",
      ar: "arabski",
      as: "asamski",
      ay: "ajmara",
      az: "azerski",
      ba: "Baszkirski",
      be: "białoruski",
      bg: "bułgarski",
      bho: "bhodźpuri",
      bm: "bambara",
      bn: "bengalski",
      bo: "Tybetański",
      bs: "bośniacki",
      ca: "kataloński",
      ceb: "cebuański",
      ckb: "kurdyjski (sorani)",
      co: "korsykański",
      cs: "czeski",
      cv: "Chuvash",
      cy: "walijski",
      da: "duński",
      de: "niemiecki",
      doi: "dogri",
      dsb: "Lower Sorbian",
      dv: "dhivehi",
      ee: "ewe",
      el: "grecki",
      emj: "Emoji",
      en: "angielski",
      eo: "esperanto",
      es: "hiszpański",
      et: "estoński",
      eu: "baskijski",
      fa: "perski",
      fi: "fiński",
      fj: "Fidżijski",
      fo: "Farerski",
      fr: "Francuski",
      "fr-CA": "Francuski (Kanada)",
      fy: "fryzyjski",
      ga: "irlandzki",
      gd: "szkocki gaelicki",
      gl: "galicyjski",
      gn: "guarani",
      gom: "konkani",
      gu: "gudżarati",
      ha: "hausa",
      haw: "hawajski",
      he: "hebrajski",
      hi: "hindi",
      hmn: "hmong",
      hr: "chorwacki",
      hsb: "Górnołużycki",
      ht: "kreolski (Haiti)",
      hu: "węgierski",
      hy: "ormiański",
      id: "indonezyjski",
      ig: "igbo",
      ikt: "Inuinnaqtun",
      ilo: "ilokański",
      is: "islandzki",
      it: "włoski",
      iu: "Inuktitut",
      "iu-Latn": "Inuktitut (Latin)",
      ja: "japoński",
      jv: "jawajski",
      ka: "gruziński",
      kazlat: "Kazakh (Latin)",
      kk: "kazachski",
      km: "khmerski",
      kn: "kannada",
      ko: "koreański",
      kri: "krio",
      ku: "kurdyjski (kurmandżi)",
      ky: "kirgiski",
      la: "łaciński",
      lb: "luksemburski",
      lg: "luganda",
      ln: "lingala",
      lo: "laotański",
      lt: "litewski",
      lus: "mizo",
      lv: "łotewski",
      lzh: "Chinese (Literary)",
      mai: "maithili",
      mg: "malgaski",
      mhr: "Mari",
      mi: "maori",
      mk: "macedoński",
      ml: "malajalam",
      mn: "mongolski",
      "mn-Mong": "Mongolian (Traditional)",
      "mni-Mtei": "Meiteilon (manipuri)",
      mr: "marathi",
      mrj: "Hill Mari",
      ms: "malajski",
      mt: "maltański",
      my: "birmański",
      ne: "nepalski",
      nl: "niderlandzki",
      no: "norweski",
      nso: "sepedi",
      ny: "cziczewa",
      nya: "Nyanja",
      om: "oromo",
      or: "odia (orija)",
      otq: "Otomi Querétaro",
      pa: "pendżabski",
      pap: "Papiamento",
      pl: "polski",
      prs: "Dari",
      ps: "paszto",
      pt: "Portugalski (Brazylia)",
      "pt-PT": "Portugalski (Portugalia)",
      qu: "keczua",
      ro: "rumuński",
      ru: "rosyjski",
      run: "Rundi",
      rw: "ruanda-rundi",
      sa: "sanskryt",
      sah: "Yakut",
      sd: "sindhi",
      si: "syngaleski",
      sjn: "Elvish (Sindarin)",
      sk: "słowacki",
      sl: "słoweński",
      sm: "samoański",
      sn: "shona",
      so: "somalijski",
      sq: "albański",
      sr: "serbski",
      "sr-Latn": "Serbski (Łacińskie)",
      st: "sesotho",
      su: "sundajski",
      sv: "szwedzki",
      sw: "suahili",
      ta: "tamilski",
      te: "telugu",
      tg: "tadżycki",
      th: "tajski",
      ti: "tigrinia",
      tk: "turkmeński",
      tl: "filipiński",
      "tlh-Latn": "Klingoński (Łacińskie)",
      "tlh-Piqd": "Klingoński (pIqaD)",
      tn: "Setswana",
      to: "Tonga",
      tr: "turecki",
      ts: "tsonga",
      tt: "tatarski",
      ty: "Tahitański",
      udm: "Udmurt",
      ug: "ujgurski",
      uk: "ukraiński",
      ur: "urdu",
      uz: "uzbecki",
      uzbcyr: "Uzbek (Cyrillic)",
      vi: "wietnamski",
      xh: "xhosa",
      yi: "jidysz",
      yo: "joruba",
      yua: "Maya",
      yue: "Kantoński (Tradycyjne)",
      "zh-CN": "chiński (uproszczony)",
      "zh-TW": "chiński (tradycyjny)",
      zu: "zulu",
    },
    "pt-BR": {
      af: "Africâner",
      ak: "Twi",
      am: "Amárico",
      ar: "Árabe",
      as: "Assamês",
      ay: "Aimará",
      az: "Azerbaijano",
      ba: "Bashkir",
      be: "Bielorrusso",
      bg: "Búlgaro",
      bho: "Boiapuri",
      bm: "Bambara",
      bn: "Bengali",
      bo: "Tibetano",
      bs: "Bósnio",
      ca: "Catalão",
      ceb: "Cebuano",
      ckb: "Curdo (sorâni)",
      co: "Corso",
      cs: "Tcheco",
      cv: "Chuvache",
      cy: "Galês",
      da: "Dinamarquês",
      de: "Alemão",
      doi: "Dogri",
      dsb: "Lower Sorbian",
      dv: "Diveí",
      ee: "Jeje",
      el: "Grego",
      emj: "Emoji",
      en: "Inglês",
      eo: "Esperanto",
      es: "Espanhol",
      et: "Estoniano",
      eu: "Basco",
      fa: "Persa",
      fi: "Finlandês",
      fj: "Fijiano",
      fo: "Feroês",
      fr: "Francês",
      "fr-CA": "Francês (Canadá)",
      fy: "Frísio",
      ga: "Irlandês",
      gd: "Gaélico escocês",
      gl: "Galego",
      gn: "Guarani",
      gom: "Concani",
      gu: "Guzerate",
      ha: "Hauçá",
      haw: "Havaiano",
      he: "Hebraico",
      hi: "Hindi",
      hmn: "Hmong",
      hr: "Croata",
      hsb: "Alto Sorábio",
      ht: "Crioulo haitiano",
      hu: "Húngaro",
      hy: "Armênio",
      id: "Indonésio",
      ig: "Igbo",
      ikt: "Inuinnaqtun",
      ilo: "Ilocano",
      is: "Islandês",
      it: "Italiano",
      iu: "Inuktitut",
      "iu-Latn": "Inuktitut (Latin)",
      ja: "Japonês",
      jv: "Javanês",
      ka: "Georgiano",
      kazlat: "Cazaque (Latim)",
      kk: "Cazaque",
      km: "Khmer",
      kn: "Canarês",
      ko: "Coreano",
      kri: "Krio",
      ku: "Curdo (kurmanji)",
      ky: "Quirguiz",
      la: "Latim",
      lb: "Luxemburguês",
      lg: "Luganda",
      ln: "Lingala",
      lo: "Laosiano",
      lt: "Lituano",
      lus: "Mizo",
      lv: "Letão",
      lzh: "Chinese (Literary)",
      mai: "Maithili",
      mg: "Malgaxe",
      mhr: "Mari de prado",
      mi: "Maori",
      mk: "Macedônio",
      ml: "Malaiala",
      mn: "Mongol",
      "mn-Mong": "Mongolian (Traditional)",
      "mni-Mtei": "Meiteilon (manipuri)",
      mr: "Marata",
      mrj: "Mari de colino",
      ms: "Malaio",
      mt: "Maltês",
      my: "Birmanês",
      ne: "Nepalês",
      nl: "Holandês",
      no: "Norueguês",
      nso: "Sepedi",
      ny: "Chicheua",
      nya: "Nyanja",
      om: "Oromo",
      or: "Oriá",
      otq: "Otomí De Querétaro",
      pa: "Punjabi",
      pap: "Papiamento",
      pl: "Polonês",
      prs: "Dari",
      ps: "Pachto",
      pt: "Português (Brasil)",
      "pt-PT": "Português (Portugal)",
      qu: "Quíchua",
      ro: "Romeno",
      ru: "Russo",
      run: "Rundi",
      rw: "Quiniaruanda",
      sa: "Sânscrito",
      sah: "Iacuto",
      sd: "Sindi",
      si: "Cingalês",
      sjn: "Élfico (Sindarin)",
      sk: "Eslovaco",
      sl: "Esloveno",
      sm: "Samoano",
      sn: "Chona",
      so: "Somali",
      sq: "Albanês",
      sr: "Sérvio",
      "sr-Latn": "Sérvio (Latim)",
      st: "Sessoto",
      su: "Sundanês",
      sv: "Sueco",
      sw: "Suaíli",
      ta: "Tâmil",
      te: "Telugo",
      tg: "Tadjique",
      th: "Tailandês",
      ti: "Tigrínia",
      tk: "Turcomano",
      tl: "Filipino",
      "tlh-Latn": "Klingon (Latim)",
      "tlh-Piqd": "Klingon (pIqaD)",
      tn: "Setswana",
      to: "Tonganês",
      tr: "Turco",
      ts: "Tsonga",
      tt: "Tártaro",
      ty: "Taitiano",
      udm: "Udmurte",
      ug: "Uigur",
      uk: "Ucraniano",
      ur: "Urdu",
      uz: "Uzbeque",
      uzbcyr: "Uzbeque (Cirílico)",
      vi: "Vietnamita",
      xh: "Xhosa",
      yi: "Iídiche",
      yo: "Iorubá",
      yua: "Iucatego",
      yue: "Cantonês (Tradicional)",
      "zh-CN": "Chinês (simplificado)",
      "zh-TW": "Chinês (tradicional)",
      zu: "Zulu",
    },
    "pt-PT": {
      af: "Afrikaans",
      ak: "Twi",
      am: "Amárico",
      ar: "Árabe",
      as: "Assamês",
      ay: "Aimará",
      az: "Azerbaijano",
      ba: "Bashkir",
      be: "Bielorusso",
      bg: "Búlgaro",
      bho: "Bhojpuri",
      bm: "Bambara",
      bn: "Bengali",
      bo: "Tibetano",
      bs: "Bósnio",
      ca: "Catalão",
      ceb: "Cebuano",
      ckb: "Curdo (sorani)",
      co: "Corso",
      cs: "Checo",
      cv: "Chuvache",
      cy: "Galês",
      da: "Dinamarquês",
      de: "Alemão",
      doi: "Dogri",
      dsb: "Lower Sorbian",
      dv: "Divehi",
      ee: "Ewe",
      el: "Grego",
      emj: "Emoji",
      en: "Inglês",
      eo: "Esperanto",
      es: "Espanhol",
      et: "Estónio",
      eu: "Basco",
      fa: "Persa",
      fi: "Finlandês",
      fj: "Fijiano",
      fo: "Feroês",
      fr: "Francês",
      "fr-CA": "Francês (Canadá)",
      fy: "Frísio",
      ga: "Irlandês",
      gd: "Gaélico da Escócia",
      gl: "Galego",
      gn: "Guarani",
      gom: "Concani",
      gu: "Gujarati",
      ha: "Haúça",
      haw: "Havaiano",
      he: "Hebraico",
      hi: "Hindu",
      hmn: "Hmong",
      hr: "Croata",
      hsb: "Alto Sorábio",
      ht: "Crioulo Haitiano",
      hu: "Húngaro",
      hy: "Arménio",
      id: "Indonésio",
      ig: "Ibo",
      ikt: "Inuinnaqtun",
      ilo: "Ilocano",
      is: "Islandês",
      it: "Italiano",
      iu: "Inuktitut",
      "iu-Latn": "Inuktitut (Latin)",
      ja: "Japonês",
      jv: "Javanês",
      ka: "Georgiano",
      kazlat: "Cazaque (Latim)",
      kk: "Cazaque",
      km: "Khmer",
      kn: "Canarim",
      ko: "Coreano",
      kri: "Krio",
      ku: "Curdo (kurmanji)",
      ky: "Quirguistanês",
      la: "Latim",
      lb: "Luxemburguês",
      lg: "Luganda",
      ln: "Lingala",
      lo: "Laosiano",
      lt: "Lituano",
      lus: "Mizo",
      lv: "Letão",
      lzh: "Chinese (Literary)",
      mai: "Maithili",
      mg: "Malgaxe",
      mhr: "Mari de prado",
      mi: "Maori",
      mk: "Macedónio",
      ml: "Malaiala",
      mn: "Mongol",
      "mn-Mong": "Mongolian (Traditional)",
      "mni-Mtei": "Meiteilon (manipuri)",
      mr: "Marata",
      mrj: "Mari de colino",
      ms: "Malaio",
      mt: "Maltês",
      my: "Birmanês",
      ne: "Nepalês",
      nl: "Holandês",
      no: "Norueguês",
      nso: "Sepedi",
      ny: "Chichewa",
      nya: "Nyanja",
      om: "Oromo",
      or: "Oriá (oriya)",
      otq: "Otomí De Querétaro",
      pa: "Punjabi",
      pap: "Papiamento",
      pl: "Polaco",
      prs: "Dari",
      ps: "Pastó",
      pt: "Português (Brasil)",
      "pt-PT": "Português (Portugal)",
      qu: "Quíchua",
      ro: "Romeno",
      ru: "Russo",
      run: "Rundi",
      rw: "Kinyarwanda",
      sa: "Sânscrito",
      sah: "Iacuto",
      sd: "Sindi",
      si: "Cingalês",
      sjn: "Élfico (Sindarin)",
      sk: "Eslovaco",
      sl: "Esloveno",
      sm: "Samoano",
      sn: "Shona",
      so: "Somali",
      sq: "Albanês",
      sr: "Sérvio",
      "sr-Latn": "Sérvio (Latim)",
      st: "Sesotho",
      su: "Sudanês",
      sv: "Sueco",
      sw: "Suaíli",
      ta: "Tâmil",
      te: "Telugu",
      tg: "Tajique",
      th: "Tailandês",
      ti: "Tigrino",
      tk: "Turcomano",
      tl: "Filipino",
      "tlh-Latn": "Klingon (Latim)",
      "tlh-Piqd": "Klingon (pIqaD)",
      tn: "Setswana",
      to: "Tonganês",
      tr: "Turco",
      ts: "Tsonga",
      tt: "Tártaro",
      ty: "Taitiano",
      udm: "Udmurte",
      ug: "Uigur",
      uk: "Ucraniano",
      ur: "Urdu",
      uz: "Usbeque",
      uzbcyr: "Uzbeque (Cirílico)",
      vi: "Vietnamita",
      xh: "Xhosa",
      yi: "Iídiche",
      yo: "Ioruba",
      yua: "Iucatego",
      yue: "Cantonês (Tradicional)",
      "zh-CN": "Chinês (Simplificado)",
      "zh-TW": "Chinês (Tradicional)",
      zu: "Zulu",
    },
    ro: {
      af: "Afrikaans",
      ak: "Twi",
      am: "Amharică",
      ar: "Arabă",
      as: "Asameză",
      ay: "Aymara",
      az: "Azerbaidjană",
      ba: "Bașkiră",
      be: "Bielorusă",
      bg: "Bulgară",
      bho: "Bhojpuri",
      bm: "Bambara",
      bn: "Bengali",
      bo: "Tibetană",
      bs: "Bosniacă",
      ca: "Catalană",
      ceb: "Cebuană",
      ckb: "Kurdă (Sorani)",
      co: "Corsicană",
      cs: "Cehă",
      cv: "Chuvash",
      cy: "Galeză",
      da: "Daneză",
      de: "Germană",
      doi: "Dogri",
      dsb: "Lower Sorbian",
      dv: "Dhivehi",
      ee: "Ewe",
      el: "Greacă",
      emj: "Emoji",
      en: "Engleză",
      eo: "Esperanto",
      es: "Spaniolă",
      et: "Estonă",
      eu: "Bască",
      fa: "Persană",
      fi: "Finlandeză",
      fj: "Fijiană",
      fo: "Feroeză",
      fr: "Franceză",
      "fr-CA": "Franceză (Canada)",
      fy: "Frizonă",
      ga: "Irlandeză",
      gd: "Galica scoțiană",
      gl: "Galiciană",
      gn: "Guarani",
      gom: "Konkană",
      gu: "Gujarati",
      ha: "Hausa",
      haw: "Hawaiiană",
      he: "Ebraică",
      hi: "Hindi",
      hmn: "Hmong",
      hr: "Croată",
      hsb: "Sorabă De Sus",
      ht: "Creolă haitiană",
      hu: "Maghiară",
      hy: "Armeană",
      id: "Indoneziană",
      ig: "Igbo",
      ikt: "Inuinnaqtun",
      ilo: "Ilocano",
      is: "Islandeză",
      it: "Italiană",
      iu: "Inuktitut",
      "iu-Latn": "Inuktitut (Latin)",
      ja: "Japoneză",
      jv: "Javaneză",
      ka: "Gruzină",
      kazlat: "Kazakh (Latin)",
      kk: "Kazahă",
      km: "Khmeră",
      kn: "Kannada",
      ko: "Coreeană",
      kri: "Krio",
      ku: "Kurdă (Kurmanji)",
      ky: "Kârgâză",
      la: "Latină",
      lb: "Luxemburgheză",
      lg: "Luganda",
      ln: "Lingala",
      lo: "Laoțiană",
      lt: "Lituaniană",
      lus: "Mizo",
      lv: "Letonă",
      lzh: "Chinese (Literary)",
      mai: "Maithilă",
      mg: "Malgașă",
      mhr: "Mari",
      mi: "Maori",
      mk: "Macedoneană",
      ml: "Malayalam",
      mn: "Mongolă",
      "mn-Mong": "Mongolian (Traditional)",
      "mni-Mtei": "Meiteilon (Manipuri)",
      mr: "Marathi",
      mrj: "Hill Mari",
      ms: "Malaeză",
      mt: "Malteză",
      my: "Birmană",
      ne: "Nepaleză",
      nl: "Neerlandeză",
      no: "Norvegiană",
      nso: "Sepedi",
      ny: "Chichewa",
      nya: "Nyanja",
      om: "Oromo",
      or: "Odia (Oriya)",
      otq: "Otomi Din Querétaro",
      pa: "Punjabi",
      pap: "Papiamento",
      pl: "Poloneză",
      prs: "Dari",
      ps: "Pashto",
      pt: "Portugheză (Brazilia)",
      "pt-PT": "Portugheză (Portugalia)",
      qu: "Quechua",
      ro: "Română",
      ru: "Rusă",
      run: "Rundi",
      rw: "Kinyarwanda",
      sa: "Sanscrită",
      sah: "Yakut",
      sd: "Sindhi",
      si: "Singhaleză",
      sjn: "Elvish (Sindarin)",
      sk: "Slovacă",
      sl: "Slovenă",
      sm: "Samoană",
      sn: "Shonă",
      so: "Somali",
      sq: "Albaneză",
      sr: "Sârbă",
      "sr-Latn": "Sârbă (Latină)",
      st: "Sesotho",
      su: "Sundaneză",
      sv: "Suedeză",
      sw: "Swahili",
      ta: "Tamilă",
      te: "Telugu",
      tg: "Tadjică",
      th: "Thailandeză",
      ti: "Tigrină",
      tk: "Turkmenă",
      tl: "Filipineză",
      "tlh-Latn": "Klingoniană (Latină)",
      "tlh-Piqd": "Klingoniană (pIqaD)",
      tn: "Setswana",
      to: "Tongană",
      tr: "Turcă",
      ts: "Tsonga",
      tt: "Tătară",
      ty: "Tahitiană",
      udm: "Udmurt",
      ug: "Uigură",
      uk: "Ucraineană",
      ur: "Urdu",
      uz: "Uzbecă",
      uzbcyr: "Uzbek (Cyrillic)",
      vi: "Vietnameză",
      xh: "Xhosa",
      yi: "Idiș",
      yo: "Yoruba",
      yua: "Mayașă Yucatec",
      yue: "Cantoneză (Tradițională)",
      "zh-CN": "Chineză (Simplificată)",
      "zh-TW": "Chineză (Tradițională)",
      zu: "Zulu",
    },
    ru: {
      af: "африкаанс",
      ak: "чви",
      am: "амхарский",
      ar: "арабский",
      as: "ассамский",
      ay: "аймара",
      az: "азербайджанский",
      ba: "Башкирский",
      be: "белорусский",
      bg: "болгарский",
      bho: "бходжпури",
      bm: "бамбара",
      bn: "бенгальский",
      bo: "Тибетский",
      bs: "боснийский",
      ca: "каталанский",
      ceb: "себуанский",
      ckb: "курдский (сорани)",
      co: "корсиканский",
      cs: "чешский",
      cv: "Чувашский",
      cy: "валлийский",
      da: "датский",
      de: "немецкий",
      doi: "догри",
      dsb: "Lower Sorbian",
      dv: "мальдивский",
      ee: "эве",
      el: "греческий",
      emj: "Эмодзи",
      en: "английский",
      eo: "эсперанто",
      es: "испанский",
      et: "эстонский",
      eu: "баскский",
      fa: "персидский",
      fi: "финский",
      fj: "Фиджи",
      fo: "Фарерский",
      fr: "Французский",
      "fr-CA": "Французский (Канада)",
      fy: "фризский",
      ga: "ирландский",
      gd: "шотландский (гэльский)",
      gl: "галисийский",
      gn: "гуарани",
      gom: "конкани",
      gu: "гуджарати",
      ha: "хауса",
      haw: "гавайский",
      he: "иврит",
      hi: "хинди",
      hmn: "хмонг",
      hr: "хорватский",
      hsb: "Верхнелужицкий",
      ht: "креольский (гаити)",
      hu: "венгерский",
      hy: "армянский",
      id: "индонезийский",
      ig: "игбо",
      ikt: "Inuinnaqtun",
      ilo: "илоканский",
      is: "исландский",
      it: "итальянский",
      iu: "Инуктитут",
      "iu-Latn": "Inuktitut (Latin)",
      ja: "японский",
      jv: "яванский",
      ka: "грузинский",
      kazlat: "Казахский (латиница)",
      kk: "казахский",
      km: "кхмерский",
      kn: "каннада",
      ko: "корейский",
      kri: "крио",
      ku: "курдский (курманджи)",
      ky: "киргизский",
      la: "латинский",
      lb: "люксембургский",
      lg: "луганда",
      ln: "лингала",
      lo: "лаосский",
      lt: "литовский",
      lus: "мизо",
      lv: "латышский",
      lzh: "Chinese (Literary)",
      mai: "майтхили",
      mg: "малагасийский",
      mhr: "Марийский",
      mi: "маори",
      mk: "македонский",
      ml: "малаялам",
      mn: "монгольский",
      "mn-Mong": "Mongolian (Traditional)",
      "mni-Mtei": "мейтейлон (манипури)",
      mr: "маратхи",
      mrj: "Горномарийский",
      ms: "малайский",
      mt: "мальтийский",
      my: "бирманский",
      ne: "непальский",
      nl: "нидерландский",
      no: "норвежский",
      nso: "сепеди",
      ny: "чева",
      nya: "Nyanja",
      om: "оромо",
      or: "ория",
      otq: "Отоми (Керетаро)",
      pa: "панджаби",
      pap: "Папьяменто",
      pl: "польский",
      prs: "Дари",
      ps: "пушту",
      pt: "Португальский (Бразилия)",
      "pt-PT": "Португальский (Португалия)",
      qu: "кечуа",
      ro: "румынский",
      ru: "русский",
      run: "Rundi",
      rw: "руанда",
      sa: "санскрит",
      sah: "Якутский",
      sd: "синдхи",
      si: "сингальский",
      sjn: "Эльфийский (синдарин)",
      sk: "словацкий",
      sl: "словенский",
      sm: "самоанский",
      sn: "шона",
      so: "сомалийский",
      sq: "албанский",
      sr: "сербский",
      "sr-Latn": "Сербский (Латиница)",
      st: "сесото",
      su: "сунданский",
      sv: "шведский",
      sw: "суахили",
      ta: "тамильский",
      te: "телугу",
      tg: "таджикский",
      th: "тайский",
      ti: "тигринья",
      tk: "туркменский",
      tl: "филиппинский",
      "tlh-Latn": "Клингонский (Латиница)",
      "tlh-Piqd": "Клингонский (pIqaD)",
      tn: "Setswana",
      to: "Тонганский",
      tr: "турецкий",
      ts: "тсонга",
      tt: "татарский",
      ty: "Таитянский",
      udm: "Удмуртский",
      ug: "уйгурский",
      uk: "украинский",
      ur: "урду",
      uz: "узбекский",
      uzbcyr: "Узбекский (кириллица)",
      vi: "вьетнамский",
      xh: "коса",
      yi: "идиш",
      yo: "йоруба",
      yua: "Юкатекский Майя",
      yue: "Кантонский (Традиционная Китайская)",
      "zh-CN": "китайский (упрощенный)",
      "zh-TW": "китайский (традиционный)",
      zu: "зулу",
    },
    sat: {
      af: "Afrikaans",
      ak: "Twi",
      am: "Amharic",
      ar: "Arabic",
      as: "Assamese",
      ay: "Aymara",
      az: "Azerbaijani",
      ba: "Bashkir",
      be: "Belarusian",
      bg: "Bulgarian",
      bho: "Bhojpuri",
      bm: "Bambara",
      bn: "Bengali",
      bo: "Tibetan",
      bs: "Bosnian",
      ca: "Catalan",
      ceb: "Cebuano",
      ckb: "Kurdish (Sorani)",
      co: "Corsican",
      cs: "Czech",
      cv: "Chuvash",
      cy: "Welsh",
      da: "Danish",
      de: "German",
      doi: "Dogri",
      dsb: "Lower Sorbian",
      dv: "Dhivehi",
      ee: "Ewe",
      el: "Greek",
      emj: "Emoji",
      en: "English",
      eo: "Esperanto",
      es: "Spanish",
      et: "Estonian",
      eu: "Basque",
      fa: "Persian",
      fi: "Finnish",
      fj: "Fijian",
      fo: "Faroese",
      fr: "French",
      "fr-CA": "French (Canada)",
      fy: "Frisian",
      ga: "Irish",
      gd: "Scots Gaelic",
      gl: "Galician",
      gn: "Guarani",
      gom: "Konkani",
      gu: "Gujarati",
      ha: "Hausa",
      haw: "Hawaiian",
      he: "Hebrew",
      hi: "Hindi",
      hmn: "Hmong",
      hr: "Croatian",
      hsb: "Upper Sorbian",
      ht: "Haitian Creole",
      hu: "Hungarian",
      hy: "Armenian",
      id: "Indonesian",
      ig: "Igbo",
      ikt: "Inuinnaqtun",
      ilo: "Ilocano",
      is: "Icelandic",
      it: "Italian",
      iu: "Inuktitut",
      "iu-Latn": "Inuktitut (Latin)",
      ja: "Japanese",
      jv: "Javanese",
      ka: "Georgian",
      kazlat: "Kazakh (Latin)",
      kk: "Kazakh",
      km: "Khmer",
      kn: "Kannada",
      ko: "Korean",
      kri: "Krio",
      ku: "Kurdish (Kurmanji)",
      ky: "Kyrgyz",
      la: "Latin",
      lb: "Luxembourgish",
      lg: "Luganda",
      ln: "Lingala",
      lo: "Lao",
      lt: "Lithuanian",
      lus: "Mizo",
      lv: "Latvian",
      lzh: "Chinese (Literary)",
      mai: "Maithili",
      mg: "Malagasy",
      mhr: "Mari",
      mi: "Maori",
      mk: "Macedonian",
      ml: "Malayalam",
      mn: "Mongolian",
      "mn-Mong": "Mongolian (Traditional)",
      "mni-Mtei": "Meiteilon (Manipuri)",
      mr: "Marathi",
      mrj: "Hill Mari",
      ms: "Malay",
      mt: "Maltese",
      my: "Myanmar (Burmese)",
      ne: "Nepali",
      nl: "Dutch",
      no: "Norwegian",
      nso: "Sepedi",
      ny: "Chichewa",
      nya: "Nyanja",
      om: "Oromo",
      or: "Odia (Oriya)",
      otq: "Querétaro Otomi",
      pa: "Punjabi",
      pap: "Papiamento",
      pl: "Polish",
      prs: "Dari",
      ps: "Pashto",
      pt: "Portuguese (Brazil)",
      "pt-PT": "Portuguese (Portugal)",
      qu: "Quechua",
      ro: "Romanian",
      ru: "Russian",
      run: "Rundi",
      rw: "Kinyarwanda",
      sa: "Sanskrit",
      sah: "Yakut",
      sd: "Sindhi",
      si: "Sinhala",
      sjn: "Elvish (Sindarin)",
      sk: "Slovak",
      sl: "Slovenian",
      sm: "Samoan",
      sn: "Shona",
      so: "Somali",
      sq: "Albanian",
      sr: "Serbian",
      "sr-Latn": "Serbian (Latin)",
      st: "Sesotho",
      su: "Sundanese",
      sv: "Swedish",
      sw: "Swahili",
      ta: "Tamil",
      te: "Telugu",
      tg: "Tajik",
      th: "Thai",
      ti: "Tigrinya",
      tk: "Turkmen",
      tl: "Filipino",
      "tlh-Latn": "Klingon (Latin)",
      "tlh-Piqd": "Klingon (pIqaD)",
      tn: "Setswana",
      to: "Tongan",
      tr: "Turkish",
      ts: "Tsonga",
      tt: "Tatar",
      ty: "Tahitian",
      udm: "Udmurt",
      ug: "Uyghur",
      uk: "Ukrainian",
      ur: "Urdu",
      uz: "Uzbek",
      uzbcyr: "Uzbek (Cyrillic)",
      vi: "Vietnamese",
      xh: "Xhosa",
      yi: "Yiddish",
      yo: "Yoruba",
      yua: "Yucatec Maya",
      yue: "Cantonese (Traditional)",
      "zh-CN": "Chinese (Simplified)",
      "zh-TW": "Chinese (Traditional)",
      zu: "Zulu",
    },
    sl: {
      af: "afrikanščina",
      ak: "tviščina",
      am: "amharščina",
      ar: "arabščina",
      as: "asamščina",
      ay: "ajmarščina",
      az: "azerbajdžanščina",
      ba: "Baškirščina",
      be: "beloruščina",
      bg: "bolgarščina",
      bho: "bojpurščina",
      bm: "bambarščina",
      bn: "bengalščina",
      bo: "Tibetanščina",
      bs: "bosanščina",
      ca: "katalonščina",
      ceb: "sebuanščina",
      ckb: "kurdščina (soranščina)",
      co: "korziščina",
      cs: "češčina",
      cv: "Chuvash",
      cy: "valižanščina",
      da: "danščina",
      de: "nemščina",
      doi: "dogri",
      dsb: "Lower Sorbian",
      dv: "diveščina",
      ee: "evejščina",
      el: "grščina",
      emj: "Emoji",
      en: "angleščina",
      eo: "esperanto",
      es: "španščina",
      et: "estonščina",
      eu: "baskovščina",
      fa: "perzijščina",
      fi: "finščina",
      fj: "Fidžijščina",
      fo: "Ferščina",
      fr: "Francoščina",
      "fr-CA": "Francoščina (Kanada)",
      fy: "frizijščina",
      ga: "irščina",
      gd: "škotska gelščina",
      gl: "galicijščina",
      gn: "gvaranščina",
      gom: "konkanščina",
      gu: "gudžaratščina",
      ha: "havščina",
      haw: "havajščina",
      he: "hebrejščina",
      hi: "hindijščina",
      hmn: "hmonščina",
      hr: "hrvaščina",
      hsb: "Gornja Lužiška Srbščina",
      ht: "haitijska kreolščina",
      hu: "madžarščina",
      hy: "armenščina",
      id: "indonezijščina",
      ig: "igboščina",
      ikt: "Inuinnaqtun",
      ilo: "ilokanščina",
      is: "islandščina",
      it: "italijanščina",
      iu: "Inuktitutščina",
      "iu-Latn": "Inuktitut (Latin)",
      ja: "japonščina",
      jv: "javanščina",
      ka: "gruzinščina",
      kazlat: "Kazakh (Latin)",
      kk: "kazaščina",
      km: "kmerščina",
      kn: "kanareščina",
      ko: "korejščina",
      kri: "krijščina",
      ku: "kurdščina (kurmandži)",
      ky: "kirgiščina",
      la: "latinščina",
      lb: "luksemburščina",
      lg: "lugandščina",
      ln: "lingala",
      lo: "laoščina",
      lt: "litovščina",
      lus: "mizojščina",
      lv: "latvijščina",
      lzh: "Chinese (Literary)",
      mai: "maitilščina",
      mg: "malagaščina",
      mhr: "Mari",
      mi: "maorščina",
      mk: "makedonščina",
      ml: "malajalščina",
      mn: "mongolščina",
      "mn-Mong": "Mongolian (Traditional)",
      "mni-Mtei": "meiteilon (manipurščina)",
      mr: "maratščina",
      mrj: "Hill Mari",
      ms: "malajščina",
      mt: "malteščina",
      my: "burmanščina",
      ne: "nepalščina",
      nl: "nizozemščina",
      no: "norveščina",
      nso: "sepedščina",
      ny: "čevščina",
      nya: "Nyanja",
      om: "oromščina",
      or: "odijščina (orijščina)",
      otq: "Jezik Otomi",
      pa: "pandžabščina",
      pap: "Papiamento",
      pl: "poljščina",
      prs: "Darijščina",
      ps: "paštunščina",
      pt: "Portugalščina (Brazilija)",
      "pt-PT": "Portugalščina (Portugalska)",
      qu: "kečvanščina",
      ro: "romunščina",
      ru: "ruščina",
      run: "Rundi",
      rw: "kinjarvandščina",
      sa: "sanskrt",
      sah: "Yakut",
      sd: "sindščina",
      si: "singalščina",
      sjn: "Elvish (Sindarin)",
      sk: "slovaščina",
      sl: "slovenščina",
      sm: "samoanščina",
      sn: "šonščina",
      so: "somalščina",
      sq: "albanščina",
      sr: "srbščina",
      "sr-Latn": "Srbščina (Latinica)",
      st: "sesotščina",
      su: "sundanščina",
      sv: "švedščina",
      sw: "svahilščina",
      ta: "tamilščina",
      te: "teluščina",
      tg: "tadžiščina",
      th: "tajščina",
      ti: "tigrinjščina",
      tk: "turkmenščina",
      tl: "tagaloščina",
      "tlh-Latn": "Klingonščina (Latinica)",
      "tlh-Piqd": "Klingonščina (pIqaD)",
      tn: "Setswana",
      to: "Tongščina",
      tr: "turščina",
      ts: "tsongščina",
      tt: "tatarščina",
      ty: "Tahitščina",
      udm: "Udmurt",
      ug: "ujgurščina",
      uk: "ukrajinščina",
      ur: "urdujščina",
      uz: "uzbeščina",
      uzbcyr: "Uzbek (Cyrillic)",
      vi: "vietnamščina",
      xh: "koščina",
      yi: "jidiščina",
      yo: "jorubščina",
      yua: "Jukatanski Majevski Jezik",
      yue: "Kantonščina (Tradicionalna Pisava)",
      "zh-CN": "kitajščina (poenostavljena)",
      "zh-TW": "kitajščina (tradicionalna)",
      zu: "zulujščina",
    },
    sr: {
      af: "африкански",
      ak: "тви",
      am: "амхарски",
      ar: "арапски",
      as: "асамски",
      ay: "ајмара",
      az: "азербејџански",
      ba: "Baškirski",
      be: "белоруски",
      bg: "бугарски",
      bho: "бојпури",
      bm: "бамананкан",
      bn: "бенгалски",
      bo: "Tibetanski",
      bs: "босански",
      ca: "каталонски",
      ceb: "себуано",
      ckb: "курдски (сорани)",
      co: "корзикански",
      cs: "чешки",
      cv: "Chuvash",
      cy: "велшки",
      da: "дански",
      de: "немачки",
      doi: "догри",
      dsb: "Lower Sorbian",
      dv: "дивехи",
      ee: "еве",
      el: "грчки",
      emj: "Emoji",
      en: "енглески",
      eo: "есперанто",
      es: "шпански",
      et: "естонски",
      eu: "баскијски",
      fa: "персијски",
      fi: "фински",
      fj: "Fidžijski",
      fo: "Farski",
      fr: "Francuski",
      "fr-CA": "Francuski (Kanada)",
      fy: "фризијски",
      ga: "ирски",
      gd: "шкотски галски",
      gl: "галски",
      gn: "гварани",
      gom: "конкани",
      gu: "гуџарати",
      ha: "хауса",
      haw: "хавајски",
      he: "хебрејски",
      hi: "хинди",
      hmn: "хмонг",
      hr: "хрватски",
      hsb: "Gornjolužičkosrpski",
      ht: "хаићански креолски",
      hu: "мађарски",
      hy: "јерменски",
      id: "индонежански",
      ig: "игбо",
      ikt: "Inuinnaqtun",
      ilo: "илокано",
      is: "исландски",
      it: "италијански",
      iu: "Inuktitutski",
      "iu-Latn": "Inuktitut (Latin)",
      ja: "јапански",
      jv: "јавански",
      ka: "грузијски",
      kazlat: "Kazakh (Latin)",
      kk: "казахстански",
      km: "кмерски",
      kn: "канада",
      ko: "корејски",
      kri: "крио",
      ku: "курдски (курмањи)",
      ky: "киргиски",
      la: "латински",
      lb: "луксембуршки",
      lg: "луганда",
      ln: "лингала",
      lo: "лаоски",
      lt: "литвански",
      lus: "мизо",
      lv: "летонски",
      lzh: "Chinese (Literary)",
      mai: "маитхили",
      mg: "малгашки",
      mhr: "Mari",
      mi: "маорски",
      mk: "македонски",
      ml: "малајалам",
      mn: "монголски",
      "mn-Mong": "Mongolian (Traditional)",
      "mni-Mtei": "меитеи (манипури)",
      mr: "марати",
      mrj: "Hill Mari",
      ms: "малајски",
      mt: "малтешки",
      my: "бурмански",
      ne: "непалски",
      nl: "холандски",
      no: "норвешки",
      nso: "сепеди",
      ny: "чичева",
      nya: "Nyanja",
      om: "оромо",
      or: "одија (орија)",
      otq: "Keretaro Otomi",
      pa: "пунџаби",
      pap: "Papiamento",
      pl: "пољски",
      prs: "Dari",
      ps: "паштунски",
      pt: "Portugalski (Brazil)",
      "pt-PT": "Portugalski (Portugal)",
      qu: "кечуа",
      ro: "румунски",
      ru: "руски",
      run: "Rundi",
      rw: "кињаруанда",
      sa: "санскрит",
      sah: "Yakut",
      sd: "синди",
      si: "синхала",
      sjn: "Elvish (Sindarin)",
      sk: "словачки",
      sl: "словеначки",
      sm: "самоански",
      sn: "шона",
      so: "сомалски",
      sq: "албански",
      sr: "српски",
      "sr-Latn": "Srpski (latinica)",
      st: "сесото",
      su: "сундски",
      sv: "шведски",
      sw: "свахили",
      ta: "тамилски",
      te: "телугу",
      tg: "таџички",
      th: "тајски",
      ti: "тигриња",
      tk: "туркменски",
      tl: "тагалог",
      "tlh-Latn": "Klingonski (latinica)",
      "tlh-Piqd": "Klingonski (pIqaD)",
      tn: "cvana",
      to: "Tonganski",
      tr: "турски",
      ts: "цонга",
      tt: "татарски",
      ty: "Tahićanski",
      udm: "Udmurt",
      ug: "ујгурски",
      uk: "украјински",
      ur: "урду",
      uz: "узбечки",
      uzbcyr: "Uzbek (Cyrillic)",
      vi: "вијетнамски",
      xh: "хоса",
      yi: "јидиш",
      yo: "јоруба",
      yua: "Jukatek Majanski",
      yue: "Kantonski (Tradicionalni)",
      "zh-CN": "кинески (поједностављени)",
      "zh-TW": "кинески (традиционални)",
      zu: "зулу",
    },
    sv: {
      af: "afrikaans",
      ak: "twi",
      am: "amhariska",
      ar: "arabiska",
      as: "assamesiska",
      ay: "aymara",
      az: "azerbajdzjanska",
      ba: "Basjkiriska",
      be: "vitryska",
      bg: "bulgariska",
      bho: "bhojpuri",
      bm: "bambara",
      bn: "bengali",
      bo: "Tibetanska",
      bs: "bosniska",
      ca: "katalanska",
      ceb: "cebuano",
      ckb: "kurdiska (sorani)",
      co: "korsiska",
      cs: "tjeckiska",
      cv: "Chuvash",
      cy: "walesiska",
      da: "danska",
      de: "tyska",
      doi: "dogri",
      dsb: "Lower Sorbian",
      dv: "divehi",
      ee: "ewe",
      el: "grekiska",
      emj: "Emoji",
      en: "engelska",
      eo: "esperanto",
      es: "spanska",
      et: "estniska",
      eu: "baskiska",
      fa: "persiska",
      fi: "finska",
      fj: "Fijianska",
      fo: "Färöiska",
      fr: "Franska",
      "fr-CA": "Franska (Kanada)",
      fy: "frisiska",
      ga: "irländska",
      gd: "gaeliska",
      gl: "galiciska",
      gn: "guarani",
      gom: "konkani",
      gu: "gujarati",
      ha: "hausa",
      haw: "hawaiianska",
      he: "hebreiska",
      hi: "hindi",
      hmn: "hmong",
      hr: "kroatiska",
      hsb: "Högsorbiska",
      ht: "haitiska",
      hu: "ungerska",
      hy: "armeniska",
      id: "indonesiska",
      ig: "igbo",
      ikt: "Inuinnaqtun",
      ilo: "ilocano",
      is: "isländska",
      it: "italienska",
      iu: "Inuktitut",
      "iu-Latn": "Inuktitut (Latin)",
      ja: "japanska",
      jv: "javanesiska",
      ka: "georgiska",
      kazlat: "Kazakh (Latin)",
      kk: "kazakiska",
      km: "khmer",
      kn: "kanaresiska",
      ko: "koreanska",
      kri: "krio",
      ku: "kurdiska (kurmanji)",
      ky: "kirgiziska",
      la: "latin",
      lb: "luxemburgska",
      lg: "luganda",
      ln: "lingala",
      lo: "laotiska",
      lt: "litauiska",
      lus: "mizo",
      lv: "lettiska",
      lzh: "Chinese (Literary)",
      mai: "maithili",
      mg: "malagassiska",
      mhr: "Mari",
      mi: "maori",
      mk: "makedonska",
      ml: "malayalam",
      mn: "mongoliska",
      "mn-Mong": "Mongolian (Traditional)",
      "mni-Mtei": "meitei (manipuri)",
      mr: "marathi",
      mrj: "Hill Mari",
      ms: "malaysiska",
      mt: "maltesiska",
      my: "burmesiska",
      ne: "nepali",
      nl: "nederländska",
      no: "norska",
      nso: "sepedi",
      ny: "chichewa",
      nya: "Nyanja",
      om: "oromo",
      or: "odia (oriya)",
      otq: "Nordvästlig Otomí (Querétaro)",
      pa: "punjabi",
      pap: "Papiamento",
      pl: "polska",
      prs: "Dari",
      ps: "pashto",
      pt: "Portugisiska (Brasilien)",
      "pt-PT": "Portugisiska (Portugal)",
      qu: "quechua",
      ro: "rumänska",
      ru: "ryska",
      run: "Rundi",
      rw: "kinyarwanda",
      sa: "sanskrit",
      sah: "Yakut",
      sd: "sindhi",
      si: "singalesiska",
      sjn: "Elvish (Sindarin)",
      sk: "slovakiska",
      sl: "slovenska",
      sm: "samoanska",
      sn: "shona",
      so: "somaliska",
      sq: "albanska",
      sr: "serbiska",
      "sr-Latn": "Serbiska (Latinska)",
      st: "sesotho",
      su: "sundanesiska",
      sv: "svenska",
      sw: "swahili",
      ta: "tamil",
      te: "telugu",
      tg: "tadzjikiska",
      th: "thailändska",
      ti: "tigrinja",
      tk: "turkmeniska",
      tl: "filippinska",
      "tlh-Latn": "Klingonska (Latinska)",
      "tlh-Piqd": "Klingonska (pIqaD)",
      tn: "Setswana",
      to: "Tonganska",
      tr: "turkiska",
      ts: "tsonga",
      tt: "tatariska",
      ty: "Tahitiska",
      udm: "Udmurt",
      ug: "uiguriska",
      uk: "ukrainska",
      ur: "urdu",
      uz: "uzbekiska",
      uzbcyr: "Uzbek (Cyrillic)",
      vi: "vietnamesiska",
      xh: "xhosa",
      yi: "jiddisch",
      yo: "yoruba",
      yua: "Yukatekisk Maya",
      yue: "Kantonesiska (Traditionell)",
      "zh-CN": "kinesiska (förenklad)",
      "zh-TW": "kinesiska (traditionell)",
      zu: "zulu",
    },
    th: {
      af: "แอฟริกา",
      ak: "ทวิ",
      am: "อัมฮาริก",
      ar: "อาหรับ",
      as: "อัสสัม",
      ay: "ไอมารา",
      az: "อาร์เซอร์ไบจัน",
      ba: "บัชคีร์",
      be: "เบลารุส",
      bg: "บัลแกเรีย",
      bho: "โภชปุรี",
      bm: "บัมบารา",
      bn: "เบงกอล",
      bo: "ทิเบต",
      bs: "บอสเนีย",
      ca: "คาตาลัน",
      ceb: "ซีบัวโน",
      ckb: "เคิร์ด (โซรานี)",
      co: "คอร์สิกา",
      cs: "เช็ก",
      cv: "Chuvash",
      cy: "เวลส์",
      da: "เดนมาร์ก",
      de: "เยอรมัน",
      doi: "โดกรี",
      dsb: "Lower Sorbian",
      dv: "ดิเวฮิ",
      ee: "อีเว",
      el: "กรีก",
      emj: "Emoji",
      en: "อังกฤษ",
      eo: "เอสเปอแรนโต",
      es: "สเปน",
      et: "เอสโทเนีย",
      eu: "บาสก์",
      fa: "เปอร์เซีย",
      fi: "ฟินแลนด์",
      fj: "ฟิจิ",
      fo: "แฟโร",
      fr: "ฝรั่งเศส",
      "fr-CA": "ฝรั่งเศส  (แคนาดา)",
      fy: "ฟริเชียน",
      ga: "ไอร์แลนด์",
      gd: "เกลิกสกอต",
      gl: "กาลิเชียน",
      gn: "กวารานี",
      gom: "กงกณี",
      gu: "คุชราต",
      ha: "ฮัวซา",
      haw: "ฮาวาย",
      he: "ฮีบรู",
      hi: "ฮินดี",
      hmn: "ม้ง",
      hr: "โครเอเชีย",
      hsb: "ซอร์เบียตอนบน",
      ht: "เฮติครีโอล",
      hu: "ฮังการี",
      hy: "อาร์เมเนีย",
      id: "อินโดนีเซีย",
      ig: "อิกโบ",
      ikt: "Inuinnaqtun",
      ilo: "อีโลกาโน",
      is: "ไอซ์แลนด์",
      it: "อิตาลี",
      iu: "อินุกติตุต",
      "iu-Latn": "Inuktitut (Latin)",
      ja: "ญี่ปุ่น",
      jv: "ชวา",
      ka: "จอร์เจีย",
      kazlat: "Kazakh (Latin)",
      kk: "คาซัค",
      km: "เขมร",
      kn: "กันนาดา",
      ko: "เกาหลี",
      kri: "คริโอ",
      ku: "เคิร์ด (กุรมันชี)",
      ky: "คีร์กิซ",
      la: "ละติน",
      lb: "ลักเซมเบิร์ก",
      lg: "ลูกันดา",
      ln: "ลิงกาลา",
      lo: "ลาว",
      lt: "ลิทัวเนีย",
      lus: "มิโซ",
      lv: "ลัตเวีย",
      lzh: "Chinese (Literary)",
      mai: "ไมถิลี",
      mg: "มาลากาซี",
      mhr: "Mari",
      mi: "เมารี",
      mk: "มาซีโดเนีย",
      ml: "มาลายาลัม",
      mn: "มองโกเลีย",
      "mn-Mong": "Mongolian (Traditional)",
      "mni-Mtei": "มณีปุระ (มานิพูรี)",
      mr: "มาราฐี",
      mrj: "Hill Mari",
      ms: "มาเลย์",
      mt: "มัลทีส",
      my: "เมียนมา (พม่า)",
      ne: "เนปาล",
      nl: "ดัตช์",
      no: "นอร์เวย์",
      nso: "โซโทเหนือ",
      ny: "ชิเชวา",
      nya: "Nyanja",
      om: "โอโรโม",
      or: "โอเดีย (โอริยา)",
      otq: "เกเรตาโร โอโตมี",
      pa: "ปัญจาป",
      pap: "Papiamento",
      pl: "โปแลนด์",
      prs: "ดารี",
      ps: "พาชตู",
      pt: "โปรตุเกส (บราซิล)",
      "pt-PT": "โปรตุเกส  (โปรตุเกส)",
      qu: "เคชัว",
      ro: "โรมาเนีย",
      ru: "รัสเซีย",
      run: "Rundi",
      rw: "คินยารวันดา",
      sa: "สันสกฤต",
      sah: "Yakut",
      sd: "สินธี",
      si: "สิงหล",
      sjn: "Elvish (Sindarin)",
      sk: "สโลวัก",
      sl: "สโลวีเนีย",
      sm: "ซามัว",
      sn: "โชนา",
      so: "โซมาลี",
      sq: "แอลเบเนีย",
      sr: "เซอร์เบียน",
      "sr-Latn": "เซอร์เบีย (ละติน)",
      st: "เซโซโท",
      su: "ซุนดา",
      sv: "สวีเดน",
      sw: "สวาฮิลี",
      ta: "ทมิฬ",
      te: "เตลูกู",
      tg: "ทาจิก",
      th: "ไทย",
      ti: "ทีกรินยา",
      tk: "เติร์กเมน",
      tl: "ฟิลิปปินส์",
      "tlh-Latn": "คลิงงอน (ละติน)",
      "tlh-Piqd": "คลิงงอน (pIqaD)",
      tn: "Setswana",
      to: "ตองกา",
      tr: "ตุรกี",
      ts: "ซองกา",
      tt: "ทาทาร์",
      ty: "ตาฮิตี",
      udm: "Udmurt",
      ug: "อุยกูร์",
      uk: "ยูเครน",
      ur: "อูรดู",
      uz: "อุสเบกิสถาน",
      uzbcyr: "Uzbek (Cyrillic)",
      vi: "เวียดนาม",
      xh: "โคซา",
      yi: "ยิดดิช",
      yo: "โยรูบา",
      yua: "ยูคาเทค มายา",
      yue: "กวางตุ้ง (ตัวเต็ม)",
      "zh-CN": "จีน (ตัวย่อ)",
      "zh-TW": "จีน (ตัวเต็ม)",
      zu: "ซูลู",
    },
    tr: {
      af: "Afrikaanca",
      ak: "Twi dili",
      am: "Habeşçe",
      ar: "Arapça",
      as: "Assamca",
      ay: "Aymaraca",
      az: "Azerbaycan dili",
      ba: "Başkırtça",
      be: "Belarusça",
      bg: "Bulgarca",
      bho: "Bhojpuri",
      bm: "Bambara",
      bn: "Bengalce",
      bo: "Tibetçe",
      bs: "Boşnakça",
      ca: "Katalanca",
      ceb: "Cebuano",
      ckb: "Kürtçe (Sorani)",
      co: "Korsikaca",
      cs: "Çekçe",
      cv: "Çuvaşça",
      cy: "Galce",
      da: "Danca",
      de: "Almanca",
      doi: "Dogri",
      dsb: "Lower Sorbian",
      dv: "Dhivehi",
      ee: "Ewe",
      el: "Yunanca",
      emj: "Emoji",
      en: "İngilizce",
      eo: "Esperanto",
      es: "İspanyolca",
      et: "Estonyaca",
      eu: "Baskça",
      fa: "Farsça",
      fi: "Fince",
      fj: "Fiji Dili",
      fo: "Faroe Dili",
      fr: "Fransızca",
      "fr-CA": "Fransızcası (Kanada)",
      fy: "Frizce",
      ga: "İrlandaca",
      gd: "İskoç Gaelcesi",
      gl: "Galiçyaca",
      gn: "Guarani",
      gom: "Konkani",
      gu: "Güceratça",
      ha: "Hausa dili",
      haw: "Hawai dili",
      he: "İbranice",
      hi: "Hintçe",
      hmn: "Hmong",
      hr: "Hırvatça",
      hsb: "Yukarı Sorbça",
      ht: "Haiti Kreyolu",
      hu: "Macarca",
      hy: "Ermenice",
      id: "Endonezce",
      ig: "İbo dili",
      ikt: "Inuinnaqtun",
      ilo: "İlokano",
      is: "İzlandaca",
      it: "İtalyanca",
      iu: "Inuktitut Dili",
      "iu-Latn": "Inuktitut (Latin)",
      ja: "Japonca",
      jv: "Cava dili",
      ka: "Gürcüce",
      kazlat: "Kazakça (Latin)",
      kk: "Kazakça",
      km: "Kamboçyaca",
      kn: "Kannada",
      ko: "Korece",
      kri: "Krio",
      ku: "Kürtçe (Kurmançça)",
      ky: "Kırgızca",
      la: "Latince",
      lb: "Lüksemburgca",
      lg: "Luganda",
      ln: "Lingala",
      lo: "Laoca",
      lt: "Litvanca",
      lus: "Mizo",
      lv: "Letonca",
      lzh: "Chinese (Literary)",
      mai: "Maithili",
      mg: "Malgaşça",
      mhr: "Mari dili",
      mi: "Maori dili",
      mk: "Makedonca",
      ml: "Malayalam",
      mn: "Moğolca",
      "mn-Mong": "Mongolian (Traditional)",
      "mni-Mtei": "Meiteilon (Manipuri)",
      mr: "Marathi",
      mrj: "Batı Mari dili",
      ms: "Malayca",
      mt: "Maltaca",
      my: "Burmaca",
      ne: "Nepalce",
      nl: "Felemenkçe",
      no: "Norveççe",
      nso: "Sepedi",
      ny: "Chicheva",
      nya: "Nyanja",
      om: "Oromo",
      or: "Odiya (Oriya)",
      otq: "Querétaro Otomi",
      pa: "Pencapça",
      pap: "Papiamento",
      pl: "Lehçe",
      prs: "Darice",
      ps: "Peştuca",
      pt: "Portekizce (Brezilya)",
      "pt-PT": "Portekizce (Portekiz)",
      qu: "Keçuva",
      ro: "Romence",
      ru: "Rusça",
      run: "Rundi",
      rw: "Ruandaca",
      sa: "Sanskritçe",
      sah: "Yakutça",
      sd: "Sint",
      si: "Seylanca",
      sjn: "Elfçe (Sindarin dili)",
      sk: "Slovakça",
      sl: "Slovence",
      sm: "Samoaca",
      sn: "Shona",
      so: "Somalice",
      sq: "Arnavutça",
      sr: "Sırpça",
      "sr-Latn": "Sırpça (Latin)",
      st: "Sesotho dili",
      su: "Sundanizce",
      sv: "İsveççe",
      sw: "Svahili dili",
      ta: "Tamil",
      te: "Telugu dili",
      tg: "Tacikce",
      th: "Tayca",
      ti: "Tigrinya dili",
      tk: "Türkmence",
      tl: "Filipince",
      "tlh-Latn": "Klingonca (Latin)",
      "tlh-Piqd": "Klingonca (pIqaD)",
      tn: "Setswana",
      to: "Tonga Dili",
      tr: "Türkçe",
      ts: "Tsongaca",
      tt: "Tatarca",
      ty: "Tahiti Dili",
      udm: "Udmurtça",
      ug: "Uygurca",
      uk: "Ukraynaca",
      ur: "Urduca",
      uz: "Özbekçe",
      uzbcyr: "Özbekçe (Kiril)",
      vi: "Vietnamca",
      xh: "Hosa",
      yi: "Yidce",
      yo: "Yoruba",
      yua: "Yukatek Mayacası",
      yue: "Kantonca (Geleneksel)",
      "zh-CN": "Çince (Basitleştirilmiş)",
      "zh-TW": "Çince (Geleneksel)",
      zu: "Zulu",
    },
    ug: {
      af: "Afrikaans",
      ak: "Twi",
      am: "Amharic",
      ar: "Arabic",
      as: "Assamese",
      ay: "Aymara",
      az: "Azerbaijani",
      ba: "باشقىرتچە",
      be: "Belarusian",
      bg: "Bulgarian",
      bho: "Bhojpuri",
      bm: "Bambara",
      bn: "Bengali",
      bo: "تىبەتچە",
      bs: "Bosnian",
      ca: "Catalan",
      ceb: "Cebuano",
      ckb: "Kurdish (Sorani)",
      co: "Corsican",
      cs: "Czech",
      cv: "Chuvash",
      cy: "Welsh",
      da: "Danish",
      de: "German",
      doi: "Dogri",
      dsb: "Lower Sorbian",
      dv: "Dhivehi",
      ee: "Ewe",
      el: "Greek",
      emj: "Emoji",
      en: "English",
      eo: "Esperanto",
      es: "Spanish",
      et: "Estonian",
      eu: "Basque",
      fa: "Persian",
      fi: "Finnish",
      fj: "فىجىچە",
      fo: "فائېروچە",
      fr: "فىرانسۇزچە",
      "fr-CA": "فىرانسۇزچە (كانادا)",
      fy: "Frisian",
      ga: "Irish",
      gd: "Scots Gaelic",
      gl: "Galician",
      gn: "Guarani",
      gom: "Konkani",
      gu: "Gujarati",
      ha: "Hausa",
      haw: "Hawaiian",
      he: "Hebrew",
      hi: "Hindi",
      hmn: "Hmong",
      hr: "Croatian",
      hsb: "ئۈستۈن سوربچە",
      ht: "Haitian Creole",
      hu: "Hungarian",
      hy: "Armenian",
      id: "Indonesian",
      ig: "Igbo",
      ikt: "Inuinnaqtun",
      ilo: "Ilocano",
      is: "Icelandic",
      it: "Italian",
      iu: "ئىنۇكتىتۇتچە",
      "iu-Latn": "Inuktitut (Latin)",
      ja: "Japanese",
      jv: "Javanese",
      ka: "Georgian",
      kazlat: "Kazakh (Latin)",
      kk: "Kazakh",
      km: "Khmer",
      kn: "Kannada",
      ko: "Korean",
      kri: "Krio",
      ku: "Kurdish (Kurmanji)",
      ky: "Kyrgyz",
      la: "Latin",
      lb: "Luxembourgish",
      lg: "Luganda",
      ln: "Lingala",
      lo: "Lao",
      lt: "Lithuanian",
      lus: "Mizo",
      lv: "Latvian",
      lzh: "Chinese (Literary)",
      mai: "Maithili",
      mg: "Malagasy",
      mhr: "Mari",
      mi: "Maori",
      mk: "Macedonian",
      ml: "Malayalam",
      mn: "Mongolian",
      "mn-Mong": "Mongolian (Traditional)",
      "mni-Mtei": "Meiteilon (Manipuri)",
      mr: "Marathi",
      mrj: "Hill Mari",
      ms: "Malay",
      mt: "Maltese",
      my: "Myanmar (Burmese)",
      ne: "Nepali",
      nl: "Dutch",
      no: "Norwegian",
      nso: "Sepedi",
      ny: "Chichewa",
      nya: "Nyanja",
      om: "Oromo",
      or: "Odia (Oriya)",
      otq: "ئوتومىچە",
      pa: "Punjabi",
      pap: "Papiamento",
      pl: "Polish",
      prs: "دارىچە",
      ps: "Pashto",
      pt: "پورتۇگالچە (بىرازىلىيە)",
      "pt-PT": "پورتۇگالچە (پورتۇگالىيە)",
      qu: "Quechua",
      ro: "Romanian",
      ru: "Russian",
      run: "Rundi",
      rw: "Kinyarwanda",
      sa: "Sanskrit",
      sah: "Yakut",
      sd: "Sindhi",
      si: "Sinhala",
      sjn: "Elvish (Sindarin)",
      sk: "Slovak",
      sl: "Slovenian",
      sm: "Samoan",
      sn: "Shona",
      so: "Somali",
      sq: "Albanian",
      sr: "Serbian",
      "sr-Latn": "سېربچە (لاتىنچە)",
      st: "Sesotho",
      su: "Sundanese",
      sv: "Swedish",
      sw: "Swahili",
      ta: "Tamil",
      te: "Telugu",
      tg: "Tajik",
      th: "Thai",
      ti: "Tigrinya",
      tk: "Turkmen",
      tl: "Filipino",
      "tlh-Latn": "كىلىنگونچە (لاتىنچە)",
      "tlh-Piqd": "كىلىنگونچە (pIqaD)",
      tn: "Setswana",
      to: "تونگانچە",
      tr: "Turkish",
      ts: "Tsonga",
      tt: "Tatar",
      ty: "تاختىچە",
      udm: "Udmurt",
      ug: "Uyghur",
      uk: "Ukrainian",
      ur: "Urdu",
      uz: "Uzbek",
      uzbcyr: "Uzbek (Cyrillic)",
      vi: "Vietnamese",
      xh: "Xhosa",
      yi: "Yiddish",
      yo: "Yoruba",
      yua: "يۇكاتان ماياچە",
      yue: "گۇاڭدوڭچە (مۇرەككەپ خەنچە)",
      "zh-CN": "Chinese (Simplified)",
      "zh-TW": "Chinese (Traditional)",
      zu: "Zulu",
    },
    uk: {
      af: "африкаанс",
      ak: "чві",
      am: "амхарська",
      ar: "арабська",
      as: "ассамська",
      ay: "аймарська",
      az: "азербайджанська",
      ba: "Башкирська",
      be: "білоруська",
      bg: "болгарська",
      bho: "бходжпурі",
      bm: "бамбара",
      bn: "бенгальська",
      bo: "Тибетська",
      bs: "боснійська",
      ca: "каталанська",
      ceb: "себуано",
      ckb: "курдська (сорані)",
      co: "корсиканська",
      cs: "чеська",
      cv: "Чуваська",
      cy: "валлійська",
      da: "данська",
      de: "німецька",
      doi: "догрі",
      dsb: "Lower Sorbian",
      dv: "дівехі",
      ee: "еве",
      el: "грецька",
      emj: "Емодзі",
      en: "англійська",
      eo: "есперанто",
      es: "іспанська",
      et: "естонська",
      eu: "баскська",
      fa: "перська",
      fi: "фінська",
      fj: "Фіджі",
      fo: "Фарерська",
      fr: "Французька",
      "fr-CA": "Французька (Канада)",
      fy: "фризька",
      ga: "ірландська",
      gd: "шотландська (ґельська)",
      gl: "ґалісійська",
      gn: "гуарані",
      gom: "конкані",
      gu: "ґуджаратська",
      ha: "хауса",
      haw: "гавайська",
      he: "іврит",
      hi: "гінді",
      hmn: "хмонг",
      hr: "хорватська",
      hsb: "Верхньолужицька",
      ht: "гаїтянська креольська",
      hu: "угорська",
      hy: "вірменська",
      id: "індонезійська",
      ig: "ігбо (ібо)",
      ikt: "Inuinnaqtun",
      ilo: "ілоканська",
      is: "ісландська",
      it: "італійська",
      iu: "Інуктітут",
      "iu-Latn": "Inuktitut (Latin)",
      ja: "японська",
      jv: "яванська",
      ka: "грузинська",
      kazlat: "Казахська (латиниця)",
      kk: "казахська",
      km: "камбоджійська",
      kn: "каннада",
      ko: "корейська",
      kri: "кріо",
      ku: "курдська (курманджі)",
      ky: "киргизька",
      la: "латинська",
      lb: "люксембурзька",
      lg: "луганда",
      ln: "лінгала",
      lo: "лаоська",
      lt: "литовська",
      lus: "мізо",
      lv: "латиська",
      lzh: "Chinese (Literary)",
      mai: "майтхілі",
      mg: "малагасійська",
      mhr: "Марійська",
      mi: "маорі",
      mk: "македонська",
      ml: "малаялам",
      mn: "монгольська",
      "mn-Mong": "Mongolian (Traditional)",
      "mni-Mtei": "мейтейлон (маніпурі)",
      mr: "маратхі",
      mrj: "Гірськомарійська",
      ms: "малайська",
      mt: "мальтійська",
      my: "бірманська",
      ne: "непальська",
      nl: "нідерландська",
      no: "норвезька",
      nso: "сепеді",
      ny: "чичева",
      nya: "Nyanja",
      om: "оромо",
      or: "одія (орія)",
      otq: "Отомі (Керетаро)",
      pa: "панджабська",
      pap: "Пап'яменто",
      pl: "польська",
      prs: "Дарі",
      ps: "пушту",
      pt: "Португальська (Бразилія)",
      "pt-PT": "Португальська (Португалія)",
      qu: "кечуа",
      ro: "румунська",
      ru: "російська",
      run: "Rundi",
      rw: "руандійська",
      sa: "санскрит",
      sah: "Якутська",
      sd: "сіндхі",
      si: "сингальська",
      sjn: "Ельфійська (синдарин)",
      sk: "словацька",
      sl: "словенська",
      sm: "самоанська",
      sn: "шона",
      so: "сомалі",
      sq: "албанська",
      sr: "сербська",
      "sr-Latn": "Сербська (Латиниця)",
      st: "сесото",
      su: "сунданська",
      sv: "шведська",
      sw: "суахілі",
      ta: "тамільська",
      te: "телуґу",
      tg: "таджицька",
      th: "тайська",
      ti: "тигринcька",
      tk: "туркменська",
      tl: "філіппінська",
      "tlh-Latn": "Клінгонська (Латиниця)",
      "tlh-Piqd": "Клінгонська (pIqaD)",
      tn: "Setswana",
      to: "Тонганська",
      tr: "турецька",
      ts: "тсонга",
      tt: "татарська",
      ty: "Таїтянська",
      udm: "Удмуртська",
      ug: "уйгурська",
      uk: "українська",
      ur: "урду",
      uz: "узбецька",
      uzbcyr: "Узбецька (кирилиця)",
      vi: "в’єтнамська",
      xh: "кхоса",
      yi: "ідиш",
      yo: "йоруба",
      yua: "Юкатекська Майя",
      yue: "Кантонська (Традиційна)",
      "zh-CN": "китайська (спрощена)",
      "zh-TW": "китайська (традиційна)",
      zu: "зулу",
    },
    vi: {
      af: "Hà Lan (Nam Phi)",
      ak: "Twi",
      am: "Amharic",
      ar: "Ả Rập",
      as: "Assam",
      ay: "Aymara",
      az: "Azerbaijan",
      ba: "Tiếng Bashkir",
      be: "Belarus",
      bg: "Bulgaria",
      bho: "Bhojpuri",
      bm: "Bambara",
      bn: "Bengal",
      bo: "Tiếng Tây Tạng",
      bs: "Bosnia",
      ca: "Catalan",
      ceb: "Cebuano",
      ckb: "Kurd (Sorani)",
      co: "Corsi",
      cs: "Séc",
      cv: "Chuvash",
      cy: "Xứ Wales",
      da: "Đan Mạch",
      de: "Đức",
      doi: "Dogri",
      dsb: "Lower Sorbian",
      dv: "Dhivehi",
      ee: "Ewe",
      el: "Hy Lạp",
      emj: "Emoji",
      en: "Anh",
      eo: "Quốc tế ngữ",
      es: "Tây Ban Nha",
      et: "Estonia",
      eu: "Basque",
      fa: "Ba Tư",
      fi: "Phần Lan",
      fj: "Tiếng Fiji",
      fo: "Tiếng Faroe",
      fr: "Tiếng Pháp",
      "fr-CA": "Tiếng Pháp (Canada)",
      fy: "Frisia",
      ga: "Ireland",
      gd: "Gael Scotland",
      gl: "Galicia",
      gn: "Guarani",
      gom: "Konkani",
      gu: "Gujarat",
      ha: "Hausa",
      haw: "Hawaii",
      he: "Do Thái",
      hi: "Hindi",
      hmn: "Hmong",
      hr: "Croatia",
      hsb: "Tiếng Thượng Sorbia",
      ht: "Creole (Haiti)",
      hu: "Hungary",
      hy: "Armenia",
      id: "Indonesia",
      ig: "Igbo",
      ikt: "Inuinnaqtun",
      ilo: "Ilocano",
      is: "Iceland",
      it: "Ý",
      iu: "Tiếng Inuktitut",
      "iu-Latn": "Inuktitut (Latin)",
      ja: "Nhật",
      jv: "Java",
      ka: "George",
      kazlat: "Kazakh (Latin)",
      kk: "Kazakh",
      km: "Khmer",
      kn: "Kannada",
      ko: "Hàn",
      kri: "Krio",
      ku: "Kurd (Kurmanji)",
      ky: "Kyrgyz",
      la: "Latinh",
      lb: "Luxembourg",
      lg: "Luganda",
      ln: "Lingala",
      lo: "Lào",
      lt: "Litva",
      lus: "Mizo",
      lv: "Latvia",
      lzh: "Chinese (Literary)",
      mai: "Maithili",
      mg: "Malagasy",
      mhr: "Mari",
      mi: "Maori",
      mk: "Macedonia",
      ml: "Malayalam",
      mn: "Mông Cổ",
      "mn-Mong": "Mongolian (Traditional)",
      "mni-Mtei": "Meiteilon (Manipuri)",
      mr: "Marathi",
      mrj: "Hill Mari",
      ms: "Mã Lai",
      mt: "Malta",
      my: "Myanmar",
      ne: "Nepal",
      nl: "Hà Lan",
      no: "Na Uy",
      nso: "Sepedi",
      ny: "Chichewa",
      nya: "Nyanja",
      om: "Oromo",
      or: "Odia (Oriya)",
      otq: "Tiếng Querétaro Otomi",
      pa: "Punjab",
      pap: "Papiamento",
      pl: "Ba Lan",
      prs: "Tiếng Dari",
      ps: "Pashto",
      pt: "Tiếng Bồ Đào Nha (Brazil)",
      "pt-PT": "Tiếng Bồ Đào Nha (Bồ Đào Nha)",
      qu: "Quechua",
      ro: "Rumani",
      ru: "Nga",
      run: "Rundi",
      rw: "Kinyarwanda",
      sa: "Phạn",
      sah: "Yakut",
      sd: "Sindhi",
      si: "Sinhala",
      sjn: "Elvish (Sindarin)",
      sk: "Slovak",
      sl: "Slovenia",
      sm: "Samoa",
      sn: "Shona",
      so: "Somali",
      sq: "Albania",
      sr: "Serbia",
      "sr-Latn": "Tiếng Serbia (Chữ La Tinh)",
      st: "Sesotho",
      su: "Sunda",
      sv: "Thụy Điển",
      sw: "Swahili",
      ta: "Tamil",
      te: "Telugu",
      tg: "Tajik",
      th: "Thái",
      ti: "Tigrinya",
      tk: "Turkmen",
      tl: "Filipino",
      "tlh-Latn": "Tiếng Klingon (Chữ La Tinh)",
      "tlh-Piqd": "Tiếng Klingon (pIqaD)",
      tn: "Setswana",
      to: "Tiếng Tonga",
      tr: "Thổ Nhĩ Kỳ",
      ts: "Tsonga",
      tt: "Tatar",
      ty: "Tiếng Tahiti",
      udm: "Udmurt",
      ug: "Uyghur",
      uk: "Ukraina",
      ur: "Urdu",
      uz: "Uzbek",
      uzbcyr: "Uzbek (Cyrillic)",
      vi: "Việt",
      xh: "Bantu",
      yi: "Yiddish",
      yo: "Yoruba",
      yua: "Tiếng Maya Yucatec",
      yue: "Tiếng Quảng Đông (Phồn Thể)",
      "zh-CN": "Trung (Giản thể)",
      "zh-TW": "Trung (Phồn thể)",
      zu: "Zulu",
    },
    "zh-CN": {
      af: "布尔语(南非荷兰语)",
      ak: "契维语",
      am: "阿姆哈拉语",
      ar: "阿拉伯语",
      as: "阿萨姆语",
      ay: "艾马拉语",
      az: "阿塞拜疆语",
      ba: "巴什基尔语",
      be: "白俄罗斯语",
      bg: "保加利亚语",
      bho: "博杰普尔语",
      bm: "班巴拉语",
      bn: "孟加拉语",
      bo: "藏语",
      bs: "波斯尼亚语",
      ca: "加泰罗尼亚语",
      ceb: "宿务语",
      ckb: "库尔德语（索拉尼）",
      co: "科西嘉语",
      cs: "捷克语",
      cv: "Chuvash",
      cy: "威尔士语",
      da: "丹麦语",
      de: "德语",
      doi: "多格来语",
      dsb: "Lower Sorbian",
      dv: "迪维希语",
      ee: "埃维语",
      el: "希腊语",
      emj: "Emoji",
      en: "英语",
      eo: "世界语",
      es: "西班牙语",
      et: "爱沙尼亚语",
      eu: "巴斯克语",
      fa: "波斯语",
      fi: "芬兰语",
      fj: "斐济语",
      fo: "法罗语",
      fr: "法语",
      "fr-CA": "法语 (加拿大)",
      fy: "弗里西语",
      ga: "爱尔兰语",
      gd: "苏格兰盖尔语",
      gl: "加利西亚语",
      gn: "瓜拉尼语",
      gom: "贡根语",
      gu: "古吉拉特语",
      ha: "豪萨语",
      haw: "夏威夷语",
      he: "希伯来语",
      hi: "印地语",
      hmn: "苗语",
      hr: "克罗地亚语",
      hsb: "上索布语",
      ht: "海地克里奥尔语",
      hu: "匈牙利语",
      hy: "亚美尼亚语",
      id: "印尼语",
      ig: "伊博语",
      ikt: "Inuinnaqtun",
      ilo: "伊洛卡诺语",
      is: "冰岛语",
      it: "意大利语",
      iu: "因纽特语",
      "iu-Latn": "Inuktitut (Latin)",
      ja: "日语",
      jv: "印尼爪哇语",
      ka: "格鲁吉亚语",
      kazlat: "Kazakh (Latin)",
      kk: "哈萨克语",
      km: "高棉语",
      kn: "卡纳达语",
      ko: "韩语",
      kri: "克里奥尔语",
      ku: "库尔德语（库尔曼吉语）",
      ky: "吉尔吉斯语",
      la: "拉丁语",
      lb: "卢森堡语",
      lg: "卢干达语",
      ln: "林格拉语",
      lo: "老挝语",
      lt: "立陶宛语",
      lus: "米佐语",
      lv: "拉脱维亚语",
      lzh: "Chinese (Literary)",
      mai: "迈蒂利语",
      mg: "马尔加什语",
      mhr: "Mari",
      mi: "毛利语",
      mk: "马其顿语",
      ml: "马拉雅拉姆语",
      mn: "蒙古语",
      "mn-Mong": "Mongolian (Traditional)",
      "mni-Mtei": "梅泰语（曼尼普尔语）",
      mr: "马拉地语",
      mrj: "Hill Mari",
      ms: "马来语",
      mt: "马耳他语",
      my: "缅甸语",
      ne: "尼泊尔语",
      nl: "荷兰语",
      no: "挪威语",
      nso: "塞佩蒂语",
      ny: "齐切瓦语",
      nya: "Nyanja",
      om: "奥罗莫语",
      or: "奥利亚语",
      otq: "克雷塔罗奥托米语",
      pa: "旁遮普语",
      pap: "Papiamento",
      pl: "波兰语",
      prs: "达里语",
      ps: "普什图语",
      pt: "葡萄牙语 (巴西)",
      "pt-PT": "葡萄牙语 (葡萄牙)",
      qu: "克丘亚语",
      ro: "罗马尼亚语",
      ru: "俄语",
      run: "Rundi",
      rw: "卢旺达语",
      sa: "梵语",
      sah: "Yakut",
      sd: "信德语",
      si: "僧伽罗语",
      sjn: "Elvish (Sindarin)",
      sk: "斯洛伐克语",
      sl: "斯洛文尼亚语",
      sm: "萨摩亚语",
      sn: "修纳语",
      so: "索马里语",
      sq: "阿尔巴尼亚语",
      sr: "塞尔维亚语",
      "sr-Latn": "塞尔维亚语 (拉丁文)",
      st: "塞索托语",
      su: "印尼巽他语",
      sv: "瑞典语",
      sw: "斯瓦希里语",
      ta: "泰米尔语",
      te: "泰卢固语",
      tg: "塔吉克语",
      th: "泰语",
      ti: "蒂格尼亚语",
      tk: "土库曼语",
      tl: "菲律宾语",
      "tlh-Latn": "克林贡语 (拉丁文)",
      "tlh-Piqd": "克林贡语 (pIqaD)",
      tn: "Setswana",
      to: "汤加语",
      tr: "土耳其语",
      ts: "宗加语",
      tt: "鞑靼语",
      ty: "塔希提语",
      udm: "Udmurt",
      ug: "维吾尔语",
      uk: "乌克兰语",
      ur: "乌尔都语",
      uz: "乌兹别克语",
      uzbcyr: "Uzbek (Cyrillic)",
      vi: "越南语",
      xh: "南非科萨语",
      yi: "意第绪语",
      yo: "约鲁巴语",
      yua: "尤卡特克玛雅语",
      yue: "粤语 (繁体)",
      "zh-CN": "中文（简体）",
      "zh-TW": "中文（繁体）",
      zu: "南非祖鲁语",
    },
    "zh-TW": {
      af: "布爾文",
      ak: "契維文",
      am: "阿姆哈拉文",
      ar: "阿拉伯文",
      as: "阿薩姆文",
      ay: "艾馬拉文",
      az: "亞塞拜然文",
      ba: "巴什喀爾文",
      be: "白俄羅斯文",
      bg: "保加利亞文",
      bho: "博杰普爾文",
      bm: "班巴拉文",
      bn: "孟加拉文",
      bo: "藏文",
      bs: "波士尼亞文",
      ca: "加泰羅尼亞文",
      ceb: "宿霧文",
      ckb: "庫德文 (索拉尼文)",
      co: "科西嘉文",
      cs: "捷克文",
      cv: "Chuvash",
      cy: "威爾斯文",
      da: "丹麥文",
      de: "德文",
      doi: "道格里文",
      dsb: "Lower Sorbian",
      dv: "迪維希文",
      ee: "埃維文",
      el: "希臘文",
      emj: "Emoji",
      en: "英文",
      eo: "世界語",
      es: "西班牙文",
      et: "愛沙尼亞文",
      eu: "巴斯克文",
      fa: "波斯文",
      fi: "芬蘭文",
      fj: "斐濟文",
      fo: "法羅文",
      fr: "法文",
      "fr-CA": "法文 (加拿大)",
      fy: "弗利然文",
      ga: "愛爾蘭文",
      gd: "蘇格蘭的蓋爾文",
      gl: "加里西亞文",
      gn: "瓜拉尼文",
      gom: "貢根文",
      gu: "印度古哈拉地文",
      ha: "豪沙文",
      haw: "夏威夷文",
      he: "希伯來文",
      hi: "印度文",
      hmn: "苗文",
      hr: "克羅埃西亞文",
      hsb: "上索布文",
      ht: "海地克里奧文",
      hu: "匈牙利文",
      hy: "亞美尼亞文",
      id: "印尼文",
      ig: "伊博文",
      ikt: "Inuinnaqtun",
      ilo: "伊洛卡諾文",
      is: "冰島文",
      it: "義大利文",
      iu: "因紐特文",
      "iu-Latn": "Inuktitut (Latin)",
      ja: "日文",
      jv: "爪哇文",
      ka: "喬治亞文",
      kazlat: "Kazakh (Latin)",
      kk: "哈薩克文",
      km: "高棉文",
      kn: "卡納達文",
      ko: "韓文",
      kri: "克里奧文",
      ku: "庫德文 (庫爾曼吉文)",
      ky: "吉爾吉斯文",
      la: "拉丁文",
      lb: "盧森堡文",
      lg: "烏干達文",
      ln: "林格拉文",
      lo: "寮文",
      lt: "立陶宛文",
      lus: "米佐文",
      lv: "拉脫維亞文",
      lzh: "Chinese (Literary)",
      mai: "邁蒂利文",
      mg: "馬拉加斯文",
      mhr: "Mari",
      mi: "毛利文",
      mk: "馬其頓文",
      ml: "馬拉雅拉姆文",
      mn: "蒙古文",
      "mn-Mong": "Mongolian (Traditional)",
      "mni-Mtei": "梅泰文 (曼尼普爾文)",
      mr: "馬拉地文",
      mrj: "Hill Mari",
      ms: "馬來文",
      mt: "馬耳他文",
      my: "緬甸文",
      ne: "尼泊爾文",
      nl: "荷蘭文",
      no: "挪威文",
      nso: "佩蒂文",
      ny: "奇切瓦文",
      nya: "Nyanja",
      om: "奧羅莫文",
      or: "歐利亞文 (奧里雅文)",
      otq: "克雷塔羅歐多米文",
      pa: "旁遮普文",
      pap: "Papiamento",
      pl: "波蘭文",
      prs: "达里语",
      ps: "帕施圖文",
      pt: "葡萄牙文 (巴西)",
      "pt-PT": "葡萄牙文 (葡萄牙)",
      qu: "克丘亞文",
      ro: "羅馬尼亞文",
      ru: "俄文",
      run: "Rundi",
      rw: "盧安達文",
      sa: "梵文",
      sah: "Yakut",
      sd: "信德文",
      si: "錫蘭文",
      sjn: "Elvish (Sindarin)",
      sk: "斯洛伐克文",
      sl: "斯洛維尼亞文",
      sm: "薩摩亞文",
      sn: "紹納文",
      so: "索馬里文",
      sq: "阿爾巴尼亞文",
      sr: "塞爾維亞文",
      "sr-Latn": "塞爾維亞文 (拉丁文)",
      st: "瑟索托文",
      su: "印尼巽他文",
      sv: "瑞典文",
      sw: "斯瓦希里文",
      ta: "泰米爾文",
      te: "泰盧固文",
      tg: "塔吉克文",
      th: "泰文",
      ti: "蒂格里亞文",
      tk: "土庫曼文",
      tl: "菲律賓文",
      "tlh-Latn": "克林貢文 (拉丁文)",
      "tlh-Piqd": "克林貢文 (pIqaD)",
      tn: "Setswana",
      to: "東加文",
      tr: "土耳其文",
      ts: "宗卡文",
      tt: "韃靼文",
      ty: "大溪地文",
      udm: "Udmurt",
      ug: "維吾爾文",
      uk: "烏克蘭文",
      ur: "烏爾都文",
      uz: "烏茲別克文",
      uzbcyr: "Uzbek (Cyrillic)",
      vi: "越南文",
      xh: "南非柯薩文",
      yi: "意第緒文",
      yo: "優魯巴文",
      yua: "猶加敦馬雅文",
      yue: "粵語 (繁體)",
      "zh-CN": "中文 (簡體)",
      "zh-TW": "中文 (繁體)",
      zu: "南非祖魯文",
    },
  };

  const twpLang = {};

  twpLang.SupportedLanguages = {
    google: [
      "af",
      "sq",
      "am",
      "ar",
      "hy",
      "as",
      "ay",
      "az",
      "bm",
      "eu",
      "be",
      "bn",
      "bho",
      "bs",
      "bg",
      "ca",
      "ceb",
      "ny",
      "zh-CN",
      "zh-TW",
      "co",
      "hr",
      "cs",
      "da",
      "dv",
      "doi",
      "nl",
      "en",
      "eo",
      "et",
      "ee",
      "tl",
      "fi",
      "fr",
      "fr-CA",
      "fy",
      "gl",
      "ka",
      "de",
      "el",
      "gn",
      "gu",
      "ht",
      "ha",
      "haw",
      "he",
      "hi",
      "hmn",
      "hu",
      "is",
      "ig",
      "ilo",
      "id",
      "ga",
      "it",
      "ja",
      "jv",
      "kn",
      "kk",
      "km",
      "rw",
      "gom",
      "ko",
      "kri",
      "ku",
      "ckb",
      "ky",
      "lo",
      "la",
      "lv",
      "ln",
      "lt",
      "lg",
      "lb",
      "mk",
      "mai",
      "mg",
      "ms",
      "ml",
      "mt",
      "mi",
      "mr",
      "mni-Mtei",
      "lus",
      "mn",
      "my",
      "ne",
      "no",
      "or",
      "om",
      "ps",
      "fa",
      "pl",
      "pt",
      "pt-PT",
      "pa",
      "qu",
      "ro",
      "ru",
      "sm",
      "sa",
      "gd",
      "nso",
      "sr",
      "st",
      "sn",
      "sd",
      "si",
      "sk",
      "sl",
      "so",
      "es",
      "su",
      "sw",
      "sv",
      "tg",
      "ta",
      "tt",
      "te",
      "th",
      "ti",
      "ts",
      "tr",
      "tk",
      "ak",
      "uk",
      "ur",
      "ug",
      "uz",
      "vi",
      "cy",
      "xh",
      "yi",
      "yo",
      "zu",
    ],
    bing: [
      "af",
      "am",
      "ar",
      "as",
      "az",
      "ba",
      "bg",
      "bn",
      "bo",
      "bs",
      "ca",
      "cs",
      "cy",
      "da",
      "de",
      "dsb",
      "dv",
      "el",
      "en",
      "es",
      "et",
      "eu",
      "fa",
      "fi",
      "tl",
      "fj",
      "fo",
      "fr",
      "fr-CA",
      "ga",
      "gl",
      "gom",
      "gu",
      "ha",
      "he",
      "hi",
      "hr",
      "hsb",
      "ht",
      "hu",
      "hy",
      "id",
      "ig",
      "ikt",
      "is",
      "it",
      "iu",
      "iu-Latn",
      "ja",
      "ka",
      "kk",
      "km",
      "ku",
      "kn",
      "ko",
      "ckb",
      "ky",
      "ln",
      "lo",
      "lt",
      "lg",
      "lv",
      "lzh",
      "mai",
      "mg",
      "mi",
      "mk",
      "ml",
      "mn",
      "mn-Mong",
      "mr",
      "ms",
      "mt",
      "hmn",
      "my",
      "no",
      "ne",
      "nl",
      "nso",
      "nya",
      "or",
      "otq",
      "pa",
      "pl",
      "prs",
      "ps",
      "pt",
      "pt-PT",
      "ro",
      "ru",
      "run",
      "rw",
      "sd",
      "si",
      "sk",
      "sl",
      "sm",
      "sn",
      "so",
      "sq",
      "sr",
      "sr-Latn",
      "st",
      "sv",
      "sw",
      "ta",
      "te",
      "th",
      "ti",
      "tk",
      "tlh-Latn",
      "tlh-Piqd",
      "tn",
      "to",
      "tr",
      "tt",
      "ty",
      "ug",
      "uk",
      "ur",
      "uz",
      "vi",
      "xh",
      "yo",
      "yua",
      "yue",
      "zh-CN",
      "zh-TW",
      "zu",
    ],
    yandex: [
      "af",
      "am",
      "ar",
      "az",
      "ba",
      "be",
      "bg",
      "bn",
      "bs",
      "ca",
      "ceb",
      "cs",
      "cv",
      "cy",
      "da",
      "de",
      "el",
      "emj",
      "en",
      "eo",
      "es",
      "et",
      "eu",
      "fa",
      "fi",
      "fr",
      "fr-CA",
      "ga",
      "gd",
      "gl",
      "gu",
      "he",
      "hi",
      "hr",
      "ht",
      "hu",
      "hy",
      "id",
      "is",
      "it",
      "ja",
      "jv",
      "ka",
      "kazlat",
      "kk",
      "km",
      "kn",
      "ko",
      "ky",
      "la",
      "lb",
      "lo",
      "lt",
      "lv",
      "mg",
      "mhr",
      "mi",
      "mk",
      "ml",
      "mn",
      "mr",
      "mrj",
      "ms",
      "mt",
      "my",
      "ne",
      "nl",
      "no",
      "pa",
      "pap",
      "pl",
      "pt",
      "pt-PT",
      "ro",
      "ru",
      "sah",
      "si",
      "sjn",
      "sk",
      "sl",
      "sq",
      "sr",
      "su",
      "sv",
      "sw",
      "ta",
      "te",
      "tg",
      "th",
      "tl",
      "tr",
      "tt",
      "udm",
      "uk",
      "ur",
      "uz",
      "uzbcyr",
      "vi",
      "xh",
      "yi",
      "zh-CN",
      "zh-TW",
      "zu",
    ],
    deepl: [
      "bg",
      "cs",
      "da",
      "de",
      "el",
      "en",
      "en-GB",
      "es",
      "et",
      "fi",
      "fr",
      "hu",
      "id",
      "it",
      "ja",
      "ko",
      "lt",
      "lv",
      "no",
      "nl",
      "pl",
      "pt",
      "pt-PT",
      "ro",
      "ru",
      "sk",
      "sl",
      "sv",
      "tr",
      "uk",
      "zh-CN",
    ],
    libre: [
      "ar",
      "az",
      "ca",
      "cs",
      "da",
      "de",
      "el",
      "en",
      "eo",
      "es",
      "fa",
      "fi",
      "fr",
      "ga",
      "he",
      "hi",
      "hu",
      "id",
      "it",
      "ja",
      "ko",
      "nl",
      "pl",
      "pt",
      "ru",
      "sk",
      "sv",
      "tr",
      "uk",
      "zh-CN",
    ],
  };

  twpLang.UILanguages = Object.keys(allLanguagesNames);
  twpLang.TargetLanguages = Object.keys(allLanguagesNames["en"]);

  /**
   * get the list of localized languages for the current browser language
   * @returns {string[]} languageList
   */
  twpLang.getLanguageList = function () {
    let uiLanguage =
      twpConfig.get("uiLanguage") !== "default"
        ? twpConfig.get("uiLanguage")
        : chrome.i18n.getUILanguage();
    uiLanguage = twpLang.fixUILanguageCode(uiLanguage) || "en";
    return allLanguagesNames[uiLanguage];
  };

  /** @type {Map<string, string>} */
  const alternatives = new Map();
  const pageTranslationServices = ["google", "bing", "yandex"];
  /**
   * gets an alternate translation service if the selected translation service does not support the current target language.
   * @param {string} lang
   * @param {string} serviceName
   * @param {boolean} forPageTranslation
   * @returns {string} alternativeServiceName
   */
  twpLang.getAlternativeService = function getAlternativeService(
    lang,
    serviceName,
    forPageTranslation = false
  ) {
    lang = twpLang.fixTLanguageCode(lang);
    if (!twpLang.SupportedLanguages[serviceName]) return null;
    if (
      forPageTranslation &&
      pageTranslationServices.indexOf(serviceName) === -1
    )
      return null;
    if (twpLang.SupportedLanguages[serviceName].indexOf(lang) !== -1)
      return serviceName;

    if (twpConfig.get("useAlternativeService") !== "yes") return null;

    for (const sn in twpLang.SupportedLanguages) {
      if (sn === serviceName) continue;
      if (forPageTranslation && pageTranslationServices.indexOf(sn) === -1)
        continue;
      const langs = twpLang.SupportedLanguages[sn];
      if (langs.indexOf(lang) !== -1) {
        alternatives.set(lang, sn);
        return sn;
      }
    }
    return null;
  };

  /**
   * convert langCode to languageName
   * @example
   * twpLang.codeToLanguage("de")
   * // returns "German"
   * twpLang.codeToLanguage("und")
   * // returns "Unknown" -- twpI18n.getMessage("msgUnknownLanguage")
   * @param {string} langCode
   * @returns {string} languageName
   */
  twpLang.codeToLanguage = function (langCode) {
    if (langCode === "und") {
      return twpI18n.getMessage("msgUnknownLanguage");
    }

    const languageList = twpLang.getLanguageList();
    langCode = twpLang.fixTLanguageCode(langCode);

    return langCode ? languageList[langCode] : "";
  };

  /**
   * fix the UI language code
   * @param {string} langCode
   * @returns {string} langCode
   */
  twpLang.fixUILanguageCode = function (langCode) {
    if (typeof langCode !== "string") return;

    function getReplacer(langCode) {
      switch (langCode) {
        case "pt":
          return "pt-BR";
        case "zh":
          return "zh-CN";
        default:
          return;
      }
    }

    if (twpLang.UILanguages.indexOf(langCode) === -1) {
      if (langCode.indexOf("-") !== -1) {
        langCode = langCode.split("-")[0];
        if (twpLang.UILanguages.indexOf(langCode) === -1) {
          return getReplacer(langCode);
        }
      } else {
        return getReplacer(langCode);
      }
    }

    return langCode;
  };

  /**
   * fix the target language code
   * @param {string} langCode
   * @returns {string} langCode
   */
  twpLang.fixTLanguageCode = function (langCode) {
    if (typeof langCode !== "string") return;

    if (langCode === "zh") {
      return "zh-CN";
    } else if (langCode === "zh-Hant") {
      return "zh-TW";
    } else if (langCode === "iw") {
      return "he";
    } else if (langCode === "jw") {
      return "jv";
    }

    if (twpLang.TargetLanguages.indexOf(langCode) === -1) {
      if (langCode.indexOf("-") !== -1) {
        langCode = langCode.split("-")[0];
        if (twpLang.TargetLanguages.indexOf(langCode) === -1) {
          return;
        }
      } else {
        return;
      }
    }

    return langCode;
  };

  /**
   * check if langCode is RTL
   * @example
   * twpLang.isRtlLanguage("ar")
   * // returns true
   * twpLang.isRtlLanguage("en")
   * // returns false
   * @param {string} langCode
   * @returns {boolean} isRTL
   */
  twpLang.isRtlLanguage = function (langCode) {
    const rtl_langs = [
      "ar",
      "ckb",
      "dv",
      "fa",
      "he", //iw
      //"ku", invertido
      "prs",
      "ps",
      "ur",
      "ug",
      "yi",
    ];
    return rtl_langs.indexOf(langCode) !== -1;
  };

  return twpLang;
})();
