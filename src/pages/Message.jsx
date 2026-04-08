import React, { useState } from "react";

const Message = () => {
    const [loading, setLoading] = useState(false);

    const sendToTelegram = async (e) => {
        e.preventDefault();
        setLoading(true);

        const botToken = "8761488279:AAEFMI11n5PqVCgN9o5BO2Mza9_x70-ZfxE";
        const chatId = "6251843484";

        const name = e.target.user_name.value;
        const email = e.target.user_email.value;
        const message = e.target.message.value;

        const text = `
📩 *New Portfolio Message*
-------------------------
👤 Name: ${name}
📧 Email: ${email}
💬 Message: ${message}
        `;

        try {
            await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    chat_id: chatId,
                    text: text,
                    parse_mode: "Markdown"
                })
            });

            alert("Message sent!");
            e.target.reset();
        } catch (error) {
            alert("Failed to send message.");
            console.log(error);
        }

        setLoading(false);
    };

    return (
        <div>
            {/* Contact Info */}
            <section className="my-12 px-4 md:px-12" id="contact">
                <h3 className="text-center text-gray-900 font-bold text-3xl md:text-4xl mb-12">
                    Message <span className="text-orange-600">Me.</span>
                </h3>

                <div className="flex flex-col md:flex-row justify-center gap-8 p-6 rounded-x">

                    {/* Map */}
                    <div className="md:w-1/2 lg:w-1/3 h-80 md:h-96 rounded-lg overflow-hidden">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1020.1781673511496!2d125.97373826186119!3d9.375681290096647!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3303d9d8609628c5%3A0x8d2c982b007642e7!2sConsuelo%2C%20Cantilan%2C%20Surigao%20del%20Sur!5e1!3m2!1sen!2sph!4v1775588083353!5m2!1sen!2sph"
                            className="w-full h-full border-0"
                            allowFullScreen
                            loading="lazy"
                            title="Google Map"
                        />
                    </div>

                    {/* Contact Form */}
                    <form
                        onSubmit={sendToTelegram}
                        className="md:w-1/2 lg:w-1/3 bg-gray-800 p-6 rounded-xl flex flex-col gap-4"
                    >
                        <input
                            type="text"
                            name="user_name"
                            placeholder="Name"
                            required
                            className="p-3 rounded-md bg-gray-700 text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-600"
                        />

                        <input
                            type="email"
                            name="user_email"
                            placeholder="Email"
                            required
                            className="p-3 rounded-md bg-gray-700 text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-600"
                        />

                        <textarea
                            rows="4"
                            name="message"
                            placeholder="Message"
                            required
                            className="p-3 rounded-md bg-gray-700 text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-600"
                        />

                        <div className="flex justify-end">
                            <button
                                type="submit"
                                disabled={loading}
                                className="bg-orange-600 hover:bg-orange-500 text-white mt-6 px-6 py-2 rounded-full font-semibold transition active:scale-95 disabled:opacity-50"
                            >
                                {loading ? "Sending..." : "Submit"}
                            </button>
                        </div>
                    </form>
                </div>
            </section>

            {/* Footer */}
            <footer className="text-center py-6 mt-15 bg-gray-900">
                <p className="text-gray-400 font-semibold">
                    &copy; 2026 Jether Paul Quintana.{" "}
                    <span className="text-orange-600">Full Stack Web Developer.</span>
                </p>
            </footer>
        </div>
    );
};

export default Message;
