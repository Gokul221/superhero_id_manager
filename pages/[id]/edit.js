// edit Superhero info based on his ID
import { MDBInput, MDBBtn } from "mdb-react-ui-kit";
import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react";

function EditNewHero({ oneHero }) {
  const router = useRouter();
  const heroId = router.query.id;

  const [form, setForm] = useState({
    superHero: oneHero.superHero,
    realName: oneHero.realName,
  });

  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleForm = async (event) => {
    event.preventDefault();
    try {
      const res = await axios.put(
        `http://localhost:3000/api/Hero/${heroId}`,
        form,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          data: JSON.stringify(form),
        }
      );
      console.log("Form submitted succesfully", res.data);
      router.push("/");
    } catch (error) {
      console.log("Error submitting form", error);
    }
  };

  return (
    <div className="container">
      <h1 className="display-3">Add a new hero Identity</h1>
      <form onSubmit={handleForm}>
        <MDBInput
          className="my-2"
          onChange={handleChange}
          label="SuperHero"
          type="text"
          name="superHero"
          value={form.superHero}
        />
        <MDBInput
          className="my-2"
          onChange={handleChange}
          label="realName"
          type="text"
          name="realName"
          value={form.realName}
        />
        <MDBBtn type="submit">Submit Changes</MDBBtn>
      </form>
    </div>
  );
}

export async function getServerSideProps({ params }) {
  // params are used to fetch server side props -> id in our case
  const id = params.id;

  const res = await axios(`http://localhost:3000/api/Hero/${id}`);
  const { hero } = res.data;
  console.log(hero);

  return { props: { oneHero: hero } };
}

export default EditNewHero;
