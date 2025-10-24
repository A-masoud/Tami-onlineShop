import suit from "../../assets/il_794xN.5764186304_svqj.avif"
import shoes from "../../assets/O1CN01wXMich2FQLReiCVN4_!!3067528874-0-cib_medium.jpg"
import kot from "../../assets/d1f5013f-19ae-4b6d-8c9f-f919337f295a.jpg"

const blogs = [
  {
    id: 1,
    title: "چطور کت مردانه را ست کنیم؟",
    desc: "راهنمای کامل برای ست کردن کت مردانه با شلوار و کفش مناسب.",
    image: suit,
  },
  {
    id: 2,
    title: "۵ نکته برای انتخاب کفش رسمی",
    desc: "چه عواملی را باید هنگام خرید کفش رسمی در نظر گرفت؟",
    image: shoes,
  },
  {
    id: 3,
    title: "راهنمای خرید پیراهن مشکی",
    desc: "پیراهن مشکی همیشه شیک و کلاسیک است. اما چه جنسی مناسب‌تر است؟",
    image: kot,
  },
];

export function BlogSection() {
  return (
    <section className="my-12 border-gray-500 rounded-2xl shadow-md shadow-gray-500 border p-6 md:px-10 text-right max-w-10/12 mx-auto ">
      <h2 className="text-2xl text-center text-[#E6E4B2] md:text-3xl font-bold mb-6">
    مجلات آنلاین فروشگاه
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="relative h-64 rounded-xl shadow-gray-300  shadow-sm hover:shadow-md overflow-hidden transition flex items-end"
            style={{
              backgroundImage: `url(${blog.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* لایه تاریک برای خواناتر شدن متن */}
            <div className="absolute inset-0 bg-black/50"></div>

            {/* متن و دکمه روی بکگراند */}
            <div className="relative z-10 p-4 text-white">
              <h3 className="font-semibold text-lg mb-2">{blog.title}</h3>
              <p className="text-sm mb-3">{blog.desc}</p>
              <button className="text-[#FA6320] hover:scale-110 font-semibold hover:underline">
                مطالعه بیشتر →
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
