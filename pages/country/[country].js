import Link from "next/link";
import React, { useState, useEffect } from "react";

export default function Country(props) {
  return (
    <div>
      <Link href="/">
        <div>
          <ion-icon name="arrow-back-outline"></ion-icon>
          <span>Back</span>
          <h1>{}</h1>
        </div>
      </Link>
    </div>
  );
}

export async function getServerSideProps(context) {
  const country = context.query.country;
  const res = await fetch(
    `https://restcountries.com/v2/name/${country.replace("-", " ")}`
  );
  const data = await res.json();
  return {
    props: {
      country: data,
    },
  };
}
