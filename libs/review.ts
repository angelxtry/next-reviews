import { marked } from 'marked';
import qs from 'qs';

interface ReviewImage {
  id: number;
  attributes: {
    url: string;
  };
}

interface Review {
  id: number;
  attributes: {
    slug: string;
    title: string;
    subtitle: string;
    publishedAt: string;
    body: string;
    image: {
      data: ReviewImage[];
    };
  };
}

const CmsUrl = 'http://127.0.0.1:1337' as const;

const getReview = async (slug: string) => {
  const url =
    `${CmsUrl}/api/reviews?` +
    qs.stringify(
      {
        filters: { slug: { $eq: slug } },
        fields: ['slug', 'title', 'subtitle', 'publishedAt', 'body'],
        populate: { image: { fields: ['url'] } },
        sort: ['publishedAt:desc'],
        pagination: { pageSize: 1, withCount: false },
      },
      { encodeValuesOnly: true },
    );
  const response = await fetch(url);
  const { data } = (await response.json()) as { data: Review[] };
  const item = data[0];
  return {
    slug: item.attributes.slug,
    title: item.attributes.title,
    subtitle: item.attributes.subtitle,
    date: item.attributes.publishedAt.slice(0, 'yyyy-mm-dd'.length),
    image: CmsUrl + item.attributes.image.data[0].attributes.url,
    body: marked(item.attributes.body, { headerIds: false, mangle: false }),
  };
};

const getReviews = async () => {
  const url =
    `${CmsUrl}/api/reviews?` +
    qs.stringify(
      {
        fields: ['slug', 'title', 'publishedAt'],
        populate: { image: { fields: ['url'] } },
        sort: ['publishedAt:desc'],
        pagination: { pageSize: 6 },
      },
      { encodeValuesOnly: true },
    );
  const response = await fetch(url);
  const { data } = (await response.json()) as { data: Review[] };
  return data.map(({ attributes: { slug, title, publishedAt, image } }) => ({
    slug,
    title,
    date: publishedAt.slice(0, 'yyyy-mm-dd'.length),
    image: CmsUrl + image.data[0].attributes.url,
  }));
};

const getFeaturedReviews = async () => {
  const reviews = await getReviews();
  return reviews[0];
};

export { getReview, getReviews, getFeaturedReviews };
