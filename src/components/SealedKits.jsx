import { useEffect, useState } from "react";
import axios from "axios";

function SealedKits() {
    const [kits, setKits] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8080/api/sealed-kits")
            .then(response => {
                console.log("✅ 응답 데이터:", response.data);
                if (response.data.length > 0) {
                    console.log("✅ 첫 번째 데이터:", response.data[0]);
                }
                setKits(response.data);
            })
            .catch(error => console.error("❌ 데이터 불러오기 실패:", error));
    }, []);


    return (
        <div>
            <h1>미개봉 키트 목록</h1>
            <ul>
                {kits && kits.length > 0 ? (
                    kits.map((kit, index) => (
                        kit && (
                            <li key={index}>
                                {kit.kitName} ({kit.kitGrd}) - {kit.kitSrs} - {kit.kitPrscPrc}원
                            </li>
                        )
                    ))
                ) : (
                    <li>데이터가 없습니다.</li>
                )}
            </ul>
        </div>
    );
}

export default SealedKits;
