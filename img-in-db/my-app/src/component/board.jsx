import React, { useEffect, useState } from "react"; 
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";

export const Board = () => {

    const [read, setRead] = useState([]);

    const fetchDatas = async() => {
        const response = await axios.get('http://localhost:4000/getTest');
        await setRead(response.data);
        console.log(read);
    }

    useEffect(() => {
        fetchDatas();
    },[]);

    return (
        <div id="parents">
            <h1>게시글</h1>
            <table className="tablelist">
                <thead>
                    <tr>
                        <th>번호</th>
                        <th class="titleST">제목</th>
                        <th>작성일</th>
                    </tr>
                </thead>
                <tbody>
                    {read.map((v, i) => (
                        <tr>
                            <td key={v.seq}>{v.seq}</td>
                            <td key={v.title}><Link to={`/view/${v.seq}`}>{v.title}</Link></td>
                            <td key={v.date}>{v.date}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <br/>
            <Link to="/write"><button>글작성</button></Link>
        </div>
    )
    


}

export default Board;