// this page is responsible to add a new superhero entry into DB

import { MDBInput, MDBBtn } from "mdb-react-ui-kit";
import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react";

function AddNewHero() {
  const router = useRouter();
  const [form, setForm] = useState({
    superHero: "",
    realName: "",
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
      const res = await axios.post("http://localhost:3000/api/Hero", form, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        data: JSON.stringify(form),
      });
      console.log("Form submitted succesfully", res.data);
      router.push('/');
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
        />
        <MDBInput
          className="my-2"
          onChange={handleChange}
          label="realName"
          type="text"
          name="realName"
        />
        <MDBBtn type="submit">Add new Hero</MDBBtn>
      </form>
    </div>
  );
}

export default AddNewHero;
