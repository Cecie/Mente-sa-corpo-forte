function forEach(array, callback) {
  for (let i = 0; i < array.length; i++) {
    callback(array[i]);
  }
}

function selectAtuacao(index, withScroll = true) {
  const allTiles = document.getElementsByClassName("atuacao_Tile");
  forEach(allTiles, (tile) => tile.style.height = "80px");
  const activeTile = allTiles[index];
  activeTile.style.height = "160px";

  const allContainers = document.getElementsByClassName("atuacao_Content");
  forEach(allContainers, (container) => container.style.display = "none");
  const mobileContainer = allContainers[index];
  mobileContainer.style.display = "flex";

  const deskContainer = allContainers[5];
  deskContainer.style.display = "flex";
  deskContainer.innerHTML = mobileContainer.innerHTML;

  if (withScroll && window.innerWidth < 768) {
    window.scrollTo(0, activeTile.offsetTop - 8);
  }
}

selectAtuacao(0, false);
