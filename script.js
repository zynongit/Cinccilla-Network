let posts = [];

function criarPost() {
  const url = document.getElementById("imageUrl").value.trim();
  const legenda = document.getElementById("caption").value.trim();

  if (url === "" || legenda === "") return;

  const novoPost = {
    imagem: url,
    legenda: legenda,
    curtidas: 0
  };

  posts.unshift(novoPost);
  document.getElementById("imageUrl").value = "";
  document.getElementById("caption").value = "";
  atualizarFeed();
}

function curtir(index) {
  posts[index].curtidas += 1;
  atualizarFeed();
}

function atualizarFeed() {
  const feed = document.getElementById("feed");
  feed.innerHTML = "";

  posts.forEach((post, index) => {
    const div = document.createElement("div");
    div.className = "post";
    div.innerHTML = `
      <img src="${post.imagem}" alt="Post" />
      <div class="caption">${post.legenda}</div>
      <div class="like-btn" onclick="curtir(${index})">❤️ Curtidas: ${post.curtidas}</div>
    `;
    feed.appendChild(div);
  });
}
