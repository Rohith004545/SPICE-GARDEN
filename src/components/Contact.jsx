export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Contact Us</h2>
          <p className="text-gray-600 text-lg">
            We'd love to hear from you
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">

          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-red-600">
              Get In Touch
            </h3>

            <p className="mb-4 text-gray-600">
              📍 123 Main Street, Belgaum, India
            </p>

            <p className="mb-4 text-gray-600">
              📞 +91 99999 99999
            </p>

            <p className="mb-4 text-gray-600">
              ✉️ contact@spicegarden.com
            </p>

            <p className="mt-6 text-gray-500">
              Open Daily: 11:00 AM – 11:00 PM
            </p>
          </div>

          {/* Contact Form */}
          <form className="bg-gray-100 p-8 rounded-2xl shadow-lg space-y-6">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"
            />

            <textarea
              placeholder="Your Message"
              rows="4"
              className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"
            ></textarea>

            <button
              type="submit"
              className="w-full bg-red-600 text-white py-3 rounded-lg hover:bg-red-700 transition duration-300"
            >
              Send Message
            </button>
          </form>

        </div>

      </div>
    </section>
  )
}