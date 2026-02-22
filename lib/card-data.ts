export const CARD_DATA = {
  name: "John Doe",
  title: "Founder & Growth Strategist",
  company: "Media Mind",
  phone: "+971 50 000 0000",
  email: "hello@mediamind.ae",
  website: "https://mediamind.ae",
  whatsapp: "971500000000",      
  instagram: "https://instagram.com/mediamind",
  linkedin: "https://linkedin.com/in/mediamind",
};

export function downloadVCard() {
  const vcard = `BEGIN:VCARD
VERSION:3.0
FN:${CARD_DATA.name}
ORG:${CARD_DATA.company}
TITLE:${CARD_DATA.title}
TEL;TYPE=CELL:${CARD_DATA.phone}
EMAIL:${CARD_DATA.email}
URL:${CARD_DATA.website}
END:VCARD`;
  const blob = new Blob([vcard], { type: "text/vcard" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `${CARD_DATA.name.replace(" ", "_")}.vcf`;
  a.click();
  URL.revokeObjectURL(url);
}
