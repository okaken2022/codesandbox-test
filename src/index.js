const onClickAdd = () => {
    // inputの内容を取得
  const inputText = document.getElementById("add-text").value;
    // 追加ボタンを押すとinputの中が初期化
  document.getElementById("add-text").value="";
  
  
  //div生成
  const div = document.createElement("div");
  div.className = "list-row";
  
  //liタグ生成
  const li = document.createElement("li");
  li.innerText = inputText;
  
  //divタグの子要素に各要素を設定
  div.appendChild(li);
  
  //未完了リストに追加
  document.getElementById("incomplete-list").appendChild(div);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
