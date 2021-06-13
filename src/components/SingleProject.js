import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import sanityClient from "../utils/sanityClient";
import { Link } from "react-router-dom";
import {
  urlFor,
  SANITY_PROJECT_ID,
} from "../utils/sanityTools";
import BlockContent from "@sanity/block-content-to-react";

export default function SingleProject() {
  const [project, setProject] = useState(null);
  const { slug } = useParams();
  // image url will help us chain on stuff (pull the url)

  useEffect(() => {
    //   "name": author-> name (giving it an alias name)
    sanityClient
      .fetch(
        `*[slug.current == "${slug}"] {
        title,
        _id,
        slug,
        mainImage {
            asset -> {
                _id, url
            }
        },
        body,
        "name": author-> name,
        "authorImage": author-> image
    }`
      )
      .then((data) => {
        setProject(data[0]);
      })
      .catch((error) => {
        console.log("error", error);
      });
  }, [slug]);
  if (!project) return <div>Loading</div>;
  console.log("project", project);
  return (
    <div>
      <h1>Single Project</h1>
      {project.title}
      {/* Refer to the url - grab the image, and then grab the url - can chain on more (such as width*/}
      <img
        src={urlFor(project.authorImage).width(200).url()}
        alt={project.name}
      />

      <div>
        <img src={project.mainImage.asset.url} />
      </div>
      <p>{project.description}</p>
      {/* Block content */}
      <BlockContent
        blocks={project.body}
        projectId={SANITY_PROJECT_ID}
        data="production"
      />
    </div>
  );
}
