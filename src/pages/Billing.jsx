import Stopwatch from "./Stopwatch";
import { dataBilling, dataInfo } from "../data/Index";


const Billing = () => {
    
  return (
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
  );
};

export default Billing;
