$(document).ready(() => {
  $("#form").submit((event) => {
    event.preventDefault();

    const twitchName = $("#twitch_name").val();
    const instagramName = $("#instagram_name").val();
    const instagramCheck = $("#instagram_check").is(":checked");
    const twitchCheck = $("#twitch_check").is(":checked");
    const namicoinsCheck = $("#namicoins_check").is(":checked");
    const wichPremium = $("input[name=wich]:checked").val();

    if (
      !twitchName ||
      !instagramName ||
      !twitchCheck ||
      !instagramCheck ||
      !namicoinsCheck
    ) {
      Swal.fire({
        title: "Preencha todos os dados",
        text: "Para participar você precisa seguir todo o regulamento",
        icon: "error",
        confirmButtonText: "Vou preencher",
      });
      return;
    }

    const data = {
      twitchName,
      instagramName,
      isValid: false,
      isSub: false,
      isVip: false,
      wichPremium,
    };
    firebase.database().ref().child("participants").push(data);
    Swal.fire({
      title: "Sucesso",
      text: "Seu cadastro foi realizado com sucesso. Boa sorte!",
      icon: "success",
      confirmButtonText: "Vou preencher",
    });
  });
});
