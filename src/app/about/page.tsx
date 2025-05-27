export default function About() {
  return (
    <div className="p-8 min-h-screen">
      <div className="max-w-4xl mx-auto shadow-lg rounded-lg p-8">
        <h1 className="text-4xl font-bold mb-4 text-amber-600">About Us</h1>
        <p className="text-lg mb-4 text-white">
          Welcome to our website! We are dedicated to providing you with the
          best weather information available. Our team works tirelessly to
          ensure that you have access to accurate and up-to-date weather data.
        </p>
        <h2 className="text-2xl font-semibold mb-2 text-amber-600">
          Our Mission
        </h2>
        <p className="text-lg mb-4 text-white">
          Our mission is to help you stay informed about the weather conditions
          in your area and around the world. We believe that access to reliable
          weather information is essential for planning your day and staying
          safe.
        </p>
        <h2 className="text-2xl font-semibold mb-2 text-amber-600">
          Contact Us
        </h2>
        <p className="text-lg text-white">
          If you have any questions or feedback, please feel free to reach out
          to us at{' '}
          <a
            href="mailto:davidpalmerojara@gmail.com"
            className="text-amber-600 underline">
            davidpalmerojara@gmail.com
          </a>
          .
        </p>
      </div>
    </div>
  );
}
