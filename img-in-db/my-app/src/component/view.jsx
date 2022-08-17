import React, { useEffect, useState } from "react"; 
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";

export const View = () => {
    let navigate = useNavigate();

    const [read, setRead] = useState([]);
    const {index} = useParams();

    const fetchDatas = async() => {
        const response = await axios.get(`http://localhost:4000/getOne/${index}`);
        await setRead(response.data);
        console.log(index);
    }

    const dataDelete = async(v) => {
        await axios.post('/shelter/deleteData',{
			data: {'data': [
				v.shelter_id]
			}
		});
        navigate("/shelter");
    }

    useEffect( () => {
        fetchDatas();
    }, [])

    return (
        <>
            <h1>게시글상세{index}</h1>
            {read.map((v, i) => (
                <>
                    <table className="tablelist">
                        <thead>
                            <tr>
                                <th>제목</th>
                                <th>{v.title}</th>
                                
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>날짜</td>
                                <td colSpan="3">{v.date}</td>
                            </tr>
                            <tr>
                                <td colSpan="2" dangerouslySetInnerHTML={{ __html: v.content }}></td>
                            </tr>
                        </tbody>
                    </table>
                    <Link to={`/shelter/input/${v.shelter_id}`}><button>수정</button></Link>
                    <button onClick={() => {dataDelete(v)}}>삭제</button>
                    <br/><br/>
                </>
            ))}
        </>
    )                         


}

export default View;