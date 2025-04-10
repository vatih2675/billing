import Stopwatch from "./pages/Stopwatch";
import { dataBilling, dataInfo } from "./data/Index";
import Transaction from "./pages/Transaction";
import { useEffect, useState } from "react";
import { Analytics } from "@vercel/analytics/react";

function App() {
  function timeSpend(time) {
    return time;
  }

  const [tanggalHariIni, setTanggalHariIni] = useState("");
  const [jamBerjalan, setJamBerjalan] = useState("");

  useEffect(() => {
    setInterval(() => {
      let waktu = new Date();
      let hr = waktu.getDay();
      const namaHari = [
        "Minggu",
        "Senin",
        "Selasa",
        "Rabu",
        "Kamis",
        "Jumat",
        "Sabtu",
        "Minggu",
      ];
      let hari = namaHari[hr];
      let tgl = waktu.getDate() < 10 ? "0" + waktu.getDate() : waktu.getDate();
      let bln = waktu.getMonth();
      const namaBulan = [
        "Januari",
        "Februari",
        "Maret",
        "April",
        "Mei",
        "Juni",
        "Juli",
        "Agustus",
        "September",
        "Oktober",
        "November",
        "Desember",
      ];
      let bulan = namaBulan[bln];
      let thn = waktu.getFullYear();
      let jam =
        waktu.getHours() < 10 ? "0" + waktu.getHours() : waktu.getHours();
      let menit =
        waktu.getMinutes() < 10 ? "0" + waktu.getMinutes() : waktu.getMinutes();
      let detik =
        waktu.getSeconds() < 10 ? "0" + waktu.getSeconds() : waktu.getSeconds();
      setTanggalHariIni(`${hari}, ${tgl} ${bulan} ${thn}`);
      setJamBerjalan(`${jam}:${menit}:${detik} WITA`);
      // setTahun(waktu.getFullYear());
    }, 1);
  }, []);

  return (
    <>
      <section className="w-full p-4">
        <div className="w-full rounded-4xl flex mb-4 bg-gray-950 text-white justify-center items-center sticky top-4">
          <h1 className="text-center  w-fit ps-5 pe-3 py-2 text-2xl flex justify-center items-center text-gray-200">
            <i className="bi-playstation me-3 text-4xl"></i>
            <span className="text-4xl font-bold text-red-500">V</span>atih&nbsp;
            <span className="text-4xl font-bold text-red-500">G</span>ame&nbsp;
            <span className="text-4xl font-bold text-red-500">C</span>enter
          </h1>
          <marquee behavior="" direction="left" className="w-full">
            {dataInfo.map((info, index) => (
              <>
                <i className="bi-playstation text-gray-200"></i>
                <span key={index} className="mx-4">
                  {info}
                </span>
              </>
            ))}
            <i className="bi-playstation text-gray-200"></i>
          </marquee>
          <div className="w-2/12 me-2 ms-1 py-1 pe-3 rounded-full bg-gray-200 text-black flex flex-col justify-center items-end font-mono text-[0.6rem]">
            <span className="block">{tanggalHariIni}</span>
            <span className="block">{jamBerjalan}</span>
          </div>
        </div>
        <div className="w-full flex justify-center items-center gap-4 flex-wrap">
          {dataBilling.map((item) => (
            <Stopwatch
              key={item.id}
              billing={item.id}
              ps={`PS ${item.ps}`}
              category={item.category}
              price={item.price}
            />
          ))}
        </div>
        {/* <div className="w-4/12 relative h-screen">
          <Transaction dataBilling={dataBilling} />
          
        </div> */}
      </section>
      <Analytics />
    </>
  );
}

export default App
