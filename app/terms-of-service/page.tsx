import { Navbar } from "@/components/sections/navbar"
import { Footer } from "@/components/sections/footer"

export default function TermsOfService() {
  return (
    <main className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <div className="flex-1 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <h1 className="text-4xl md:text-5xl font-black mb-8">Terms and Conditions</h1>
        <div className="space-y-6 text-muted-foreground leading-relaxed">
          <p><strong>Effective Date:</strong> [Insert Date]<br/><strong>Last Updated:</strong> [Insert Date]</p>

          <h2 className="text-2xl font-bold text-foreground mt-10">1. Introduction</h2>
          <p>These Terms and Conditions govern your use of the ABBANDESHA LTD website and any business enquiries, consultancy discussions, or services provided by ABBANDESHA LTD.</p>
          <p>By accessing this website or engaging with us for services, you agree to these Terms and Conditions to the extent applicable to your use and relationship with us.</p>

          <h2 className="text-2xl font-bold text-foreground mt-10">2. Company Information</h2>
          <p>This website is operated by ABBANDESHA LTD.</p>
          <ul className="list-none space-y-2 mt-4">
            <li><strong>Company Name:</strong> ABBANDESHA LTD</li>
            <li><strong>Company Number:</strong> [Insert Company Number]</li>
            <li><strong>Registered Office Address:</strong> [Insert Registered Office Address]</li>
            <li><strong>Jurisdiction of Registration:</strong> [England and Wales / Scotland / Northern Ireland]</li>
            <li><strong>Email:</strong> [Insert Contact Email]</li>
            <li><strong>Phone:</strong> [Insert Contact Number]</li>
          </ul>

          <h2 className="text-2xl font-bold text-foreground mt-10">3. Our Services</h2>
          <p>ABBANDESHA LTD provides professional business consultancy and digital services, including but not limited to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>business consultancy;</li>
            <li>digital project management;</li>
            <li>operational coordination;</li>
            <li>data analytics and reporting;</li>
            <li>customer support management;</li>
            <li>related strategic and administrative support services.</li>
          </ul>
          <p className="mt-4">Any specific services, scope, pricing, deliverables, and timelines will be confirmed separately in a proposal, quotation, statement of work, email agreement, or other written agreement.</p>

          <h2 className="text-2xl font-bold text-foreground mt-10">4. Business Use</h2>
          <p>Our website and services are primarily intended for business and professional use. Where consumer protection law applies, nothing in these Terms and Conditions is intended to exclude any rights that cannot lawfully be excluded.</p>

          <h2 className="text-2xl font-bold text-foreground mt-10">5. Website Use</h2>
          <p>You agree to use this website lawfully and responsibly. You must not:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>misuse the website;</li>
            <li>attempt unauthorised access to any part of the website or its systems;</li>
            <li>transmit malicious code or harmful material;</li>
            <li>use the website in a way that could damage, disable, or impair its functionality;</li>
            <li>copy or exploit website content for unlawful or misleading purposes.</li>
          </ul>
          <p className="mt-4">We may suspend, restrict, or terminate access to the website where misuse or security concerns arise.</p>

          <h2 className="text-2xl font-bold text-foreground mt-10">6. Service Enquiries and No Automatic Contract</h2>
          <p>Submitting an enquiry, completing a contact form, or requesting a quote does not automatically create a binding contract.</p>
          <p>A binding contract for services arises only when both parties agree in writing to the relevant commercial terms, scope, fees, and delivery arrangements.</p>

          <h2 className="text-2xl font-bold text-foreground mt-10">7. Quotes, Proposals, and Scope</h2>
          <p>Any quote, estimate, or proposal provided by ABBANDESHA LTD is based on the information available at the time it is issued.</p>
          <p>Unless otherwise stated:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>quotes are valid for [14 / 30] days from issue;</li>
            <li>work outside the agreed scope may require a revised quotation or additional charges;</li>
            <li>timelines depend on timely cooperation, approvals, and access to necessary information from the client.</li>
          </ul>

          <h2 className="text-2xl font-bold text-foreground mt-10">8. Client Responsibilities</h2>
          <p>Where you engage ABBANDESHA LTD for services, you agree to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>provide accurate and complete information;</li>
            <li>respond in a timely manner to reasonable requests;</li>
            <li>provide approvals, materials, access, and feedback when required;</li>
            <li>ensure you have the right to share any materials or data you provide to us;</li>
            <li>comply with applicable laws relevant to your business and instructions.</li>
          </ul>
          <p className="mt-4">We are not responsible for delays or failures caused by incomplete instructions, missing approvals, or inaccurate information provided by the client.</p>

          <h2 className="text-2xl font-bold text-foreground mt-10">9. Fees and Payment</h2>
          <p>Fees for services will be set out in the applicable quotation, proposal, invoice, or written agreement.</p>
          <p>Unless otherwise agreed in writing:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>invoices must be paid in the stated currency;</li>
            <li>payment is due within the time stated on the invoice;</li>
            <li>late payments may delay service commencement, continuation, or delivery;</li>
            <li>we may suspend services where invoices remain unpaid beyond the due date.</li>
          </ul>
          <p className="mt-4">Where payment processors are used, payments may also be subject to the relevant processor’s terms and compliance checks.</p>

          <h2 className="text-2xl font-bold text-foreground mt-10">10. Delivery of Services</h2>
          <p>Services are delivered digitally via email, remote collaboration tools, secure client workflows, or other agreed digital methods within the project timeline agreed with the client.</p>
          <p>Any delivery date or milestone is an estimate unless expressly stated as fixed in writing.</p>

          <h2 className="text-2xl font-bold text-foreground mt-10">11. Refund Policy</h2>
          <p>Because ABBANDESHA LTD provides professional and digital services, refunds are assessed on a case-by-case basis.</p>
          <p>Unless otherwise agreed in writing, refund requests must be submitted within 14 days of service delivery and must include reasonable details explaining the issue.</p>
          <p>No automatic refund entitlement exists for:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>completed consultancy time;</li>
            <li>work already delivered;</li>
            <li>delays caused by the client;</li>
            <li>change-of-mind requests after substantial work has begun;</li>
            <li>services delivered in accordance with the agreed scope.</li>
          </ul>
          <p className="mt-4">Nothing in this clause limits rights that cannot lawfully be excluded where consumer law applies.</p>

          <h2 className="text-2xl font-bold text-foreground mt-10">12. Changes, Cancellations, and Rescheduling</h2>
          <p>Either party may request changes to the agreed scope or timeline. Any material change may result in revised fees, revised delivery dates, or a new written agreement.</p>
          <p>Where a client cancels after work has started, ABBANDESHA LTD may charge for work already completed, time already allocated, and non-recoverable project costs.</p>

          <h2 className="text-2xl font-bold text-foreground mt-10">13. Intellectual Property</h2>
          <p>Unless otherwise agreed in writing:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>ABBANDESHA LTD retains ownership of its pre-existing materials, tools, templates, methods, know-how, and internal processes;</li>
            <li>the client retains ownership of materials and data supplied by the client;</li>
            <li>deliverables created specifically for the client may be licensed or assigned as stated in the relevant proposal or written agreement.</li>
          </ul>
          <p className="mt-4">You may not copy, reproduce, republish, or commercially exploit website content, branding, text, graphics, or materials without prior written permission, except where permitted by law.</p>

          <h2 className="text-2xl font-bold text-foreground mt-10">14. Confidentiality</h2>
          <p>Where confidential information is exchanged in the course of an enquiry or service engagement, each party agrees to use the other party’s confidential information only for legitimate business purposes connected to the engagement and not to disclose it unlawfully or without proper authority.</p>
          <p>This clause does not apply where disclosure is required by law or where the information is already lawfully public.</p>

          <h2 className="text-2xl font-bold text-foreground mt-10">15. Data Protection</h2>
          <p>Each party will handle personal data in accordance with applicable data protection law.</p>
          <p>Details of how ABBANDESHA LTD handles personal data are set out in our Privacy Policy.</p>

          <h2 className="text-2xl font-bold text-foreground mt-10">16. No Professional Reliance Without Formal Engagement</h2>
          <p>Website content is provided for general information only. It is not tailored legal, tax, accounting, or regulated financial advice.</p>
          <p>No person should rely on website content as a substitute for formal professional advice or a specific written consultancy engagement with ABBANDESHA LTD.</p>

          <h2 className="text-2xl font-bold text-foreground mt-10">17. Availability and Website Accuracy</h2>
          <p>We aim to keep the website accurate, current, and available, but we do not guarantee that:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>the website will always be uninterrupted or error-free;</li>
            <li>all information will always be complete, current, or suitable for a particular purpose;</li>
            <li>the website will always be free from vulnerabilities or third-party disruptions.</li>
          </ul>
          <p className="mt-4">We may update, suspend, or withdraw parts of the website without notice.</p>

          <h2 className="text-2xl font-bold text-foreground mt-10">18. Limitation of Liability</h2>
          <p>To the fullest extent permitted by law, ABBANDESHA LTD excludes liability for indirect, incidental, special, or consequential loss, including loss of profit, loss of business opportunity, loss of goodwill, or loss of data arising from use of the website or services.</p>
          <p>Where liability cannot lawfully be excluded, our liability will be limited to the extent permitted by law and, where relevant to a paid service, may be capped at the amount actually paid for the affected service, unless otherwise agreed in writing.</p>
          <p>Nothing in these Terms excludes liability for fraud, fraudulent misrepresentation, death, personal injury caused by negligence, or any other liability that cannot lawfully be excluded.</p>

          <h2 className="text-2xl font-bold text-foreground mt-10">19. Force Majeure</h2>
          <p>ABBANDESHA LTD is not liable for delay or failure to perform caused by events beyond reasonable control, including internet failure, cyber incidents, utility outage, government action, labour disputes, severe illness, natural events, or third-party platform disruption.</p>

          <h2 className="text-2xl font-bold text-foreground mt-10">20. Third-Party Services and Links</h2>
          <p>This website may contain links to third-party websites or services. ABBANDESHA LTD is not responsible for their content, security, availability, or legal terms.</p>
          <p>Use of third-party platforms, payment providers, or collaboration tools may also be subject to those third parties’ own terms and policies.</p>

          <h2 className="text-2xl font-bold text-foreground mt-10">21. Termination</h2>
          <p>We may decline, suspend, or terminate an enquiry, account, or service relationship where:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>there is non-payment;</li>
            <li>there is abusive, unlawful, or fraudulent conduct;</li>
            <li>there is a compliance or risk issue;</li>
            <li>continuing the engagement is impractical or inappropriate.</li>
          </ul>
          <p className="mt-4">Any accrued rights, payment obligations, confidentiality obligations, and intellectual property provisions will survive termination where relevant.</p>

          <h2 className="text-2xl font-bold text-foreground mt-10">22. Governing Law and Jurisdiction</h2>
          <p>These Terms and Conditions are governed by the laws of [England and Wales / Scotland / Northern Ireland], unless another mandatory law applies.</p>
          <p>The courts of [England and Wales / Scotland / Northern Ireland] will have jurisdiction over disputes arising in connection with these Terms and Conditions, subject to any mandatory consumer rights that apply.</p>

          <h2 className="text-2xl font-bold text-foreground mt-10">23. Changes to These Terms</h2>
          <p>ABBANDESHA LTD may update these Terms and Conditions from time to time. The latest version will always appear on this page with the updated effective date.</p>

          <h2 className="text-2xl font-bold text-foreground mt-10">24. Contact</h2>
          <p>For any questions regarding these Terms and Conditions, please contact:</p>
          <ul className="list-none space-y-2 mt-4">
            <li><strong>ABBANDESHA LTD</strong></li>
            <li><strong>Registered Office:</strong> [Insert Registered Office Address]</li>
            <li><strong>Email:</strong> [Insert Contact Email]</li>
            <li><strong>Phone:</strong> [Insert Contact Number]</li>
          </ul>
        </div>
      </div>
      <Footer />
    </main>
  )
}
