import Hero from "./components/hero";
import RiwayatPendidikan from "./components/riwayatPendidikan";
import RiwayatPekerjaan from "./components/riwayatPekerjaan";
import Skills from "./components/skills";
import Hobbies from "./components/hobbies"
import "./ris-style.css";
import Form from "./components/form";
import FavColor from "./components/favColor";
export default function MyApp() {
  return (
    <section>
      <Hero />
      <RiwayatPendidikan />
      <RiwayatPekerjaan />
      <Skills />
      <Hobbies />
      <Form />
      <FavColor />
    </section>
  );
}