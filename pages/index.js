/* default entrypoint for the homepage of the application.
   It represents the content that gets rendered when users
   navigate to the root URL */

import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBBtn,
} from "mdb-react-ui-kit";
import axios from "axios";
import Link from "next/link";

// here we fetch all superheroes and display them on homepage
const index = ({ heros }) => {
  return (
    <div className="container">
      <h1 className="display-2">Superhero Identity manager</h1>
      <div>
        {heros.map((hero) => {
          return (
            <MDBCard
              key={hero._id}
              className="border border-2 my-2"
              style={{ maxWidth: "22rem" }}
            >
              <MDBCardBody>
                <MDBCardTitle>{hero.superHero}</MDBCardTitle>
                <MDBCardText>Reveal Identity</MDBCardText>
                <Link href={`/${hero._id}`}>
                  <MDBBtn className="mx-2">View Hero</MDBBtn>
                </Link>
                <Link href={`/${hero._id}/edit`}>
                  <MDBBtn>Edit Hero</MDBBtn>
                </Link>
              </MDBCardBody>
            </MDBCard>
          );
        })}
      </div>
    </div>
  );
};

// use SSG to generate static HTML pages
export async function getStaticProps(context) {
  const res = await axios("http://localhost:3000/api/Hero");
  // console.log(res.data.hero);

  const { hero } = res.data;

  return { props: { heros: hero } };
}

export default index;
