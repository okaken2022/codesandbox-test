const onClickAdd = () => {
  // inputの内容を取得
  const inputText = document.getElementById("add-text").value;
  // 追加ボタンを押すとinputの中が初期化
  document.getElementById("add-text").value = "";

  //div生成
  const div = document.createElement("div");
  div.className = "list-row";

  //liタグ生成
  const li = document.createElement("li");
  li.innerText = inputText;

  //button(完了)タグ生成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    //   押された完了ボタンの親タグ(div)を未完了リストから削除
    deleteFromIncompleteList(completeButton.parentNode);

    //   完了リストに追加する要素
    const addTarget = completeButton.parentNode;

    //   TODO内容テキストを取得
    const text = addTarget.firstElementChild.innerText;
    console.log(text);

    //   div以下を初期化
    addTarget.textContent = null;

    //   liタグを生成
    const li = document.createElement("li");
    li.innerText = text;

    //   buttonタグ生成
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";

    //.  divタグの子要素に各要素を設定
    addTarget.appendChild(li);
    addTarget.appendChild(backButton);

    //.  完了リストについか
    document.getElementById("complete-list").appendChild(addTarget);
  });

  //button(削除)タグ生成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    //   押された削除ボタンの親タグ(div)を未完了リストから削除
    deleteFromIncompleteList(deleteButton.parentNode);
  });

  //divタグの子要素に各要素を設定
  div.appendChild(li);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  //未完了リストに追加
  document.getElementById("incomplete-list").appendChild(div);
};

// 未完了リストから指定の要素を削除
const deleteFromIncompleteList = (treget) => {
  document.getElementById("incomplete-list").removeChild(treget);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
