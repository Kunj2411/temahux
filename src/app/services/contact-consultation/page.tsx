import Navbar from "@/components/layout/Navbar";
import FadeIn from "@/components/ui/FadeIn";

export default function ContactConsultationPage() {
  return (
    <div className="min-h-screen bg-surface-dark text-white">
      <Navbar />
      
      <section className="pt-40 pb-24 px-6">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <span className="text-xs font-black uppercase tracking-[0.3em] text-accent mb-6 block text-center">
              Get In Touch
            </span>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-5xl md:text-7xl font-black leading-tight mb-8 tracking-tighter text-center">
              Free <span className="text-primary italic">Consultation</span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-xl text-slate-400 leading-relaxed mb-16 max-w-2xl mx-auto text-center">
              Let's discuss your project and explore how we can help you achieve your digital goals.
            </p>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="bg-surface-base/30 border border-white/5 rounded-card p-8 md:p-12">
              <form action="https://api.web3forms.com/submit" method="POST" className="space-y-6">
                <input type="hidden" name="access_key" value="5dc38729-8ddc-4b2f-b86a-be5498c6c759" />
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-black uppercase tracking-widest text-slate-400 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      className="w-full px-4 py-3 bg-surface-dark border border-white/10 rounded-button text-white focus:border-primary focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-black uppercase tracking-widest text-slate-400 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 bg-surface-dark border border-white/10 rounded-button text-white focus:border-primary focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-black uppercase tracking-widest text-slate-400 mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    className="w-full px-4 py-3 bg-surface-dark border border-white/10 rounded-button text-white focus:border-primary focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-black uppercase tracking-widest text-slate-400 mb-2">
                    Service Interest
                  </label>
                  <select
                    name="service"
                    required
                    className="w-full px-4 py-3 bg-surface-dark border border-white/10 rounded-button text-white focus:border-primary focus:outline-none transition-colors"
                  >
                    <option value="">Select a service</option>
                    <option value="Web Development">Web Development</option>
                    <option value="Social Media Management">Social Media Management</option>
                    <option value="Branding & Design">Branding & Design</option>
                    <option value="Digital Marketing">Digital Marketing</option>
                    <option value="AI Automation">AI Automation</option>
                    <option value="Multiple Services">Multiple Services</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-black uppercase tracking-widest text-slate-400 mb-2">
                    Budget Range
                  </label>
                  <select
                    name="budget"
                    required
                    className="w-full px-4 py-3 bg-surface-dark border border-white/10 rounded-button text-white focus:border-primary focus:outline-none transition-colors"
                  >
                    <option value="">Select budget range</option>
                    <option value="Under ₹10,000">Under ₹10,000</option>
                    <option value="₹10,000 - ₹25,000">₹10,000 - ₹25,000</option>
                    <option value="₹25,000 - ₹50,000">₹25,000 - ₹50,000</option>
                    <option value="₹50,000 - ₹1,00,000">₹50,000 - ₹1,00,000</option>
                    <option value="Above ₹1,00,000">Above ₹1,00,000</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-black uppercase tracking-widest text-slate-400 mb-2">
                    Project Details
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-surface-dark border border-white/10 rounded-button text-white focus:border-primary focus:outline-none transition-colors resize-none"
                    placeholder="Tell us about your project requirements..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-10 py-5 bg-primary text-white font-black uppercase text-xs tracking-widest rounded-button hover:bg-accent hover:text-surface-dark transition-all"
                >
                  Request Consultation
                </button>
              </form>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
