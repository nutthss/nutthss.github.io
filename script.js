$(document).ready(() => {
  $("#form").submit((event) => {
    event.preventDefault();

    const twitchName = $("#twitch_name").val();
    const instagramName = $("#instagram_name").val();

    if (
      !twitchName ||
      !instagramName
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
