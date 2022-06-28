const onClickAdd =()=>{
    //textboxのidを取得
    const textEl=document.getElementById("add-text");
    //textboxの値を受け取る
    const text=textEl.value;
    //受け取ったらtextboxの値を空に
    textEl.value="";
    //liタグとdivタグの生成
    const li=document.createElement("li");
    const div=document.createElement("div");
    //pタグの生成(テキストボックスの文字を設定)
    const p=document.createElement("p");
    p.textContent=text;
    //buttonタグ生成(ラベルは[削除])
    const button=document.createElement("button");
    button.textContent="削除";

    //ボタン押下時に行を削除
    button.addEventListener("click",()=>{
        //addEventListenerはクリックしたボタンの階層を取得
        //削除ボタンの親タグ(li)を取得
        const deleteTarget=button.closest("li");
        //メモリストから削除
        document.getElementById("memo-list").removeChild(deleteTarget);
    });
    
    div.appendChild(p);
    div.appendChild(button);
    li.appendChild(div);
    document.getElementById("memo-list").appendChild(li);
};

document.getElementById("add-button").addEventListener("click",()=>onClickAdd());