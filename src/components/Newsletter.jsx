// Newsletter subscription component
import { useState } from "react";

function Newsletter() {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    // Handle newsletter subscription
    function handleSubscribe(event) {
        event.preventDefault();

        // Remove unnecessary spaces
        const trimmedEmail = email.trim();

        // Check for an empty email
        if (trimmedEmail === "") {
            setMessage("Please enter your email.");
            return;
        }

        // Basic email format validation
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(trimmedEmail)) {
            setMessage("Please enter a valid email address.");
            return;
        }

        // Show success message
        setMessage("Thank you for subscribing!");

        // Clear the input after successful subscription
        setEmail("");
    }

    return (
        <div className="newsletter-box">

            {/* Newsletter form */}
            <form onSubmit={handleSubscribe}>

                {/* Email input */}
                <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(event) => {
                        setEmail(event.target.value);
                        setMessage("");
                    }}
                />

                {/* Subscribe button */}
                <button type="submit">
                    Subscribe
                </button>

            </form>

            {/* Validation or success message */}
            {message && (
                <p>{message}</p>
            )}

        </div>
    );
}

export default Newsletter;