import React, { useEffect } from 'react';
import { X, ShieldCheck, FileText, Cookie } from 'lucide-react';
import { BUSINESS_INFO } from '../data/services';

export type LegalTab = 'privacy' | 'terms' | 'cookies';

export const LEGAL_HASHES: Record<LegalTab, string> = {
  privacy: '#privacy-policy',
  terms: '#terms-and-conditions',
  cookies: '#cookie-notice',
};

interface LegalModalProps {
  activeTab: LegalTab | null;
  onChangeTab: (tab: LegalTab) => void;
  onClose: () => void;
}

const H = ({ children }: { children: React.ReactNode }) => (
  <h4 className="font-display-luxury text-sm font-bold uppercase tracking-wider text-[#2C2420] pt-5">{children}</h4>
);
const P = ({ children }: { children: React.ReactNode }) => (
  <p className="text-sm text-[#4F4139] leading-relaxed">{children}</p>
);
const UL = ({ children }: { children: React.ReactNode }) => (
  <ul className="list-disc pl-5 space-y-1.5 text-sm text-[#4F4139] leading-relaxed marker:text-[#A8752D]">{children}</ul>
);

const contactLine = (
  <>
    {BUSINESS_INFO.informationOfficer} · <a className="underline text-[#8A5E22]" href={`mailto:${BUSINESS_INFO.email}`}>{BUSINESS_INFO.email}</a> ·{' '}
    <a className="underline text-[#8A5E22]" href={`tel:${BUSINESS_INFO.phoneRaw}`}>{BUSINESS_INFO.phoneDisplay}</a>
  </>
);

const PrivacyPolicy = () => (
  <div className="space-y-3">
    <P>
      NOEWEL. respects your privacy. This policy explains how we collect, use, store and protect your personal
      information in line with the <strong>Protection of Personal Information Act 4 of 2013 (POPIA)</strong>.
    </P>

    <H>1. Responsible party & Information Officer</H>
    <P>
      The responsible party is NOEWEL. ({BUSINESS_INFO.legalStatus}), {BUSINESS_INFO.address}. Our Information Officer is{' '}
      {contactLine}.
    </P>

    <H>2. Information we collect</H>
    <UL>
      <li>Your name, phone number and email address when you contact us or send a booking inquiry.</li>
      <li>Booking details such as preferred date and time, the service or product you are interested in, and event notes you choose to share.</li>
      <li>Skin-related information you tell us (for example skin sensitivities or allergies) so we can provide services safely.</li>
      <li>Photographs taken during appointments, only with your consent (see section 7).</li>
    </UL>
    <P>
      This website does not have user accounts, does not use analytics or advertising trackers, and does not store the
      information you type into the booking form. The form simply prepares a WhatsApp message that you choose to send.
    </P>

    <H>3. Why we use your information</H>
    <UL>
      <li>To respond to inquiries and to book, confirm, reschedule or cancel appointments.</li>
      <li>To process and arrange collection or delivery of product orders.</li>
      <li>To tailor makeup and tanning services to you and to keep you safe (e.g. allergies, skin sensitivity).</li>
      <li>To keep records we are required to keep by law (e.g. tax records).</li>
    </UL>
    <P>
      Providing your information is voluntary, but without your name and contact details we cannot confirm a booking or
      order. We will not use your information for marketing without your consent, and we never sell it.
    </P>

    <H>4. Clients under 18</H>
    <P>
      POPIA treats anyone under 18 as a child. For clients under 18 (for example matric farewell bookings), a parent or
      legal guardian must make or approve the booking and consent to the processing of the child's personal information,
      including any photographs.
    </P>

    <H>5. Sharing & cross-border transfers</H>
    <P>
      We only share your information where needed to provide our services or where the law requires it. Bookings are
      communicated via <strong>WhatsApp</strong> (Meta Platforms), which may store data on servers outside South Africa.
      By choosing to contact us through WhatsApp, you consent to that transfer, which is subject to WhatsApp's own privacy
      policy and security measures (as allowed by section 72 of POPIA).
    </P>

    <H>6. Security & retention</H>
    <P>
      We take reasonable technical and organisational measures to protect your information against loss, misuse or
      unauthorised access. We keep personal information only for as long as needed for the purpose it was collected, or
      for as long as the law requires (for example, financial records for tax purposes). After that, it is deleted or
      de-identified.
    </P>

    <H>7. Photographs & before-and-after images</H>
    <P>
      Before-and-after or event photographs of clients are only published on this website or on social media with the
      client's prior written consent (or that of a parent/guardian for clients under 18). You may withdraw your consent at
      any time, and we will remove the image from our website and social media within a reasonable time.
    </P>

    <H>8. Your rights</H>
    <UL>
      <li>Ask whether we hold your personal information and request access to it.</li>
      <li>Ask us to correct, update or delete your information.</li>
      <li>Object to the processing of your information, or withdraw consent you gave.</li>
      <li>Object to direct marketing at any time.</li>
      <li>
        Lodge a complaint with the <strong>Information Regulator (South Africa)</strong>:{' '}
        <a className="underline text-[#8A5E22]" href="https://inforegulator.org.za" target="_blank" rel="noopener noreferrer">inforegulator.org.za</a>.
      </li>
    </UL>
    <P>
      To exercise these rights, or to request access to records under the Promotion of Access to Information Act (PAIA),
      contact our Information Officer: {contactLine}.
    </P>

    <H>9. Changes to this policy</H>
    <P>We may update this policy from time to time. The latest version will always be available on this website.</P>
  </div>
);

