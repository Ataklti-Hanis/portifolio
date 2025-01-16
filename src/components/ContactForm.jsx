import emailjs from "@emailjs/browser";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErros] = useState({});
  const [sending, setIsSending] = useState(false);

  const handleChange = (e) => {
    const [name, value] = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const validate = () => {
    let errors = {};
    if (!formData.name) errors.name = "Name is required";
    if (!formData.email) {
      errors.email = "Email is required";
    } else if (!/\S+ @\S+\.\S+/.test(formData.email)) {
      errors.email = "Email is invalid";
    }
    if (!formData.message) errors.message = "Message is Required";
    return errors;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const validateionErrors = validate();
    if (Object.keys(validateionErrors).length > 0) {
      setErros(validateionErrors);
    } else {
      setErros({});
      setIsSending(true);

      emailjs
        .send(
          "service_i33olk7",
          "template_aw5e3vj",
          formData,
          "4Tq6Z9SUJh2T85caI"
        )
        .then((response) => {
          toast.success("Message sent successfully");
          setFormData({ name: "", email: "", message: "" });
        })
        .catch((error) => {
          console.log("Failed...");
          toast.error("Failed to send message. Please try again latter.");
        })
        .finally(() => {
          setIsSending(false);
        });
    }
  };
  return (
    <div className="p-4 lg:w-3/4" id="contact">
      <Toaster />
      <h2 className="my-8 text-center text-4xl font-semibold tracking-tighter">
        Let's Connect
      </h2>
    </div>
  );
};

export default ContactForm;
