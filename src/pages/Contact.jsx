import SectionTitle from "@/components/common/SectionTitle";

export default function Contact() {
  return (
    <div className="px-6 py-16 max-w-xl mx-auto">
      <SectionTitle title="Contact Me" />

      <form className="space-y-6">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full p-3 bg-neutral-900 border border-neutral-700 rounded-lg"
        />

        <input
          type="email"
          placeholder="Your Email"
          className="w-full p-3 bg-neutral-900 border border-neutral-700 rounded-lg"
        />

        <textarea
          rows="5"
          placeholder="Your Message"
          className="w-full p-3 bg-neutral-900 border border-neutral-700 rounded-lg"
        ></textarea>

        <button className="px-6 py-3 bg-blue-600 rounded-xl w-full">
          Send Message
        </button>
      </form>
    </div>
  );
}
