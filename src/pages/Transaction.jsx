const Transaction = ({dataBilling}) => {
  return (
    <div className="sticky top-4 w-full bg-white rounded-lg overflow-hidden shadow-lg">
      <h1 className="font-bold px-2 py-1 border-b border-gray-200">
        Transaksi
      </h1>
      <div className="p-2 text-xs">
        <form action="" className="flex justify-center items-center gap-2 mb-4">
          <select
            name="biling_id"
            id="billing_id"
            className="w-5/12 p-1 rounded border border-gray-300 focus:ring-0 focus:outline-1 focus:outline-blue-400 focus:shadow-md"
          >
            <option value="">- Pilih Billing -</option>
            {dataBilling.map((item) => (
              <option key={item.id} value={item.id}>
                Billing {item.billing} (PS{item.ps} - {item.category})
              </option>
            ))}
          </select>
          <input
            type="number"
            name="price"
            className="w-5/12 px-2 py-1 rounded border border-gray-300 focus:ring-0 focus:outline-1 focus:outline-blue-400 focus:shadow-md"
          />
          <button className="w-2/12 bg-blue-400 py-1 rounded text-white/70 hover:bg-blue-500 hover:text-white hover:shadow-md transition-all duration-200 cursor-pointer">
            Simpan
          </button>
        </form>
        <table className="w-full">
          <thead>
            <tr>
              <th className="p-1 bg-blue-400 text-white border border-gray-300">
                NO
              </th>
              <th className="p-1 bg-blue-400 text-white border border-gray-300 text-start">
                URAIAN
              </th>
              <th className="p-1 bg-blue-400 text-white border border-gray-300">
                JUMLAH
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-1 border border-gray-300 text-center" width="7%">
                1
              </td>
              <td className="p-1 border border-gray-300">
                Billing 1 (PS3 - Standar)
              </td>
              <td className="p-1 border border-gray-300 text-end" width="20%">
                Rp5.000
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Transaction
