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
        <div className="p-8">
            <h1 className="text-3xl font-bold mb-6 text-center">미개봉 키트 목록</h1>
            {kits && kits.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {kits.map((kit, index) => (
                        kit && (
                            <div
                                key={index}
                                className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition-shadow"
                            >
                                <h2 className="text-xl font-semibold mb-2">{kit.kitName}</h2>
                                <p className="text-gray-600">{kit.kitGrd}</p>
                                <p className="text-gray-600">{kit.kitSrs}</p>
                                <p className="text-gray-800 font-bold mt-2">{kit.kitPrscPrc.toLocaleString()}원</p>
                            </div>
                        )
                    ))}
                </div>
            ) : (
                <p className="text-center text-gray-500">데이터가 없습니다.</p>
            )}
        </div>
    );
}

export default SealedKits;
