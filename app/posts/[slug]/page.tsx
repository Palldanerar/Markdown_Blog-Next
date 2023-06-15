import fs from "fs"
import Markdown from 'markdown-to-jsx';

const getPostContent = (slug: string) => {
    const folder = "posts/";
    const file = `${folder}${slug}.md`;
    const content = fs.readFileSync(file, "utf8");
    return content;
  };

const PostItem = (props: any) => {
  const slug = props.params.slug
  const content = getPostContent(slug)

  return (
    <div>
        <h2>{slug}</h2>
        <Markdown>
            {content}
        </Markdown>
    </div>
  )
}

export default PostItem