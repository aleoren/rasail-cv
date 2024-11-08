import foto from "../foto.jpg";

export default function Gallery() {
    return (
        <div className="container mx-auto p-2 text-center">
          <h1 className="text-gray-300 font-bold">CV ONLINE</h1>
          <h1 className="text-3x1">Rasail Ikhwanus Shafa</h1>
          <Profile />
          <p>
            Saya adalah Web Developer, IT Beginner, dan Hobbies Gamer,
            Cita-cita saya ingin menjadi programmer internasional.
            Saya juga ingin menjadi Pembisnis Profesional.
          </p>
        </div>
        );
        }
        function Profile () {
            return <img src={foto.src} alt="Rasail Ikhwanus Shafa Profile" className="fotoku" />;
        }