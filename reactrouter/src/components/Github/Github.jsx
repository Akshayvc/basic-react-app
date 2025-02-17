import React, { useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   fetch(" https://api.github.com/users/akshayvc")
  //     .then((res) => res.json())
  //     .then((res) => setData(res));
  // }, []);
  const data = useLoaderData();

  return (
    <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">
      Github Followers: {data.followers}
      <img src={data.avatar_url} width="300" alt="" />
    </div>
  );
}

export default Github;

export const githubInfoLoader = async () => {
  const res = await fetch("https://api.github.com/users/akshayvc");
  return res.json();
};
