import React, { useState, useEffect } from "react";
import sanityClient from "../utils/sanityClient";
import { Link } from "react-router-dom";
export default function ProjectPage() {
  const [projects, setProjects] = useState(null);
  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "post"]{
            title,
            slug,
            mainImage{
              asset->{
                _id,
                url
              }
            }
          }`
      )
      .then((data) => setProjects(data))
      .catch(console.error);
  }, []);

  console.log(projects);

  return (
    <div className="container">
      {" "}
      <br />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects &&
          projects.map((post, index) => (
            <Link
              to={"/project/" + post.slug.current}
              key={post.slug.current}
            >
              <span
                className="block h-64 relative rounded shadow leading-snug bg-white border-l-8 border-green-400"
                key={index}
              >
                <img
                  className="w-full h-full rounded-r object-cover absolute"
                  src={post.mainImage.asset.url}
                  alt=""
                />
                <span className="block relative h-full flex justify-end items-end pr-4 pb-4">
                  <h2 className="text-gray-800 text-lg font-bold px-3 py-4 bg-red-700 text-red-100 bg-opacity-75 rounded">
                    {post.title}
                  </h2>
                </span>
              </span>
            </Link>
          ))}
      </div>
    </div>
  );
}
