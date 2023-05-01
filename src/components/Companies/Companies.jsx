import { companies } from "../../assets/data/companies";

export default function Companies() {
  return (
    <section className="companies">
      <h2 className="companies__title">Companies I've worked with</h2>
      <div className="companies__container">
        {companies.map((company, index) => (
          <div key={index} className="companies__item">
            <svg className="companies__item__logo" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" style={{ WebkitMaskImage: `url(${company.logo})`, maskImage: `url(${company.logo})` }}>
              <image className="companies__item__logo__image " href={company.logo} height="100" width="100" />
            </svg>
          </div>
        ))}
      </div>
    </section>
  );
}
