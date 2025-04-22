import { useState } from "react";

const Payment = () => {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [submit, setSubmit] = useState(true);

  function handleChangeDescription(e) {
    setDescription(e.target.value);
  }

  function handleChangeAmount(e) {
    setAmount(e.target.value);
  }

  // if (description == "") {
  //   setSubmit(false);
  // } else {
  //   setSubmit(true);
  // }

  console.log(submit);

  return (
    <section className="px-4 flex justify-start items-start gap-4">
      <form action="#" className="min-w-3/12 bg-white rounded-xl shadow-md p-4">
        <input
          type="text"
          name="description"
          id="description"
          className="w-full p-2 rounded-lg focus:ring-0 focus:outline-none border border-gray-200 focus:shadow-md focus:border-gray-400 mb-4"
          placeholder="Uraian"
          value={description}
          onChange={(e) => handleChangeDescription(e)}
        />
        <input
          type="number"
          name="amount"
          id="amount"
          className="w-full p-2 rounded-lg focus:ring-0 focus:outline-none border border-gray-200 focus:shadow-md focus:border-gray-400 mb-4"
          placeholder="Jumlah"
          value={amount}
          onChange={(e) => handleChangeAmount(e)}
        />
        <button
          className={`w-full p-2 rounded-lg  transition-all duration-300 ${
            submit
              ? "bg-gray-900 hover:bg-black text-white cursor-pointer hover:shadow-md"
              : "bg-gray-500 text-gray-400 pointer-events-none"
          }`}
        >
          Simpan
        </button>
      </form>
      <section className="w-full bg-white rounded-xl shadow-md">List</section>
    </section>
  );
};

export default Payment;
