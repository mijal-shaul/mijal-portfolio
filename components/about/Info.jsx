import {
  FaCalendarAlt,
  FaEnvelopeOpenText,
  FaMapMarkerAlt,
  FaMobileAlt,
} from "react-icons/fa";

const Info = () => {
  const personalContent = [
    {
      id: 1,
      border: "border-b border-[#E3E3E3] dark:border-[#3D3A3A]",
      icon: <FaMobileAlt />,
      iconColor: "text-[#E93B81]",
      name: "Phone",
      meta: (
        <>
          <a
            className="hover:text-[#FA5252] duration-300 transition"
            href="tel:+972584389645"
          >
            +972 58-438-9645
          </a>
        </>
      ),
    },
    {
      id: 2,
      border: "border-b border-[#E3E3E3] dark:border-[#3D3A3A]",
      icon: <FaMapMarkerAlt />,
      iconColor: "text-[#6AB5B9] ",
      name: "Location",
      meta: <>Herzliya, Israel</>,
    },
    {
      id: 3,
      border: "border-b border-[#E3E3E3] dark:border-[#3D3A3A]",
      icon: <FaEnvelopeOpenText />,
      iconColor: "text-[#FD7590]",
      name: "Email",
      meta: (
        <>
          {" "}
          <a
            className="hover:text-[#FA5252] duration-300 transition"
            href="mijal.sharon9@gmail.com"
          >
            mijal.sharon9@gmail.com
          </a>
        </>
      ),
    },
    {
      id: 4,
      icon: <FaCalendarAlt />,
      iconColor: "text-[#C17CEB]",
      name: "Birthday",
      meta: <>October 21, 2003</>,
    },
  ];

  return (
    <>
      {personalContent.map((item) => (
        <div className={`flex py-2.5 ${item.border}`} key={item.id}>
          <span
            className={`flex-shrink-0 socialbtn bg-white dark:bg-black ${item.iconColor} shadow-md`}
          >
            {item.icon}
          </span>
          <div className="text-left ml-2.5">
            <p className="text-xs text-[#44566C] dark:text-[#A6A6A6]">
              {item.name}
            </p>
            <p className="dark:text-white break-all">{item.meta}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default Info;
