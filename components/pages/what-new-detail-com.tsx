import React from "react";

export default function WhatNewDetailCom({ id }: { id: string }) {
  return <section className="mt-20">
    <div className="container mx-auto">
      <div>
        <p>The important of Technology Today : {id}</p>
      </div>
    </div>
  </section>;
}
