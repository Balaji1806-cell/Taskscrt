interface Service {
  name: string
  description: string
}

export default function Services() {
  const services: Service[] = [
    {
      name: "Web Development",
      description:
        "We build fast, responsive, and scalable websites using modern technologies to help your business grow online."
    },
    {
      name: "Mobile App Development",
      description:
        "Custom Android and iOS applications focused on performance, usability, and seamless user experience."
    },
    {
      name: "Cloud Services",
      description:
        "Secure and scalable cloud solutions to manage data efficiently and optimize infrastructure costs."
    }
  ]

  return (
    <div className="page">
      <h1>Our Services</h1>

      <img
        src="https://www.appier.com/hubfs/Imported_Blog_Media/AIaaS.jpeg"
        alt="Services"
        width={200}
      />

      <div className="services">
        {services.map((s, i) => (
          <div className="service-card" key={i}>
            <h2>{s.name}</h2>
            <p>{s.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