const TermsAndConditions = () => (
  <div className="space-y-3">
    <P>
      These terms apply to the use of this website and to all bookings and product orders made with NOEWEL. By using the
      website or booking a service, you agree to these terms.
    </P>

    <H>1. Business information (ECT Act, section 43)</H>
    <div className="rounded-xl bg-[#F4EDE2] border border-[#DFCEB7] p-4 text-sm text-[#4F4139] space-y-1">
      <div><strong>Trading name:</strong> NOEWEL.</div>
      <div><strong>Owner:</strong> {BUSINESS_INFO.owner}</div>
      <div><strong>Legal status:</strong> {BUSINESS_INFO.legalStatus}</div>
      {BUSINESS_INFO.registrationNumber && <div><strong>Registration number:</strong> {BUSINESS_INFO.registrationNumber}</div>}
      {BUSINESS_INFO.vatNumber && <div><strong>VAT number:</strong> {BUSINESS_INFO.vatNumber}</div>}
      <div><strong>Physical address:</strong> {BUSINESS_INFO.address}</div>
      <div><strong>Telephone / WhatsApp:</strong> {BUSINESS_INFO.phoneDisplay}</div>
      <div><strong>Email:</strong> {BUSINESS_INFO.email}</div>
      <div><strong>Website:</strong> {BUSINESS_INFO.website}</div>
      <div><strong>Hours:</strong> {BUSINESS_INFO.hours}</div>
    </div>

    <H>2. Prices & payment</H>
    <UL>
      <li>All prices are in South African Rand (ZAR) and may change without notice. The price confirmed at the time of booking or order applies.</li>
      <li>Prices marked "excl. trial" do not include a trial session.</li>
      <li>This website does not process payments. Payment arrangements are agreed directly with NOEWEL. when your booking or order is confirmed.</li>
    </UL>

    <H>3. Bookings, deposits & cancellations</H>
    <UL>
      <li>A booking inquiry sent via the website or WhatsApp is not a confirmed appointment until NOEWEL. confirms it.</li>
      <li>Any deposit requirements, cancellation and rescheduling terms will be confirmed to you in writing (WhatsApp or email) at the time of booking.</li>
      <li>In line with the Consumer Protection Act, you may cancel an advance booking; a reasonable cancellation charge may apply as communicated at booking, except where the law provides otherwise (for example, cancellation due to death or hospitalisation).</li>
      <li>Please arrive on time and prepared as advised (see our prep guidelines). Late arrival may shorten your session.</li>
    </UL>

    <H>4. Product orders, delivery & returns</H>
    <UL>
      <li>Products are available for studio pickup in Kroonstad or local delivery. Delivery arrangements and times are confirmed when you order.</li>
      <li><strong>Cooling-off:</strong> for products ordered electronically (including via WhatsApp), you may cancel within 7 days of receiving the goods, in line with section 44 of the ECT Act. Products must be unopened and in their original condition; you are responsible for the direct cost of returning them.</li>
      <li><strong>Hygiene:</strong> for health and hygiene reasons, opened or used products cannot be returned unless they are defective.</li>
      <li><strong>Defective goods:</strong> under section 56 of the Consumer Protection Act you may return defective products within 6 months for a repair, replacement or refund.</li>
    </UL>

    <H>5. Health, safety & product disclaimers</H>
    <UL>
      <li>Please tell us about any allergies, skin conditions, sensitivities, pregnancy or medication before your appointment.</li>
      <li>We recommend a <strong>patch test</strong> 24–48 hours before a first spray tan, first use of a tanning lotion, or if you have sensitive skin.</li>
      <li>A spray tan is cosmetic only and does <strong>not</strong> provide protection against the sun. Continue to use sunscreen.</li>
      <li><strong>HOT Tingle Tanning Lotion</strong> is a hyper tingle lotion and is <strong>not suitable for sensitive skin</strong>. A warm, tingling sensation is expected; stop use and rinse if irritation occurs.</li>
      <li>Sunbed tanning lotions do not contain sun protection. UV exposure from sunbeds and the sun can damage skin and increase the risk of skin cancer. Follow sunbed operator guidelines and limit exposure.</li>
      <li>Results vary from person to person depending on skin type, preparation and aftercare.</li>
      <li>Stop using any product and seek medical advice if you experience a reaction. For external use only; keep out of reach of children.</li>
    </UL>

    <H>6. Photographs</H>
    <P>
      We may take photographs of our work. They are only published with your written consent (or a parent/guardian's
      consent for clients under 18), and you may ask for removal at any time. See our Privacy Policy.
    </P>

    <H>7. Website use & intellectual property</H>
    <P>
      All content on this website, including the NOEWEL. name and logo, photographs, text and product designs, belongs
      to NOEWEL. or is used with permission. It may not be copied or used without written consent. Information on this
      website is provided in good faith; we try to keep it accurate and up to date but do not guarantee that it is free
      of errors.
    </P>

    <H>8. Limitation of liability</H>
    <P>
      To the extent permitted by law, NOEWEL. is not liable for any loss or damage arising from the use of this website,
      or from reactions where relevant allergies or conditions were not disclosed or aftercare instructions were not
      followed. Nothing in these terms limits your rights under the Consumer Protection Act or other South African law.
    </P>

    <H>9. Governing law & complaints</H>
    <P>
      These terms are governed by the laws of the Republic of South Africa. If you are unhappy with a service or product,
      please contact us first at {BUSINESS_INFO.email} or {BUSINESS_INFO.phoneDisplay} so we can try to resolve it. You may
      also approach the National Consumer Commission.
    </P>
  </div>
);

