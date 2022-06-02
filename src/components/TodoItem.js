/* 
  【TodoItemコンポーネント】
　・Todoアイテムを表示する
　・チェックボックスにチェックが入っているか管理する
　・チェックボックスにチェックが入っているかアイテムをグレーアウトする
*/
import React from 'react';
import { useState } from "react";

function TodoItem({item}) {
  const [myStyle,setMyStyle] = useState(true); 
  return (
    <div>
      {myStyle?<label className="panel-block">
            <input type="checkbox" onChange={()=> {setMyStyle(!myStyle)}}/>
            {item.text}
      </label>:
      <label className="panel-block" style={{color:'rgba(108, 114, 115, 0.4)'}}>
            <input type="checkbox" onChange={()=> {setMyStyle(!myStyle)}}/>
            {item.text}
      </label>
      }
   </div>);
}

export default TodoItem;