import { Metadata } from "next";

 export const metadata: Metadata ={
  title:"Contact Us"
}

export default function ContactUs() {
  return (
   <div className="container my-5" style={{ paddingTop: '40px' }}>
      <h2 className="mb-4 text-center">Contact Us</h2>

      <div className="row g-4">
        
        <div className="col-md-6">
          <div className="p-4 border rounded shadow-sm bg-light">
            <form>
              <div className="mb-3">
                <label className="form-label">Your Name</label>
                <input type="text" className="form-control" placeholder="Enter your name" />
              </div>
              <div className="mb-3">
                <label className="form-label">Email address</label>
                <input type="email" className="form-control" placeholder="name@example.com" />
              </div>
              <div className="mb-3">
                <label className="form-label">Subject</label>
                <input type="text" className="form-control" placeholder="Subject" />
              </div>
              <div className="mb-3">
                <label className="form-label">Message</label>
                <textarea className="form-control"     placeholder="Write your message here..."></textarea>
              </div>
              <button type="submit" className="btn btn-primary">Send Message</button>
            </form>
          </div>
        </div>

      
        <div className="col-md-6">
          <div className="p-4 border rounded shadow-sm bg-light">
            <h5>Contact Information</h5>
            <p><strong>Email:</strong> Floranza@gmail.com</p>
            <p><strong>Phone:</strong> +1 234 567 890</p>
            <p><strong>Address:</strong> Devarabeesanahalli Village,Bengaluru , India</p>
          </div>
        </div>
      </div>
    </div>
  )
}
