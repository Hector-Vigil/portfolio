const Contact: React.FC = () => (
  <section id="contact" className="bg-gray-800 text-white p-8">
    <h2 className="text-3xl font-bold text-center">Contact Me</h2>
    <form className="max-w-md mx-auto mt-8">
      <input type="text" placeholder="Your Name" className="w-full p-2 mb-4 rounded" />
      <input type="email" placeholder="Your Email" className="w-full p-2 mb-4 rounded" />
      <textarea placeholder="Your Message" className="w-full p-2 mb-4 rounded"></textarea>
      <button type="submit" className="bg-blue-500 py-2 px-4 rounded w-full">Send</button>
    </form>
  </section>
);
export default Contact;