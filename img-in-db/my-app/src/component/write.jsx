import React, { useEffect, useState, useRef } from "react"; 
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";


import '@toast-ui/editor/dist/toastui-editor.css';

import { Editor } from '@toast-ui/react-editor';


export const Write = () => {

    let navigate = useNavigate();

    const editorRef = useRef();
    const [title, setTitle] = useState("");
    const [value, setValue] = useState(" ");

    const getTitle = (e) => {
		const { value } = e.target;
			setTitle(value);
	}

    const getValue = () => {
        setValue(editorRef.current.getInstance().getHTML());
    };

    const dataInsert = async() => {
        await axios.post('http://localhost:4000/postData',{
            data: {'data': [
                title,
                value]
            }
        });
        navigate("/");
    }

    return (
        <div id="parents">
            <input 
                value={title} 
                id="title" 
                type="text" 
                placeholder="입력하세요!" 
                onChange={getTitle} 
                name='title' />
            <Editor
                initialValue={value}
                placeholder="내용을 입력해주세요."
                previewStyle="tab" // 미리보기 스타일 지정
                height="600px" // 에디터 창 높이
                initialEditType="wysiwyg" // 초기 입력모드 설정(디폴트 markdown)
                ref={editorRef}
                onChange={getValue}
                toolbarItems={[
                // 툴바 옵션 설정
                ['heading', 'bold', 'italic', 'strike'],
                ['hr', 'quote'],
                ['ul', 'ol', 'task', 'indent', 'outdent'],
                ['table', 'image', 'link'],
                ['code', 'codeblock']
                ]}
            ></Editor>
                <button class="btn" onClick={() => {dataInsert()}}>제출하기</button><br></br>
        </div>
    )
    


}

export default Write;