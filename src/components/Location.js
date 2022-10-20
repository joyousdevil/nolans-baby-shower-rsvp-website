import Iframe from 'react-iframe';

export const Location = () => {
  return (
    <section className="location" id="location">
    <div>
        <h2>Baby Shower Location 📍</h2>
      <Iframe
        url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d962.4797463579382!2d145.71590782923647!3d15.21759929341845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x2d6f8b31f4697ed5!2zMTXCsDEzJzAzLjQiTiAxNDXCsDQyJzU5LjIiRQ!5e0!3m2!1sen!2s!4v1666226262262!5m2!1sen!2s"
        width="100%"
        height="500px"
        id="babyShowerLocation"
        display="block"
        position="relative"
      />
    </div>
    </section>
  );
}
