import { UiTexts } from "../ui-texts";

export default function Footer({ texts }: { texts: UiTexts["footer"] }) {
  return (
    <footer className="bg-[#1A1A1A] text-white py-16">
      <div className="mx-auto max-w-[1300px] px-8 md:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-16">
          <FooterColumn title={texts.aboutTitle} links={["Танилцуулга", "Блог", "Ажлын байр", "Галерей"]} />
          <FooterColumn title={texts.supportTitle} links={["Холбоо барих", "Онлайн чат", "Whatsapp", "Утасны төв"]} />
          <FooterColumn title={texts.faqTitle} links={["Бүртгэл", "Захиалга", "Төлбөр", "Буцаалт"]} />

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-bold mb-6">{texts.infoTitle}</h3>
            <div className="flex rounded-full bg-white/10 border border-white/20 p-2">
              <input
                type="email"
                placeholder={texts.newsletterPlaceholder}
                className="flex-1 bg-transparent px-4 outline-none text-sm"
              />
              <button className="bg-white text-black px-5 py-2 rounded-full text-sm font-medium hover:bg-gray-200 transition">
                {texts.newsletterButton}
              </button>
            </div>
            <div className="flex gap-3 mt-6">
              {["📷", "📘", "▶️"].map((icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center hover:bg-white/20 transition"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 text-center text-gray-400 text-sm">
          {texts.copyright}
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, links }: { title: string; links: string[] }) {
  return (
    <div>
      <h3 className="text-lg font-bold mb-6">{title}</h3>
      <ul className="space-y-3 text-gray-400">
        {links.map((t, i) => (
          <li key={i}>
            <a href="#" className="hover:text-white transition">
              {t}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