const CookieNotice = () => (
  <div className="space-y-3">
    <H>Cookies</H>
    <P>
      This website does not use advertising, analytics or tracking cookies. We only store a small setting in your browser
      to remember that you have dismissed the cookie notice.
    </P>

    <H>Third-party services</H>
    <P>To work properly, this website loads content from the following third parties, which may receive your IP address and basic browser information:</P>
    <UL>
      <li><strong>Google Fonts</strong> (Google LLC): provides the fonts used on the site.</li>
      <li><strong>OpenStreetMap</strong>: shows the studio location map.</li>
      <li><strong>WhatsApp</strong> (Meta Platforms): opens when you choose to send a booking or order message.</li>
      <li><strong>GitHub Pages</strong> (GitHub Inc.): hosts this website.</li>
    </UL>
    <P>
      These providers may process data outside South Africa under their own privacy policies. You can block or clear
      cookies in your browser settings at any time.
    </P>
  </div>
);

const tabs: { id: LegalTab; label: string; icon: React.ReactNode }[] = [
  { id: 'privacy', label: 'Privacy Policy (POPIA)', icon: <ShieldCheck className="w-3.5 h-3.5" /> },
  { id: 'terms', label: 'Terms & Conditions', icon: <FileText className="w-3.5 h-3.5" /> },
  { id: 'cookies', label: 'Cookie Notice', icon: <Cookie className="w-3.5 h-3.5" /> },
];

export const LegalModal: React.FC<LegalModalProps> = ({ activeTab, onChangeTab, onClose }) => {
  useEffect(() => {
    if (!activeTab) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [activeTab, onClose]);

  if (!activeTab) return null;

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center p-3 sm:p-6 bg-black/75 backdrop-blur-sm"
      onClick={onClose}
      id="legal-modal-overlay"
    >
      <div
        className="relative w-full max-w-3xl max-h-[92vh] flex flex-col bg-[#FAF7F2] rounded-3xl border border-[#D9C4A1] shadow-2xl"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label="Legal information"
      >
        <div className="p-5 sm:p-7 pb-0 sm:pb-0 space-y-4">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-[#EFE3D3] text-[#4A3D36] hover:bg-[#DFCBB0] transition-colors cursor-pointer"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
          <div>
            <h3 className="font-display-luxury text-xl sm:text-2xl font-bold text-[#2C2420]">Legal Information</h3>
            <p className="text-xs text-[#786659] mt-1">Last updated: {BUSINESS_INFO.legalLastUpdated}</p>
          </div>
          <div className="flex flex-wrap gap-2 border-b border-[#E5D4BE] pb-4">
            {tabs.map((t) => (
              <button
                key={t.id}
                onClick={() => onChangeTab(t.id)}
                className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full text-[11px] font-semibold uppercase tracking-wider transition-colors cursor-pointer ${
                  activeTab === t.id
                    ? 'btn-noewel-gold text-white shadow-sm'
                    : 'bg-[#F2E8DA] text-[#5E5148] hover:bg-[#E9DAC6]'
                }`}
              >
                {t.icon}
                <span>{t.label}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="overflow-y-auto px-5 sm:px-7 py-5">
          {activeTab === 'privacy' && <PrivacyPolicy />}
          {activeTab === 'terms' && <TermsAndConditions />}
          {activeTab === 'cookies' && <CookieNotice />}
        </div>
      </div>
    </div>
  );
};
