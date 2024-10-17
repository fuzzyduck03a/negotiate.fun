// SPDX-License-Identifier: MIT
import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Negotiate Fun" },
    { name: "description", content: "A tool to aid kink negotiation and self-reflection" },
  ];
};

export default function Index() {
  return (
    <div style={
      {
        padding: "2rem",
        backgroundColor: "#5D3557",
        color: "white",
        height: "100vh",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column"
      }
    }>
      <h1>Negotiate Fun</h1>
      <p>
        A tool to aid kink negotiation and self-reflection
      </p>
      <h3>Coming Soon</h3>
      <a href={`${import.meta.env.BASE_URL}`}>Source Repository</a>
      <p>
        Version: {`${import.meta.env.VITE_DREF}`}
      </p>
      <p>
        Changeset: {`${import.meta.env.VITE_DVERSION}`}
      </p>
    </div>
  );
}
