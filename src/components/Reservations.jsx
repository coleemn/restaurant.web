import React, { useState } from 'react';
import { Calendar, Clock, Users, Phone, User, MessageSquare, CheckCircle2, AlertCircle, Send, MessageCircle } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantInfo';

export default function Reservations({ isOpenModal, onCloseModal }) {
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    date: '',
    time: '13:00',
    guests: '2',
    specialRequests: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);

  const validate = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Please enter your full name';
    }

    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = 'Please enter your phone number';
    } else {
      // Kenyan phone format check: 07XX..., 01XX..., +254...
      const cleanPhone = formData.phoneNumber.replace(/[\s-]/g, '');
      const kenyanPhoneRegex = /^(?:\+254|254|0)?(7|1)\d{8}$/;
      if (!kenyanPhoneRegex.test(cleanPhone) && cleanPhone.length < 9) {
        newErrors.phoneNumber = 'Please enter a valid Kenyan phone number (e.g., 0712 345 678)';
      }
    }

    if (!formData.date) {
      newErrors.date = 'Please select a date';
    } else {
      const selected = new Date(formData.date);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      if (selected < today) {
        newErrors.date = 'Reservation date cannot be in the past';
      }
    }

    if (!formData.time) {
      newErrors.time = 'Please select a time';
    }

    if (!formData.guests || parseInt(formData.guests, 10) < 1) {
      newErrors.guests = 'Please specify at least 1 guest';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitted(true);
      setSubmittedData({ ...formData });
    }
  };

  const handleReset = () => {
    setFormData({
      fullName: '',
      phoneNumber: '',
      date: '',
      time: '13:00',
      guests: '2',
      specialRequests: ''
    });
    setIsSubmitted(false);
    setSubmittedData(null);
  };

  const getWhatsAppBookingUrl = () => {
    if (!submittedData) return `https://wa.me/${RESTAURANT_INFO.contact.whatsapp}`;
    const text = `Hello The Ember House Nakuru,%0A%0AI have submitted a table reservation request:%0A- Name: ${encodeURIComponent(submittedData.fullName)}%0A- Phone: ${encodeURIComponent(submittedData.phoneNumber)}%0A- Date: ${encodeURIComponent(submittedData.date)}%0A- Time: ${encodeURIComponent(submittedData.time)}%0A- Guests: ${encodeURIComponent(submittedData.guests)}%0A- Notes: ${encodeURIComponent(submittedData.specialRequests || 'None')}%0A%0APlease let me know if the table is confirmed. Thank you!`;
    return `https://wa.me/${RESTAURANT_INFO.contact.whatsapp}?text=${text}`;
  };

  // Get tomorrow's date string as min date
  const todayStr = new Date().toISOString().split('T')[0];

  return (
    <section id="reservations" className="py-20 sm:py-24 bg-cream text-charcoal relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-4xl mx-auto bg-cream-50 rounded-3xl shadow-warm-lg border border-earth/20 overflow-hidden">
          
          <div className="grid grid-cols-1 md:grid-cols-12">
            
            {/* Left Side: Hospitality Note & Grill Timing */}
            <div className="md:col-span-5 bg-charcoal text-cream p-8 sm:p-10 flex flex-col justify-between text-left relative overflow-hidden">
              <div className="space-y-6 relative z-10">
                <div className="inline-flex items-center space-x-2 bg-charcoal-700 border border-ember/40 rounded-full px-3.5 py-1 text-xs uppercase tracking-wider text-ember-light">
                  <Calendar className="w-3.5 h-3.5 text-ember" />
                  <span>TABLE RESERVATIONS</span>
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-cream leading-snug">
                  JOIN US AT THE EMBER HOUSE.
                </h3>

                <p className="text-sm text-cream-300 leading-relaxed">
                  Whether you are planning a relaxed Sunday nyama choma feast with family, a birthday celebration, or a dinner date, send us your details and we will reserve the perfect spot for you.
                </p>

                <div className="space-y-3 pt-2 text-xs text-cream-300">
                  <div className="flex items-start space-x-2.5">
                    <Clock className="w-4 h-4 text-ember flex-shrink-0 mt-0.5" />
                    <span><strong>Restaurant:</strong> Open daily 7:00 AM – 11:00 PM</span>
                  </div>
                  <div className="flex items-start space-x-2.5">
                    <Phone className="w-4 h-4 text-ember flex-shrink-0 mt-0.5" />
                    <span><strong>Phone:</strong> {RESTAURANT_INFO.contact.phone}</span>
                  </div>
                  <div className="flex items-start space-x-2.5">
                    <MessageCircle className="w-4 h-4 text-kenyanGreen-light flex-shrink-0 mt-0.5" />
                    <span><strong>WhatsApp:</strong> Instant confirmation via chat</span>
                  </div>
                </div>
              </div>

              {/* Clarification Notice */}
              <div className="mt-8 pt-6 border-t border-charcoal-700 text-xs text-cream-400">
                <p>
                  <strong className="text-cream-200">How reservations work:</strong> We do not run an automated booking robot. Your request goes directly to our Nakuru host manager, who verifies seating and confirms with you personally.
                </p>
              </div>
            </div>

            {/* Right Side: Form / Success Feedback */}
            <div className="md:col-span-7 p-8 sm:p-10 text-left">
              
              {isSubmitted ? (
                /* Success Feedback Screen */
                <div className="space-y-6 py-4">
                  <div className="w-14 h-14 bg-kenyanGreen/15 border border-kenyanGreen/30 rounded-2xl flex items-center justify-center text-kenyanGreen">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>

                  <div>
                    <h4 className="font-serif text-2xl font-bold text-charcoal">
                      Reservation Request Received!
                    </h4>
                    <p className="text-sm text-charcoal-600 mt-2 leading-relaxed">
                      Thank you, <strong className="text-charcoal">{submittedData?.fullName}</strong>. We have received your booking request for a table of <strong className="text-charcoal">{submittedData?.guests} guests</strong> on <strong className="text-charcoal">{submittedData?.date}</strong> at <strong className="text-charcoal">{submittedData?.time}</strong>.
                    </p>
                  </div>

                  <div className="bg-cream-100 p-4 rounded-xl border border-earth/20 text-xs text-charcoal-700 space-y-1">
                    <p><strong>Next steps:</strong></p>
                    <p>Our Nakuru restaurant team will call or message your phone (<span className="font-mono font-semibold">{submittedData?.phoneNumber}</span>) shortly to confirm your table placement and any special choma cuts.</p>
                  </div>

                  {/* Forward to WhatsApp for Instant Confirmation */}
                  <div className="pt-2 flex flex-col sm:flex-row gap-3">
                    <a
                      href={getWhatsAppBookingUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center bg-kenyanGreen hover:bg-kenyanGreen-dark text-cream font-medium px-5 py-3 rounded-xl text-sm transition-colors shadow-sm"
                    >
                      <MessageCircle className="w-4 h-4 mr-2" />
                      Notify Us on WhatsApp
                    </a>

                    <button
                      type="button"
                      onClick={handleReset}
                      className="inline-flex items-center justify-center bg-cream-200 hover:bg-cream-300 text-charcoal font-medium px-5 py-3 rounded-xl text-sm transition-colors border border-earth/20"
                    >
                      Make Another Request
                    </button>
                  </div>
                </div>
              ) : (
                /* The Functional Request Form */
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <h4 className="font-serif text-xl sm:text-2xl font-bold text-charcoal">
                      Request a Table
                    </h4>
                    <p className="text-xs sm:text-sm text-charcoal-600 mt-1">
                      Fill out the form below. We will contact you to confirm availability.
                    </p>
                  </div>

                  {/* Full Name */}
                  <div>
                    <label className="block text-xs font-semibold text-charcoal uppercase tracking-wider mb-1.5">
                      Full Name *
                    </label>
                    <div className="relative">
                      <User className="w-4 h-4 text-charcoal-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="e.g. Wangari Mwangi"
                        className={`w-full bg-white border ${errors.fullName ? 'border-red-500' : 'border-earth/30'} text-charcoal rounded-xl pl-10 pr-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ember`}
                      />
                    </div>
                    {errors.fullName && (
                      <p className="text-xs text-red-600 mt-1 flex items-center">
                        <AlertCircle className="w-3 h-3 mr-1" />
                        {errors.fullName}
                      </p>
                    )}
                  </div>

                  {/* Phone Number */}
                  <div>
                    <label className="block text-xs font-semibold text-charcoal uppercase tracking-wider mb-1.5">
                      Kenyan Phone Number *
                    </label>
                    <div className="relative">
                      <Phone className="w-4 h-4 text-charcoal-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="tel"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                        placeholder="e.g. 0712 345 678 or +254 7XX..."
                        className={`w-full bg-white border ${errors.phoneNumber ? 'border-red-500' : 'border-earth/30'} text-charcoal rounded-xl pl-10 pr-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ember`}
                      />
                    </div>
                    {errors.phoneNumber && (
                      <p className="text-xs text-red-600 mt-1 flex items-center">
                        <AlertCircle className="w-3 h-3 mr-1" />
                        {errors.phoneNumber}
                      </p>
                    )}
                  </div>

                  {/* Date, Time, and Guests in Responsive Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {/* Date */}
                    <div>
                      <label className="block text-xs font-semibold text-charcoal uppercase tracking-wider mb-1.5">
                        Date *
                      </label>
                      <input
                        type="date"
                        name="date"
                        min={todayStr}
                        value={formData.date}
                        onChange={handleChange}
                        className={`w-full bg-white border ${errors.date ? 'border-red-500' : 'border-earth/30'} text-charcoal rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ember`}
                      />
                      {errors.date && (
                        <p className="text-[11px] text-red-600 mt-1">{errors.date}</p>
                      )}
                    </div>

                    {/* Time */}
                    <div>
                      <label className="block text-xs font-semibold text-charcoal uppercase tracking-wider mb-1.5">
                        Time *
                      </label>
                      <select
                        name="time"
                        value={formData.time}
                        onChange={handleChange}
                        className="w-full bg-white border border-earth/30 text-charcoal rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ember"
                      >
                        <option value="08:00">8:00 AM (Breakfast)</option>
                        <option value="10:00">10:00 AM (Breakfast)</option>
                        <option value="12:00">12:00 PM (Lunch / Grill)</option>
                        <option value="13:00">1:00 PM (Lunch / Grill)</option>
                        <option value="14:30">2:30 PM (Afternoon)</option>
                        <option value="17:00">5:00 PM (Early Dinner)</option>
                        <option value="18:30">6:30 PM (Dinner)</option>
                        <option value="19:30">7:30 PM (Dinner & Choma)</option>
                        <option value="20:30">8:30 PM (Late Dinner)</option>
                      </select>
                    </div>

                    {/* Number of Guests */}
                    <div>
                      <label className="block text-xs font-semibold text-charcoal uppercase tracking-wider mb-1.5">
                        Guests *
                      </label>
                      <div className="relative">
                        <select
                          name="guests"
                          value={formData.guests}
                          onChange={handleChange}
                          className="w-full bg-white border border-earth/30 text-charcoal rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ember"
                        >
                          <option value="1">1 Person</option>
                          <option value="2">2 People (Couple)</option>
                          <option value="4">3–4 People</option>
                          <option value="6">5–6 People (Family)</option>
                          <option value="8">7–8 People</option>
                          <option value="12">9–12 People (Group)</option>
                          <option value="15+">15+ Large Party</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Special Requests */}
                  <div>
                    <label className="block text-xs font-semibold text-charcoal uppercase tracking-wider mb-1.5">
                      Special Requests (Optional)
                    </label>
                    <textarea
                      name="specialRequests"
                      rows="2"
                      value={formData.specialRequests}
                      onChange={handleChange}
                      placeholder="e.g. Garden terrace seating, pre-order 2kg goat ribs, celebrating birthday, baby chair needed..."
                      className="w-full bg-white border border-earth/30 text-charcoal rounded-xl px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ember resize-none"
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full bg-ember hover:bg-ember-hover text-cream font-semibold py-3.5 px-6 rounded-xl shadow-ember hover:shadow-warm-lg transition-all duration-200 flex items-center justify-center space-x-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>SEND RESERVATION REQUEST</span>
                  </button>

                  <p className="text-[11px] text-charcoal-500 text-center">
                    No upfront payment required &bull; We will confirm via phone or WhatsApp
                  </p>
                </form>
              )}

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
