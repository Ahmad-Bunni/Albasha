const OrderIcons = () => {
  return (
    <div className="flex flex-col justify-center max-md:text-sm gap-4 md:w-[400px] w-[350px]">
      <a
        href="https://albashanc.applova.menu"
        target="_blank"
        className="text-white bg-gray-700 p-2 hover:bg-gray-600 text-center w-full rounded-md"
      >
        Order Online
      </a>

      <span className="font-semibold text-center text-lg text-white">
        You Can Also Order Through
      </span>

      <div className="flex gap-4">
        <a
          href="https://www.doordash.com/store/al-basha-market-&-grill-raleigh-27801751/"
          target="_blank"
          className="text-white bg-red-700 p-2 hover:bg-red-600 text-center w-full rounded-md"
        >
          DOORDASH
        </a>
        <a
          href="https://www.ubereats.com/store/al-basha-market-%26-grill-501-method-rd/3TPT1MTBUFyM7Q4ZtyUBAA"
          target="_blank"
          className="text-white bg-green-800 p-2 hover:bg-green-600 text-center w-full rounded-md"
        >
          UBER EATS
        </a>
      </div>
    </div>
  );
};

export default OrderIcons;
