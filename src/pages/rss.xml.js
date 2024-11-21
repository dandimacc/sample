import rss from "@astrojs/rss";

// Use import.meta.glob with async imports
const postImportResult = import.meta.glob("./posts/**/*.md", { eager: true });
const posts = Object.values(postImportResult);

export const get = () => {
  return rss({
    title: "Astro Theme Creek",
    description: "A Theme for Astro",
    site: import.meta.env.SITE,
    // Map the imported posts to RSS feed items
    items: posts.map((post) => ({
      link: post.url,  // Assuming each post has a `url` field
      title: post.frontmatter.title,  // Assuming `frontmatter` contains metadata
      pubDate: post.frontmatter.date,  // Assuming `date` is available in frontmatter
    })),
  });
};
