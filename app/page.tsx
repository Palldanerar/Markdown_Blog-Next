import fs from "fs"
import Link from "next/link";

function getPostMetadata() {
  const folder = "posts/";
  const files = fs.readdirSync(folder);
  const markdownPosts = files.filter((file) => file.endsWith(".md"));
  const slugs = markdownPosts.map((file) => file.replace(".md", ""))
  return slugs
}

export default function Home() {
  const postMetadata = getPostMetadata()
  const postPreviews = postMetadata.map((slug) => {
    return (
      <div>
        <Link href={`posts/${slug}`}>
          <h2>{slug}</h2>
        </Link>
      </div>
    )
  })

  return (
    <div>
      {postPreviews}
    </div>
  )
}
