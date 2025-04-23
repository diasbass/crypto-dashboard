import { fetchNews } from "../../../utils/fetchNews";
import { slugify } from "../../../utils/slugify";
import ImageWithFallback from "../../../components/ImageWithFallback";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

export async function generateStaticParams() {
  const news = await fetchNews();
  return news.map((item) => ({
    slug: slugify(item.title),
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const { slug } = await params;
  const news = await fetchNews();
  const post = news.find((item) => slugify(item.title) === slug);

  if (!post) return {};

  return {
    title: `${post.title} | btcryptowatch`,
    description: `Notícia sobre criptomoedas publicada por ${
      post.source
    } em ${new Date(post.pubDate).toLocaleDateString("pt-BR")}`,
    openGraph: {
      title: post.title,
      description: `Leia no site original: ${post.source}`,
      images: post.thumbnail ? [post.thumbnail] : [],
      url: `https://btcryptowatch.com/noticias/${slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: `Publicado por ${post.source}`,
      images: post.thumbnail ? [post.thumbnail] : [],
    },
    alternates: {
      canonical: `https://btcryptowatch.com/noticias/${slug}`,
    },
  };
}

export default async function NoticiaPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = await params;
  const allNews = await fetchNews();
  const post = allNews.find((item) => slugify(item.title) === slug);

  if (!post) return notFound();

  return (
    <main className="p-6 bg-gray-900 text-white min-h-screen max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <p className="text-sm text-gray-400 mb-6">
        {new Date(post.pubDate).toLocaleDateString("pt-BR")} · {post.source}
      </p>

      {post.thumbnail && (
        <div className="relative w-full h-64 mb-6 rounded overflow-hidden">
          <ImageWithFallback src={post.thumbnail} alt={post.title} />
        </div>
      )}

      <p className="mb-8 text-gray-300">
        Essa notícia foi extraída automaticamente de um feed externo. Clique
        abaixo para acessar o conteúdo completo no site original.
      </p>

      <a
        href={post.link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-yellow-400 text-black px-6 py-3 font-bold rounded hover:bg-yellow-300 transition"
      >
        Ler no site original
      </a>
      <hr className="my-10 border-gray-700" />

      <h2 className="text-2xl font-bold mb-4">More from {post.source}</h2>

      <div className="grid gap-4 sm:grid-cols-2">
        {allNews
          .filter(
            (item) =>
              item.source === post.source && slugify(item.title) !== slug
          )
          .slice(0, 4)
          .map((item, idx) => (
            <a
              key={idx}
              href={`/noticias/${slugify(item.title)}`}
              className="bg-gray-800 p-4 rounded hover:bg-gray-700 transition block"
            >
              <h3 className="text-md font-semibold mb-1">{item.title}</h3>
              <p className="text-sm text-gray-400">
                {new Date(item.pubDate).toLocaleDateString("pt-BR")}
              </p>
            </a>
          ))}
      </div>
    </main>
  );
}
