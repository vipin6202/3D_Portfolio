import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section className="cta">
      <p className="cta-text transform transition-transform duration-300 hover:scale-y-125">
        Have a project in mind? <br className="sm:block hidden" />
        Let’s build something together!
      </p>
      <Link
        to="/contact"
        className="btn transform transition-transform duration-300 hover:scale-110"
      >
        Contact
      </Link>
    </section>
  );
};

export default CTA;
