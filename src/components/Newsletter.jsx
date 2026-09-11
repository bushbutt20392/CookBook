import { useState } from "react"
function Newsletter(){
    const [email , setEmail] = useState("")
    const [message , setMessage] = useState("")

    function handleSubscribe(){
        if (email === ""){
            setMessage("Please enter your email.")
        }
        else {
            setMessage("Thank your for subscribing!")
        }
    }
    return(
        <div className="newsletter-box">
            <input type="email" placeholder="Enter your email"
            value={email}  onChange={(e) => setEmail(e.target.value)}/>
            <button onClick={handleSubscribe}> Subscribe</button>
            <p>{message}</p>
        </div>
    )
}

export default Newsletter