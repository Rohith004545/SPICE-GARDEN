export default function Testimonials() {
  const reviews = [
    {
      name: "Rahul Sharma",
      text: "Absolutely loved the food! The flavors were authentic and service was amazing.",
    },
    {
      name: "Priya Mehta",
      text: "Best biryani in town. Highly recommend Spice Garden to everyone!",
    },
    {
      name: "Arjun Patel",
      text: "Beautiful ambiance and delicious dishes. Will definitely visit again.",
    },
  ]

  return (
    <section id="testimonials" className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6">

        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">What Our Customers Say</h2>
          <p className="text-gray-600 text-lg">
            Real experiences from happy customers
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-10">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition duration-300"
            >
              <p className="text-gray-600 mb-6 italic">
                “{review.text}”
              </p>

              <h4 className="font-bold text-lg text-red-600">
                {review.name}
              </h4>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}