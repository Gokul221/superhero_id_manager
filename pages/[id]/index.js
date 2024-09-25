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
import { useRouter } from "next/router";

function EachHero({ oneHero }) {
  const router = useRouter();
  const heroId = router.query.id;

  const deleteHero = async () => {
    try {
      const deleteHero = await axios(
        `http://localhost:3000/api/Hero/${heroId}`,
        {
          method: "DELETE",
        }
      );
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container">
      <h1 className="display-3">Identity of Hero</h1>
      <MDBCard className="border border-2">
        <MDBCardBody>
          <MDBCardTitle>{oneHero.superHero}</MDBCardTitle>
          <MDBCardText>{oneHero.realName}</MDBCardText>
          <Link href={"/"}>
            <MDBBtn onClick={deleteHero} className="btn btn-danger">
              Delete Hero
            </MDBBtn>
          </Link>
        </MDBCardBody>
      </MDBCard>
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

export default EachHero;
