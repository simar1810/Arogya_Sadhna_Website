import ContactFormSection from "@/components/contact/ContactFormSection"
import ContactInfoSection from "@/components/contact/ContactInfoSection"
import Hero from "@/components/contact/Hero"
import MapSection from "@/components/contact/MapSection"


const Contact = () => {
  return (
    <main>
      <Hero/>
      <ContactInfoSection/>
      <ContactFormSection/>
      <MapSection/>
    </main>
  )
}

export default Contact
