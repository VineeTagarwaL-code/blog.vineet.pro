import { getPostMeta } from "@/lib/posts";
import { WidthWrapper } from "./width-wrapper";
import Link from "next/link";
import getFormattedDate from "@/lib/formatdate";
export const Blogs = async () => {
  const posts = await getPostMeta();
  if (!posts) return null;
  return (
    <WidthWrapper className=" max-w-full md:max-w-[900px] mt-14">
      <ul>
        {posts.map((post: Meta) => (
          <LinkBlogs {...post} />
        ))}
      </ul>
    </WidthWrapper>
  );
};

const LinkBlogs = (post: Meta) => {
  return (
    <Link href={`/blog/${post.id}`}>
      <div className="hover:scale-[1.04] transition-all rounded-xl bg-white/40 dark:bg-stone-900/60 px-6 py-7">
        <h2 className="font-semibold text-3xl">{post.title}</h2>
        <p className="text-xl mt-3 text-muted-foreground">{post.description}</p>
        <p className="text-muted-foreground mt-4">
          {getFormattedDate(post.date)} · Vineet Agarwal
        </p>
      </div>
    </Link>
  );
};
