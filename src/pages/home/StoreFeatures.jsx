import { Truck, RefreshCw, CreditCard, ShieldCheck } from "lucide-react";
import React from "react";
const features = [
  {
    id: 1,
    title: "ارسال سریع",
    desc: "تحویل فوری در کمترین زمان ممکن",
    icon: <Truck />,
  },
  {
    id: 2,
    title: "گارانتی تعویض",
    desc: "7 روز ضمانت تعویض کالا",
    icon: <RefreshCw />,
  },
  {
    id: 3,
    title: "پرداخت در محل",
    desc: "امکان پرداخت هنگام تحویل",
    icon: <CreditCard />,
  },
  {
    id: 4,
    title: "تضمین کیفیت",
    desc: "محصولات اصل و باکیفیت",
    icon: <ShieldCheck />,
  },
];

export function StoreFeatures() {
  return (
    <section className="my-12 p-6 md:px-12 rounded-2xl max-w-9/12 mx-auto">
      <h2 className="text-3xl font-bold text-center text-white mb-10">چرا ما؟</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {features.map((feature) => (
          <div
            key={feature.id}
            className="bg-gradient-to-b from-[#1F1F1F] to-[#2C2C2C] rounded-xl p-6 text-center shadow-[0_0_8px_#FA6320] border border-[#FA6320]"
          >
            <div className="flex justify-center mb-4">
              {React.cloneElement(feature.icon, {
                className: "w-12 h-12 text-[#FA6320] drop-shadow-[0_0_5px_#FA6320]",
              })}
            </div>
            <h3 className="text-white font-semibold text-lg mb-2">{feature.title}</h3>
            <p className="text-gray-300 text-sm">{feature.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
