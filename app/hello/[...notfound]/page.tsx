import React from "react";

type Props = {};
export const revalidate = 7200;

export async function generateStaticParams() {
  return [];
}

const ThePage = (props: Props) => {
  console.log("Found the page");
  return <div>ThePage</div>;
};

export default ThePage;
