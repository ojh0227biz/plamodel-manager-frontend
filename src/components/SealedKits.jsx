import { useEffect, useState } from "react";
import axios from "axios";

function SealedKits() {
    const [kits, setKits] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8080/api/sealed-kits")
            .then(response => {
                console.log("✅ 응답 데이터:", response.data);
                setKits(response.data);
            })
            .catch(error => console.error("❌ 데이터 불러오기 실패:", error));
    }, []);

    return (
        <div className="p-8">
            <h1 className="text-3xl font-bold mb-6 text-center">미개봉 키트 목록</h1>
            {kits && kits.length > 0 ? (
                <div className="overflow-x-auto">
                    <table className="min-w-full table-fixed">
                        <thead>
                            <tr>
                                <th className="px-4 py-2 w-20">등급</th>
                                <th className="px-4 py-2 w-40">기종</th>
                                <th className="px-4 py-2 w-60">키트명</th>
                                <th className="px-4 py-2 w-32">정가</th>
                                <th className="px-4 py-2 w-20">비고</th>
                            </tr>
                        </thead>
                        <tbody>
                            {kits.map((kit, index) => (
                                <tr key={index}>
                                    <td className="px-4 py-2">{kit.kitGrd}</td>
                                    <td className="px-4 py-2">{kit.kitSrs}</td>
                                    <td className="px-4 py-2">{kit.kitName}</td>
                                    <td className="px-4 py-2">
                                        {kit.kitPrscPrc.toLocaleString()}원
                                    </td>
                                    <td className="px-4 py-2">-</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            ) : (
                <p className="text-center text-gray-500">데이터가 없습니다.</p>
            )}
        </div>
    );
}

export default SealedKits;
