let posts = [];

function criarPost() {
  const input = document.getElementById("postInput");
  const texto = input.value.trim();
  if (texto === "") return;

  const novoPost = {
    texto: texto,
    curtidas: 0
  };

  posts.unshift(novoPost);
  input.value = "";
  atualizarFeed();
}

function curtirPost(index) {
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
      <p>${post.texto}</p>
      <div class="like-btn" onclick="curtirPost(${index})">❤️ Curtidas: ${post.curtidas}</div>
    `;
    feed.appendChild(div);
  });
}
