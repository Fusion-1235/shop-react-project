// components/Branches.js
export default function Branches() {
  const branches = [
    {
      name: "شعبه ولیعصر",
      phone: "۰۲۱۸۸۹۶۹۴۱۵",
      address: "ضلع شرقی میدان ولی عصر، جنب پاساژ ایرانیان، پلاک ۱۵۹۹",
      image: "/images/location1.png",
    },
    {
      name: "شعبه کارگر جنوبی",
      phone: "۰۲۱۶۶۴۶۷۸۴۳",
      address:"میدان انقلاب، خیابان کارگر جنوبی، پایین‌تر از خیابان لبافی‌نژاد، پلاک ۸۷",
      image: "/images/location2.png",
    },
    {
      name: "شعبه بهار شمالی",
      phone: "۰۲۱۸۸۴۹۶۴۳۶",
      address: "خ بهار شمالی، قبل از خیابان موسوی، پلاک ۳۳۰",
      image: "/images/location3.png",
    },
  ];

  return (
    <div className="flex flex-col m-auto items-center gap-6 p-6 mt-[60px] text-right max-w-[90.5%] md:max-w-[86.5%]">
      <h1 className="text-2xl font-bold text-gray-800">دسترسی به شعب ملو کافی</h1>
      <div className="flex flex-col-reverse md:flex-row gap-4 w-full" dir="rtl">
        {branches
          .slice()
          .reverse()
          .map((branch, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row bg-white rounded-lg shadow-md p-4 w-full md:w-1/3 items-center md:items-center text-center md:text-right gap-4"
            >
              {/* عکس لوگو با اندازه درصدی و قاب گرد */}
              <div className="relative flex items-center w-[30%] max-w-[80px] aspect-square rounded-full overflow-hidden shrink-0">
                <img
                  src={branch.image}
                  alt={branch.name}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>

              {/* اطلاعات شعبه */}
              <div className="flex flex-col text-sm text-gray-700 gap-1">
                <span className="font-bold text-base">{branch.name}</span>
                <span>{branch.phone}</span>
                <span>{branch.address}</span>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
