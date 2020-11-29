$(document).ready(() => {
  function embaralha(lista) {
    let indice = lista.length;

    while (indice) {
      // atenção para o pós-incremento indice--
      const indiceAleatorio = Math.floor(Math.random() * indice--);
      [lista[indice], lista[indiceAleatorio]] = [
        lista[indiceAleatorio],
        lista[indice],
      ];
    }
  }

  const participantes = [
    {
      "instagramName" : "01._ferret",
      "isSub" : false,
      "isValid" : true,
      "isVip" : false,
      "twitchName" : "frt301"
    },
    {
      "instagramName" : "@JackMitsuo",
      "isSub" : false,
      "isValid" : true,
      "isVip" : false,
      "twitchName" : "jack_mitsuo23"
    },
      {
      "instagramName" : "StynieOfficial",
      "isSub" : false,
      "isValid" : true,
      "isVip" : true,
      "twitchName" : "Stynie"
    },
    {
      "instagramName" : "marcos_aa3",
      "isSub" : false,
      "isValid" : true,
      "isVip" : false,
      "twitchName" : "VedderSM"
    },
      {
      "instagramName" : "Doug_crf",
      "isSub" : true,
      "isValid" : true,
      "isVip" : false,
      "twitchName" : "masterdodo_"
    },
      {
      "instagramName" : "cabeludosccp1611",
      "isSub" : false,
      "isValid" : true,
      "isVip" : false,
      "twitchName" : "mikael1611"
    },
      {
      "instagramName" : "@thalysonteixeira",
      "isSub" : false,
      "isValid" : true,
      "isVip" : false,
      "twitchName" : "thalysonpc"
    },
      {
      "instagramName" : "iGabireu",
      "isSub" : false,
      "isValid" : true,
      "isVip" : false,
      "twitchName" : "VejoCoisas"
    },
      {
      "instagramName" : "misterioxd_",
      "isSub" : false,
      "isValid" : true,
      "isVip" : false,
      "twitchName" : "MisterioLives"
    },
      {
      "instagramName" : "Deryck.Oliveira.3",
      "isSub" : true,
      "isValid" : true,
      "isVip" : false,
      "twitchName" : "deryckgostoso"
    },
      {
      "instagramName" : "Não tenho",
      "isSub" : false,
      "isValid" : true,
      "isVip" : false,
      "twitchName" : "flavitoadr"
    },
      {
      "instagramName" : "@andreferlaofc",
      "isSub" : false,
      "isValid" : true,
      "isVip" : false,
      "twitchName" : "P0largd"
    },
      {
      "instagramName" : "p_gom3s",
      "isSub" : true,
      "isValid" : true,
      "isVip" : false,
      "twitchName" : "umcaradepauqu4lquer"
    },
      {
      "instagramName" : "sonicfps10",
      "isSub" : false,
      "isValid" : true,
      "isVip" : false,
      "twitchName" : "sonicfps10"
    },
    {
      "instagramName" : "gabrielprestes14",
      "isSub" : false,
      "isValid" : true,
      "isVip" : false,
      "twitchName" : "gabriel_pc14"
    },
    {
    "instagramName" : "Kaue._vitor",
    "isSub" : false,
    "isValid" : true,
    "isVip" : false,
    "twitchName" : "Kauevitor66XT"
  },
  {
    "instagramName" : "GMBM",
    "isSub" : false,
    "isValid" : true,
    "isVip" : false,
    "twitchName" : "Pengis"
  },
  {
    "instagramName" : "Nicolas Eckhardt",
    "isSub" : false,
    "isValid" : true,
    "isVip" : false,
    "twitchName" : "MundonEck"
  },
  {
    "instagramName" : "luisfepo",
    "isSub" : true,
    "isValid" : true,
    "isVip" : false,
    "twitchName" : "SraLuxanna"
  },
  {
    "instagramName" : "cyrouxxx",
    "isSub" : true,
    "isValid" : true,
    "isVip" : false,
    "twitchName" : "cyrouxxx"
  },
  {
    "instagramName" : "djierghiovhdi",
    "isSub" : true,
    "isValid" : true,
    "isVip" : false,
    "twitchName" : "djierghiovhdi"
  }
  ];
  console.log(participantes);

  const all = [];

  participantes.forEach((participante) => {
    if (participante.isValid) {
      all.push(participante);
      if (participante.isSub) {
        all.push(participante);
        all.push(participante);
      }

      if (participante.isVip) {
        all.push(participante);
      }
    }
  });

  console.log(all);

  // embaralha(all);

  all.forEach((participante) => {
    $("#lista").append(`
    <li class="list-group-item" data-p="${participante.twitchName}">${participante.twitchName}</li>`);
  });

  $("#sortear").click(() => {
    Swal.fire({
      title: "O sorteado foi:",
      text: all[Math.floor(Math.random() * all.length + 1)].twitchName,
      icon: "success",
      confirmButtonText: "Ok",
    });
  });
});
