import SectionWrapper from "./SectionWrapper"
export default function About() {
  return (
   <SectionWrapper>
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

        {/* Image */}
        <img
          src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092"
          alt="Restaurant"
          className="rounded-2xl shadow-lg"
        />

        {/* Text */}
        <div>
          <h2 className="text-4xl font-bold mb-6 text-gray-800">
            Our Story
          </h2>

          <p className="text-gray-600 mb-4 text-lg">
            At Spice Garden, we bring authentic Indian flavors
            crafted from generations of culinary tradition.
          </p>

          <p className="text-gray-600 text-lg">
            Every dish is prepared with fresh ingredients,
            rich spices, and a passion for excellence.
          </p>
        </div>

      </div>
    </section>
   </SectionWrapper>  
  )
}